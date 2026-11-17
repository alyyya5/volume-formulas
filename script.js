// ========== ДАННЫЕ ==========
const properties = [
  { icon: "➕", title: "Аддитивность", text: "Объём тела равен сумме объёмов его неперекрывающихся частей." },
  { icon: "🔄", title: "Инвариантность", text: "Объём не меняется при любом движении тела в пространстве." },
  { icon: "📈", title: "Монотонность", text: "Если одно тело содержится внутри другого, его объём не больше." },
  { icon: "📏", title: "Единица", text: "Объём единичного куба равен единице." }
];

const figures = [
  {
    id: "prism",
    name: "Призма",
    formula: "V = S · h",
    theory: [
      { step: "Шаг 1", text: "Берём основание с площадью S." },
      { step: "Наблюдение", text: "Из каждой точки основания поднимается яркая точка на высоту h — образуется «столбик»." },
      { step: "Вывод", text: "Весь объём заполняется такими столбиками. Объём каждого = площадь основания × высота." },
      { step: "Формула", text: "Следовательно, V = S · h." }
    ],
    tasks: [
      { type: "choice", question: "Объём прямой призмы равен…", options: ["S · h", "1/3 S · h", "π r² h", "4/3 π R³"], correct: 0, hint: "Высота полностью «вытягивается» из каждой точки основания." },
      { type: "input", question: "Площадь основания 12 см², высота 5 см. Объём?", correct: "60", unit: "см³", hint: "Умножь площадь на высоту." },
      { type: "choice", question: "Что показывает анимация призмы?", options: ["Точки поднимаются из основания, заполняя объём", "Сечения плоскостями", "Складывание кубиков", "Оригами"], correct: 0, hint: "Именно подъём точек из каждой точки основания." }
    ]
  },
  {
    id: "pyramid",
    name: "Пирамида",
    formula: "V = (1/3) S · h",
    theory: [
      { step: "Шаг 1", text: "Рассмотрим призму с тем же основанием и высотой." },
      { step: "Наблюдение", text: "Три одинаковые пирамиды полностью заполняют такую призму." },
      { step: "Вывод", text: "Объём одной пирамиды составляет ровно треть объёма призмы." },
      { step: "Формула", text: "V = (1/3) · S · h." }
    ],
    tasks: [
      { type: "choice", question: "Почему коэффициент 1/3?", options: ["Три пирамиды складываются в призму", "Основание круглое", "Высота меньше", "Случайно"], correct: 0, hint: "Классический геометрический факт: три пирамиды = одна призма." },
      { type: "input", question: "S = 15, h = 9. Объём пирамиды?", correct: "45", unit: "", hint: "(1/3)·15·9 = 45." }
    ]
  },
  {
    id: "cylinder",
    name: "Цилиндр",
    formula: "V = π r² · h",
    theory: [
      { step: "Шаг 1", text: "Основание — круг площадью S = π r²." },
      { step: "Наблюдение", text: "Из каждой точки круга поднимается точка на высоту h — точно как в призме." },
      { step: "Вывод", text: "Цилиндр — «круглая призма»." },
      { step: "Формула", text: "V = S · h = π r² · h." }
    ],
    tasks: [
      { type: "choice", question: "Цилиндр по объёму аналогичен…", options: ["Призме", "Пирамиде", "Конусу", "Шару"], correct: 0, hint: "Та же идея: площадь основания × высота." },
      { type: "input", question: "r = 2, h = 7. Объём (π≈3.14)?", correct: "87.92", unit: "", hint: "3.14 · 4 · 7 ≈ 87.92." }
    ]
  },
  {
    id: "cone",
    name: "Конус",
    formula: "V = (1/3) π r² · h",
    theory: [
      { step: "Шаг 1", text: "Конус связан с цилиндром так же, как пирамида с призмой." },
      { step: "Наблюдение", text: "Три конуса с тем же основанием и высотой заполняют цилиндр." },
      { step: "Вывод", text: "Объём конуса = 1/3 объёма цилиндра." },
      { step: "Формула", text: "V = (1/3) π r² h." }
    ],
    tasks: [
      { type: "choice", question: "Объём конуса составляет от цилиндра…", options: ["1/3", "1/2", "2/3", "1"], correct: 0, hint: "Как пирамида к призме." },
      { type: "input", question: "Цилиндр имеет объём 90. Объём конуса?", correct: "30", unit: "", hint: "Раздели на 3." }
    ]
  },
  {
    id: "sphere",
    name: "Шар",
    formula: "V = (4/3) π R³",
    theory: [
      { step: "Шаг 1", text: "Рассмотрим цилиндр, описанный около шара (высота = 2R)." },
      { step: "Наблюдение", text: "Объём шара составляет ровно 2/3 объёма этого цилиндра." },
      { step: "Вывод", text: "V_цилиндра = 2π R³ → V_шара = (2/3)·2π R³ = (4/3) π R³." },
      { step: "Формула", text: "V = (4/3) π R³." }
    ],
    tasks: [
      { type: "choice", question: "Объём шара относительно описанного цилиндра…", options: ["2/3", "1/3", "1/2", "4/3"], correct: 0, hint: "Соотношение Архимеда: 2/3." },
      { type: "input", question: "R = 3. Объём шара (π≈3.14)?", correct: "113.04", unit: "", hint: "(4/3)·3.14·27 ≈ 113.04." }
    ]
  },
  {
    id: "cavalieri",
    name: "Принцип Кавальери",
    formula: "Равные сечения → равные объёмы",
    theory: [
      { step: "Шаг 1", text: "Два тела имеют одинаковую высоту." },
      { step: "Наблюдение", text: "На каждой высоте площади сечений параллельными плоскостями равны." },
      { step: "Вывод", text: "Тогда объёмы тел равны." },
      { step: "Применение", text: "Позволяет сравнивать объёмы без прямого вычисления." }
    ],
    tasks: [
      { type: "choice", question: "Принцип Кавальери утверждает…", options: ["Равные площади сечений на всех высотах → равные объёмы", "Объёмы всегда равны", "Только для шара", "Ничего"], correct: 0, hint: "Ключ — равные сечения на каждой высоте." }
    ]
  }
];

// ========== СОСТОЯНИЕ ==========
let currentFigure = 0;
let animProgress = 0;
let animRunning = true;
let pointDensity = 1;
let solvedTasks = new Set();
const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
  renderProperties();
  renderTabs();
  renderSummary();
  switchFigure(0);
  requestAnimationFrame(animationLoop);

  document.getElementById("start-btn").onclick = () => document.getElementById("intro").scrollIntoView({behavior:"smooth"});
  document.getElementById("btn-pause").onclick = () => { animRunning = !animRunning; };
  document.getElementById("btn-replay").onclick = () => { animProgress = 0; animRunning = true; };
  document.getElementById("btn-layers").onclick = (e) => { pointDensity = pointDensity === 1 ? 2 : 1; e.target.classList.toggle("active", pointDensity > 1); };
  document.getElementById("btn-next").onclick = () => { animProgress = Math.min(animProgress + 0.25, 1); };
  document.getElementById("btn-reset").onclick = resetProgress;
  updateProgress();
}

function renderProperties() {
  document.getElementById("property-cards").innerHTML = properties.map(p => `
    <div class="card">
      <div class="icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `).join("");
}

function renderTabs() {
  document.getElementById("figure-tabs").innerHTML = figures.map((f, i) => `
    <button class="tab ${i===0?'active':''}" onclick="switchFigure(${i})">${f.name}</button>
  `).join("");
}

function switchFigure(index) {
  currentFigure = index;
  document.querySelectorAll(".tab").forEach((t, i) => t.classList.toggle("active", i === index));
  animProgress = 0;
  animRunning = true;
  renderTheory();
  renderTasks();
}

function renderTheory() {
  const f = figures[currentFigure];
  document.getElementById("theory-container").innerHTML = `
    <h3 style="margin-bottom:1rem;">${f.name}</h3>
    ${f.theory.map(t => `<div class="theory-step"><strong>${t.step}:</strong> ${t.text}</div>`).join("")}
    <div class="formula">${f.formula}</div>
  `;
}

function renderTasks() {
  const f = figures[currentFigure];
  const container = document.getElementById("tasks-container");
  container.innerHTML = `<h3 style="margin:1.5rem 0 1rem;">Задания</h3>` +
    f.tasks.map((task, ti) => renderTask(task, currentFigure, ti)).join("");
}

function renderTask(task, fi, ti) {
  const id = `task-${fi}-${ti}`;
  const solved = solvedTasks.has(id);
  let html = `<div class="task ${solved?'correct':''}" id="${id}"><p><strong>${task.question}</strong></p>`;
  if (task.type === "choice") {
    html += `<div class="task-options">` + task.options.map((opt, oi) =>
      `<button onclick="checkChoice(${fi},${ti},${oi})" ${solved?'disabled':''}>${opt}</button>`
    ).join("") + `</div>`;
  } else if (task.type === "input") {
    html += `<div style="display:flex;gap:0.5rem;align-items:center;margin-top:0.5rem;">
      <input type="text" id="input-${id}" placeholder="Ответ" style="flex:1;padding:0.5rem;border-radius:8px;border:1px solid #343d3b;background:#1b2020;color:#f0f1e9;" ${solved?'disabled':''}>
      <span>${task.unit||''}</span>
      <button class="ghost" onclick="checkInput(${fi},${ti})" ${solved?'disabled':''}>Проверить</button>
    </div>`;
  }
  html += `<div class="feedback" id="fb-${id}"></div></div>`;
  return html;
}

function checkChoice(fi, ti, oi) {
  const task = figures[fi].tasks[ti];
  const id = `task-${fi}-${ti}`;
  const el = document.getElementById(id);
  const fb = document.getElementById(`fb-${id}`);
  if (oi === task.correct) {
    el.classList.add("correct");
    fb.innerHTML = `<span class="feedback correct">Верно! ${task.hint || ""}</span>`;
    solvedTasks.add(id);
  } else {
    el.classList.add("incorrect");
    fb.innerHTML = `<span class="feedback incorrect">Неверно. ${task.hint}</span>`;
  }
  updateProgress();
}

function checkInput(fi, ti) {
  const task = figures[fi].tasks[ti];
  const id = `task-${fi}-${ti}`;
  const input = document.getElementById(`input-${id}`);
  const fb = document.getElementById(`fb-${id}`);
  const el = document.getElementById(id);
  const val = input.value.trim().replace(",", ".");
  const num = parseFloat(val);
  const correctNum = parseFloat(task.correct);
  if (val === task.correct || ( !isNaN(num) && Math.abs(num - correctNum) < 0.15 )) {
    el.classList.add("correct");
    fb.innerHTML = `<span class="feedback correct">Верно!</span>`;
    solvedTasks.add(id);
  } else {
    el.classList.add("incorrect");
    fb.innerHTML = `<span class="feedback incorrect">Неверно. ${task.hint}</span>`;
  }
  updateProgress();
}

function updateProgress() {
  const total = figures.reduce((s, f) => s + f.tasks.length, 0);
  const done = solvedTasks.size;
  const percent = total ? Math.round(done / total * 100) : 0;
  document.getElementById("progress-bar").value = percent;
  document.getElementById("progress-text").textContent = `Прогресс: ${done} из ${total} заданий`;
  document.getElementById("percent").textContent = percent + "%";
}

function resetProgress() {
  solvedTasks.clear();
  switchFigure(currentFigure);
  updateProgress();
}

function renderSummary() {
  document.getElementById("summary-table").innerHTML = `
    <table>
      <thead><tr><th>Фигура</th><th>Формула</th></tr></thead>
      <tbody>
        ${figures.map(f => `<tr><td>${f.name}</td><td><strong>${f.formula}</strong></td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

// ========== 3D-ПРОЕКЦИЯ И АНИМАЦИЯ ТОЧЕК ==========
const ISO = Math.PI / 6;
function project(x, y, z) {
  // Изометрическая проекция (y — высота вверх)
  const px = (x - z) * Math.cos(ISO);
  const py = y + (x + z) * Math.sin(ISO) * 0.5;
  return { x: px, y: -py }; // инвертируем Y для canvas
}

function animationLoop() {
  if (animRunning) {
    animProgress = Math.min(animProgress + 0.004, 1);
  }
  drawAnimation();
  requestAnimationFrame(animationLoop);
}

function drawAnimation() {
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#0e1212";
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w / 2, h * 0.62);

  const f = figures[currentFigure];
  drawFigure(f.id);

  ctx.restore();

  // Подпись
  ctx.fillStyle = "#d5f887";
  ctx.font = "600 15px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(f.name + " — точки поднимаются из основания", w / 2, 36);
}

function drawFigure(id) {
  const scale = 90;
  const hMax = 2.2;
  const progress = animProgress;

  if (id === "prism") {
    drawBaseAndPoints("rect", scale, hMax, progress);
    drawPrismWire(scale, hMax * progress);
  } else if (id === "cylinder") {
    drawBaseAndPoints("circle", scale, hMax, progress);
    drawCylinderWire(scale, hMax * progress);
  } else if (id === "pyramid") {
    drawBaseAndPoints("rect", scale, hMax, progress, true);
    drawPyramidWire(scale, hMax * progress);
  } else if (id === "cone") {
    drawBaseAndPoints("circle", scale, hMax, progress, true);
    drawConeWire(scale, hMax * progress);
  } else if (id === "sphere") {
    drawSphereWithPoints(scale * 0.9, progress);
  } else {
    drawCavalieriDemo(scale);
  }
}

function drawBaseAndPoints(type, scale, hMax, progress, converge = false) {
  const count = Math.floor(180 * pointDensity);
  ctx.globalAlpha = 0.9;

  for (let i = 0; i < count; i++) {
    let bx, bz;
    if (type === "rect") {
      bx = (Math.random() - 0.5) * 2;
      bz = (Math.random() - 0.5) * 1.4;
    } else {
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random());
      bx = Math.cos(a) * r;
      bz = Math.sin(a) * r * 0.9;
    }

    const rise = progress;
    let py = rise * hMax;
    if (converge) {
      // Для пирамиды/конуса точки сходятся к вершине
      const t = rise;
      bx *= (1 - t);
      bz *= (1 - t);
      py = t * hMax;
    }

    const p = project(bx * scale, py * scale, bz * scale);
    const alpha = 0.4 + rise * 0.6;
    ctx.fillStyle = `rgba(213,248,135,${alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, converge ? 2.2 : 2.6, 0, Math.PI * 2);
    ctx.fill();

    // Лёгкое свечение
    if (rise > 0.3) {
      ctx.fillStyle = `rgba(213,248,135,${alpha * 0.25})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function drawPrismWire(scale, h) {
  const pts = [
    [-1, 0, -0.7], [1, 0, -0.7], [1, 0, 0.7], [-1, 0, 0.7],
    [-1, h, -0.7], [1, h, -0.7], [1, h, 0.7], [-1, h, 0.7]
  ].map(p => project(p[0]*scale, p[1]*scale, p[2]*scale));

  ctx.strokeStyle = "rgba(213,248,135,0.7)";
  ctx.lineWidth = 1.5;
  // Основание
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < 4; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
  ctx.stroke();
  // Верх
  if (h > 0.1) {
    ctx.beginPath();
    ctx.moveTo(pts[4].x, pts[4].y);
    for (let i = 5; i < 8; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.stroke();
    // Рёбра
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(pts[i].x, pts[i].y);
      ctx.lineTo(pts[i+4].x, pts[i+4].y);
      ctx.stroke();
    }
  }
}

function drawCylinderWire(scale, h) {
  ctx.strokeStyle = "rgba(213,248,135,0.65)";
  ctx.lineWidth = 1.5;
  // Нижнее основание
  ctx.beginPath();
  for (let a = 0; a <= Math.PI * 2; a += 0.15) {
    const p = project(Math.cos(a)*scale, 0, Math.sin(a)*scale*0.85);
    if (a === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  if (h > 0.1) {
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 2; a += 0.15) {
      const p = project(Math.cos(a)*scale, h*scale, Math.sin(a)*scale*0.85);
      if (a === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
    // Боковые
    for (let a of [0, Math.PI]) {
      const p1 = project(Math.cos(a)*scale, 0, Math.sin(a)*scale*0.85);
      const p2 = project(Math.cos(a)*scale, h*scale, Math.sin(a)*scale*0.85);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }
}

function drawPyramidWire(scale, h) {
  const base = [[-1,0,-0.7],[1,0,-0.7],[1,0,0.7],[-1,0,0.7]].map(p => project(p[0]*scale, 0, p[2]*scale));
  const apex = project(0, h*scale, 0);
  ctx.strokeStyle = "rgba(213,248,135,0.7)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(base[0].x, base[0].y);
  base.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.closePath();
  ctx.stroke();
  if (h > 0.1) {
    base.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(apex.x, apex.y);
      ctx.stroke();
    });
  }
}

function drawConeWire(scale, h) {
  ctx.strokeStyle = "rgba(213,248,135,0.65)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let a = 0; a <= Math.PI * 2; a += 0.15) {
    const p = project(Math.cos(a)*scale, 0, Math.sin(a)*scale*0.85);
    if (a === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  if (h > 0.1) {
    const apex = project(0, h*scale, 0);
    for (let a of [0, Math.PI * 0.7, Math.PI * 1.4]) {
      const p = project(Math.cos(a)*scale, 0, Math.sin(a)*scale*0.85);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(apex.x, apex.y);
      ctx.stroke();
    }
  }
}

function drawSphereWithPoints(scale, progress) {
  const count = Math.floor(220 * pointDensity);
  ctx.globalAlpha = 0.85;
  for (let i = 0; i < count; i++) {
    const phi = Math.random() * Math.PI;
    const theta = Math.random() * Math.PI * 2;
    const r = progress;
    const x = Math.sin(phi) * Math.cos(theta) * r;
    const y = Math.cos(phi) * r;
    const z = Math.sin(phi) * Math.sin(theta) * r;
    const p = project(x * scale, y * scale * 0.9, z * scale);
    ctx.fillStyle = `rgba(213,248,135,${0.5 + progress * 0.5})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  // Контур шара
  ctx.strokeStyle = "rgba(213,248,135,0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(0, 0, scale * progress, scale * progress * 0.7, 0, 0, Math.PI * 2);
  ctx.stroke();
}

function drawCavalieriDemo(scale) {
  ctx.fillStyle = "#d5f887";
  ctx.font = "14px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("Два тела с равными сечениями на каждой высоте", 0, -scale * 2.2);
  // Упрощённая визуализация двух «столбиков» с одинаковыми площадями
  for (let y = 0; y < 8; y++) {
    const w = 40 + Math.sin(y * 0.7) * 12;
    ctx.fillStyle = `rgba(213,248,135,${0.4 + y * 0.05})`;
    ctx.fillRect(-120 - w/2, -y * 18, w, 14);
    ctx.fillRect(80 - w/2, -y * 18, w, 14);
  }
}

document.addEventListener("DOMContentLoaded", init);
