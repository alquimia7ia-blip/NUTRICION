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
  face1: face('<path d="M8.5 16.5c2-2 5-2 7 0"/>'),
  face2: face('<path d="M8.5 15.5h7"/>'),
  face3: face('<path d="M8 14.5c2 2.5 6 2.5 8 0"/>'),
  faceA: face('<path d="M8.5 17c2-2.5 5-2.5 7 0"/>'),
  faceB: face('<path d="M8.5 16c2-1.2 5-1.2 7 0"/>'),
  faceC: face('<path d="M8.5 15.5h7"/>'),
  faceD: face('<path d="M8.5 14.5c2 1.5 5 1.5 7 0"/>'),
  faceE: face('<path d="M8 14c2 3 6 3 8 0"/>')
};
const MEAL_ICON = { desayuno: "coffee", almuerzo: "plate", snack: "apple", cena: "dinner" };
const MOODS = [["faceA", "Mal"], ["faceB", "Regular"], ["faceC", "Bien"], ["faceD", "Muy bien"], ["faceE", "Genial"]];

/* ===================== UI STATE ===================== */
const ui = { tab: "hoy", date: todayKey(), open: new Set(), sheet: null, reportWeek: weekStart(todayKey()), tipDay: null };
const $screen = () => document.getElementById("screen");

function render() {
  renderTop();
  renderTabbar();
  const r = { hoy: renderHoy, plan: renderPlan, progreso: renderProgreso, registro: renderRegistro }[ui.tab];
  $screen().innerHTML = r();
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
  const pct = dayPct(k), lv = levelInfo(), streak = currentStreak();
  const circ = 2 * Math.PI * 52, dash = pct / 100 * circ;
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

  h += `
  <button class="streak-card" data-a="tab" data-v="progreso">
    <div class="streak-row">
      <div class="streak-ico">${I.flameFill}</div>
      <div><div class="streak-num">${streak} ${streak === 1 ? "día" : "días"} de racha</div>
      <div class="streak-msg">${streakMsg(streak)}</div></div>
    </div>
    <div>
      <div class="xp-row"><span>NIVEL ${lv.n} · ${lv.name.toUpperCase()}</span><span>${lv.next ? `${lv.into} / ${lv.span} XP` : `${lv.xp} XP`}</span></div>
      <div class="xp-track"><div class="xp-fill" style="width:${lv.pct}%"></div></div>
    </div>
  </button>

  <div class="ring-wrap">
    <svg viewBox="0 0 140 140" role="img" aria-label="${pct}% del plan de hoy">
      <circle cx="70" cy="70" r="52" fill="none" stroke="var(--green-light)" stroke-width="13"/>
      <circle class="ring-fg" cx="70" cy="70" r="52" fill="none" stroke="var(--green)" stroke-width="13" stroke-linecap="round"
        stroke-dasharray="${dash.toFixed(1)} ${(circ - dash).toFixed(1)}" transform="rotate(-90 70 70)"/>
      <text x="70" y="68" text-anchor="middle" font-family="Baloo 2, sans-serif" font-size="34" font-weight="800" fill="#14231A">${pct}%</text>
      <text x="70" y="87" text-anchor="middle" font-family="Mulish, sans-serif" font-size="10" font-weight="800" fill="#5F7166">+${dayXP(k)} XP HOY</text>
    </svg>
    <div class="ring-caption">${doneCount(k)} de ${TOTAL_TASKS} tareas del plan</div>
  </div>`;

  if (isToday) {
    const nn = nowNext(k);
    if (nn.allDone) {
      h += `<div class="card-soft done-banner">${I.check}<div class="card-title" style="margin-top:6px">Comidas del día completas</div>
        <p class="small muted" style="margin-top:4px">${pct === 100 ? "Día perfecto. Disfruta tu noche." : "Revisa agua, suplementos y aguacate."}</p></div>`;
    } else {
      const m = PLAN.comidas[nn.now];
      h += `<div class="card-soft">
        <div class="eyebrow">Ahora</div>
        <div class="now-title">${m.label} <span>· ${m.horario}</span></div>
        ${mealBody(nn.now, k, true)}
      </div>`;
      if (nn.next) h += `<div class="next-row"><div><div class="k">Siguiente</div><div class="v">${PLAN.comidas[nn.next].label}</div></div><div class="small muted" style="font-weight:700">${PLAN.comidas[nn.next].horario}</div></div>`;
    }
  }

  const ws = weekStart(k), wk = workoutsInWeek(ws), todayW = d.workouts.length;
  h += `<div class="grid2">
    <div class="widget">
      <div class="w-head"><span class="w-label">Agua</span><span class="w-sub">${d.water.filter(Boolean).length}/3</span></div>
      <div class="taps">${["AM", "Medio", "PM"].map((l, i) => `<button class="tap ${d.water[i] ? "on" : ""}" data-a="water" data-v="${i}" aria-label="Termo ${l}">${I.drop}<span class="tl">${l}</span></button>`).join("")}</div>
      <div class="w-sub">Termos de 1 L · meta ${PLAN.hidratacion.metaLitros} L</div>
    </div>
    <button class="widget" data-a="aguacate">
      <div class="w-head"><span class="w-label">Aguacate</span><span class="chk ${d.aguacate ? "on" : ""}">${d.aguacate ? I.check : ""}</span></div>
      <div class="w-val">${PLAN.aguacateDiario.gramos} gr al día</div>
      <div class="w-sub">${d.aguacate ? "Listo hoy" : "Pendiente · toca al comerlo"}</div>
    </button>
    <div class="widget">
      <div class="w-head"><span class="w-label">Suplementos</span><span class="w-sub">${+d.supplements.proteina + +d.supplements.creatina}/2</span></div>
      <div class="taps">${PLAN.suplementos.map(s => `<button class="tap ${d.supplements[s.id] ? "on" : ""}" data-a="supp" data-v="${s.id}" aria-label="${esc(s.nombre)}">${I.pill}<span class="tl">${s.id === "proteina" ? "Proteína" : "Creatina"}</span></button>`).join("")}</div>
      <div class="w-sub">1 scoop de cada uno</div>
    </div>
    <button class="widget w-train" data-a="sheet" data-v="workout">
      <div class="w-head"><span class="w-label">Entreno</span>${I.plus.replace("<svg", '<svg width="20" height="20"')}</div>
      <div class="w-val">${todayW ? `${todayW} hoy` : "Registrar"}</div>
      <div><div class="mini-dots">${[0, 1, 2, 3].map(i => `<i class="${i < wk ? "on" : ""}"></i>`).join("")}</div><div class="w-sub" style="margin-top:5px">${wk}/${WEEKLY_WORKOUT_GOAL} esta semana</div></div>
    </button>
  </div>

  <div class="section-title">Comidas del día</div>
  ${MEAL_ORDER.map(m => mealRow(m, k)).join("")}

  <div class="section-title">Hábitos</div>
  <div class="card">
    <div class="hab-row">
      <div class="hab-top"><div class="hab-name">${I.steps} Pasos</div><input class="num" id="in-steps" type="number" inputmode="numeric" min="0" placeholder="0" value="${esc(d.steps)}"></div>
      <div class="chips">${[4000, 6000, 8000, 10000].map(v => `<button class="chip ${+d.steps === v ? "on" : ""}" data-a="steps" data-v="${v}">${v / 1000}k</button>`).join("")}</div>
      <div class="small muted" style="font-weight:600">Meta del plan: mín. ${STEPS_GOAL.toLocaleString("es")} pasos</div>
    </div>
    <div class="hab-row">
      <div class="hab-name">${I.sleep} Sueño</div>
      <div class="chips">${[5, 6, 7, 8, 9].map(v => `<button class="chip ${+d.sleep === v ? "on" : ""}" data-a="sleep" data-v="${v}">${v} h</button>`).join("")}</div>
      <div class="small muted" style="font-weight:600">Recomendado: 7 – 8 horas</div>
    </div>
  </div>

  <div class="section-title">¿Cómo te sentiste?</div>
  <div class="card">
    <div class="moods">${MOODS.map(([ic, l], i) => `<button class="mood ${d.mood === i + 1 ? "on" : ""}" data-a="mood" data-v="${i + 1}">${I[ic]}${l}</button>`).join("")}</div>
    <textarea class="notes" id="in-notes" placeholder="Notas del día (opcional)">${esc(d.notes)}</textarea>
  </div>`;
  return h;
}

function streakMsg(n) {
  if (n === 0) return "Hoy es un gran día para empezar";
  if (n < 3) return "Buen comienzo, sigue sumando";
  if (n < 7) return "Vas tomando ritmo";
  if (n < 14) return "Tu constancia se nota";
  return "Imparable. Así se construye un hábito";
}

function mealSummary(m, k) {
  const cfg = PLAN.comidas[m], sel = getDay(k).meals[m].sel;
  return cfg.grupos.map(g => g.opciones[sel[g.key] ?? 0].split(" – ")[0].split(" (")[0]).join(" · ");
}
function mealRow(m, k) {
  const cfg = PLAN.comidas[m], d = getDay(k), done = d.meals[m].done, open = ui.open.has(m);
  const nn = k === todayKey() ? nowNext(k) : {};
  return `<div class="meal ${done ? "done" : ""}">
    <div class="meal-row">
      <button class="meal-ico" data-a="openMeal" data-v="${m}" aria-label="Ver opciones de ${cfg.label}" style="border:none">${I[MEAL_ICON[m]]}</button>
      <button data-a="openMeal" data-v="${m}" class="meal-info" style="border:none;background:none;text-align:left;padding:0">
        <div class="meal-name">${cfg.label} ${nn.now === m ? '<span class="tag">Ahora</span>' : ""}</div>
        <div class="meal-sum">${cfg.horario} · ${esc(mealSummary(m, k))}</div>
      </button>
      <button class="circle ${done ? "on" : ""}" data-a="meal" data-v="${m}" aria-label="Marcar ${cfg.label}">${I.check}</button>
    </div>
    ${open ? `<div class="meal-body">${mealBody(m, k, false)}</div>` : ""}
  </div>`;
}
function mealBody(m, k, withButton) {
  const cfg = PLAN.comidas[m], dm = getDay(k).meals[m];
  let h = cfg.grupos.map(g => `<div class="grp">
      <div class="grp-label">${g.tipo} <span class="grp-note">${g.nota}</span></div>
      <select class="opt" data-a="opt" data-meal="${m}" data-group="${g.key}">
        ${g.opciones.map((o, i) => `<option value="${i}" ${i === (dm.sel[g.key] ?? 0) ? "selected" : ""}>${esc(o)}</option>`).join("")}
      </select></div>`).join("");
  if (cfg.extras && cfg.extras.length) h += `<details class="more"><summary>Ver indicaciones (${cfg.extras.map(e => e.tipo.toLowerCase()).join(", ")})</summary>${cfg.extras.map(e => `<div class="extra"><b>${e.tipo}</b>${esc(e.texto)}</div>`).join("")}</details>`;
  if (withButton) h += `<button class="btn ${dm.done ? "btn-done" : "btn-primary"}" style="margin-top:14px" data-a="meal" data-v="${m}">${dm.done ? I.check + " Completada" : "Marcar como completada"}</button>`;
  return h;
}

/* ===================== PROGRESO ===================== */
function renderProgreso() {
  const lv = levelInfo(), earned = new Set(earnedBadges().map(b => b.id));
  const last7 = [...Array(7)].map((_, i) => addDays(todayKey(), i - 6));
  let h = `<div class="card level-card">
    <div class="level-badge"><small>NIVEL</small><span>${lv.n}</span></div>
    <div style="flex:1;min-width:0">
      <div class="card-title">${lv.name}</div>
      <div class="small muted" style="font-weight:700">${lv.xp.toLocaleString("es")} XP en total${lv.next ? ` · faltan ${lv.next.xp - lv.xp} para ${lv.next.name}` : ""}</div>
      <div class="bar"><i style="width:${lv.pct}%"></i></div>
    </div>
  </div>

  <div class="grid2">
    <div class="kpi">${I.flame}<div><div class="v">${currentStreak()}</div><div class="l">Racha actual</div></div></div>
    <div class="kpi">${I.trophy}<div><div class="v">${bestStreak()}</div><div class="l">Mejor racha</div></div></div>
  </div>

  <div class="section-title">Últimos 7 días</div>
  <div class="card">
    <div class="week-bars">${last7.map(k => {
      const p = dayPct(k), sel = ui.tipDay === k;
      return `<button class="wb" data-a="tipDay" data-v="${k}" style="border:none;background:none;padding:0" aria-label="${fmtShort(k)}: ${p}%">
        <span class="small" style="font-weight:800;visibility:${sel ? "visible" : "hidden"}">${p}%</span>
        <span class="wb-track"><span class="wb-fill ${k === todayKey() ? "today" : ""}" style="height:${p ? Math.max(p, 4) : 0}%"></span></span>
        <span class="wb-lbl">${weekday2(k)}</span></button>`;
    }).join("")}</div>
    <p class="small muted" style="margin-top:8px;font-weight:600">Toca una barra para ver el %. Un día cuenta para la racha desde ${STREAK_MIN_PCT}%.</p>
  </div>`;

  h += renderReport();
  h += renderWeight();

  h += `<div class="section-title">Insignias · ${earned.size}/${BADGES.length}</div>
  <div class="card"><div class="badges">${BADGES.map(b => `<div class="badge ${earned.has(b.id) ? "" : "locked"}">
      <div class="b-ico" style="background:${b.color};box-shadow:0 6px 14px ${b.color}55">${earned.has(b.id) ? I[b.icon] : I.lock}</div>
      <div class="b-name">${b.name}</div><div class="b-desc">${b.desc}</div></div>`).join("")}</div></div>`;
  return h;
}

function renderReport() {
  const ws = ui.reportWeek, r = weeklyReport(ws), isCur = ws === weekStart(todayKey());
  const low = id => r.lowest && r.lowest.id === id ? "low" : "";
  const kpi = (id, icon, v, l) => `<div class="kpi ${low(id)}">${I[icon]}<div><div class="v">${v}</div><div class="l">${l}</div></div></div>`;
  const n = r.trackedDays;
  return `<div class="section-title">Reporte semanal</div>
  <div class="card">
    <div class="date-nav" style="margin-bottom:12px">
      <button class="arrow" data-a="week" data-v="-7" aria-label="Semana anterior">${I.chevron}</button>
      <div class="date-center"><div class="date-main" style="text-transform:none">${fmtShort(ws)} – ${fmtShort(addDays(ws, 6))}</div>
      <div class="date-sub">${isCur ? "Esta semana" : "Semana pasada"}</div></div>
      <button class="arrow next" data-a="week" data-v="7" aria-label="Semana siguiente" ${isCur ? "disabled" : ""}>${I.chevron}</button>
    </div>
    ${n === 0 ? '<p class="p">Esta semana aún no empieza.</p>' : `
    <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:12px">
      <div style="font-family:var(--display);font-weight:800;font-size:40px;line-height:1;color:var(--green-dark)">${r.pct}%</div>
      <div class="small muted" style="font-weight:700">cumplimiento promedio<br>+${r.xp} XP ganados</div>
    </div>
    <div class="kpis">
      ${kpi("comidas", "plate", `${r.meals}/${r.mealsMax}`, "Comidas")}
      ${kpi("agua", "drop", `${r.agua}/${n}`, "Días con agua completa")}
      ${kpi("suplementos", "pill", `${r.supp}/${n}`, "Días con suplementos")}
      ${kpi("aguacate", "avocado", `${r.agu}/${n}`, "Días con aguacate")}
      ${kpi("entreno", "dumbbell", `${r.workouts}/${WEEKLY_WORKOUT_GOAL}`, "Entrenos")}
      ${kpi("pasos", "steps", r.stepsAvg !== null ? Math.round(r.stepsAvg).toLocaleString("es") : "—", "Pasos promedio")}
      ${kpi("sueno", "sleep", r.sleepAvg !== null ? r.sleepAvg.toFixed(1) + " h" : "—", "Sueño promedio")}
      ${kpi("peso", "scale", r.weigh ? r.weigh.kg + " kg" : "—", r.prevWeigh ? `Antes ${r.prevWeigh.kg} kg` : "Peso de la semana")}
    </div>
    ${r.best ? `<p class="small" style="margin-top:12px;font-weight:700">Mejor día: <span style="text-transform:capitalize">${fmtLong(r.best.k)}</span> (${r.best.p}%)</p>` : ""}
    ${r.lowest ? `<div class="tip"><div class="k">Lo que más te costó: ${r.lowest.label}</div><p>${esc(r.lowest.tip)}</p><div class="src">${r.lowest.src}</div></div>`
      : '<div class="tip" style="background:var(--green-light)"><div class="k" style="color:var(--green-dark)">Semana completa</div><p>Cumpliste todos los indicadores. Sigue así.</p></div>'}
    <button class="btn btn-ghost" style="margin-top:12px" data-a="shareReport">${I.share} Compartir reporte</button>`}
  </div>`;
}

function renderWeight() {
  const base = baselineWeight();
  const pts = [{ date: base.date, kg: base.kg, base: true }, ...[...state.weighIns].sort((a, b) => a.date.localeCompare(b.date))];
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
  return `<div class="section-title">Peso</div>
  <div class="card">
    <div class="card-head"><div><div class="card-title">${last.kg} kg</div>
      <div class="small muted" style="font-weight:700">${diff === null ? `Punto de partida (${fmtShort(base.date)})` : `${diff > 0 ? "+" : ""}${diff} kg desde el inicio (${base.kg} kg)`}</div></div>
      <button class="btn btn-primary" style="width:auto;padding:10px 14px;min-height:44px" data-a="sheet" data-v="weight">${I.plus} Peso</button></div>
    ${chart || '<p class="p">Registra tu peso cada 15 días para ver tu curva.</p>'}
    ${state.weighIns.length ? `<div class="w-list" style="margin-top:8px">${[...state.weighIns].sort((a, b) => b.date.localeCompare(a.date)).map(w =>
      `<div class="w-item"><span>${fmtShort(w.date)}</span><span>${w.kg} kg${w.fat ? ` · ${w.fat}% grasa` : ""} <button class="del" data-a="delWeight" data-v="${w.id}" aria-label="Borrar">×</button></span></div>`).join("")}</div>` : ""}
  </div>`;
}

/* ===================== PLAN ===================== */
function renderPlan() {
  let h = `<div class="plan-banner"><div class="k">Plan de tu nutricionista</div><div class="v">${PLAN.nutricionista}</div></div>
  <div class="card"><p class="p">${esc(PLAN.intro)}</p></div>
  <div class="section-title">Objetivo</div>
  <div class="card"><p class="p">${esc(PLAN.objetivo)}</p><p class="p" style="margin-top:8px;color:var(--ink);font-weight:800">${esc(PLAN.recomendacionPasos)}</p>
    <p class="small muted" style="margin-top:8px;font-weight:600">Seguimiento: ${esc(PLAN.seguimiento)}</p></div>
  <div class="section-title">Comidas y opciones</div>`;
  h += MEAL_ORDER.map(m => {
    const c = PLAN.comidas[m];
    return `<details class="acc"><summary><span style="display:flex;align-items:center;gap:10px"><span class="meal-ico" style="width:34px;height:34px">${I[MEAL_ICON[m]]}</span>${c.label} · ${c.horario}</span></summary><div class="acc-body">
      ${c.grupos.map(g => `<div class="grp"><div class="grp-label">${g.tipo} <span class="grp-note">${g.nota}</span></div><ul class="plain-list" style="margin-top:6px">${g.opciones.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>`).join("")}
      ${(c.extras || []).map(e => `<div class="extra"><b>${e.tipo}</b>${esc(e.texto)}</div>`).join("")}</div></details>`;
  }).join("");
  h += `<div class="section-title">Hidratación · Suplementos · Aguacate</div>
  <div class="card"><p class="p">${esc(PLAN.hidratacion.formula)}</p><p class="p" style="margin-top:6px">${esc(PLAN.hidratacion.estrategia)}</p>
    ${PLAN.suplementos.map(s => `<p class="p" style="margin-top:8px"><b style="color:var(--ink)">${s.nombre}:</b> ${esc(s.detalle)}</p>`).join("")}
    <p class="p" style="margin-top:8px"><b style="color:var(--ink)">Aguacate diario:</b> ${esc(PLAN.aguacateDiario.texto)}</p></div>
  <details class="acc"><summary>Ideas de bebidas</summary><div class="acc-body"><ul class="plain-list">${PLAN.hidratacion.ideas.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div></details>
  <div class="section-title">Recetas</div>
  ${[["Desayuno", "desayuno"], ["Almuerzo / Cena", "almuerzo"], ["Snacks", "snack"], ["Cena", "cena"]].map(([l, k]) =>
    `<details class="acc"><summary>${l}</summary><div class="acc-body">${PLAN.recetas[k].map(r => `<p class="p" style="margin-bottom:8px">${r.d ? `<b style="color:var(--ink)">${esc(r.t)}:</b> ${esc(r.d)}` : esc(r.t)}</p>`).join("")}</div></details>`).join("")}
  <div class="section-title">Recomendaciones</div>
  <details class="acc"><summary>Leer recomendaciones</summary><div class="acc-body"><ul class="plain-list">${PLAN.recomendaciones.map(r => `<li>${esc(r)}</li>`).join("")}</ul></div></details>
  <p style="text-align:center;font-family:var(--display);font-weight:800;color:var(--green-dark);padding:14px 8px 4px;font-size:15px">${PLAN.fraseFinal}<br><span style="font-family:var(--body);font-size:12px;color:var(--ink-faint)">${PLAN.fraseFinalAutor}</span></p>`;
  return h;
}

/* ===================== REGISTRO ===================== */
function renderRegistro() {
  const keys = Object.keys(state.days).sort().reverse();
  const color = p => p >= 100 ? ["var(--green)", "#fff"] : p >= STREAK_MIN_PCT ? ["var(--green-light)", "var(--green-dark)"] : p > 0 ? ["var(--gold-light)", "#8A5D00"] : ["var(--bg-soft)", "var(--ink-faint)"];
  let h = `<div class="reg-banner">Tu registro personal. El plan de tu nutricionista no cambia: lo ves en la pestaña Plan.</div>`;
  if (!keys.length) return h + `<div class="card"><p class="p">Aún no hay días registrados. Empieza marcando tu primera comida en Hoy.</p></div>`;
  h += `<div class="card" style="padding:4px 16px">${keys.map(k => {
    const d = getDay(k), p = dayPct(k), [bg, fg] = color(p);
    const icons = d.workouts.slice(0, 3).map(w => I[(WORKOUT_TYPES.find(t => t.id === w.type) || WORKOUT_TYPES[0]).icon]).join("");
    return `<button class="reg-item" data-a="openDay" data-v="${k}">
      <div class="reg-pct" style="background:${bg};color:${fg}">${p}%</div>
      <div style="flex:1;min-width:0"><div class="reg-d">${fmtLong(k)}</div><div class="reg-n">${esc(d.notes || `${doneCount(k)} de ${TOTAL_TASKS} tareas`)}</div></div>
      <div class="reg-icons">${icons}${d.mood ? I[MOODS[d.mood - 1][0]] : ""}</div></button>`;
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
