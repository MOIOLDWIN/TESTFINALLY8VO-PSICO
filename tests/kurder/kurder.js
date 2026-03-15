function initKurderTest() {
  const ACTIVITIES = [
    [1,"Ser un(a) artista."],[2,"Dirigir la crianza de ganado."],[3,"Conocer datos útiles para navegar en internet."],[4,"Dar charlas sobre química."],[5,"Trabajar en una agencia de publicidad."],[6,"Estudiar métodos de regadío."],[7,"Tomar clases de locución y expresión corporal."],[8,"Realizar experimentos."],[9,"Ilustrar cuentos infantiles."],[10,"Ser protagonista de una obra de teatro."],[11,"Animar un programa de televisión."],[12,"Crear el vestuario para una obra de teatro."],[13,"Ser guía de excursiones."],[14,"Participar en campaña de ayuda a niños discapacitados."],[15,"Aprender bailes folclóricos."],[16,"Ser escultor(a)."],[17,"Trabajar como soporte técnico computacional."],[18,"Asistir a una conferencia sobre los derechos de los trabajadores."],[19,"Enseñar cómo funciona un motor de avión."],[20,"Dirigir la clasificación de fruta según su calidad."],[21,"Participar en un Comité de Navidad recolectando juguetes para niños de escasos recursos."],[22,"Componer la música para un poema."],[23,"Crear afiches para una agencia de publicidad."],[24,"Saber armar y desarmar computadores."],[25,"Intervenir en un conflicto familiar ante tribunales de justicia."],[26,"Ser relacionador(a) público(a) de una empresa."],[27,"Dirigir una función teatral de aficionados."],[28,"Investigar sobre los nuevos usos de las matemáticas."],[29,"Aprender estadística."],[30,"Ser conocido(a) como un(a) buen(a) escritor(a)."],[31,"Ser programador(a) en computación."],[32,"Manejar aparatos y máquinas industriales como prensas, tornos, etc."],[33,"Efectuar análisis de muestras de sangre."],[34,"Investigar las causas de enfermedades mentales."],[35,"Pertenecer a una Academia Literaria."],[36,"Tener a cargo el equipo agrícola en su fundo."],[37,"Pertenecer a un grupo musical."],[38,"Ser dentista."],[39,"Ayudar a niños con dificultades de aprendizaje."],[40,"Dirigir investigaciones sobre televisión."],[41,"Realizar un estudio sobre el desarrollo económico en una empresa."],[42,"Pintar loza."],[43,"Ser gerente de ventas de una revista."],[44,"Manejar bases de datos."],[45,"Investigar los roles del hombre y de la mujer en algunas sociedades primitivas."],[46,"Inventar nuevas formas de poesía."],[47,"Trabajar en un laboratorio."],[48,"Entrevistar aspirantes a un empleo."],[49,"Ser químico(a)."],[50,"Leer artículos acerca de los avances tecnológicos en computación."],[51,"Seguir un curso de biología."],[52,"Escribir una obra de teatro."],[53,"Dar una conferencia sobre literatura universal."],[54,"Asistir a la ceremonia de entrega de los premios Oscar."],[55,"Ser el (la) director(a) de una película."],[56,"Ser experto(a) en cuidar árboles."],[57,"Mantener en buen estado y reparar calculadoras electrónicas."],[58,"Componer música."],[59,"Ayudar en un servicio de Asistencia Social."],[60,"Arreglar un motor."],[61,"Calcular el costo de producción de un artículo."],[62,"Recolectar dinero para obras sociales."],[63,"Solucionar conflictos interpersonales."],[64,"Escribir el guion para una película."],[65,"Diseñar equipos para excursionistas."],[66,"Confeccionar el presupuesto de materiales para una empresa."],[67,"Ser el rostro de un producto recién lanzado al mercado."],[68,"Dictar un curso sobre sistemas de rendimiento en las oficinas."],[69,"Analizar la calidad de la tierra para fines agrícolas."],[70,"Instalar redes internas en diversas empresas."],[71,"Asistir a una conferencia sobre nuevos métodos para aprovechar la madera."],[72,"Realizar el balance anual de una empresa."],[73,"Planificar campañas de publicidad."],[74,"Estudiar ballet."],[75,"Hacer análisis químicos de nuevos productos."],[76,"Cultivar verduras para el mercado."],[77,"Reparar fallas de artefactos electrónicos (planchas, jugueras, secadores de pelo, etc)."],[78,"Escribir para una revista de arte."],[79,"Arreglar música para una orquesta."],[80,"Inventar problemas matemáticos."],[81,"Recomendar sitios de veraneo."],[82,"Ser el (la) autor(a) de un libro."],[83,"Seguir un curso de literatura moderna."],[84,"Calcular las ganancias y pérdidas de un producto."],[85,"Diseñar joyas."],[86,"Participar en una campaña contra el alcoholismo."],[87,"Dirigir y supervisar a los empleados de una oficina."],[88,"Ser secretario(a) de un científico famoso."],[89,"Enseñar sobre los diferentes estilos literarios."],[90,"Cantar en un coro."]
  ];
  
  const AREAS = [
    {id:0,name:"Exterior",short:"Gusto por actividades al aire libre, campo, bosques, mar, cultivo de plantas y cuidado de animales."},
    {id:1,name:"Mecánica",short:"Interés por máquinas, herramientas, construcción, reparación y trabajo técnico-práctico."},
    {id:2,name:"Cálculo",short:"Preferencia por números, operaciones, cuentas, costos y razonamiento cuantitativo."},
    {id:3,name:"Científica",short:"Placer en investigar, descubrir causas, resolver problemas y comprender fenómenos."},
    {id:4,name:"Persuasiva",short:"Interés por tratar con personas, convencer, liderar, vender y defender puntos de vista."},
    {id:5,name:"Artística",short:"Gusto por crear con materiales, colores, formas, diseño y expresión visual o manual."},
    {id:6,name:"Literaria",short:"Interés por leer, escribir y expresar ideas en forma oral o escrita."},
    {id:7,name:"Musical",short:"Gusto por tocar instrumentos, cantar, bailar, componer y disfrutar de la música."},
    {id:8,name:"Servicio Social",short:"Interés por ayudar a otras personas, especialmente necesitados, enfermos, niños y ancianos."},
    {id:9,name:"Oficina",short:"Preferencia por trabajo de escritorio, organización, exactitud, precisión y tareas administrativas."}
  ];
  
  const AREA_ITEMS = {
    0: [2,6,13,20,56,69,71,76,81],
    1: [3,19,24,32,36,57,60,65,77],
    2: [17,28,29,31,44,50,61,70,80],
    3: [4,8,33,38,47,49,51,75,88],
    4: [5,11,18,23,40,45,48,54,67],
    5: [7,9,12,16,27,42,55,78,85],
    6: [10,30,35,52,53,64,82,83,89],
    7: [1,15,22,37,46,58,74,79,90],
    8: [14,21,25,34,39,59,62,63,86],
    9: [26,41,43,66,68,72,73,84,87]
  };
  
  const QUESTIONS = [];
  for (let i = 0; i < ACTIVITIES.length; i += 2) {
    QUESTIONS.push({ dyad: (i / 2) + 1, left: ACTIVITIES[i], right: ACTIVITIES[i + 1] });
  }
  
  const questionsContainer = document.getElementById("questionsContainer");
  const dyadCounterEl = document.getElementById("dyadCounter");
  const prevDyadBtn = document.getElementById("prevDyadBtn");
  const nextDyadBtn = document.getElementById("nextDyadBtn");
  const resultCardsEl = document.getElementById("resultCards");
  const summaryBodyEl = document.getElementById("summaryBody");
  const selectedGridEl = document.getElementById("selectedGrid");
  const top3PillsEl = document.getElementById("top3Pills");
  const interpretationsEl = document.getElementById("interpretations");
  const progressTextEl = document.getElementById("progressText");
  const progressBarEl = document.getElementById("progressBar");
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (!questionsContainer) return;

  const answers = Array(QUESTIONS.length).fill(null);
  let currentIndex = 0;

  function isCurrentAnswered() {
    const item = QUESTIONS[currentIndex];
    return !!document.querySelector(`input[name="dyad_${item.dyad}"]:checked`);
  }

  function getCurrentValue() {
    const item = QUESTIONS[currentIndex];
    const selected = document.querySelector(`input[name="dyad_${item.dyad}"]:checked`);
    return selected ? Number(selected.value) : null;
  }

  function renderSingleDyad() {
    if (currentIndex >= QUESTIONS.length) {
      questionsContainer.innerHTML = '<p class="test-complete">Has respondido todas las díadas. Haz clic en «Calcular resultados» para ver tu perfil.</p>';
      if (dyadCounterEl) dyadCounterEl.textContent = "";
      return;
    }
    const item = QUESTIONS[currentIndex];
    const saved = answers[currentIndex];
    questionsContainer.innerHTML = `
      <article class="dyad-card">
        <div class="dyad-head">
          <span class="dyad-number">Díada ${item.dyad}</span>
          <span class="dyad-hint">Selecciona una sola actividad</span>
        </div>
        <div class="dyad-options">
          <label class="dyad-option">
            <input type="radio" name="dyad_${item.dyad}" value="${item.left[0]}" ${saved === item.left[0] ? "checked" : ""}>
            <span><strong>${item.left[0]}.</strong> ${item.left[1]}</span>
          </label>
          <label class="dyad-option">
            <input type="radio" name="dyad_${item.dyad}" value="${item.right[0]}" ${saved === item.right[0] ? "checked" : ""}>
            <span><strong>${item.right[0]}.</strong> ${item.right[1]}</span>
          </label>
        </div>
      </article>
    `;
    if (dyadCounterEl) dyadCounterEl.textContent = `Díada ${currentIndex + 1} de ${QUESTIONS.length}`;
  }

  function updateNavButtons() {
    if (prevDyadBtn) {
      if (currentIndex <= 0) {
        prevDyadBtn.classList.add("test-nav--hidden");
      } else {
        prevDyadBtn.classList.remove("test-nav--hidden");
      }
    }
    if (nextDyadBtn) {
      nextDyadBtn.textContent = currentIndex >= QUESTIONS.length ? "Calcular resultados" : "Siguiente pregunta";
    }
  }

  function showResultsView() {
    const qs = document.getElementById("questionsSection");
    const rs = document.getElementById("resultadosSection");
    if (qs) qs.classList.add("is-hidden");
    if (rs) { rs.classList.remove("is-hidden"); rs.setAttribute("aria-hidden", "false"); rs.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }
  function showQuestionsView() {
    const qs = document.getElementById("questionsSection");
    const rs = document.getElementById("resultadosSection");
    if (qs) qs.classList.remove("is-hidden");
    if (rs) { rs.classList.add("is-hidden"); rs.setAttribute("aria-hidden", "true"); }
    const top1El = document.getElementById("resultTop1Card");
    if (top1El) { top1El.style.display = "none"; top1El.innerHTML = ""; }
  }

  function fillTop1Card(result) {
    const sorted = Object.entries(result.scores).map(([id, score]) => ({ id: Number(id), score })).sort((a, b) => b.score - a.score);
    const top1 = sorted[0];
    const top1El = document.getElementById("resultTop1Card");
    if (!top1 || !top1El) return;
    const area = AREAS.find(a => a.id === top1.id);
    if (area) {
      top1El.innerHTML = `<div class="result-top1-card__label">Tu resultado principal</div><div class="result-top1-card__title">${area.name}</div><p class="result-top1-card__desc">${area.short}</p>`;
      top1El.style.display = "block";
    }
  }

  function goNextDyad() {
    if (currentIndex >= QUESTIONS.length) {
      const result = computeResults();
      if (result.missingDyads.length) {
        alert("Debes responder las 45 díadas para calcular correctamente tus resultados.");
        return;
      }
      renderResults(result);
      fillTop1Card(result);
      showResultsView();
      return;
    }
    if (!isCurrentAnswered()) {
      alert("Selecciona una actividad en la díada actual para continuar.");
      return;
    }
    answers[currentIndex] = getCurrentValue();
    currentIndex++;
    renderSingleDyad();
    updateProgress();
    updateNavButtons();
  }

  function goPrevDyad() {
    if (currentIndex > 0) {
      currentIndex--;
      renderSingleDyad();
      updateNavButtons();
    }
  }
  
  function getSelectedItems() {
    const out = [...answers];
    if (currentIndex < QUESTIONS.length && isCurrentAnswered()) {
      out[currentIndex] = getCurrentValue();
    }
    return out;
  }
  
  function updateProgress() {
    const total = QUESTIONS.length;
    let completadas = 0;
    for (let i = 0; i < total; i++) {
      if (i === currentIndex) { if (isCurrentAnswered()) completadas++; }
      else if (answers[i] != null) completadas++;
    }
    const pct = Math.round((completadas / Math.max(total, 1)) * 100);
    if (progressTextEl) progressTextEl.textContent = `${pct}%`;
    if (progressBarEl) progressBarEl.style.width = `${pct}%`;
  }
  
  function computeResults() {
    const selectedItems = getSelectedItems();
    const missingDyads = [];
    selectedItems.forEach((value, index) => { if (!value) missingDyads.push(index + 1); });
  
    const scores = {};
    AREAS.forEach(area => { scores[area.id] = 0; });
  
    selectedItems.filter(Boolean).forEach(itemNumber => {
      for (const [areaId, numbers] of Object.entries(AREA_ITEMS)) {
        if (numbers.includes(itemNumber)) {
          scores[areaId] += 1;
          break;
        }
      }
    });
  
    return { scores, selectedItems, missingDyads };
  }
  
  function renderResults(result) {
    const maxScore = Math.max(...Object.values(result.scores), 1);
  
    if (resultCardsEl) {
      resultCardsEl.innerHTML = AREAS.map(area => {
      const score = result.scores[area.id];
      const pct = Math.round((score / maxScore) * 100);
      return `
        <div class="result-card">
          <h3>${area.name}</h3>
          <div class="result-value">${score}</div>
          <div class="bar"><span style="width:${pct}%"></span></div>
        </div>
      `;
      }).join("");
    }
  
    if (summaryBodyEl) {
      summaryBodyEl.innerHTML = AREAS.map(area => `
      <tr>
        <td><strong>${area.name}</strong></td>
        <td>${result.scores[area.id]}</td>
        <td>${area.short}</td>
      </tr>
      `).join("");
    }
  
    const selectedFiltered = result.selectedItems.filter(Boolean);
    if (selectedGridEl) {
      selectedGridEl.innerHTML = selectedFiltered.map(itemNumber => {
      const activity = ACTIVITIES.find(a => a[0] === itemNumber);
      const area = AREAS.find(area => AREA_ITEMS[area.id].includes(itemNumber));
      return `
        <div class="selected-pill">
          <strong>${itemNumber}.</strong> ${activity ? activity[1] : ""}
          <div style="margin-top:8px;"><span class="area-badge">${area ? area.name : "Sin área"}</span></div>
        </div>
      `;
      }).join("");
    }
  
    const sorted = Object.entries(result.scores)
      .map(([id, score]) => ({ id: Number(id), score }))
      .sort((a, b) => b.score - a.score);
    const top3 = sorted.slice(0, 3);
  
    if (top3PillsEl) {
      top3PillsEl.innerHTML = top3.map((item, index) => {
      const area = AREAS.find(a => a.id === item.id);
      return `<span class="pill">${index + 1}. ${area.name} · ${item.score}</span>`;
      }).join("");
    }
  
    const topSet = new Set(top3.map(item => item.id));
    if (interpretationsEl) {
      interpretationsEl.innerHTML = AREAS.map(area => `
      <div class="diagnostic-card" style="${topSet.has(area.id) ? 'box-shadow:0 0 0 2px rgba(143,116,247,.18) inset;' : ''}">
        <h3>${area.name}${topSet.has(area.id) ? ' · Área predominante' : ''}</h3>
        <p>${area.short}</p>
      </div>
      `).join("");
    }
  }
  
  function resetAll() {
    answers.fill(null);
    currentIndex = 0;
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    if (resultCardsEl) resultCardsEl.innerHTML = "";
    if (summaryBodyEl) summaryBodyEl.innerHTML = "";
    if (selectedGridEl) selectedGridEl.innerHTML = "";
    if (interpretationsEl) interpretationsEl.innerHTML = "";
    if (top3PillsEl) top3PillsEl.innerHTML = '<span class="pill">Completa el test para ver tus áreas predominantes.</span>';
    renderSingleDyad();
    updateNavButtons();
    updateProgress();
    location.hash = "#test";
  }
  
  function downloadResults() {
    const result = computeResults();
    const payload = {
      test: "Kuder",
      generatedAt: new Date().toISOString(),
      selectedItems: result.selectedItems.filter(Boolean),
      scores: result.scores
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resultado_kuder_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  
  calculateBtn?.addEventListener("click", () => {
    const result = computeResults();
    if (result.missingDyads.length) {
      alert(`Faltan respuestas en las díadas: ${result.missingDyads.join(", ")}.\n\nDebes responder las 45 díadas para calcular correctamente tus resultados.`);
      return;
    }
    renderResults(result);
    fillTop1Card(result);
    showResultsView();
  });

  document.getElementById("backToQuestionsBtn")?.addEventListener("click", () => { showQuestionsView(); document.getElementById("test")?.scrollIntoView({ behavior: "smooth" }); });
  prevDyadBtn?.addEventListener("click", goPrevDyad);
  nextDyadBtn?.addEventListener("click", goNextDyad);
  resetBtn?.addEventListener("click", () => { resetAll(); showQuestionsView(); });
  document.addEventListener("change", e => { if (e.target.matches('input[type="radio"]')) updateProgress(); });
  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  renderSingleDyad();
  updateNavButtons();
  updateProgress();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initKurderTest);
} else {
  initKurderTest();
}