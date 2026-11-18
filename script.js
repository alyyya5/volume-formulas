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
    steps: [
      { text: "Возьмём основание призмы с площадью S. На нём появляется одна яркая точка." },
      { text: "Из этой точки поднимается высота h. Образуется тонкий «столбик», который проходит через всю высоту призмы." },
      { text: "Такие точки появляются по всему основанию одна за другой. Каждый столбик занимает своё место в объёме." },
      { text: "Когда все точки основания подняты на высоту h, они полностью заполняют призму. Поэтому объём равен площади основания, умноженной на высоту." }
    ],
    tasks: [
      { type: "choice", question: "Объём прямой призмы равен…", options: ["S · h", "1/3 S · h", "π r² h", "4/3 π R³"], correct: 0, hint: "Все столбики из точек основания имеют высоту h." },
      { type: "input", question: "Площадь основания 12 см², высота 5 см. Объём?", correct: "60", unit: "см³", hint: "Умножь площадь на высоту." }
    ]
  },
  {
    id: "cylinder",
    name: "Цилиндр",
    formula: "V = π r² · h",
    steps: [
      { text: "Основание цилиндра — круг площадью S = π r². На нём появляется красная точка." },
      { text: "Из этой красной точки поднимается высота h. Этот столбик существует на всей высоте цилиндра." },
      { text: "Так происходит с каждой точкой круглого основания. Столбики появляются по очереди и заполняют пространство." },
      { text: "Если поднять все точки основания на высоту h, они займут весь объём цилиндра. Поэтому V = S · h = π r² · h." }
    ],
    tasks: [
      { type: "choice", question: "Цилиндр по объёму аналогичен…", options: ["Призме", "Пирамиде", "Конусу", "Шару"], correct: 0, hint: "Та же идея: площадь основания × высота." },
      { type: "input", question: "r = 2, h = 7. Объём (π≈3.14)?", correct: "87.92", unit: "", hint: "3.14 · 4 · 7 ≈ 87.92." }
    ]
  },
  {
    id: "pyramid",
    name: "Пирамида",
    formula: "V = (1/3) S · h",
    steps: [
      { text: "Рассмотрим призму с тем же основанием и высотой." },
      { text: "Эту призму можно разделить на три одинаковые пирамиды с тем же основанием и высотой." },
      { text: "Каждая пирамида занимает ровно треть объёма призмы." },
      { text: "Поэтому объём пирамиды равен одной трети произведения площади основания на высоту: V = (1/3) S · h." }
    ],
    tasks: [
      { type: "choice", question: "Почему коэффициент 1/3?", options: ["Три пирамиды складываются в призму", "Основание круглое", "Высота меньше", "Случайно"], correct: 0, hint: "Три пирамиды = одна призма." },
      { type: "input", question: "S = 15, h = 9. Объём пирамиды?", correct: "45", unit: "", hint: "(1/3)·15·9 = 45." }
    ]
  },
  {
    id: "cone",
    name: "Конус",
    formula: "V = (1/3) π r² · h",
    steps: [
      { text: "Конус связан с цилиндром так же, как пирамида с призмой." },
      { text: "Три конуса с тем же основанием и высотой полностью заполняют цилиндр." },
      { text: "Объём одного конуса составляет 1/3 объёма цилиндра." },
      { text: "Поэтому V = (1/3) π r² · h." }
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
    steps: [
      { text: "Рассмотрим цилиндр, описанный около шара: высота цилиндра равна диаметру шара = 2R." },
      { text: "Объём такого цилиндра равен π R² · 2R = 2π R³." },
      { text: "Объём шара составляет ровно 2/3 объёма описанного цилиндра." },
      { text: "Следовательно, V = (2/3) · 2π R³ = (4/3) π R³." }
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
    steps: [
      { text: "Два тела расположены между двумя параллельными плоскостями и имеют одинаковую высоту." },
      { text: "На каждой высоте площади сечений параллельными плоскостями равны." },
      { text: "Тогда объёмы этих тел равны (принцип Кавальери)." },
      { text: "Это позволяет обосновывать равенство объёмов без прямого вычисления интегралов." }
    ],
    tasks: [
      { type: "choice", question: "Принцип Кавальери утверждает…", options: ["Равные площади сечений на всех высотах → равные объёмы", "Объёмы всегда равны", "Только для шара", "Ничего"], correct: 0, hint: "Ключ — равные сечения на каждой высоте." }
    ]
  }
];

// ========== СОСТОЯНИЕ ==========
let currentFigure = 0;
let currentStep = 0;
let solvedTasks = new Set();
const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

// Предопределённые точки основания (детерминированные)
function generateBasePoints(type, count = 40) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    if (type === "rect") {
      pts.push({
        x: -0.85 + (i % 8) * 0.24,
        z: -0.55 + Math.floor(i / 8) * 0.28
      });
    } else {
      const a = (i / count) * Math.PI * 2;
      const r = 0.3 + (i % 5) * 0.12;
      pts.push({
        x: Math.cos(a) * r,
        z: Math.sin(a) * r * 0.85
      });
    }
  }
  return pts;
}

const prismPoints = generateBasePoints("rect", 36);
const cylinderPoints = generateBasePoints("circle", 48);

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
  renderProperties();
  renderTabs();
  renderSummary();
  switchFigure(0);

  document.getElementById("start-btn").onclick = () => document.getElementById("intro").scrollIntoView({behavior:"smooth"});
  document.getElementById("btn-prev").onclick = () => changeStep(-1);
  document.getElementById("btn-next").onclick = () => changeStep(1);
  document.getElementById("btn-replay").onclick = () => { currentStep = 0; updateStepUI(); draw(); };
  document.getElementById("btn-reset").onclick = resetProgress;
  updateProgress();
  draw();
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
  currentStep = 0;
  document.querySelectorAll(".tab").forEach((t, i) => t.classList.toggle("active", i === index));
  updateStepUI();
  renderTasks();
  draw();
}

function changeStep(delta) {
  const f = figures[currentFigure];
  currentStep = Math.max(0, Math.min(f.steps.length - 1, currentStep + delta));
  updateStepUI();
  draw();
}

function updateStepUI() {
  const f = figures[currentFigure];
  const step = f.steps[currentStep];
  document.getElementById("step-indicator").textContent = `Шаг ${currentStep + 1} из ${f.steps.length}`;
  document.getElementById("step-explanation").innerHTML = step.text;
  document.getElementById("formula-box").innerHTML = currentStep === f.steps.length - 1 ? f.formula : "";
  document.getElementById("btn-prev").disabled = currentStep === 0;
  document.getElementById("btn-next").disabled = currentStep === f.steps.length - 1;
}

function renderTasks() {
  const f = figures[currentFigure];
  const container = document.getElementById("tasks-container");
  container.innerHTML = `<h3 style="margin:1.2rem 0 1rem; text-align:center;">Задания</h3>` +
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
  if (val === task.correct || (!isNaN(num) && Math.abs(num - correctNum) < 0.15)) {
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

// ========== ПРОЕКЦИЯ И РИСОВАНИЕ ==========
const ISO = Math.PI / 6;
function project(x, y, z) {
  const px = (x - z) * Math.cos(ISO);
  const py = y + (x + z) * Math.sin(ISO) * 0.45;
  return { x: px, y: -py };
}

function draw() {
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w / 2, h * 0.62);

  const f = figures[currentFigure];
  drawFigureSteps(f.id, currentStep);

  ctx.restore();
}

function drawFigureSteps(id, step) {
  const scale = 110;
  const hMax = 2.0;

  if (id === "prism" || id === "cylinder") {
    const points = id === "prism" ? prismPoints : cylinderPoints;
    const isCircle = id === "cylinder";
    const totalPoints = points.length;
    let visibleCount = 1;
    let heightFactor = 0;

    if (step === 0) { visibleCount = 1; heightFactor = 0; }
    else if (step === 1) { visibleCount = 1; heightFactor = 1; }
    else if (step === 2) { visibleCount = Math.floor(totalPoints * 0.45); heightFactor = 1; }
    else { visibleCount = totalPoints; heightFactor = 1; }

    // Каркас
    if (id === "prism") drawPrismWire(scale, hMax * (step >= 1 ? 1 : 0.15));
    else drawCylinderWire(scale, hMax * (step >= 1 ? 1 : 0.15));

    // Точки
    for (let i = 0; i < visibleCount; i++) {
      const bp = points[i];
      const isSpecial = i === 0 && step <= 1;
      const py = hMax * heightFactor;
      const pBottom = project(bp.x * scale, 0, bp.z * scale);
      const pTop = project(bp.x * scale, py * scale, bp.z * scale);

      // Линия столбика
      if (heightFactor > 0) {
        ctx.strokeStyle = isSpecial ? "rgba(255,80,80,0.9)" : "rgba(213,248,135,0.55)";
        ctx.lineWidth = isSpecial ? 2.5 : 1.2;
        ctx.beginPath();
        ctx.moveTo(pBottom.x, pBottom.y);
        ctx.lineTo(pTop.x, pTop.y);
        ctx.stroke();
      }

      // Точка на основании
      ctx.fillStyle = isSpecial ? "#ff5555" : "#d5f887";
      ctx.beginPath();
      ctx.arc(pBottom.x, pBottom.y, isSpecial ? 6 : 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Точка наверху
      if (heightFactor > 0.5) {
        ctx.fillStyle = isSpecial ? "#ff8888" : "rgba(213,248,135,0.8)";
        ctx.beginPath();
        ctx.arc(pTop.x, pTop.y, isSpecial ? 5 : 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (id === "pyramid") {
    drawPyramidWire(scale, step >= 1 ? hMax : 0.3);
    if (step >= 1) {
      // Упрощённо показываем деление на 3
      ctx.fillStyle = "rgba(213,248,135,0.25)";
      ctx.font = "14px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("3 пирамиды = 1 призма", 0, -scale * 2.1);
    }
  } else if (id === "cone") {
    drawConeWire(scale, step >= 1 ? hMax : 0.3);
    if (step >= 2) {
      ctx.fillStyle = "rgba(213,248,135,0.3)";
      ctx.font = "14px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("3 конуса = 1 цилиндр", 0, -scale * 2.1);
    }
  } else if (id === "sphere") {
    drawSphereWithCylinder(scale, step);
  } else {
    // Cavalieri
    ctx.fillStyle = "#d5f887";
    ctx.font = "15px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("Равные сечения на каждой высоте", 0, -scale * 2);
    for (let y = 0; y < 7; y++) {
      const w = 50 + Math.sin(y * 0.8) * 15;
      const alpha = 0.35 + y * 0.08;
      ctx.fillStyle = `rgba(213,248,135,${alpha})`;
      ctx.fillRect(-140 - w/2, -y * 22, w, 16);
      ctx.fillRect(90 - w/2, -y * 22, w, 16);
    }
  }
}

function drawPrismWire(scale, h) {
  const pts = [
    [-1, 0, -0.7], [1, 0, -0.7], [1, 0, 0.7], [-1, 0, 0.7],
    [-1, h, -0.7], [1, h, -0.7], [1, h, 0.7], [-1, h, 0.7]
  ].map(p => project(p[0]*scale, p[1]*scale, p[2]*scale));
  ctx.strokeStyle = "rgba(213,248,135,0.55)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < 4; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath(); ctx.stroke();
  if (h > 0.2) {
    ctx.beginPath();
    ctx.moveTo(pts[4].x, pts[4].y);
    for (let i = 5; i < 8; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath(); ctx.stroke();
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(pts[i].x, pts[i].y);
      ctx.lineTo(pts[i+4].x, pts[i+4].y);
      ctx.stroke();
    }
  }
}

function drawCylinderWire(scale, h) {
  ctx.strokeStyle = "rgba(213,248,135,0.5)";
  ctx.lineWidth = 1.4;
  const drawEllipse = (y) => {
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.12) {
      const p = project(Math.cos(a)*scale*0.95, y, Math.sin(a)*scale*0.75);
      if (a < 0.1) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  };
  drawEllipse(0);
  if (h > 0.2) {
    drawEllipse(h * scale);
    for (let a of [0, Math.PI]) {
      const p1 = project(Math.cos(a)*scale*0.95, 0, Math.sin(a)*scale*0.75);
      const p2 = project(Math.cos(a)*scale*0.95, h*scale, Math.sin(a)*scale*0.75);
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
  ctx.strokeStyle = "rgba(213,248,135,0.6)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(base[0].x, base[0].y);
  base.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.closePath(); ctx.stroke();
  if (h > 0.3) base.forEach(p => {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(apex.x, apex.y);
    ctx.stroke();
  });
}

function drawConeWire(scale, h) {
  ctx.strokeStyle = "rgba(213,248,135,0.55)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  for (let a = 0; a <= Math.PI * 2; a += 0.12) {
    const p = project(Math.cos(a)*scale*0.95, 0, Math.sin(a)*scale*0.75);
    if (a === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
  if (h > 0.3) {
    const apex = project(0, h*scale, 0);
    for (let a of [0, Math.PI*0.7, Math.PI*1.4]) {
      const p = project(Math.cos(a)*scale*0.95, 0, Math.sin(a)*scale*0.75);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(apex.x, apex.y);
      ctx.stroke();
    }
  }
}

function drawSphereWithCylinder(scale, step) {
  // Описанный цилиндр
  if (step >= 0) {
    ctx.strokeStyle = "rgba(180,180,180,0.4)";
    ctx.lineWidth = 1.2;
    const R = scale * 0.85;
    const h = scale * 1.7;
    ctx.beginPath();
    ctx.ellipse(0, -h/2, R*0.9, R*0.35, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, h/2, R*0.9, R*0.35, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-R*0.9, -h/2); ctx.lineTo(-R*0.9, h/2);
    ctx.moveTo(R*0.9, -h/2); ctx.lineTo(R*0.9, h/2);
    ctx.stroke();
  }
  // Шар
  const r = scale * (0.4 + step * 0.15);
  ctx.strokeStyle = "#d5f887";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, r, r * 0.72, 0, 0, Math.PI * 2);
  ctx.stroke();
  if (step >= 2) {
    ctx.fillStyle = "rgba(213,248,135,0.15)";
    ctx.beginPath();
    ctx.ellipse(0, 0, r, r * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

document.addEventListener("DOMContentLoaded", init);
