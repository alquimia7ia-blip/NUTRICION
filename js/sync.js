/* ===================== SYNC (Supabase, plan gratuito) =====================
   Local-first: localStorage manda en el momento; la nube se usa para que el celular
   y el computador vean los mismos datos. Gana la versión más reciente de cada día. */
const SB_URL = "https://vvfetmseundojflqdqov.supabase.co";
const SB_KEY = "sb_publishable_DG_fpbUGzxRBD4jjKGgWRg_zQsBvJaV";
const VAPID_PUBLIC = "BCLnXPhRv0fow2q4xopERKaBY9BvYg5IW9t_Y_EymOpxV70aG6JHPv2jd1Ys_aNoLIHf1xtJUOdCwQn-TJTegaw";
const SYNC_META = "miplan.sync";
const SYNCED_SETTINGS = ["name", "reminders", "routines", "seenBadges", "seenLevel", "seenChallenges", "seededFitmao", "initialized", "tz"];

const sync = { client: null, user: null, busy: false, timer: null, sentTo: "", status: "" };
const syncMeta = () => { try { return JSON.parse(localStorage.getItem(SYNC_META) || "{}"); } catch { return {}; } };
const setSyncMeta = m => localStorage.setItem(SYNC_META, JSON.stringify({ ...syncMeta(), ...m }));

function syncInit() {
  if (typeof supabase === "undefined") return;
  sync.client = supabase.createClient(SB_URL, SB_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "implicit" }
  });
  sync.client.auth.onAuthStateChange((event, session) => {
    const prev = sync.user && sync.user.id;
    sync.user = session ? session.user : null;
    if (sync.user && prev !== sync.user.id) {
      if (location.hash.includes("access_token")) history.replaceState(null, "", location.pathname);
      if (syncMeta().userId !== sync.user.id) setSyncMeta({ lastPush: 0, lastSync: 0 });
      setSyncMeta({ userId: sync.user.id });
      syncNow();
    }
    if (ui.sheet && ui.sheet.kind === "settings") renderSheet();
  });
  onSave(() => { if (!sync.user) return; clearTimeout(sync.timer); sync.timer = setTimeout(syncNow, 1500); });
  document.addEventListener("visibilitychange", () => { if (!document.hidden && sync.user) syncNow(); });
  setInterval(() => { if (!document.hidden && sync.user) syncNow(); }, 60000);
  window.addEventListener("online", () => { if (sync.user) syncNow(); });
}

async function syncNow() {
  if (!sync.client || !sync.user || sync.busy || !navigator.onLine) return;
  sync.busy = true;
  const startedAt = Date.now();
  try {
    const meta = syncMeta(), lastPush = meta.lastPush || 0, firstSync = !meta.lastSync;
    const db = sync.client;

    // 1) Bajar todo y quedarse con lo más reciente (los datos son pequeños: ~1 fila por día).
    const [daysR, wR, sR] = await Promise.all([
      db.from("days").select("date, data, updated_at"),
      db.from("weigh_ins").select("id, date, kg, fat, extra, deleted, updated_at"),
      db.from("settings").select("data, updated_at").maybeSingle()
    ]);
    if (daysR.error || wR.error || sR.error) throw daysR.error || wR.error || sR.error;
    let changed = false;
    for (const row of daysR.data) {
      const local = state.days[row.date];
      if (!local || row.updated_at > local.updatedAt) {
        state.days[row.date] = normalizeDay({ ...row.data, updatedAt: row.updated_at });
        changed = true;
      }
    }
    for (const row of wR.data) {
      const i = state.weighIns.findIndex(w => w.id === row.id);
      if (i < 0 || row.updated_at > (state.weighIns[i].updatedAt || 0)) {
        const w = { id: row.id, date: row.date, kg: +row.kg, fat: row.fat === null ? null : +row.fat, extra: row.extra || null, deleted: row.deleted, updatedAt: row.updated_at };
        if (i < 0) state.weighIns.push(w); else state.weighIns[i] = w;
        changed = true;
      }
    }
    // En un dispositivo recién conectado, los ajustes de la nube mandan sobre los valores por defecto.
    if (sR.data && (firstSync || sR.data.updated_at > (state.settings.updatedAt || 0))) {
      const tz = state.settings.tz;
      Object.assign(state.settings, sR.data.data, { updatedAt: sR.data.updated_at, tz });
      changed = true;
    }
    if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // 2) Subir lo que cambió en este dispositivo.
    const dirtyDays = Object.entries(state.days).filter(([, d]) => d.updatedAt > lastPush)
      .map(([date, d]) => ({ date, data: d, updated_at: d.updatedAt }));
    if (dirtyDays.length) { const { error } = await db.from("days").upsert(dirtyDays, { onConflict: "user_id,date" }); if (error) throw error; }
    const dirtyW = state.weighIns.filter(w => (w.updatedAt || 0) > lastPush)
      .map(w => ({ id: w.id, date: w.date, kg: w.kg, fat: w.fat ?? null, extra: w.extra || null, deleted: !!w.deleted, updated_at: w.updatedAt || startedAt }));
    if (dirtyW.length) { const { error } = await db.from("weigh_ins").upsert(dirtyW, { onConflict: "user_id,id" }); if (error) throw error; }
    if ((state.settings.updatedAt || 0) > lastPush) {
      const data = Object.fromEntries(SYNCED_SETTINGS.map(k => [k, state.settings[k]]));
      const { error } = await db.from("settings").upsert({ data, updated_at: state.settings.updatedAt }, { onConflict: "user_id" });
      if (error) throw error;
    }
    setSyncMeta({ lastPush: startedAt, lastSync: Date.now() });
    sync.status = "";
    if (changed && (!document.activeElement || !document.activeElement.matches("textarea,input"))) render();
  } catch (e) {
    console.warn("sync", e);
    sync.status = "No se pudo sincronizar. Se reintentará.";
  } finally {
    sync.busy = false;
    if (ui.sheet && ui.sheet.kind === "settings") renderSheet();
  }
}

/* ---------- push ---------- */
function b64ToBytes(s) {
  const pad = "=".repeat((4 - s.length % 4) % 4);
  const raw = atob((s + pad).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}
const pushSupported = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

async function subscribePush() {
  if (!sync.user || !pushSupported() || Notification.permission !== "granted") return false;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = (await reg.pushManager.getSubscription()) ||
      await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(VAPID_PUBLIC) });
    const json = sub.toJSON();
    const { error } = await sync.client.from("push_subscriptions").upsert({ endpoint: json.endpoint, subscription: json }, { onConflict: "endpoint" });
    if (error) throw error;
    localStorage.setItem("miplan.push", "1");
    return true;
  } catch (e) { console.warn("push", e); return false; }
}
async function unsubscribePush() {
  localStorage.removeItem("miplan.push");
  if (!pushSupported()) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (!sub) return;
    if (sync.user) await sync.client.from("push_subscriptions").delete().eq("endpoint", sub.endpoint);
    await sub.unsubscribe();
  } catch (e) { console.warn(e); }
}
async function onRemindersChanged(enabled) {
  if (enabled) {
    const ok = await subscribePush();
    toast(ok ? "Recordatorios activados, incluso con la app cerrada" : sync.user ? "Recordatorios activos mientras la app esté abierta" : "Inicia sesión para recibirlos con la app cerrada");
  } else await unsubscribePush();
  syncNow();
}

/* ---------- ajustes ---------- */
function syncSettingsHtml() {
  if (!sync.client) return "";
  if (sync.user) {
    const last = syncMeta().lastSync;
    return `<div class="sheet-sec"><div class="lbl">Cuenta y sincronización</div>
      <div class="set-row"><div><div class="t">${esc(sync.user.email)}</div>
        <div class="d">${sync.status || (last ? "Sincronizado " + new Date(last).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : "Sincronizando…")}</div></div>
        <button class="icon-btn" data-a="syncNow" aria-label="Sincronizar ahora">${I.sync}</button></div>
      ${state.settings.reminders.enabled && localStorage.getItem("miplan.push") === "1" ? `<button class="btn btn-ghost" style="margin-top:8px" data-a="testPush">${I.bell} Enviar notificación de prueba</button>` : ""}
      <button class="btn btn-ghost" style="margin-top:8px" data-a="signOut">Cerrar sesión</button></div>`;
  }
  return `<div class="sheet-sec"><div class="lbl">Cuenta y sincronización</div>
    <p class="small muted" style="font-weight:600;margin-bottom:8px">Entra con tu correo para ver tus datos en el celular y en el computador. Gratis, sin contraseña.</p>
    <input class="field" id="in-email" type="email" inputmode="email" autocomplete="email" placeholder="tu@correo.com" value="${esc(sync.sentTo)}">
    <button class="btn btn-primary" style="margin-top:8px" data-a="sendLink">${I.mail} ${sync.sentTo ? "Reenviar enlace" : "Enviarme el enlace"}</button>
    ${sync.sentTo ? `<p class="small" style="font-weight:700;margin-top:10px">Revisa ${esc(sync.sentTo)}: toca el enlace del correo, o escribe aquí el código si viene uno.</p>
      <div class="row-2" style="margin-top:8px"><input class="field" id="in-otp" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="Código">
      <button class="btn btn-ghost" data-a="verifyOtp">Entrar</button></div>` : ""}
    ${sync.status ? `<p class="small" style="color:var(--danger);font-weight:700;margin-top:8px">${esc(sync.status)}</p>` : ""}
  </div>`;
}

Object.assign(actions, {
  sendLink: async () => {
    const email = (document.getElementById("in-email").value || "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) { toast("Escribe un correo válido"); return; }
    const { error } = await sync.client.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + location.pathname } });
    sync.status = error ? (error.status === 429 ? "Espera un minuto antes de pedir otro enlace." : "No se pudo enviar el enlace. Revisa tu conexión.") : "";
    if (!error) sync.sentTo = email;
    renderSheet();
  },
  verifyOtp: async () => {
    const token = (document.getElementById("in-otp").value || "").trim();
    if (!token) return;
    const { error } = await sync.client.auth.verifyOtp({ email: sync.sentTo, token, type: "email" });
    if (error) { sync.status = "Código inválido o vencido. Pide otro enlace."; renderSheet(); }
  },
  syncNow: () => { syncNow(); toast("Sincronizando…"); },
  testPush: async () => {
    const { data } = await sync.client.auth.getSession();
    const r = await fetch(SB_URL + "/functions/v1/send-reminders", {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + data.session.access_token }, body: JSON.stringify({ test: true })
    }).then(x => x.json()).catch(() => null);
    toast(r && r.sent ? "Notificación enviada" : "No llegó: revisa los permisos de notificación");
  },
  signOut: async () => {
    await unsubscribePush();
    await sync.client.auth.signOut();
    sync.user = null; sync.sentTo = "";
    setSyncMeta({ lastPush: 0, lastSync: 0, userId: null });
    renderSheet();
  }
});

syncInit();
