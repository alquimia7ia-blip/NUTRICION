/* ===================== EVENTS ===================== */
const XP_PER_TASK = Math.round(100 / TOTAL_TASKS);
const haptic = () => { if (navigator.vibrate) navigator.vibrate(12); };

function afterTask(k, before) {
  const after = doneCount(k);
  if (after > before) { haptic(); toast(`${I.check.replace("<svg", '<svg width="16" height="16"')} <b>+${XP_PER_TASK} XP</b> ${after === TOTAL_TASKS ? "· ¡Día perfecto!" : ""}`); }
  render();
  checkCelebrations();
}
function toggleTask(fn) {
  const k = ui.date, before = doneCount(k);
  editDay(k, fn);
  afterTask(k, before);
}

function checkCelebrations() {
  if (ui.sheet) return;
  const lv = levelInfo();
  if (lv.n > state.settings.seenLevel) {
    editSettings(s => { s.seenLevel = lv.n; });
    ui.sheet = { kind: "celebrate", icon: "bolt", color: "#17B26A", eyebrow: "Subiste de nivel", title: `Nivel ${lv.n} · ${lv.name}`, text: "Tu constancia está dando frutos. Sigue sumando días." };
    return renderSheet();
  }
  const fresh = earnedBadges().find(b => !state.settings.seenBadges.includes(b.id));
  if (fresh) {
    editSettings(s => { s.seenBadges.push(fresh.id); });
    ui.sheet = { kind: "celebrate", icon: fresh.icon, color: fresh.color, eyebrow: "Nueva insignia", title: fresh.name, text: fresh.desc + ". ¡Bien hecho!" };
    renderSheet();
  }
}

const actions = {
  tab: v => { ui.tab = v; ui.sheet = null; render(); window.scrollTo(0, 0); },
  day: v => { const n = addDays(ui.date, +v); if (n <= todayKey()) { ui.date = n; ui.open.clear(); render(); } },
  today: () => { ui.date = todayKey(); render(); },
  openDay: v => { ui.date = v; ui.tab = "hoy"; render(); window.scrollTo(0, 0); },
  openMeal: v => { ui.open.has(v) ? ui.open.delete(v) : ui.open.add(v); render(); },
  meal: v => toggleTask(d => { d.meals[v].done = !d.meals[v].done; }),
  water: v => toggleTask(d => { d.water[+v] = !d.water[+v]; }),
  supp: v => toggleTask(d => { d.supplements[v] = !d.supplements[v]; }),
  aguacate: () => toggleTask(d => { d.aguacate = !d.aguacate; }),
  steps: v => { editDay(ui.date, d => { d.steps = +d.steps === +v ? "" : v; }); render(); },
  sleep: v => { editDay(ui.date, d => { d.sleep = +d.sleep === +v ? "" : v; }); render(); },
  mood: v => { editDay(ui.date, d => { d.mood = d.mood === +v ? null : +v; }); render(); },
  tipDay: v => { ui.tipDay = ui.tipDay === v ? null : v; render(); },
  week: v => { const n = addDays(ui.reportWeek, +v); if (n <= weekStart(todayKey())) { ui.reportWeek = n; render(); } },
  sheet: v => { ui.sheet = v === "workout" ? { kind: "workout", type: null, duration: 30, intensity: 2, routineName: "" } : { kind: v }; renderSheet(); },
  closeSheet: () => { ui.sheet = null; render(); checkCelebrations(); },
  wType: v => { ui.sheet.type = v; keepRoutineName(); renderSheet(); },
  wDur: v => { ui.sheet.duration = +v; keepRoutineName(); renderSheet(); },
  wInt: v => { ui.sheet.intensity = +v; keepRoutineName(); renderSheet(); },
  saveWorkout: () => {
    keepRoutineName();
    const s = ui.sheet, name = s.routineName.trim();
    const w = { id: uid(), type: s.type, duration: s.duration, intensity: s.intensity, name: name || undefined };
    editDay(ui.date, d => { d.workouts.push(w); });
    if (name) editSettings(st => { st.routines.push({ id: uid(), name, type: s.type, duration: s.duration, intensity: s.intensity }); });
    haptic(); ui.sheet = null; toast(`${I.dumbbell.replace("<svg", '<svg width="16" height="16"')} Entreno guardado`);
    render(); checkCelebrations();
  },
  logRoutine: v => {
    const r = state.settings.routines.find(x => x.id === v);
    if (!r) return;
    editDay(ui.date, d => { d.workouts.push({ id: uid(), type: r.type, duration: r.duration, intensity: r.intensity, name: r.name }); });
    haptic(); ui.sheet = null; toast(`${I.dumbbell.replace("<svg", '<svg width="16" height="16"')} ${esc(r.name)} guardado`);
    render(); checkCelebrations();
  },
  delWorkout: v => { editDay(ui.date, d => { d.workouts = d.workouts.filter(w => w.id !== v); }); renderSheet(); render(); },
  delRoutine: v => { editSettings(s => { s.routines = s.routines.filter(r => r.id !== v); }); renderSheet(); },
  saveWeight: () => {
    const date = document.getElementById("in-wdate").value || todayKey();
    const kg = parseFloat(document.getElementById("in-kg").value.replace(",", "."));
    const fat = parseFloat((document.getElementById("in-fat").value || "").replace(",", "."));
    if (!(kg >= 30 && kg <= 300)) { toast("Escribe tu peso en kg (ej. 104.5)"); return; }
    const now = Date.now();
    state.weighIns.forEach(w => { if (w.date === date && !w.deleted) { w.deleted = true; w.updatedAt = now; } });
    state.weighIns.push({ id: uid(), date, kg: +kg.toFixed(1), fat: fat > 0 ? +fat.toFixed(1) : null, updatedAt: Date.now() });
    saveState(); ui.sheet = null; haptic(); toast("Peso guardado"); render(); checkCelebrations();
  },
  delWeight: v => {
    if (!confirm("¿Borrar este registro de peso?")) return;
    const w = state.weighIns.find(x => x.id === v);
    if (w) { w.deleted = true; w.updatedAt = Date.now(); }
    saveState(); render();
  },
  shareReport: async () => {
    const text = reportText(weeklyReport(ui.reportWeek));
    try {
      if (navigator.share) await navigator.share({ title: "Mi reporte semanal", text });
      else { await navigator.clipboard.writeText(text); toast("Reporte copiado"); }
    } catch (e) { if (e.name !== "AbortError") toast("No se pudo compartir"); }
  },
  toggleReminders: async () => {
    const r = state.settings.reminders;
    if (!r.enabled && "Notification" in window && Notification.permission === "default") {
      const p = await Notification.requestPermission();
      if (p !== "granted") { toast("Permite las notificaciones para recibir recordatorios"); return; }
    }
    editSettings(s => { s.reminders.enabled = !s.reminders.enabled; });
    if (typeof onRemindersChanged === "function") onRemindersChanged(state.settings.reminders.enabled);
    renderSheet();
  },
  export: () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `mi-plan-respaldo-${todayKey()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },
  reset: () => {
    if (!confirm("¿Seguro? Se borrará todo tu registro personal en este dispositivo. El plan de la nutricionista no cambia.")) return;
    const name = state.settings.name;
    state = defaultState(); state.settings.name = name; state.settings.initialized = true;
    saveState(); ui.sheet = null; render();
  }
};
function keepRoutineName() { const el = document.getElementById("in-routine"); if (el && ui.sheet) ui.sheet.routineName = el.value; }

document.addEventListener("click", e => {
  const el = e.target.closest("[data-a]");
  if (!el || el.tagName === "SELECT" || el.tagName === "INPUT") return;
  if (el.classList.contains("sheet-back") && e.target !== el) return;
  const fn = actions[el.dataset.a];
  if (fn) { e.preventDefault(); fn(el.dataset.v, el); }
});

document.addEventListener("change", e => {
  const el = e.target;
  if (el.matches("select.opt")) editDay(ui.date, d => { d.meals[el.dataset.meal].sel[el.dataset.group] = +el.value; });
  else if (el.matches('[data-a="remTime"]') && el.value) editSettings(s => { s.reminders.times[el.dataset.v] = el.value; });
  else if (el.id === "in-import" && el.files[0]) importFile(el.files[0]);
});

document.addEventListener("input", e => {
  const el = e.target;
  if (el.id === "in-notes") editDay(ui.date, d => { d.notes = el.value; });
  else if (el.id === "in-steps") editDay(ui.date, d => { d.steps = el.value; });
  else if (el.id === "in-name") { editSettings(s => { s.name = el.value; }); renderTop(); }
});

function importFile(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if (!data || typeof data.days !== "object") throw new Error("formato");
      if (!confirm("Esto reemplaza tus datos actuales por los del respaldo. ¿Continuar?")) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.version === 2 ? data : migrateLegacy(data)));
      state = loadState(); saveState(); ui.sheet = null; render(); toast("Respaldo importado");
    } catch { toast("El archivo no es un respaldo de Mi Plan"); }
  };
  r.readAsText(file);
}

/* ===================== REMINDERS (app abierta o en segundo plano) ===================== */
const FIRED_KEY = "miplan.fired";
async function notify(title, body, tag) {
  try {
    const reg = navigator.serviceWorker && await navigator.serviceWorker.getRegistration();
    if (reg) reg.showNotification(title, { body, tag, icon: "icons/icon-192.png", badge: "icons/icon-192.png" });
    else new Notification(title, { body, tag });
  } catch (e) { console.warn(e); }
}
function reminderTick() {
  const r = state.settings.reminders;
  if (localStorage.getItem("miplan.push") === "1") return; // el servidor envía los avisos
  if (!r.enabled || !("Notification" in window) || Notification.permission !== "granted") return;
  const k = todayKey(), nm = nowMin();
  let fired = {};
  try { fired = JSON.parse(localStorage.getItem(FIRED_KEY) || "{}"); } catch {}
  if (fired.day !== k) fired = { day: k, ids: [] };
  for (const it of pendingReminders(k, state.settings)) {
    const at = toMin(it.at);
    if (it.pending && nm >= at && nm < at + 60 && !fired.ids.includes(it.id)) {
      fired.ids.push(it.id);
      notify(it.title, it.body, it.id);
    }
  }
  if (weighInDue() && nm >= toMin("09:00") && !fired.ids.includes("peso")) {
    fired.ids.push("peso");
    notify("Día de pesarte", "Registra tu peso para ver tu curva de progreso.", "peso");
  }
  localStorage.setItem(FIRED_KEY, JSON.stringify(fired));
}

/* ===================== INIT ===================== */
function init() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (state.settings.tz !== tz) editSettings(s => { s.tz = tz; });
  if (!state.settings.initialized) {
    state.settings.initialized = true;
    state.settings.seenBadges = earnedBadges().map(b => b.id);
    state.settings.seenLevel = levelInfo().n;
    saveState();
  }
  render();
  reminderTick();
  setInterval(reminderTick, 30000);
  let shownToday = todayKey();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { shownToday = todayKey(); return; }
    // Si estaba viendo "hoy" y cambió el día mientras la app estaba en segundo plano, avanza a la nueva fecha.
    if (ui.date === shownToday && shownToday !== todayKey()) { ui.date = todayKey(); ui.reportWeek = weekStart(todayKey()); }
    reminderTick();
    if (!ui.sheet && !document.activeElement.matches("textarea,input")) render();
  });
  if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(e => console.warn("SW", e));
}
init();
