// ========== ДАННЫЕ КОНТЕНТА ==========
const properties = [
  { icon: "➕", title: "Аддитивность", text: "Объём тела равен сумме объёмов его неперекрывающихся частей." },
  { icon: "🔄", title: "Инвариантность", text: "Объём не меняется при перемещении тела в пространстве (движение)." },
  { icon: "📈", title: "Монотонность", text: "Если одно тело содержится в другом, то его объём не больше." },
  { icon: "📏", title: "Единица измерения", text: "Объём единичного куба равен 1." }
];

const figures = [
  {
    id: "prism",
    name: "Призма",
    formula: "V = S · h",
    theory: [
      { step: "Шаг 1", text: "Возьмём основание призмы с площадью S." },
      { step: "Наблюдение", text: "Из каждой точки основания «вытягиваем» отрезок высоты h." },
      { step: "Вывод", text: "Получаем тело, состоящее из «столбиков» высотой h. Объём каждого столбика = площадь основания × высота." },
      { step: "Формула", text: "Следовательно, объём призмы V = S · h." }
    ],
    tasks: [
      {
        type: "choice",
        question: "Объём прямой призмы равен...",
        options: ["S · h", "1/3 S · h", "π r² h", "4/3 π R³"],
        correct: 0,
        hint: "Вспомни: высота «вытягивается» из каждой точки основания полностью."
      },
      {
        type: "input",
        question: "Площадь основания призмы 12 см², высота 5 см. Объём?",
        correct: "60",
        unit: "см³",
        hint: "Просто умножь площадь на высоту."
      },
      {
        type: "match",
        question: "Сопоставь: что на что умножается в формуле призмы?",
        items: ["Площадь основания", "Высота", "Объём"],
        targets: ["S", "h", "V = S·h"],
        correct: [0, 1, 2],
        hint: "Объём — это произведение площади и высоты."
      }
    ]
  },
  {
    id: "pyramid",
    name: "Пирамида",
    formula: "V = (1/3) S · h",
    theory: [
      { step: "Шаг 1", text: "Рассмотрим призму с основанием S и высотой h." },
      { step: "Наблюдение", text: "Эту призму можно разделить на три одинаковые пирамиды с тем же основанием и высотой." },
      { step: "Вывод", text: "Объём каждой пирамиды составляет 1/3 объёма призмы." },
      { step: "Формула", text: "V = (1/3) · S · h." }
    ],
    tasks: [
      {
        type: "choice",
        question: "Почему у пирамиды коэффициент 1/3?",
        options: ["Потому что три пирамиды складываются в призму", "Потому что основание круглое", "Потому что высота меньше", "Случайно"],
        correct: 0,
        hint: "Классический способ вывода: три пирамиды = одна призма."
      },
      {
        type: "input",
        question: "S = 15, h = 9. Объём пирамиды?",
        correct: "45",
        unit: "ед.³",
        hint: "Не забудь разделить на 3: (1/3)·15·9 = 45."
      },
      {
        type: "formula",
        question: "Собери формулу объёма пирамиды",
        parts: ["1/3", "S", "·", "h"],
        correct: "1/3 S · h",
        hint: "Коэффициент 1/3, затем площадь и высота."
      }
    ]
  },
  {
    id: "cylinder",
    name: "Цилиндр",
    formula: "V = π r² · h",
    theory: [
      { step: "Шаг 1", text: "Основание цилиндра — круг площадью S = π r²." },
      { step: "Наблюдение", text: "Как и в призме, из каждой точки круга «вытягивается» высота h." },
      { step: "Вывод", text: "Цилиндр — это «призма» с круглым основанием." },
      { step: "Формула", text: "V = S · h = π r² · h." }
    ],
    tasks: [
      {
        type: "choice",
        question: "Цилиндр по объёму аналогичен...",
        options: ["Призме", "Пирамиде", "Конусу", "Шару"],
        correct: 0,
        hint: "Та же идея: площадь основания × высота."
      },
      {
        type: "input",
        question: "r = 2, h = 7. Объём цилиндра (π≈3.14)?",
        correct: "87.92",
        unit: "",
        hint: "π·4·7 ≈ 3.14·28 = 87.92."
      }
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
      {
        type: "choice",
        question: "Объём конуса составляет от объёма цилиндра...",
        options: ["1/3", "1/2", "2/3", "1"],
        correct: 0,
        hint: "Как пирамида к призме."
      },
      {
        type: "input",
        question: "Цилиндр имеет объём 90. Объём вписанного конуса?",
        correct: "30",
        unit: "",
        hint: "Просто раздели на 3."
      }
    ]
  },
  {
    id: "sphere",
    name: "Шар",
    formula: "V = (4/3) π R³",
    theory: [
      { step: "Шаг 1", text: "Рассмотрим цилиндр, описанный около шара (высота = диаметр = 2R)." },
      { step: "Наблюдение", text: "Объём шара составляет 2/3 объёма этого цилиндра." },
      { step: "Вывод", text: "V_цилиндра = π R² · 2R = 2π R³, значит V_шара = (2/3)·2π R³ = (4/3) π R³." },
      { step: "Формула", text: "V = (4/3) π R³." }
    ],
    tasks: [
      {
        type: "choice",
        question: "Объём шара относительно описанного цилиндра...",
        options: ["2/3", "1/3", "1/2", "4/3"],
        correct: 0,
        hint: "Классическое соотношение Архимеда: 2/3."
      },
      {
        type: "input",
        question: "R = 3. Объём шара (π≈3.14)?",
        correct: "113.04",
        unit: "",
        hint: "(4/3)·3.14·27 ≈ 113.04."
      }
    ]
  },
  {
    id: "cavalieri",
    name: "Принцип Кавальери",
    formula: "Равные сечения → равные объёмы",
    theory: [
      { step: "Шаг 1", text: "Два тела имеют равные высоты." },
      { step: "Наблюдение", text: "На каждой высоте площади сечений параллельными плоскостями равны." },
      { step: "Вывод", text: "Тогда объёмы тел равны (принцип Кавальери)." },
      { step: "Применение", text: "Это позволяет обосновывать равенство объёмов без прямого вычисления." }
    ],
    tasks: [
      {
        type: "choice",
        question: "Принцип Кавальери утверждает, что...",
        options: ["Равные площади сечений на всех высотах → равные объёмы", "Объёмы всегда равны", "Только для шара", "Ничего"],
        correct: 0,
        hint: "Ключ — равные сечения на каждой высоте."
      }
    ]
  }
];

// ========== СОСТОЯНИЕ ==========
let currentFigure = 0;
let animProgress = 0;
let animRunning = true;
let showLayers = false;
let animStep = 0;
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
  document.getElementById("btn-pause").onclick = () => { animRunning = !animRunning; };
  document.getElementById("btn-replay").onclick = () => { animProgress = 0; animStep = 0; animRunning = true; };
  document.getElementById("btn-layers").onclick = (e) => { showLayers = !showLayers; e.target.classList.toggle("active", showLayers); };
  document.getElementById("btn-next").onclick = () => { animStep = Math.min(animStep + 1, 4); animProgress = 0; };
  document.getElementById("btn-reset").onclick = resetProgress;
  updateProgress();
}

function renderProperties() {
  const container = document.getElementById("property-cards");
  container.innerHTML = properties.map(p => `
    <div class="card">
      <div class="icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `).join("");
}

function renderTabs() {
  const container = document.getElementById("figure-tabs");
  container.innerHTML = figures.map((f, i) => `
    <button class="tab ${i===0?'active':''}" onclick="switchFigure(${i})">${f.name}</button>
  `).join("");
}

function switchFigure(index) {
  currentFigure = index;
  document.querySelectorAll(".tab").forEach((t, i) => t.classList.toggle("active", i === index));
  animProgress = 0;
  animStep = 0;
  renderTheory();
  renderTasks();
}

function renderTheory() {
  const f = figures[currentFigure];
  document.getElementById("theory-container").innerHTML = `
    <h3>${f.name}</h3>
    ${f.theory.map(t => `<div class="theory-step"><strong>${t.step}:</strong> ${t.text}</div>`).join("")}
    <div class="formula">${f.formula}</div>
  `;
}

function renderTasks() {
  const f = figures[currentFigure];
  const container = document.getElementById("tasks-container");
  container.innerHTML = "<h3 style='margin-top:1.5rem;'>Задания</h3>" + 
    f.tasks.map((task, ti) => renderTask(task, currentFigure, ti)).join("");
  attachTaskHandlers();
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
    html += `<input type="text" id="input-${id}" placeholder="Ответ" ${solved?'disabled':''}> <span>${task.unit||''}</span>
             <button onclick="checkInput(${fi},${ti})" ${solved?'disabled':''}>Проверить</button>`;
  } else if (task.type === "formula") {
    html += `<div>Перетащи части: <div class="drag-area" id="drag-${id}">` +
      task.parts.map(p => `<span class="drag-item" draggable="true">${p}</span>`).join("") +
      `</div> <div class="drop-zone" id="drop-${id}" ondrop="drop(event)" ondragover="allowDrop(event)">Собери здесь</div></div>
      <button onclick="checkFormula(${fi},${ti})">Проверить</button>`;
  } else if (task.type === "match") {
    html += `<p>Сопоставь элементы (упрощённо — выбери порядок):</p>
             <div class="task-options">` + task.items.map((item, ii) => 
      `<label><input type="checkbox" value="${ii}"> ${item}</label>`
    ).join("") + `</div><button onclick="checkMatch(${fi},${ti})">Проверить</button>`;
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
    fb.innerHTML = `<span class="feedback correct">Верно! ${task.hint || ''}</span>`;
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
  if (val === task.correct || Math.abs(parseFloat(val) - parseFloat(task.correct)) < 0.1) {
    el.classList.add("correct");
    fb.innerHTML = `<span class="feedback correct">Верно!</span>`;
    solvedTasks.add(id);
  } else {
    el.classList.add("incorrect");
    fb.innerHTML = `<span class="feedback incorrect">Неверно. ${task.hint}</span>`;
  }
  updateProgress();
}

function checkFormula(fi, ti) {
  // Упрощённая проверка
  const id = `task-${fi}-${ti}`;
  const drop = document.getElementById(`drop-${id}`);
  const fb = document.getElementById(`fb-${id}`);
  const el = document.getElementById(id);
  if (drop.textContent.includes("1/3") && drop.textContent.includes("S")) {
    el.classList.add("correct");
    fb.innerHTML = `<span class="feedback correct">Отлично! Формула собрана.</span>`;
    solvedTasks.add(id);
  } else {
    fb.innerHTML = `<span class="feedback incorrect">Попробуй ещё раз. ${figures[fi].tasks[ti].hint}</span>`;
  }
  updateProgress();
}

function checkMatch(fi, ti) {
  const id = `task-${fi}-${ti}`;
  const el = document.getElementById(id);
  const fb = document.getElementById(`fb-${id}`);
  el.classList.add("correct");
  fb.innerHTML = `<span class="feedback correct">Принято! Объём = площадь основания × высота.</span>`;
  solvedTasks.add(id);
  updateProgress();
}

function allowDrop(ev) { ev.preventDefault(); }
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.querySelector(`[data-item="${data}"]`) || document.createTextNode(data));
}

function attachTaskHandlers() {
  document.querySelectorAll(".drag-item").forEach((item, i) => {
    item.setAttribute("data-item", i);
    item.ondragstart = (e) => e.dataTransfer.setData("text", item.textContent);
  });
}

function updateProgress() {
  const total = figures.reduce((s, f) => s + f.tasks.length, 0);
  const done = solvedTasks.size;
  document.getElementById("progress-fill").style.width = (done / total * 100) + "%";
  document.getElementById("progress-text").textContent = `Прогресс: ${done} из ${total} заданий решено верно`;
}

function resetProgress() {
  solvedTasks.clear();
  switchFigure(currentFigure);
  updateProgress();
}

function renderSummary() {
  const container = document.getElementById("summary-table");
  container.innerHTML = `
    <table>
      <thead><tr><th>Фигура</th><th>Формула</th></tr></thead>
      <tbody>
        ${figures.map(f => `<tr><td>${f.name}</td><td><strong>${f.formula}</strong></td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

// ========== АНИМАЦИИ ==========
function animationLoop() {
  if (animRunning) {
    animProgress = Math.min(animProgress + 0.005, 1);
  }
  drawAnimation();
  requestAnimationFrame(animationLoop);
}

function drawAnimation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const f = figures[currentFigure];
  ctx.fillStyle = "#1a9bc7";
  ctx.font = "16px system-ui";
  ctx.fillText(f.name + " — вывод формулы", 20, 30);

  // Простые наглядные рисунки в зависимости от фигуры
  if (f.id === "prism") {
    drawPrism();
  } else if (f.id === "pyramid") {
    drawPyramid();
  } else if (f.id === "cylinder") {
    drawCylinder();
  } else if (f.id === "cone") {
    drawCone();
  } else if (f.id === "sphere") {
    drawSphere();
  } else {
    drawCavalieri();
  }
}

function drawPrism() {
  const h = 200 * animProgress;
  ctx.strokeStyle = "#1a9bc7";
  ctx.lineWidth = 2;
  // Основание
  ctx.beginPath();
  ctx.rect(150, 250, 200, 40);
  ctx.stroke();
  // Высота
  if (animProgress > 0.2) {
    ctx.beginPath();
    ctx.moveTo(150, 250); ctx.lineTo(150, 250 - h);
    ctx.moveTo(350, 250); ctx.lineTo(350, 250 - h);
    ctx.stroke();
  }
  if (showLayers && animProgress > 0.5) {
    for (let i = 0; i < 5; i++) {
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "#1a9bc7";
      ctx.fillRect(155, 250 - i*30, 190, 25);
    }
    ctx.globalAlpha = 1;
  }
  ctx.fillText("Основание S, высота h → V = S·h", 120, 320);
}

function drawPyramid() {
  ctx.strokeStyle = "#1a9bc7";
  // Призма
  ctx.strokeRect(100, 200, 300, 100);
  // Три пирамиды (упрощённо)
  if (animProgress > 0.3) {
    ctx.beginPath();
    ctx.moveTo(100, 200); ctx.lineTo(200, 100); ctx.lineTo(200, 300); ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 100); ctx.lineTo(300, 200); ctx.lineTo(200, 300); ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 200); ctx.lineTo(400, 200); ctx.lineTo(300, 300); ctx.closePath();
    ctx.stroke();
  }
  ctx.fillText("3 пирамиды = 1 призма → V = 1/3 S·h", 100, 330);
}

function drawCylinder() {
  const h = 180 * animProgress;
  ctx.strokeStyle = "#1a9bc7";
  ctx.beginPath();
  ctx.ellipse(300, 250, 80, 20, 0, 0, Math.PI*2);
  ctx.stroke();
  if (animProgress > 0.2) {
    ctx.beginPath();
    ctx.moveTo(220, 250); ctx.lineTo(220, 250 - h);
    ctx.moveTo(380, 250); ctx.lineTo(380, 250 - h);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(300, 250 - h, 80, 20, 0, 0, Math.PI*2);
    ctx.stroke();
  }
  ctx.fillText("Круглое основание × высота → V = πr²h", 140, 320);
}

function drawCone() {
  ctx.strokeStyle = "#1a9bc7";
  // Цилиндр
  ctx.strokeRect(200, 150, 200, 150);
  // Конус
  if (animProgress > 0.4) {
    ctx.beginPath();
    ctx.moveTo(200, 300); ctx.lineTo(300, 150); ctx.lineTo(400, 300); ctx.closePath();
    ctx.stroke();
  }
  ctx.fillText("Конус = 1/3 цилиндра", 180, 330);
}

function drawSphere() {
  ctx.strokeStyle = "#1a9bc7";
  // Цилиндр
  ctx.beginPath();
  ctx.rect(220, 120, 160, 180);
  ctx.stroke();
  // Шар
  ctx.beginPath();
  ctx.arc(300, 210, 80 * animProgress, 0, Math.PI*2);
  ctx.stroke();
  ctx.fillText("Шар = 2/3 описанного цилиндра", 140, 330);
}

function drawCavalieri() {
  ctx.strokeStyle = "#1a9bc7";
  // Две фигуры с равными сечениями
  for (let y = 100; y < 280; y += 20) {
    const w = 60 + Math.sin(y/30) * 20;
    ctx.strokeRect(150, y, w, 15);
    ctx.strokeRect(350, y, w, 15);
  }
  ctx.fillText("Равные сечения → равные объёмы", 150, 320);
}

// Запуск
document.addEventListener("DOMContentLoaded", init);
