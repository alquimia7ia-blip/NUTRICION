/* ===================== UTILITIES ===================== */
const pad = n => (n < 10 ? "0" : "") + n;
const toKey = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const todayKey = () => toKey(new Date());
const keyToDate = k => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = keyToDate(k); d.setDate(d.getDate() + n); return toKey(d); };
const daysBetween = (a, b) => Math.round((keyToDate(b) - keyToDate(a)) / 86400000);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const fmtLong = k => cap(keyToDate(k).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }));
const fmtMonth = ym => cap(keyToDate(ym + "-01").toLocaleDateString("es-ES", { month: "long", year: "numeric" }));
const fmtShort = k => keyToDate(k).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
const weekday2 = k => keyToDate(k).toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "").slice(0, 2);
const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
function weekStart(k) { const d = keyToDate(k); const wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd); return toKey(d); }

/* ===================== GAME RULES ===================== */
const TOTAL_TASKS = 7;
const STREAK_MIN_PCT = 80;
const WEEKLY_WORKOUT_GOAL = 4;
const STEPS_GOAL = 8000;
const WEIGH_EVERY_DAYS = 15;
// Meta del plan: 3,5 L. El plan pide 3 termos de 1 L (AM, medio día y PM); el medio termo completa los 3,5 L.
const WATER = [
  { label: "Termo AM", ml: 1000 },
  { label: "Termo medio día", ml: 1000 },
  { label: "Termo PM", ml: 1000 },
  { label: "Medio termo", ml: 500 }
];
const waterMl = d => WATER.reduce((a, w, i) => a + (d.water[i] ? w.ml : 0), 0);
const fmtL = ml => String(+(ml / 1000).toFixed(1)).replace(".", ",") + " L";
const LEVELS = [
  { n: 1, name: "Inicio", xp: 0 },
  { n: 2, name: "En marcha", xp: 300 },
  { n: 3, name: "Enfocado", xp: 800 },
  { n: 4, name: "Constante", xp: 1500 },
  { n: 5, name: "Imparable", xp: 2500 },
  { n: 6, name: "Disciplinado", xp: 4000 },
  { n: 7, name: "Referente", xp: 6000 },
  { n: 8, name: "Élite", xp: 8500 },
  { n: 9, name: "Maestro", xp: 11500 },
  { n: 10, name: "Leyenda", xp: 15000 }
];
const WORKOUT_TYPES = [
  { id: "fuerza", label: "Fuerza", icon: "dumbbell" },
  { id: "cardio", label: "Cardio", icon: "run" },
  { id: "caminar", label: "Caminar", icon: "walk" },
  { id: "movilidad", label: "Movilidad", icon: "stretch" },
  { id: "deporte", label: "Deporte", icon: "ball" },
  { id: "descanso", label: "Descanso activo", icon: "moon" }
];
const INTENSITIES = [
  { id: 1, label: "Suave", icon: "int1" },
  { id: 2, label: "Media", icon: "int2" },
  { id: 3, label: "Fuerte", icon: "int3" }
];
const DEFAULT_REMINDERS = {
  enabled: false,
  times: {
    desayuno: "08:00", suplementos: "08:30", almuerzo: "13:00", snack: "15:30", cena: "18:00",
    agua1: "10:00", agua2: "14:00", agua3: "18:30", agua4: "20:00", resumen: "19:00"
  }
};

/* ===================== STORAGE / STATE ===================== */
const STORAGE_KEY = "miplan.v2";
const LEGACY_KEY = "nutriapp.registro.v1";

function defaultDay() {
  return {
    meals: {
      desayuno: { done: false, sel: { proteina: 0, carbohidrato: 0, grasas: 0 } },
      almuerzo: { done: false, sel: { proteina: 0, carbohidrato: 0, grasas: 0 } },
      snack: { done: false, sel: { proteina: 0 } },
      cena: { done: false, sel: { proteina: 0, carbohidrato: 0, grasas: 0 } }
    },
    water: WATER.map(() => false),
    supplements: { proteina: false, creatina: false },
    aguacate: false,
    workouts: [],
    steps: "",
    sleep: "",
    mood: null,
    notes: "",
    updatedAt: 0
  };
}
function defaultState() {
  return {
    version: 2,
    days: {},
    weighIns: [],
    settings: { name: "Salomón", reminders: structuredClone(DEFAULT_REMINDERS), routines: [], seenBadges: [], seenLevel: 1, updatedAt: 0 }
  };
}

function normalizeDay(raw) {
  const d = defaultDay();
  if (!raw) return d;
  for (const k of Object.keys(d.meals)) {
    const m = raw.meals && raw.meals[k];
    if (m) { d.meals[k].done = !!m.done; d.meals[k].sel = Object.assign(d.meals[k].sel, m.sel || {}); }
  }
  if (Array.isArray(raw.water)) d.water = WATER.map((_, i) => !!raw.water[i]);
  if (raw.supplements) { d.supplements.proteina = !!raw.supplements.proteina; d.supplements.creatina = !!raw.supplements.creatina; }
  d.aguacate = !!raw.aguacate;
  d.workouts = Array.isArray(raw.workouts) ? raw.workouts : [];
  d.steps = raw.steps ?? "";
  d.sleep = raw.sleep ?? "";
  d.mood = raw.mood ?? null;
  d.notes = raw.notes ?? "";
  d.updatedAt = raw.updatedAt || 0;
  return d;
}

function migrateLegacy(legacy) {
  const s = defaultState();
  for (const [k, raw] of Object.entries(legacy.days || {})) {
    const d = normalizeDay(raw);
    const h = raw.habits || {};
    if (h.entreno) d.workouts.push({ id: uid(), type: "fuerza", duration: 0, intensity: 2 });
    d.steps = h.pasos ?? "";
    d.sleep = h.sueno ?? "";
    const acts = (raw.activities || []).map(a => a.name).filter(Boolean);
    if (acts.length) d.notes = [d.notes, "Actividades: " + acts.join(", ")].filter(Boolean).join("\n");
    d.updatedAt = Date.now();
    s.days[k] = d;
  }
  return s;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = Object.assign(defaultState(), JSON.parse(raw));
      s.settings = Object.assign(defaultState().settings, s.settings);
      s.settings.reminders = Object.assign(structuredClone(DEFAULT_REMINDERS), s.settings.reminders);
      s.settings.reminders.times = Object.assign({}, DEFAULT_REMINDERS.times, s.settings.reminders.times);
      for (const k of Object.keys(s.days)) s.days[k] = normalizeDay(s.days[k]);
      return s;
    }
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) return migrateLegacy(JSON.parse(legacy));
  } catch (e) { console.warn("No se pudo leer el estado", e); }
  return defaultState();
}

let state = loadState();
const listeners = [];
function onSave(fn) { listeners.push(fn); }
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { console.warn(e); }
  listeners.forEach(fn => fn());
}
function getDay(k) { return state.days[k] || defaultDay(); }
function editDay(k, fn) {
  const d = state.days[k] ? state.days[k] : (state.days[k] = defaultDay());
  fn(d);
  d.updatedAt = Date.now();
  saveState();
}
function editSettings(fn) { fn(state.settings); state.settings.updatedAt = Date.now(); saveState(); }

/* ===================== METRICS ===================== */
function dayTasks(d) {
  return {
    desayuno: d.meals.desayuno.done,
    almuerzo: d.meals.almuerzo.done,
    snack: d.meals.snack.done,
    cena: d.meals.cena.done,
    agua: d.water.every(Boolean),
    suplementos: d.supplements.proteina && d.supplements.creatina,
    aguacate: d.aguacate
  };
}
function doneCount(k) { return Object.values(dayTasks(getDay(k))).filter(Boolean).length; }
function dayPct(k) { return state.days[k] ? Math.round(doneCount(k) / TOTAL_TASKS * 100) : 0; }
const dayXP = k => dayPct(k);
const totalXP = () => Object.keys(state.days).reduce((a, k) => a + dayXP(k), 0);

function levelInfo(xp = totalXP()) {
  let cur = LEVELS[0];
  for (const l of LEVELS) if (xp >= l.xp) cur = l;
  const next = LEVELS.find(l => l.n === cur.n + 1);
  if (!next) return { ...cur, xp, into: 0, span: 0, pct: 100, next: null };
  const into = xp - cur.xp, span = next.xp - cur.xp;
  return { ...cur, xp, into, span, pct: Math.min(100, Math.round(into / span * 100)), next };
}
const dayCounts = k => dayPct(k) >= STREAK_MIN_PCT;
function currentStreak() {
  let k = dayCounts(todayKey()) ? todayKey() : addDays(todayKey(), -1), n = 0;
  while (state.days[k] && dayCounts(k)) { n++; k = addDays(k, -1); }
  return n;
}
function bestStreak() {
  const keys = Object.keys(state.days).filter(dayCounts).sort();
  let best = 0, run = 0, prev = null;
  for (const k of keys) { run = prev && daysBetween(prev, k) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = k; }
  return best;
}
function workoutsInWeek(ws) {
  let n = 0;
  for (let i = 0; i < 7; i++) n += getDay(addDays(ws, i)).workouts.filter(w => w.type !== "descanso").length;
  return n;
}
const weighs = () => state.weighIns.filter(w => !w.deleted);
function lastWeighIn() { return weighs().sort((a, b) => a.date.localeCompare(b.date)).pop() || null; }
function weighInDue() {
  const last = lastWeighIn();
  if (!last) return true;
  return daysBetween(last.date, todayKey()) >= WEIGH_EVERY_DAYS;
}
function baselineWeight() {
  const [d, m, y] = PLAN.composicion.fecha.split("/");
  return { date: "20" + y + "-" + m + "-" + d, kg: parseFloat(PLAN.composicion.peso) };
}

/* ===================== BADGES ===================== */
function maxWaterRun() {
  const keys = Object.keys(state.days).filter(k => getDay(k).water.every(Boolean)).sort();
  let best = 0, run = 0, prev = null;
  for (const k of keys) { run = prev && daysBetween(prev, k) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = k; }
  return best;
}
function maxWeekWorkouts() {
  const weeks = new Set(Object.keys(state.days).map(weekStart));
  let best = 0;
  weeks.forEach(w => { best = Math.max(best, workoutsInWeek(w)); });
  return best;
}
const BADGES = [
  { id: "dia100", name: "Día perfecto", desc: "Un día al 100%", icon: "star", color: "#F2B233", test: () => Object.keys(state.days).some(k => dayPct(k) === 100), prog: () => [Math.max(0, ...Object.keys(state.days).map(dayPct)), 100] },
  { id: "racha3", name: "Racha 3", desc: "3 días seguidos", icon: "flame", color: "#17B26A", test: () => bestStreak() >= 3, prog: () => [bestStreak(), 3] },
  { id: "racha7", name: "Racha 7", desc: "7 días seguidos", icon: "flame", color: "#FF6A4D", test: () => bestStreak() >= 7, prog: () => [bestStreak(), 7] },
  { id: "racha14", name: "Racha 14", desc: "14 días seguidos", icon: "flame", color: "#E44F33", test: () => bestStreak() >= 14, prog: () => [bestStreak(), 14] },
  { id: "racha30", name: "Racha 30", desc: "30 días seguidos", icon: "trophy", color: "#0E8F53", test: () => bestStreak() >= 30, prog: () => [bestStreak(), 30] },
  { id: "racha60", name: "Racha 60", desc: "60 días seguidos", icon: "trophy", color: "#B37A00", test: () => bestStreak() >= 60, prog: () => [bestStreak(), 60] },
  { id: "agua7", name: "Hidratado", desc: "7 días con el agua completa", icon: "drop", color: "#2D9CDB", test: () => maxWaterRun() >= 7, prog: () => [maxWaterRun(), 7] },
  { id: "entreno4", name: "Semana activa", desc: `${WEEKLY_WORKOUT_GOAL} entrenos en una semana`, icon: "dumbbell", color: "#17B26A", test: () => maxWeekWorkouts() >= WEEKLY_WORKOUT_GOAL, prog: () => [maxWeekWorkouts(), WEEKLY_WORKOUT_GOAL] },
  { id: "pesaje1", name: "Primer pesaje", desc: "Registra tu peso", icon: "scale", color: "#7B61FF", test: () => weighs().length >= 1, prog: () => [weighs().length, 1] },
  { id: "pesaje4", name: "Seguimiento", desc: "4 pesajes registrados", icon: "scale", color: "#5A3FD9", test: () => weighs().length >= 4, prog: () => [weighs().length, 4] },
  { id: "nivel5", name: "Imparable", desc: "Llega al nivel 5", icon: "bolt", color: "#FF6A4D", test: () => levelInfo().n >= 5, prog: () => [levelInfo().n, 5] }
];
const earnedBadges = () => BADGES.filter(b => b.test());

/* ===================== WEEKLY REPORT ===================== */
function findRec(fragment) { return PLAN.recomendaciones.find(r => r.includes(fragment)) || ""; }
function weeklyReport(ws) {
  const days = [...Array(7)].map((_, i) => addDays(ws, i));
  const first = Object.keys(state.days).sort()[0] || todayKey();
  const tracked = days.filter(k => k <= todayKey() && k >= first);
  const n = tracked.length || 1;
  const sum = f => tracked.reduce((a, k) => a + f(getDay(k), k), 0);
  const meals = sum(d => ["desayuno", "almuerzo", "snack", "cena"].filter(m => d.meals[m].done).length);
  const agua = sum(d => d.water.every(Boolean) ? 1 : 0);
  const supp = sum(d => d.supplements.proteina && d.supplements.creatina ? 1 : 0);
  const agu = sum(d => d.aguacate ? 1 : 0);
  const workouts = workoutsInWeek(ws);
  const stepVals = tracked.map(k => +getDay(k).steps).filter(v => v > 0);
  const sleepVals = tracked.map(k => +getDay(k).sleep).filter(v => v > 0);
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
  const pcts = tracked.map(k => ({ k, p: dayPct(k) }));
  const best = pcts.reduce((a, b) => (b.p > (a ? a.p : -1) ? b : a), null);
  const weekWeigh = weighs().filter(w => w.date >= ws && w.date <= days[6]).sort((a, b) => a.date.localeCompare(b.date)).pop();
  const prevWeigh = weekWeigh ? weighs().filter(w => w.date < weekWeigh.date).sort((a, b) => a.date.localeCompare(b.date)).pop() || null : null;

  const ratios = [
    { id: "comidas", label: "Comidas", r: meals / (4 * n), tip: findRec("meal prep"), src: "Recomendaciones del plan" },
    { id: "agua", label: "Agua", r: agua / n, tip: PLAN.hidratacion.estrategia, src: "Hidratación del plan" },
    { id: "suplementos", label: "Suplementos", r: supp / n, tip: PLAN.suplementos.map(s => s.nombre + ": " + s.detalle).join(" "), src: "Suplementación del plan" },
    { id: "aguacate", label: "Aguacate", r: agu / n, tip: PLAN.aguacateDiario.texto, src: "Aguacate diario del plan" },
    { id: "entreno", label: "Entreno", r: Math.min(1, workouts / WEEKLY_WORKOUT_GOAL), tip: findRec("ejercicio físico"), src: "Recomendaciones del plan" }
  ];
  const sleepAvg = avg(sleepVals);
  if (sleepAvg !== null && sleepAvg < 7) ratios.push({ id: "sueno", label: "Sueño", r: sleepAvg / 7, tip: findRec("descanso"), src: "Recomendaciones del plan" });
  const lowest = ratios.filter(x => x.r < 1).sort((a, b) => a.r - b.r)[0] || null;

  return {
    ws, days, trackedDays: tracked.length,
    pct: Math.round(tracked.reduce((a, k) => a + dayPct(k), 0) / n),
    meals, mealsMax: 4 * tracked.length, agua, supp, agu, workouts,
    stepsAvg: avg(stepVals), sleepAvg,
    best: best && best.p > 0 ? best : null,
    weigh: weekWeigh || null, prevWeigh,
    xp: tracked.reduce((a, k) => a + dayXP(k), 0),
    lowest
  };
}
function reportText(r) {
  const L = [];
  L.push(`Mi Plan · Semana del ${fmtShort(r.ws)} al ${fmtShort(r.days[6])}`);
  L.push(`Cumplimiento: ${r.pct}%  ·  XP: ${r.xp}`);
  L.push(`Comidas: ${r.meals}/${r.mealsMax}`);
  L.push(`Agua completa: ${r.agua}/${r.trackedDays} días`);
  L.push(`Suplementos: ${r.supp}/${r.trackedDays} días`);
  L.push(`Aguacate diario: ${r.agu}/${r.trackedDays} días`);
  L.push(`Entrenos: ${r.workouts}/${WEEKLY_WORKOUT_GOAL}`);
  if (r.stepsAvg !== null) L.push(`Pasos promedio: ${Math.round(r.stepsAvg)} (meta ${STEPS_GOAL})`);
  if (r.sleepAvg !== null) L.push(`Sueño promedio: ${r.sleepAvg.toFixed(1)} h`);
  if (r.weigh) L.push(`Peso: ${r.weigh.kg} kg` + (r.prevWeigh ? ` (anterior ${r.prevWeigh.kg} kg)` : ""));
  if (r.lowest) L.push(`A mejorar: ${r.lowest.label}`);
  return L.join("\n");
}

/* ===================== NOW / NEXT ===================== */
function nowNext(k) {
  const d = getDay(k);
  const pending = MEAL_ORDER.filter(m => !d.meals[m].done);
  if (!pending.length) return { allDone: true };
  const nm = nowMin();
  const due = pending.filter(m => toMin(PLAN.comidas[m].hora) <= nm);
  if (due.length) {
    const now = due[due.length - 1];
    const idx = MEAL_ORDER.indexOf(now);
    return { now, next: pending.find(m => MEAL_ORDER.indexOf(m) > idx) || null };
  }
  return { now: pending[0], next: pending[1] || null };
}

/* ===================== REMINDERS ===================== */
function pendingReminders(k, settings) {
  const d = getDay(k);
  const t = settings.reminders.times;
  const tasks = dayTasks(d);
  const list = [
    { id: "desayuno", at: t.desayuno, pending: !tasks.desayuno, title: "Hora del desayuno", body: "Marca tu desayuno cuando lo tengas listo." },
    { id: "suplementos", at: t.suplementos, pending: !tasks.suplementos, title: "Suplementos", body: "Proteína ISO y Creatina de hoy." },
    { id: "almuerzo", at: t.almuerzo, pending: !tasks.almuerzo, title: "Hora del almuerzo", body: "No olvides el aguacate diario." },
    { id: "snack", at: t.snack, pending: !tasks.snack, title: "Snack", body: "1 Scoop de proteína + una fruta." },
    { id: "cena", at: t.cena, pending: !tasks.cena, title: "Hora de la cena", body: "Última comida del plan de hoy." },
    { id: "agua1", at: t.agua1, pending: !d.water[0], title: "Termo de la mañana", body: "Lleva tu termo de 1 L." },
    { id: "agua2", at: t.agua2, pending: !d.water[1], title: "Termo del mediodía", body: "Vas por la mitad de tu meta de agua." },
    { id: "agua3", at: t.agua3, pending: !d.water[2], title: "Termo de la tarde", body: "Con este llegas a 3 L." },
    { id: "agua4", at: t.agua4, pending: !d.water[3], title: "Medio termo", body: "500 ml más y completas tus 3,5 L." }
  ];
  if (keyToDate(k).getDay() === 0) list.push({ id: "resumen", at: t.resumen, pending: true, title: "Tu reporte semanal está listo", body: "Mira cómo te fue esta semana." });
  return list;
}
