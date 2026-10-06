import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.117.2";
import webpush from "npm:web-push@3.6.7";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});

const DEFAULT_TIMES: Record<string, string> = {
  desayuno: "07:00", suplementos: "07:30", almuerzo: "12:30", snack: "16:00", entreno: "16:45", cena: "18:15",
  agua1: "09:30", agua2: "13:30", agua3: "16:30", agua4: "19:30", dormir: "21:00", resumen: "19:00",
};
const WINDOW_MIN = 20;
const WEIGH_EVERY_DAYS = 15;
const WEEKLY_WORKOUT_GOAL = 4;

type Day = {
  meals?: Record<string, { done?: boolean }>;
  water?: boolean[];
  supplements?: { proteina?: boolean; creatina?: boolean };
  aguacate?: boolean;
  workouts?: { type?: string }[];
};

function localNow(tz: string) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23", weekday: "short",
    }).formatToParts(new Date()).map((p) => [p.type, p.value]),
  );
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    min: (+parts.hour % 24) * 60 + +parts.minute,
    sunday: parts.weekday === "Sun",
  };
}
const toMin = (t: string) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

function reminders(d: Day, times: Record<string, string>, sunday: boolean, weekWorkouts: number) {
  const meal = (k: string) => !!d.meals?.[k]?.done;
  const w = d.water ?? [];
  const list = [
    { id: "desayuno", pending: !meal("desayuno"), title: "Hora del desayuno", body: "Marca tu desayuno cuando lo tengas listo." },
    { id: "suplementos", pending: !(d.supplements?.proteina && d.supplements?.creatina), title: "Suplementos", body: "Proteína ISO y Creatina de hoy." },
    { id: "almuerzo", pending: !meal("almuerzo"), title: "Hora del almuerzo", body: "No olvides el aguacate diario." },
    { id: "snack", pending: !meal("snack"), title: "Snack", body: "1 Scoop de proteína + una fruta." },
    { id: "cena", pending: !meal("cena"), title: "Hora de la cena", body: "Última comida del plan de hoy." },
    { id: "agua1", pending: !w[0], title: "Termo de la mañana", body: "Lleva tu termo de 1 L." },
    { id: "agua2", pending: !w[1], title: "Termo del mediodía", body: "Vas por la mitad de tu meta de agua." },
    { id: "agua3", pending: !w[2], title: "Termo de la tarde", body: "Con este llegas a 3 L." },
    { id: "agua4", pending: !w[3], title: "Medio termo", body: "500 ml más y completas tus 3,5 L." },
    { id: "entreno", pending: !(d.workouts?.length) && weekWorkouts < WEEKLY_WORKOUT_GOAL, title: "Hora de entrenar", body: "En 15 minutos empieza tu entreno. Regístralo al terminar." },
    { id: "dormir", pending: true, title: "Prepárate para dormir", body: "En 30 minutos a la cama. El plan recomienda 7 – 8 horas." },
  ];
  if (sunday) list.push({ id: "resumen", pending: true, title: "Tu reporte semanal está listo", body: "Mira cómo te fue esta semana." });
  return list.map((r) => ({ ...r, at: times[r.id] ?? DEFAULT_TIMES[r.id] }));
}

async function sendTo(userId: string, payload: object) {
  const { data: subs } = await sb.from("push_subscriptions").select("endpoint, subscription").eq("user_id", userId);
  let sent = 0;
  for (const s of subs ?? []) {
    try {
      await webpush.sendNotification(s.subscription, JSON.stringify(payload));
      sent++;
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410) await sb.from("push_subscriptions").delete().eq("endpoint", s.endpoint);
      else console.error("push error", code, (e as Error).message);
    }
  }
  return sent;
}

// Envía solo una vez por usuario/día/recordatorio: la fila de push_log es el candado.
async function claim(userId: string, day: string, reminder: string) {
  const { error } = await sb.from("push_log").insert({ user_id: userId, day, reminder });
  return !error;
}

Deno.serve(async (req) => {
  const { data: cfg, error: cfgErr } = await sb.rpc("reminder_config");
  if (cfgErr || !cfg) return new Response("config", { status: 500 });
  webpush.setVapidDetails("mailto:no-reply@mi-plan.app", cfg.vapid_public, cfg.vapid_private);

  const body = await req.json().catch(() => ({}));

  if (body.test) {
    const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: u } = await sb.auth.getUser(token);
    if (!u?.user) return new Response("unauthorized", { status: 401 });
    const sent = await sendTo(u.user.id, { title: "Mi Plan", body: "¡Listo! Así se verán tus recordatorios.", tag: "test" });
    return Response.json({ sent });
  }

  if (req.headers.get("x-cron-secret") !== cfg.cron_secret) return new Response("forbidden", { status: 403 });

  const { data: subs } = await sb.from("push_subscriptions").select("user_id");
  const users = [...new Set((subs ?? []).map((s) => s.user_id as string))];
  let sent = 0;

  for (const userId of users) {
    const { data: st } = await sb.from("settings").select("data").eq("user_id", userId).maybeSingle();
    const settings = st?.data ?? {};
    if (!settings.reminders?.enabled) continue;
    const now = localNow(settings.tz || "America/Bogota");
    const times = { ...DEFAULT_TIMES, ...(settings.reminders.times ?? {}) };
    const { data: dayRow } = await sb.from("days").select("data").eq("user_id", userId).eq("date", now.date).maybeSingle();
    const day: Day = dayRow?.data ?? {};
    // Entrenos de la semana (lunes a hoy) para no recordar entreno si ya cumplió la meta semanal.
    const d0 = new Date(now.date + "T12:00:00Z"), ws = new Date(d0.getTime() - ((d0.getUTCDay() + 6) % 7) * 86400000).toISOString().slice(0, 10);
    const { data: weekRows } = await sb.from("days").select("data").eq("user_id", userId).gte("date", ws).lte("date", now.date);
    const weekWorkouts = (weekRows ?? []).reduce((a, r) => a + ((r.data as Day).workouts ?? []).filter((w) => w.type !== "descanso").length, 0);

    for (const r of reminders(day, times, now.sunday, weekWorkouts)) {
      const at = toMin(r.at);
      if (!r.pending || now.min < at || now.min >= at + WINDOW_MIN) continue;
      if (await claim(userId, now.date, r.id)) sent += await sendTo(userId, { title: r.title, body: r.body, tag: r.id });
    }

    if (now.min >= toMin("09:00") && now.min < toMin("09:00") + WINDOW_MIN) {
      const { data: last } = await sb.from("weigh_ins").select("date").eq("user_id", userId).eq("deleted", false)
        .order("date", { ascending: false }).limit(1).maybeSingle();
      const due = !last || (Date.parse(now.date) - Date.parse(last.date)) / 86400000 >= WEIGH_EVERY_DAYS;
      if (due && await claim(userId, now.date, "peso")) {
        sent += await sendTo(userId, { title: "Hoy toca tu análisis Fitmao", body: "Misma máquina y en ayunas. Luego copia los datos en la app.", tag: "peso" });
      }
    }
  }
  return Response.json({ users: users.length, sent });
});
