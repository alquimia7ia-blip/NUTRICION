/* ===================== ICONS ===================== */
const S = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;
const FLAME_D = '<path d="M12 1.5C13 5 18 7.5 18 13.5a6 6 0 0 1-12 0c0-3 1.5-5 3-6 0 2.5 1 4 2.5 4.5-.5-3.5-.5-7 .5-10.5Z"/>';
const face = mouth => S(`<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/>${mouth}`);
const I = {
  hoy: S('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'),
  plan: S('<path d="M4.5 19.5V5.2a2 2 0 0 1 2-2H19v15.3H6.5a2 2 0 0 0-2 2Z"/><path d="M8 7.6h8M8 11.4h8"/>'),
  progreso: S('<path d="M4.5 19.5V10M12 19.5V4.5M19.5 19.5v-7.2"/>'),
  registro: S('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  gear: S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>'),
  flame: S(FLAME_D),
  flameFill: `<svg viewBox="0 0 24 24" fill="currentColor">${FLAME_D}</svg>`,
  drop: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s6.5 7.4 6.5 12A6.5 6.5 0 1 1 5.5 14C5.5 9.4 12 2 12 2Z"/></svg>',
  pill: S('<rect x="3.5" y="8.5" width="17" height="7" rx="3.5"/><path d="M12 8.5v7"/>'),
  avocado: S('<path d="M12 3c-3 0-4.5 3.5-5.5 7S4 16 6 18.5 10 21 12 21s4-.5 6-2.5.5-5-.5-8.5S15 3 12 3Z"/><circle cx="12" cy="14.5" r="2.6"/>'),
  dumbbell: S('<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>'),
  run: S('<circle cx="14" cy="4.5" r="1.8"/><path d="M8 21l3-6 3 2 1 4M6 11l3-3 4 1 2 3 3 1M11 15l-1-5"/>'),
  walk: S('<circle cx="13" cy="4.5" r="1.8"/><path d="M10 21l2-6 2 2v4M9 12l2-4 3 1.5 1 3.5M12 15l-1-6"/>'),
  stretch: S('<circle cx="12" cy="4.5" r="1.8"/><path d="M4 9l8 1 8-1M12 10v5l-4 6M12 15l4 6"/>'),
  ball: S('<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18M3 12h18M5.5 6c4 2 9 2 13 0M5.5 18c4-2 9-2 13 0"/>'),
  moon: S('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>'),
  steps: S('<path d="M7 16c-1.5 0-2.5-1-2.5-3s1-5 2.5-5 2 2 2 4-.5 4-2 4ZM16.5 20c-1.5 0-2-2-2-4s1-4 2.5-4 2 3 2 5-1 3-2.5 3ZM5 19h4M15 9h4"/>'),
  check: S('<path d="M5 13l4 4L19 7"/>', 'stroke-width="3"'),
  lock: S('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  chevron: S('<path d="M15 6l-6 6 6 6"/>', 'stroke-width="2.5"'),
  plus: S('<path d="M12 5v14M5 12h14"/>', 'stroke-width="2.5"'),
  scale: S('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8 9a5.5 5.5 0 0 1 8 0l-2.5 2.5h-3Z"/>'),
  share: S('<path d="M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/>'),
  trophy: S('<path d="M7 4h10v5a5 5 0 0 1-10 0ZM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8"/>'),
  star: S('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>'),
  bolt: S('<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>'),
  bell: S('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>'),
  sleep: S('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>'),
  coffee: S('<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5ZM17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5v2.5M12 2.5v2.5"/>'),
  plate: S('<circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3.5"/><path d="M3 3v6M3 6h0M21 3v18"/>'),
  apple: S('<path d="M12 7c-2-2-7-1.5-7 4s3 9 5 9c1 0 1.3-.5 2-.5s1 .5 2 .5c2 0 5-4 5-9s-5-6-7-4ZM12 7c0-2 1-3.5 3-4"/>'),
  dinner: S('<path d="M3 13h18a9 9 0 0 1-18 0ZM12 4v4M8 6l1 2M16 6l-1 2"/>'),
  note: S('<path d="M5 4h10l4 4v12H5ZM14 4v5h5M8 13h8M8 17h5"/>'),
  download: S('<path d="M12 3v12M7 10l5 5 5-5M5 20h14"/>'),
  upload: S('<path d="M12 21V9M7 14l5-5 5 5M5 4h14"/>'),
  mail: S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  sync: S('<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 13a8 8 0 0 0 14.5 4.5L20 16M4 4v4h4M20 20v-4h-4"/>'),
  int1: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="14" width="4" height="6" rx="1" fill="currentColor"/><rect x="10" y="9" width="4" height="11" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>`,
  int2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="14" width="4" height="6" rx="1" fill="currentColor"/><rect x="10" y="9" width="4" height="11" rx="1" fill="currentColor"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>`,
  int3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="14" width="4" height="6" rx="1" fill="currentColor"/><rect x="10" y="9" width="4" height="11" rx="1" fill="currentColor"/><rect x="16" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>`,
  faceA: face('<path d="M8.5 17c2-2.5 5-2.5 7 0"/>'),
  faceB: face('<path d="M8.5 16c2-1.2 5-1.2 7 0"/>'),
  faceC: face('<path d="M8.5 15.5h7"/>'),
  faceD: face('<path d="M8.5 14.5c2 1.5 5 1.5 7 0"/>'),
  faceE: face('<path d="M8 14c2 3 6 3 8 0"/>')
};
const MEAL_ICON = { desayuno: "coffee", almuerzo: "plate", snack: "apple", cena: "dinner" };
const MOODS = [["😣", "Mal"], ["😕", "Regular"], ["🙂", "Bien"], ["😄", "Muy bien"], ["🤩", "Genial"]];

/* ===================== UI STATE ===================== */
const ui = { tab: "hoy", date: todayKey(), open: new Set(), closed: new Set(), flash: null, regMonth: todayKey().slice(0, 7), sheet: null, reportWeek: weekStart(todayKey()) };
const $screen = () => document.getElementById("screen");

function render() {
  renderTop();
  renderTabbar();
  const r = { hoy: renderHoy, plan: renderPlan, progreso: renderProgreso, registro: renderRegistro }[ui.tab];
  $screen().innerHTML = r();
  // Deja visible la opción elegida en cada fila deslizable de comidas.
  $screen().querySelectorAll(".opt-row").forEach(row => {
    const on = row.querySelector(".on");
    if (on) row.scrollLeft = Math.max(0, on.offsetLeft - row.offsetLeft - 24);
  });
  ui.flash = null;
  renderSheet();
}

function renderTop() {
  const lv = levelInfo();
  document.getElementById("top").innerHTML = `
    <div class="who">
      <div class="avatar">${esc((state.settings.name || "S").charAt(0).toUpperCase())}</div>
      <div><div class="hello">Hola,</div><div class="name">${esc(state.settings.name || "")}</div></div>
    </div>
    <div class="top-right">
      <button class="level-pill" data-a="tab" data-v="progreso">Nivel ${lv.n} · ${lv.name}</button>
      <button class="icon-btn" data-a="sheet" data-v="settings" aria-label="Ajustes">${I.gear}</button>
    </div>`;
}

function renderTabbar() {
  const tabs = [["hoy", "Hoy"], ["plan", "Plan"], ["progreso", "Progreso"], ["registro", "Registro"]];
  document.getElementById("tabbar").innerHTML = tabs.map(([id, l]) =>
    `<button class="${ui.tab === id ? "on" : ""}" data-a="tab" data-v="${id}">${I[id]}<span>${l}</span></button>`).join("");
}

/* ===================== HOY ===================== */
function renderHoy() {
  const k = ui.date, isToday = k === todayKey(), d = getDay(k);
  const pct = dayPct(k);
  let h = `
  <div class="date-nav">
    <button class="arrow" data-a="day" data-v="-1" aria-label="Día anterior">${I.chevron}</button>
    <div class="date-center">
      <div class="date-main">${fmtLong(k)}</div>
      ${isToday ? '<div class="date-sub">Hoy</div>' : '<button class="today-pill" data-a="today">Volver a hoy</button>'}
    </div>
    <button class="arrow next" data-a="day" data-v="1" aria-label="Día siguiente" ${isToday ? "disabled" : ""}>${I.chevron}</button>
  </div>`;

  if (isToday && weighInDue()) {
    const last = lastWeighIn();
    h += `<button class="alert" data-a="sheet" data-v="weight">${I.scale}
      <div><div class="t">${last ? "Toca registrar tu peso" : "Registra tu primer peso"}</div>
      <div class="d">${last ? `Último: ${last.kg} kg hace ${daysBetween(last.date, todayKey())} días` : "Cada 15 días verás tu curva de progreso"}</div></div></button>`;
  }

  h += heroCard(k);

  if (pct === 100) h += `<div class="perfect">🎉 <div><b>¡Día perfecto!</b><span>Cumpliste todo el plan de hoy.</span></div></div>`;

  // Lista de seguimiento: todo lo del plan, en el orden del día.
  const nn = isToday ? nowNext(k) : {};
  const mealsDone = MEAL_ORDER.filter(m => d.meals[m].done).length;
  h += `<div class="section-title">${secIcon("🍽️")} Comidas <span class="sec-count">${mealsDone}/4</span></div>
  <div class="track-list">${MEAL_ORDER.map(m => mealRow(m, k, nn)).join("")}</div>`;

  const W = ["AM", "medio día", "PM"];
  h += `<div class="section-title">${secIcon("💧")} Agua · ${String(PLAN.hidratacion.metaLitros).replace(".", ",")} L <span class="sec-count">${d.water.filter(Boolean).length}/3</span></div>
  <div class="track-list">
    <div class="water-row">${W.map((l, i) => `<button class="bottle ${d.water[i] ? "on" : ""} ${ui.flash === "water" + i ? "pop" : ""}" data-a="water" data-v="${i}" aria-pressed="${d.water[i]}" aria-label="Termo ${l}">
      <span class="bottle-body"><span class="bottle-fill"></span><span class="bottle-ic">${d.water[i] ? I.check : I.drop}</span></span>
      <b>Termo ${l}</b><small>1 L</small></button>`).join("")}</div>
  </div>`;

  const R = RESUMEN;
  const extras = [
    ...PLAN.suplementos.map(s => ({ id: "supp-" + s.id, on: d.supplements[s.id], a: "supp", v: s.id, r: R.suplementos[s.id] })),
    { id: "aguacate", on: d.aguacate, a: "aguacate", v: "", r: R.aguacate }
  ];
  h += `<div class="section-title">${secIcon("💊")} Suplementos y aguacate <span class="sec-count">${extras.filter(x => x.on).length}/3</span></div>
  <div class="track-list">${extras.map(x => trackRow(x.id, x.on, x.a, x.v, x.r[0], x.r[1], x.r[2])).join("")}</div>`;

  h += `<div class="section-title">${secIcon("🏃")} Movimiento y descanso</div>` + moveCard(k, d);

  h += `<div class="section-title">${secIcon("💬")} ¿Cómo te sentiste?</div>
  <div class="card">
    <div class="moods">${MOODS.map(([e, l], i) => `<button class="mood ${d.mood === i + 1 ? "on" : ""}" data-a="mood" data-v="${i + 1}"><span class="mood-e">${e}</span>${l}</button>`).join("")}</div>
    <textarea class="notes" id="in-notes" placeholder="Notas del día (opcional)">${esc(d.notes)}</textarea>
  </div>`;
  return h;
}

const secIcon = e => `<span class="sec-ic" aria-hidden="true">${e}</span>`;

function heroCard(k) {
  const pct = dayPct(k), lv = levelInfo(), streak = currentStreak();
  const circ = 2 * Math.PI * 34, dash = pct / 100 * circ;
  const ws = weekStart(k);
  const dots = [...Array(7)].map((_, i) => {
    const dk = addDays(ws, i), p = dayPct(dk), fut = dk > todayKey();
    const cls = fut ? "fut" : p >= STREAK_MIN_PCT ? "hit" : p > 0 ? "part" : "miss";
    const inner = cls === "hit" ? I.flameFill : cls === "part" ? `<b>${p}</b>` : "";
    return `<button class="wd ${cls} ${dk === k ? "cur" : ""}" ${fut ? "disabled" : `data-a="openDay" data-v="${dk}"`} aria-label="${fmtLong(dk)}: ${p}%"><span class="wd-c">${inner}</span><span class="wd-l">${weekday2(dk)}</span></button>`;
  }).join("");
  return `<div class="hero">
    <div class="hero-top">
      <div class="hero-ring">
        <svg viewBox="0 0 84 84" role="img" aria-label="${pct}% del plan">
          <circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="9"/>
          <circle class="ring-fg" cx="42" cy="42" r="34" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"
            stroke-dasharray="${dash.toFixed(1)} ${(circ - dash).toFixed(1)}" transform="rotate(-90 42 42)"/>
        </svg>
        <div class="hero-pct"><b>${pct}%</b><span>${doneCount(k)}/${TOTAL_TASKS}</span></div>
      </div>
      <button class="hero-info" data-a="tab" data-v="progreso">
        <div class="hero-streak"><span class="flame-ic">${I.flameFill}</span>${streak} ${streak === 1 ? "día" : "días"} de racha</div>
        <div class="hero-msg">${streakMsg(streak)}</div>
        <div class="xp-row"><span>Nivel ${lv.n} · ${lv.name}</span><span>${lv.next ? `${lv.into}/${lv.span} XP` : `${lv.xp} XP`}</span></div>
        <div class="xp-track"><div class="xp-fill" style="width:${lv.pct}%"></div></div>
      </button>
    </div>
    <div class="week-dots">${dots}</div>
  </div>`;
}

function streakMsg(n) {
  if (n === 0) return "Hoy es un gran día para empezar";
  if (n < 3) return "Buen comienzo, sigue sumando";
  if (n < 7) return "Vas tomando ritmo";
  if (n < 14) return "Tu constancia se nota";
  return "Imparable. Así se construye un hábito";
}

function trackRow(id, on, a, v, ic, t, q) {
  return `<button class="track ${on ? "on" : ""} ${ui.flash === id ? "pop" : ""}" data-a="${a}" data-v="${v}" aria-pressed="${on}">
    <span class="tr-ic" aria-hidden="true">${icono(ic)}</span>
    <span class="tr-txt"><b>${esc(t)}</b><small>${esc(q)}</small></span>
    <span class="circle ${on ? "on" : ""}">${I.check}</span></button>`;
}

// Íconos de lo elegido en cada comida, en vez de texto cortado.
function mealPicks(m, k) {
  const cfg = PLAN.comidas[m], sel = getDay(k).meals[m].sel;
  return cfg.grupos.map(g => {
    const i = sel[g.key] ?? 0, c = ((OPCION_CORTA[m] || {})[g.key] || [])[i];
    return c ? `<span class="pick" title="${esc(c[1])}">${icono(c[0])}</span>` : "";
  }).join("");
}
function mealOpen(m, k, nn) {
  return ui.open.has(m) || (k === todayKey() && nn.now === m && !ui.closed.has(m));
}
function mealRow(m, k, nn = {}) {
  const cfg = PLAN.comidas[m], d = getDay(k), done = d.meals[m].done, open = mealOpen(m, k, nn);
  return `<div class="meal ${done ? "done" : ""} ${open ? "open" : ""} ${ui.flash === "meal-" + m ? "pop" : ""}">
    <div class="meal-row">
      <button class="meal-info" data-a="openMeal" data-v="${m}" aria-expanded="${open}">
        <span class="meal-ico">${I[MEAL_ICON[m]]}</span>
        <span style="min-width:0;flex:1">
          <span class="meal-name">${cfg.label} ${nn.now === m ? '<span class="tag">Ahora</span>' : ""}<span class="meal-time">${cfg.horario}</span></span>
          <span class="picks">${mealPicks(m, k)}<span class="picks-l">${done ? "Completada" : open ? "Elige abajo" : "Toca para cambiar"}</span></span>
        </span>
      </button>
      <button class="circle ${done ? "on" : ""}" data-a="meal" data-v="${m}" aria-label="Marcar ${cfg.label}">${I.check}</button>
    </div>
    ${open ? `<div class="meal-body">${mealBody(m, k, true)}</div>` : ""}
  </div>`;
}

function moveCard(k, d) {
  const ws = weekStart(k), wk = workoutsInWeek(ws), todayW = d.workouts.length;
  const steps = +d.steps || 0, sp = Math.min(100, Math.round(steps / STEPS_GOAL * 100));
  return `<div class="card move">
    <button class="track ${todayW ? "on" : ""}" data-a="sheet" data-v="workout">
      <span class="tr-ic" aria-hidden="true">🏋️</span>
      <span class="tr-txt"><b>Entreno</b><small>${todayW ? `${todayW} registrado${todayW > 1 ? "s" : ""} hoy` : "Toca para registrar"}</small>
        <span class="seg">${[...Array(WEEKLY_WORKOUT_GOAL)].map((_, i) => `<i class="${i < wk ? "on" : ""}"></i>`).join("")}<em>${wk}/${WEEKLY_WORKOUT_GOAL} esta semana</em></span></span>
      <span class="circle add ${todayW ? "on" : ""}">${todayW ? I.check : I.plus}</span></button>
    <div class="hab">
      <div class="hab-top"><div class="hab-name"><span class="tr-ic sm" aria-hidden="true">👣</span>Pasos</div>
        <input class="num" id="in-steps" type="number" inputmode="numeric" min="0" placeholder="0" value="${esc(d.steps)}" aria-label="Pasos de hoy"></div>
      <div class="goal-bar ${sp >= 100 ? "full" : ""}"><i style="width:${sp}%"></i><span>${sp >= 100 ? "¡Meta cumplida!" : `${sp}% de ${STEPS_GOAL.toLocaleString("es")}`}</span></div>
      <div class="chips">${[4000, 6000, 8000, 10000].map(v => `<button class="chip ${+d.steps === v ? "on" : ""}" data-a="steps" data-v="${v}">${v / 1000}k</button>`).join("")}</div>
    </div>
    <div class="hab">
      <div class="hab-name"><span class="tr-ic sm" aria-hidden="true">😴</span>Sueño <span class="grp-note">recomendado 7 – 8 h</span></div>
      <div class="chips">${[5, 6, 7, 8, 9].map(v => `<button class="chip ${+d.sleep === v ? "on" : ""} ${v === 7 || v === 8 ? "rec" : ""}" data-a="sleep" data-v="${v}">${v} h</button>`).join("")}</div>
    </div>
  </div>`;
}
function mealBody(m, k, withButton) {
  const cfg = PLAN.comidas[m], dm = getDay(k).meals[m];
  let h = cfg.grupos.map(g => {
    const sel = dm.sel[g.key] ?? 0, cortas = (OPCION_CORTA[m] || {})[g.key] || [];
    const nota = g.opciones.length < 2 ? "" : /mitad/.test(g.nota) ? "elige 1 · o mitad y mitad" : "elige 1";
    return `<div class="grp">
      <div class="grp-label">${g.tipo} <span class="grp-note">${nota}</span></div>
      <div class="opt-row" role="radiogroup" aria-label="${g.tipo}">
        ${g.opciones.map((o, i) => {
          const [ic, t, q] = cortas[i] || ["🍽️", o.split(" – ")[0], ""];
          return `<button class="opt-card ${i === sel ? "on" : ""}" role="radio" aria-checked="${i === sel}" data-a="opt" data-v="${m}|${g.key}|${i}">
            <span class="opt-ic" aria-hidden="true">${icono(ic)}</span><span class="opt-t">${esc(t)}</span><span class="opt-q">${esc(q)}</span></button>`;
        }).join("")}
      </div>
      <div class="opt-detail">${esc(g.opciones[sel] || "")}</div></div>`;
  }).join("");
  h += extrasTiles(cfg);
  if (withButton) h += `<button class="btn ${dm.done ? "btn-done" : "btn-primary"}" style="margin-top:14px" data-a="meal" data-v="${m}">${dm.done ? I.check + " Completada" : "Marcar como completada"}</button>`;
  return h;
}

// Arepa antioqueña dibujada: el emoji 🫓 no existe en muchos celulares y no se parece a una arepa.
const AREPA_SVG = `<svg class="ic-svg" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="51" rx="28" ry="6" fill="#000" opacity=".08"/><path d="M2 30v7c0 9.4 13.4 17 30 17s30-7.6 30-17v-7z" fill="#E4CC98"/><ellipse cx="32" cy="30" rx="30" ry="17" fill="#FFF8E6" stroke="#DEC48E" stroke-width="1.6"/><g fill="#B97A35"><ellipse cx="18" cy="25" rx="3.6" ry="1.8" opacity=".5"/><ellipse cx="38" cy="20" rx="2.8" ry="1.4" opacity=".45"/><ellipse cx="46" cy="33" rx="4" ry="2" opacity=".5"/><ellipse cx="27" cy="38" rx="3" ry="1.5" opacity=".45"/><ellipse cx="33" cy="29" rx="1.8" ry="1" opacity=".55"/><ellipse cx="11" cy="32" rx="2" ry="1.1" opacity=".4"/><ellipse cx="53" cy="25" rx="2" ry="1" opacity=".4"/><ellipse cx="40" cy="41" rx="1.6" ry=".9" opacity=".4"/></g><ellipse cx="23" cy="21" rx="10" ry="3.4" fill="#fff" opacity=".75"/></svg>`;
const icono = ic => ic === "arepa" ? AREPA_SVG : ic;

const EXTRA_ICON = { Verduras: "🥦", Vegetales: "🥦", Fruta: "🍎", Bebida: "🥤", "Aguacate diario": "🥑" };
// Acompañantes de la comida (verduras, fruta, bebida…): tarjetas que muestran el texto del plan al tocarlas.
function extrasTiles(cfg) {
  if (!cfg.extras || !cfg.extras.length) return "";
  return `<div class="grp"><div class="grp-label">Acompañantes <span class="grp-note">toca para ver</span></div>
    ${tapTiles(cfg.extras.map(e => ({ ic: EXTRA_ICON[e.tipo] || "🍽️", t: e.tipo, q: "", full: e.texto })), "mini")}</div>`;
}

// Grilla de tarjetas (ícono + título + dato) que muestran el texto original del plan al tocarlas.
function tapTiles(items, kind = "") {
  return `<div class="tap-set"><div class="plan-grid ${kind}">${items.map(it => `<button class="plan-tile" data-a="planOpt" data-full="${esc(it.full)}">
      <span class="opt-ic" aria-hidden="true">${icono(it.ic)}</span><span style="min-width:0"><span class="opt-t">${esc(it.t)}</span>${it.q ? `<span class="opt-q">${esc(it.q)}</span>` : ""}</span></button>`).join("")}</div>
    <div class="opt-detail plan-detail" hidden></div></div>`;
}

/* ===================== PROGRESO ===================== */
function renderProgreso() {
  const lv = levelInfo(), earned = new Set(earnedBadges().map(b => b.id));
  const last7 = [...Array(7)].map((_, i) => addDays(todayKey(), i - 6));
  let h = `<div class="card level-card">
    <div class="level-badge"><small>NIVEL</small><span>${lv.n}</span></div>
    <div style="flex:1;min-width:0">
      <div class="card-title">${lv.name}</div>
      <div class="small muted" style="font-weight:700">${lv.xp.toLocaleString("es")} XP${lv.next ? ` · faltan ${lv.next.xp - lv.xp} para ${lv.next.name}` : ""}</div>
      <div class="bar"><i style="width:${lv.pct}%"></i></div>
    </div>
  </div>

  <div class="kpi-row">
    <div class="kpi-b coral"><span>🔥</span><b>${currentStreak()}</b><small>Racha actual</small></div>
    <div class="kpi-b gold"><span>🏆</span><b>${bestStreak()}</b><small>Mejor racha</small></div>
    <div class="kpi-b green"><span>⭐</span><b>${Object.keys(state.days).filter(k => dayPct(k) === 100).length}</b><small>Días perfectos</small></div>
  </div>

  <div class="section-title">${secIcon("📊")} Últimos 7 días</div>
  <div class="card">
    <div class="week-bars">
      <div class="wb-goal" style="bottom:calc(${STREAK_MIN_PCT}% * .78 + 18px)"><span>racha ${STREAK_MIN_PCT}%</span></div>
      ${last7.map(k => {
        const p = dayPct(k), cls = p >= STREAK_MIN_PCT ? "hit" : p > 0 ? "part" : "";
        return `<button class="wb" data-a="openDay" data-v="${k}" aria-label="${fmtLong(k)}: ${p}%">
          <span class="wb-val">${p}%</span>
          <span class="wb-track"><span class="wb-fill ${cls} ${k === todayKey() ? "today" : ""}" style="height:${p ? Math.max(p, 5) : 0}%"></span></span>
          <span class="wb-lbl ${k === todayKey() ? "today" : ""}">${k === todayKey() ? "hoy" : weekday2(k)}</span></button>`;
      }).join("")}</div>
  </div>`;

  h += renderReport();
  h += habitsChart(last7);
  h += renderWeight();

  h += `<div class="section-title">${secIcon("🏅")} Insignias · ${earned.size}/${BADGES.length}</div>
  <div class="card"><div class="badges">${BADGES.map(b => {
    const got = earned.has(b.id), [cur, goal] = b.prog ? b.prog() : [0, 1], bp = Math.min(100, Math.round(cur / goal * 100));
    return `<div class="badge ${got ? "" : "locked"}">
      <div class="b-ico" style="background:${b.color};box-shadow:0 6px 14px ${b.color}55">${got ? I[b.icon] : I.lock}</div>
      <div class="b-name">${b.name}</div><div class="b-desc">${b.desc}</div>
      ${got ? '<div class="b-got">¡Lograda!</div>' : `<div class="b-prog"><i style="width:${bp}%;background:${b.color}"></i></div><div class="b-num">${Math.min(cur, goal)}/${goal}</div>`}</div>`;
  }).join("")}</div></div>`;
  return h;
}

// Pasos y sueño de los últimos 7 días, con la meta del plan marcada.
function habitsChart(days) {
  const steps = days.map(k => +getDay(k).steps || 0), sleep = days.map(k => +getDay(k).sleep || 0);
  const maxS = Math.max(STEPS_GOAL * 1.25, ...steps);
  const bars = (vals, max, goalLo, goalHi, fmt, cls) => `<div class="mini-chart">
    <div class="mc-band" style="bottom:${goalLo / max * 100}%;height:${Math.max(2, (goalHi - goalLo) / max * 100)}%"></div>
    ${vals.map((v, i) => `<div class="mc-col"><span class="mc-v">${v ? fmt(v) : ""}</span><span class="mc-bar ${cls} ${v >= goalLo ? "ok" : ""}" style="height:${v ? Math.max(4, v / max * 100) : 0}%"></span></div>`).join("")}
  </div><div class="mc-lbls">${days.map(k => `<span>${k === todayKey() ? "hoy" : weekday2(k)}</span>`).join("")}</div>`;
  return `<div class="section-title">${secIcon("📈")} Pasos y sueño · 7 días</div>
  <div class="card">
    <div class="mc-head"><span>👣 Pasos</span><small>meta ${STEPS_GOAL.toLocaleString("es")}</small></div>
    ${bars(steps, maxS, STEPS_GOAL, STEPS_GOAL, v => (v / 1000).toFixed(v % 1000 ? 1 : 0) + "k", "steps")}
    <div class="mc-head" style="margin-top:16px"><span>😴 Sueño</span><small>recomendado 7 – 8 h</small></div>
    ${bars(sleep, 10, 7, 8, v => v + "h", "sleep")}
  </div>`;
}

function renderReport() {
  const ws = ui.reportWeek, r = weeklyReport(ws), isCur = ws === weekStart(todayKey());
  const n = r.trackedDays;
  const circ = 2 * Math.PI * 30, dash = r.pct / 100 * circ;
  const rows = [
    ["comidas", "🍽️", "Comidas", r.meals / Math.max(1, r.mealsMax), `${r.meals}/${r.mealsMax}`],
    ["agua", "💧", "Agua", r.agua / Math.max(1, n), `${r.agua}/${n} días`],
    ["suplementos", "💊", "Suplementos", r.supp / Math.max(1, n), `${r.supp}/${n} días`],
    ["aguacate", "🥑", "Aguacate", r.agu / Math.max(1, n), `${r.agu}/${n} días`],
    ["entreno", "🏋️", "Entreno", r.workouts / WEEKLY_WORKOUT_GOAL, `${r.workouts}/${WEEKLY_WORKOUT_GOAL}`],
    ["pasos", "👣", "Pasos", r.stepsAvg !== null ? r.stepsAvg / STEPS_GOAL : 0, r.stepsAvg !== null ? Math.round(r.stepsAvg).toLocaleString("es") : "—"],
    ["sueno", "😴", "Sueño", r.sleepAvg !== null ? r.sleepAvg / 7 : 0, r.sleepAvg !== null ? r.sleepAvg.toFixed(1).replace(".", ",") + " h" : "—"]
  ];
  return `<div class="section-title">${secIcon("🗓️")} Reporte semanal</div>
  <div class="card">
    <div class="date-nav" style="margin-bottom:12px">
      <button class="arrow" data-a="week" data-v="-7" aria-label="Semana anterior">${I.chevron}</button>
      <div class="date-center"><div class="date-main">${fmtShort(ws)} – ${fmtShort(addDays(ws, 6))}</div>
      <div class="date-sub">${isCur ? "Esta semana" : "Semana pasada"}</div></div>
      <button class="arrow next" data-a="week" data-v="7" aria-label="Semana siguiente" ${isCur ? "disabled" : ""}>${I.chevron}</button>
    </div>
    ${n === 0 ? '<p class="p">Esta semana aún no empieza.</p>' : `
    <div class="rep-top">
      <div class="rep-ring"><svg viewBox="0 0 76 76" role="img" aria-label="${r.pct}% de cumplimiento">
        <circle cx="38" cy="38" r="30" fill="none" stroke="var(--green-light)" stroke-width="9"/>
        <circle cx="38" cy="38" r="30" fill="none" stroke="var(--green)" stroke-width="9" stroke-linecap="round" stroke-dasharray="${dash.toFixed(1)} ${(circ - dash).toFixed(1)}" transform="rotate(-90 38 38)"/>
      </svg><b>${r.pct}%</b></div>
      <div><div class="rep-big">+${r.xp} XP</div><div class="small muted" style="font-weight:700">cumplimiento promedio de la semana</div>
      ${r.weigh ? `<div class="rep-w">⚖️ ${r.weigh.kg} kg${r.prevWeigh ? ` <span>${r.weigh.kg - r.prevWeigh.kg <= 0 ? "▼" : "▲"} ${Math.abs(r.weigh.kg - r.prevWeigh.kg).toFixed(1)}</span>` : ""}</div>` : ""}</div>
    </div>
    <div class="hbars">${rows.map(([id, ic, l, ratio, v]) => {
      const p = Math.min(100, Math.round(ratio * 100)), low = r.lowest && r.lowest.id === id;
      return `<div class="hbar ${low ? "low" : p >= 80 ? "ok" : "mid"}"><span class="hb-ic">${ic}</span><span class="hb-l">${l}</span>
        <span class="hb-track"><i style="width:${Math.max(p, p ? 4 : 0)}%"></i></span><span class="hb-v">${v}</span></div>`;
    }).join("")}</div>
    ${r.best ? `<p class="small" style="margin-top:12px;font-weight:700">⭐ Mejor día: ${fmtLong(r.best.k)} (${r.best.p}%)</p>` : ""}
    ${r.lowest ? `<details class="tip"><summary><span class="tip-ic" aria-hidden="true">${TIP_ICON[r.lowest.id] || "💡"}</span><span><span class="k">Lo que más te costó</span><b>${r.lowest.label}</b><span class="tip-more">Ver consejo del plan</span></span></summary><p>${esc(r.lowest.tip)}</p><div class="src">${r.lowest.src}</div></details>`
      : '<div class="tip" style="background:var(--green-light)"><div class="k" style="color:var(--green-dark)">Semana completa</div><p>Cumpliste todos los indicadores. Sigue así.</p></div>'}
    <button class="btn btn-ghost" style="margin-top:12px" data-a="shareReport">${I.share} Compartir reporte</button>`}
  </div>`;
}

// Nombre corto de una receta: su título del plan; las "Idea N" del snack toman sus primeros ingredientes.
const recTitle = r => /^Idea \d+$/.test(r.t) ? r.d.split(/ \+ | con /)[0] : r.t.replace(/\.$/, "").split(" — ").pop();
const TIP_ICON = { comidas: "🍽️", agua: "💧", suplementos: "💊", aguacate: "🥑", entreno: "🏋️", sueno: "😴" };

function renderWeight() {
  const base = baselineWeight();
  const pts = [{ date: base.date, kg: base.kg, base: true }, ...weighs().sort((a, b) => a.date.localeCompare(b.date))];
  const last = pts[pts.length - 1];
  let chart = "";
  if (pts.length >= 2) {
    const W = 340, H = 170, L = 38, R = 14, T = 16, B = 26;
    const t0 = keyToDate(pts[0].date).getTime(), t1 = keyToDate(last.date).getTime() || t0 + 1;
    const ks = pts.map(p => p.kg), lo = Math.floor(Math.min(...ks) - 1), hi = Math.ceil(Math.max(...ks) + 1);
    const x = p => L + (keyToDate(p.date).getTime() - t0) / Math.max(1, t1 - t0) * (W - L - R);
    const y = kg => T + (hi - kg) / Math.max(1, hi - lo) * (H - T - B);
    const line = pts.map((p, i) => `${i ? "L" : "M"}${x(p).toFixed(1)} ${y(p.kg).toFixed(1)}`).join(" ");
    const area = `${line} L${x(last).toFixed(1)} ${H - B} L${x(pts[0]).toFixed(1)} ${H - B} Z`;
    const grid = [hi, (hi + lo) / 2, lo].map(v => `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="#E3F3E8" stroke-width="1"/><text x="${L - 6}" y="${y(v) + 4}" text-anchor="end" font-size="10" fill="#5F7166" font-family="Mulish, sans-serif">${(+v).toFixed(0)}</text>`).join("");
    chart = `<div class="weight-chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Tendencia de peso">
      ${grid}
      <path d="${area}" fill="#17B26A" opacity=".10"/>
      <path d="${line}" fill="none" stroke="#17B26A" stroke-width="2" stroke-linejoin="round"/>
      ${pts.map((p, i) => `<circle cx="${x(p)}" cy="${y(p.kg)}" r="${i === pts.length - 1 ? 6 : 4.5}" fill="${i === pts.length - 1 ? "#0E8F53" : "#17B26A"}" stroke="#fff" stroke-width="2"><title>${fmtShort(p.date)}: ${p.kg} kg</title></circle>`).join("")}
      <text x="${Math.min(x(last), W - R - 2)}" y="${y(last.kg) - 11}" text-anchor="end" font-size="12" font-weight="800" fill="#14231A" font-family="Mulish, sans-serif">${last.kg} kg</text>
      <text x="${L}" y="${H - 6}" font-size="10" fill="#5F7166" font-family="Mulish, sans-serif">${fmtShort(pts[0].date)}</text>
      <text x="${W - R}" y="${H - 6}" text-anchor="end" font-size="10" fill="#5F7166" font-family="Mulish, sans-serif">${fmtShort(last.date)}</text>
    </svg></div>`;
  }
  const diff = last.base ? null : +(last.kg - base.kg).toFixed(1);
  return `<div class="section-title">${secIcon("⚖️")} Peso</div>
  <div class="card">
    <div class="card-head"><div><div class="card-title">${last.kg} kg</div>
      <div class="small muted" style="font-weight:700">${diff === null ? `Punto de partida (${fmtShort(base.date)})` : `${diff > 0 ? "+" : ""}${diff} kg desde el inicio (${base.kg} kg)`}</div></div>
      <button class="btn btn-primary" style="width:auto;padding:10px 14px;min-height:44px" data-a="sheet" data-v="weight">${I.plus} Peso</button></div>
    ${chart || '<p class="p">Registra tu peso cada 15 días para ver tu curva.</p>'}
    ${weighs().length ? `<div class="w-list" style="margin-top:8px">${weighs().sort((a, b) => b.date.localeCompare(a.date)).map(w =>
      `<div class="w-item"><span>${fmtShort(w.date)}</span><span>${w.kg} kg${w.fat ? ` · ${w.fat}% grasa` : ""} <button class="del" data-a="delWeight" data-v="${w.id}" aria-label="Borrar">×</button></span></div>`).join("")}</div>` : ""}
  </div>`;
}

/* ===================== PLAN ===================== */
function renderPlan() {
  const R = RESUMEN, seg = PLAN.seguimiento.split("—").pop().trim();
  const sup = PLAN.suplementos.map(x => { const [ic, t, q] = R.suplementos[x.id] || ["💊", x.nombre, ""]; return { ic, t, q, full: `${x.nombre}: ${x.detalle}` }; });
  const recTabs = [["desayuno", "Desayuno"], ["almuerzo", "Almuerzo / Cena"], ["snack", "Snacks"], ["cena", "Cena"]];
  let h = `<div class="plan-banner"><div class="k">Plan de tu nutricionista</div><div class="v">${PLAN.nutricionista}</div></div>
  <p class="small muted" style="font-weight:700;margin:-4px 2px 0">Toca cualquier tarjeta para ver el detalle del plan.</p>

  <div class="section-title">Tu objetivo</div>
  <div class="card">
    <div class="goal-chips">${R.objetivo.map(([ic, t]) => `<span class="goal-chip"><span aria-hidden="true">${ic}</span>${t}</span>`).join("")}</div>
    <div class="stat-grid">
      <div class="stat"><span class="opt-ic" aria-hidden="true">👣</span><b>${STEPS_GOAL.toLocaleString("es")}</b><span>pasos al día</span></div>
      <div class="stat"><span class="opt-ic" aria-hidden="true">💧</span><b>${String(PLAN.hidratacion.metaLitros).replace(".", ",")} L</b><span>de agua al día</span></div>
      <div class="stat"><span class="opt-ic" aria-hidden="true">⚖️</span><b>${PLAN.composicion.peso}</b><span>inicio · ${PLAN.composicion.fecha}</span></div>
      <div class="stat"><span class="opt-ic" aria-hidden="true">📅</span><b>Control</b><span>${esc(seg)}</span></div>
    </div>
    ${tapTiles([{ ic: "📖", t: "Leer intro y objetivo", q: "texto completo del plan", full: `${PLAN.intro}\n\nObjetivo: ${PLAN.objetivo}\n\n${PLAN.recomendacionPasos}\nSeguimiento: ${PLAN.seguimiento}` }], "single")}
  </div>

  <div class="section-title">Comidas y opciones</div>`;
  h += MEAL_ORDER.map(m => {
    const c = PLAN.comidas[m];
    return `<details class="acc"><summary><span style="display:flex;align-items:center;gap:10px"><span class="meal-ico" style="width:34px;height:34px">${I[MEAL_ICON[m]]}</span>${c.label} · ${c.horario}</span></summary><div class="acc-body">
      ${c.grupos.map(g => {
        const cortas = (OPCION_CORTA[m] || {})[g.key] || [];
        const nota = g.opciones.length < 2 ? "" : /mitad/.test(g.nota) ? "elige 1 · o mitad y mitad" : "elige 1";
        return `<div class="grp"><div class="grp-label">${g.tipo} <span class="grp-note">${nota}</span></div>
          ${tapTiles(g.opciones.map((o, i) => { const [ic, t, q] = cortas[i] || ["🍽️", o.split(" – ")[0], ""]; return { ic, t, q, full: o }; }))}</div>`;
      }).join("")}
      ${extrasTiles(c)}</div></details>`;
  }).join("");

  h += `<div class="section-title">Agua · Suplementos · Aguacate</div>
  <div class="card">${tapTiles([
    { ic: R.hidratacion[0], t: R.hidratacion[1], q: R.hidratacion[2], full: `${PLAN.hidratacion.formula}\n${PLAN.hidratacion.estrategia}` },
    ...sup,
    { ic: R.aguacate[0], t: R.aguacate[1], q: R.aguacate[2], full: PLAN.aguacateDiario.texto }
  ])}</div>

  <div class="section-title">Ideas de bebidas</div>
  <div class="card">${tapTiles(PLAN.hidratacion.ideas.map((full, i) => { const [ic, t, q] = R.bebidas[i]; return { ic, t, q, full }; }))}</div>

  <div class="section-title">Recetas</div>
  <div class="card">
    <div class="chips rec-tabs" role="tablist">${recTabs.map(([k, l], i) => `<button class="chip ${i ? "" : "on"}" role="tab" data-a="recTab" data-v="${k}">${l}</button>`).join("")}</div>
    ${recTabs.map(([k], i) => {
      const list = PLAN.recetas[k].map((r, j) => ({ r, ic: R.recetas[k][j] }));
      const notes = list.filter(x => /^(Tip general|Nota)$/.test(x.r.t));
      const items = list.filter(x => !notes.includes(x));
      return `<div class="rec-group" data-rec="${k}" ${i ? "hidden" : ""}>
        ${notes.map(x => `<p class="rec-note"><span aria-hidden="true">${x.ic}</span> ${esc(x.r.d)}</p>`).join("")}
        ${tapTiles(items.map(({ r, ic }) => ({ ic, t: recTitle(r), q: "", full: r.d ? `${r.t}: ${r.d}` : r.t })))}</div>`;
    }).join("")}
  </div>

  <div class="section-title">Recomendaciones</div>
  <div class="card">${tapTiles(PLAN.recomendaciones.map((full, i) => { const [ic, t] = R.recomendaciones[i]; return { ic, t, q: "", full }; }))}</div>

  <p style="text-align:center;font-family:var(--display);font-weight:800;color:var(--green-dark);padding:14px 8px 4px;font-size:15px">${PLAN.fraseFinal}<br><span style="font-family:var(--body);font-size:12px;color:var(--ink-faint)">${PLAN.fraseFinalAutor}</span></p>`;
  return h;
}

/* ===================== REGISTRO ===================== */
function renderRegistro() {
  const ym = ui.regMonth, first = ym + "-01", cur = todayKey().slice(0, 7);
  const lead = (keyToDate(first).getDay() + 6) % 7;
  const dim = new Date(+ym.slice(0, 4), +ym.slice(5, 7), 0).getDate();
  const days = [...Array(dim)].map((_, i) => ym + "-" + pad(i + 1));
  const past = days.filter(k => k <= todayKey() && state.days[k]);
  const avg = past.length ? Math.round(past.reduce((a, k) => a + dayPct(k), 0) / past.length) : 0;
  const lvl = p => p >= 100 ? 4 : p >= STREAK_MIN_PCT ? 3 : p >= 50 ? 2 : p > 0 ? 1 : 0;
  const prevYm = toKey(new Date(+ym.slice(0, 4), +ym.slice(5, 7) - 2, 1)).slice(0, 7);
  const nextYm = toKey(new Date(+ym.slice(0, 4), +ym.slice(5, 7), 1)).slice(0, 7);
  let h = `<div class="card">
    <div class="date-nav" style="margin-bottom:14px">
      <button class="arrow" data-a="month" data-v="${prevYm}" aria-label="Mes anterior">${I.chevron}</button>
      <div class="date-center"><div class="date-main">${fmtMonth(ym)}</div><div class="date-sub">Toca un día para verlo</div></div>
      <button class="arrow next" data-a="month" data-v="${nextYm}" aria-label="Mes siguiente" ${ym >= cur ? "disabled" : ""}>${I.chevron}</button>
    </div>
    <div class="cal">
      ${["L", "M", "M", "J", "V", "S", "D"].map(l => `<span class="cal-h">${l}</span>`).join("")}
      ${'<span></span>'.repeat(lead)}
      ${days.map(k => {
        const fut = k > todayKey(), p = state.days[k] ? dayPct(k) : 0, d = getDay(k);
        return `<button class="cal-d l${fut ? "f" : lvl(p)} ${k === todayKey() ? "today" : ""}" ${fut ? "disabled" : `data-a="openDay" data-v="${k}"`} aria-label="${fmtLong(k)}: ${p}%">
          <span>${+k.slice(8)}</span>${d.workouts.length ? '<i class="cal-w"></i>' : ""}${p === 100 ? '<em>⭐</em>' : ""}</button>`;
      }).join("")}
    </div>
    <div class="cal-legend"><span>Menos</span>${[0, 1, 2, 3, 4].map(i => `<i class="l${i}"></i>`).join("")}<span>Más</span><span class="cal-w-l"><i class="cal-w"></i> entreno</span></div>
  </div>

  <div class="kpi-row">
    <div class="kpi-b green"><span>⭐</span><b>${past.filter(k => dayPct(k) === 100).length}</b><small>Días perfectos</small></div>
    <div class="kpi-b coral"><span>🔥</span><b>${past.filter(k => dayPct(k) >= STREAK_MIN_PCT).length}</b><small>Días en racha</small></div>
    <div class="kpi-b gold"><span>📊</span><b>${avg}%</b><small>Promedio</small></div>
  </div>`;

  const notes = days.filter(k => getDay(k).notes || getDay(k).mood).reverse();
  if (notes.length) h += `<div class="section-title">${secIcon("📝")} Tus notas del mes</div>
  <div class="card" style="padding:4px 16px">${notes.map(k => {
    const d = getDay(k);
    return `<button class="reg-item" data-a="openDay" data-v="${k}">
      <span class="reg-mood">${d.mood ? MOODS[d.mood - 1][0] : "📝"}</span>
      <div style="flex:1;min-width:0"><div class="reg-d">${fmtLong(k)}</div><div class="reg-n">${esc(d.notes || MOODS[d.mood - 1][1])}</div></div></button>`;
  }).join("")}</div>`;
  return h;
}

/* ===================== SHEETS ===================== */
function renderSheet() {
  const host = document.getElementById("sheet-host");
  if (!ui.sheet) { host.innerHTML = ""; return; }
  const body = { workout: sheetWorkout, weight: sheetWeight, settings: sheetSettings, celebrate: sheetCelebrate }[ui.sheet.kind]();
  host.innerHTML = `<div class="sheet-back" data-a="closeSheet"><div class="sheet" role="dialog" aria-modal="true"><div class="grabber"></div>${body}</div></div>`;
}

function sheetWorkout() {
  const s = ui.sheet, d = getDay(ui.date);
  const routines = state.settings.routines;
  return `<h2>Registrar entreno</h2><div class="sub">${ui.date === todayKey() ? "Hoy" : fmtLong(ui.date)} · elige y guarda</div>
  ${routines.length ? `<div class="sheet-sec"><div class="lbl">Mis rutinas · 1 toque</div><div class="chips">${routines.map(r =>
    `<button class="chip" data-a="logRoutine" data-v="${r.id}">${esc(r.name)} · ${r.duration} min</button>`).join("")}</div></div>` : ""}
  <div class="sheet-sec"><div class="lbl">Tipo</div><div class="types">${WORKOUT_TYPES.map(t =>
    `<button class="type ${s.type === t.id ? "on" : ""}" data-a="wType" data-v="${t.id}">${I[t.icon]}${t.label}</button>`).join("")}</div></div>
  <div class="sheet-sec"><div class="lbl">Duración</div><div class="chips">${[15, 30, 45, 60, 90].map(v =>
    `<button class="chip ${s.duration === v ? "on" : ""}" data-a="wDur" data-v="${v}">${v} min</button>`).join("")}</div></div>
  <div class="sheet-sec"><div class="lbl">Intensidad</div><div class="moods">${INTENSITIES.map(t =>
    `<button class="mood ${s.intensity === t.id ? "on" : ""}" data-a="wInt" data-v="${t.id}">${I[t.icon]}${t.label}</button>`).join("")}</div></div>
  <div class="sheet-sec"><div class="lbl">Guardar como rutina (opcional)</div>
    <input class="field" id="in-routine" placeholder="Ej: Pierna, Pecho y brazo…" value="${esc(s.routineName || "")}" maxlength="30"></div>
  <button class="btn btn-primary" style="margin-top:16px" data-a="saveWorkout" ${s.type ? "" : "disabled"}>${I.check} Guardar entreno</button>
  ${d.workouts.length ? `<div class="sheet-sec"><div class="lbl">Registrados este día</div>${d.workouts.map(w => {
    const t = WORKOUT_TYPES.find(x => x.id === w.type) || WORKOUT_TYPES[0];
    return `<div class="w-item"><span style="display:flex;align-items:center;gap:8px"><span style="width:22px;height:22px;color:var(--green-dark)">${I[t.icon]}</span>${esc(w.name || t.label)}</span>
      <span>${w.duration ? w.duration + " min" : ""} <button class="del" data-a="delWorkout" data-v="${w.id}" aria-label="Borrar">×</button></span></div>`;
  }).join("")}</div>` : ""}
  ${routines.length ? `<div class="sheet-sec"><div class="lbl">Administrar rutinas</div>${routines.map(r =>
    `<div class="w-item"><span>${esc(r.name)}</span><button class="del" data-a="delRoutine" data-v="${r.id}" aria-label="Borrar rutina">×</button></div>`).join("")}</div>` : ""}`;
}

function sheetWeight() {
  return `<h2>Registrar peso</h2><div class="sub">Pésate en condiciones parecidas cada vez (ej. en la mañana)</div>
  <div class="sheet-sec"><div class="lbl">Fecha</div><input class="field" id="in-wdate" type="date" value="${todayKey()}" max="${todayKey()}"></div>
  <div class="sheet-sec row-2">
    <div><div class="lbl" style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--ink-soft);margin-bottom:8px">Peso (kg)</div><input class="field" id="in-kg" type="number" inputmode="decimal" step="0.1" min="30" max="300" placeholder="${lastWeighIn()?.kg ?? baselineWeight().kg}"></div>
    <div><div class="lbl" style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--ink-soft);margin-bottom:8px">% grasa (opcional)</div><input class="field" id="in-fat" type="number" inputmode="decimal" step="0.1" min="3" max="70" placeholder="—"></div>
  </div>
  <button class="btn btn-primary" style="margin-top:16px" data-a="saveWeight">${I.check} Guardar</button>`;
}

function sheetSettings() {
  const r = state.settings.reminders;
  const perm = "Notification" in window ? Notification.permission : "unsupported";
  const labels = { desayuno: "Desayuno", suplementos: "Suplementos", almuerzo: "Almuerzo", snack: "Snack", cena: "Cena", agua1: "Agua · termo AM", agua2: "Agua · termo medio día", agua3: "Agua · termo PM", resumen: "Reporte (domingos)" };
  return `<h2>Ajustes</h2>
  <div class="sheet-sec"><div class="lbl">Tu nombre</div><input class="field" id="in-name" value="${esc(state.settings.name)}" maxlength="24"></div>
  ${typeof syncSettingsHtml === "function" ? syncSettingsHtml() : ""}
  <div class="sheet-sec"><div class="lbl">Recordatorios</div>
    <div class="set-row"><div><div class="t">Activar recordatorios</div><div class="d">${perm === "denied" ? "Notificaciones bloqueadas en el navegador" : perm === "unsupported" ? "Instala la app en tu pantalla de inicio para recibirlos" : "Solo avisa si la tarea sigue pendiente"}</div></div>
      <button class="switch ${r.enabled ? "on" : ""}" data-a="toggleReminders" aria-label="Activar recordatorios"></button></div>
    ${r.enabled ? Object.entries(labels).map(([k, l]) => `<div class="set-row"><div class="t">${l}</div><input class="field" type="time" data-a="remTime" data-v="${k}" value="${r.times[k]}"></div>`).join("") : ""}
  </div>
  <div class="sheet-sec"><div class="lbl">Respaldo</div>
    <div class="row-2"><button class="btn btn-ghost" data-a="export">${I.download} Exportar</button>
    <label class="btn btn-ghost">${I.upload} Importar<input type="file" accept="application/json" id="in-import" hidden></label></div></div>
  <div class="sheet-sec"><button class="btn btn-danger" data-a="reset">Reiniciar mis datos</button></div>
  <button class="btn btn-primary" style="margin-top:14px" data-a="closeSheet">Listo</button>`;
}

function sheetCelebrate() {
  const c = ui.sheet;
  return `<div class="celebrate">
    <div class="medal" style="background:${c.color}">${I[c.icon]}</div>
    <div class="eyebrow" style="color:var(--coral-dark)">${c.eyebrow}</div>
    <h2 style="margin-top:4px">${esc(c.title)}</h2>
    <p class="p" style="margin-top:6px">${esc(c.text)}</p>
    <button class="btn btn-primary" style="margin-top:18px" data-a="closeSheet">¡Vamos!</button></div>`;
}

function toast(html) {
  document.querySelectorAll(".toast").forEach(t => t.remove());
  const t = document.createElement("div");
  t.className = "toast"; t.innerHTML = html;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1900);
}
