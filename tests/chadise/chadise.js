// Preguntas originales CHASIDE + claves de intereses/aptitudes integradas con la interfaz nueva.

const preguntas = [
  "1. ¿Aceptaría trabajar escribiendo artículos en la sección económica de un diario?",
  "2. ¿Se ofrecería para organizar la despedida de soltero/a de uno/a de sus amigos/as?",
  "3. ¿Le gustaría dirigir un proyecto de urbanización en su ciudad?",
  "4. ¿A una frustración siempre opone un pensamiento positivo?",
  "5. ¿Se dedicaría a socorrer personas accidentadas o atacadas por asaltantes?",
  "6. ¿Cuando era niño/a, le interesaba saber cómo estaban construidos los juguetes?",
  "7. ¿Le interesan más los misterios de la Naturaleza que los secretos de la tecnología?",
  "8. ¿Escucha atentamente los problemas planteados por sus amigos/as?",
  "9. ¿Se ofrecería para explicar algo a alguien?",
  "10. ¿Es exigente y crítico con su trabajo?",
  "11. ¿Le atrae armar puzzles o rompecabezas?",
  "12. ¿Puede establecer la diferencia conceptual entre microeconomía y macroeconomía?",
  "13. ¿Usar un uniforme lo/a haría sentirse distinto/a e importante?",
  "14. ¿Participaría, como profesional, en un espectáculo de acrobacia aérea?",
  "15. ¿Organiza su dinero de manera que siempre alcance hasta volver a cobrar?",
  "16. ¿Convence fácilmente a otras personas sobre la validez de sus argumentos?",
  "17. ¿Se encuentra informado/a sobre los nuevos descubrimientos sobre la Teoría del Big-Bang?",
  "18. ¿Ante una situación de emergencia, actúa rápidamente?",
  "19. ¿Cuando tiene que resolver un problema matemático, es perseverante hasta encontrar la solución?",
  "20. ¿Si fuera convocado/a para planificar, organizar y/o dirigir un campo de deportes, aceptaría?",
  "21. ¿Es Ud. quien pone un toque de alegría en las fiestas familiares?",
  "22. ¿Cree que los detalles son tan importantes como el todo?",
  "23. ¿Se sentiría a gusto trabajando en un hospital?",
  "24. ¿Le gustaría participar en el mantenimiento del orden ante grandes conflictos sociales o catástrofes?",
  "25. ¿Pasaría varias horas leyendo un libro de su interés?",
  "26. ¿Planifica cuidadosamente sus trabajos antes de iniciarlos?",
  "27. ¿Mantiene una relación casi personal con su computadora?",
  "28. ¿Disfruta modelando en arcilla?",
  "29. ¿Ayuda habitualmente a los no videntes a cruzar la calle?",
  "30. ¿Considera importante que, desde la escuela primaria, se fomente la actitud crítica y la participación activa?",
  "31. ¿Acepta que las mujeres formen parte de las Fuerzas Armadas bajo las mismas normas que los hombres?",
  "32. ¿Le gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades usando un microscopio?",
  "33. ¿Participaría en una campaña de prevención de la enfermedad de Chagas?",
  "34. ¿Le interesan los temas relacionados con el pasado y con la evolución del hombre?",
  "35. ¿Se incluiría en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
  "36. ¿Dedica algunas horas de la semana a la realización de actividad física?",
  "37. ¿Le interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas o de peligro?",
  "38. ¿Se ofrecería para colaborar como voluntario/a en los gabinetes especiales de la NASA?",
  "39. ¿Le gusta más el trabajo manual que el intelectual?",
  "40. ¿Estaría dispuesto/a a renunciar a un momento placentero para prestar su servicio como profesional?",
  "41. ¿Participaría de un trabajo de investigación sobre la violencia social?",
  "42. ¿Le gustaría trabajar en un laboratorio mientras estudia?",
  "43. ¿Arriesgaría su vida para salvar la de un desconocido?",
  "44. ¿Le agradaría hacer un curso de primeros auxilios?",
  "45. ¿Toleraría empezar tantas veces como fuera necesario hasta obtener un logro deseado?",
  "46. ¿Distribuye los horarios adecuadamente para poder cumplir con lo planeado?",
  "47. ¿Haría un curso para aprender a fabricar las piezas de máquinas o aparatos?",
  "48. ¿Elegiría una profesión que lo/a obligara a estar alejado de su familia por algún tiempo?",
  "49. ¿Se radicaría en una zona agrícola-ganadera?",
  "50. ¿Cuando está trabajando en grupo, le entusiasma aportar ideas?",
  "51. ¿Le resulta fácil coordinar un grupo de trabajo?",
  "52. ¿Le resultan interesantes las Ciencias Biológicas?",
  "53. ¿Si una empresa importante solicita un profesional para Gerente de Comercialización, le gustaría desempeñar esta función?",
  "54. ¿Se incluiría en un proyecto nacional de desarrollo de la principal fuente de recursos de su provincia?",
  "55. ¿Siente interés por descubrir cuáles son las causas que determinan ciertos fenómenos aunque no altere su vida?",
  "56. ¿Descubrió algún filósofo o escritor que haya expresado las mismas ideas de usted con anticipación?",
  "57. ¿Desearía que le regalen algún instrumento musical?",
  "58. ¿Aceptaría colaborar con el cumplimiento de las normas sociales en lugares públicos?",
  "59. ¿Cree que sus ideas son importantes y hace lo posible para ponerlas en práctica?",
  "60. ¿Cuando en la casa se descompone un artefacto, usted se dispone prontamente a repararlo?",
  "61. ¿Formaría parte de un equipo de trabajo orientado a la preservación de la flora y de la fauna?",
  "62. ¿Tiene por costumbre leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
  "63. ¿Le parece importante y necesario preservar las raíces culturales de nuestro país?",
  "64. ¿Le gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
  "65. ¿Le gustaría realizar tareas de mantenimiento y conservación de un barco?",
  "66. ¿Cree que el país debe poseer la más alta tecnología armamentista a cualquier precio?",
  "67. ¿La libertad y la justicia son valores fundamentales en la vida?",
  "68. ¿Aceptaría hacer práctica rentada en una industria de productos alimenticios en el sector de control de calidad?",
  "69. ¿Considera que la salud pública debe ser prioritaria, gratuita y eficiente para todos?",
  "70. ¿Le interesaría investigar sobre una nueva vacuna?",
  "71. ¿Le gusta ocupar el rol de coordinador/a en un equipo de trabajo?",
  "72. ¿En una discusión entre amigos se ofrece como mediador/a?",
  "73. ¿Está de acuerdo con la formación de un cuerpo de soldados profesionales?",
  "74. ¿Lucharía por una causa justa hasta las últimas consecuencias?",
  "75. ¿Le gustaría investigar científicamente sobre cultivos agrícolas?",
  "76. ¿Haría un nuevo diseño de una prenda pasada de moda ante una reunión imprevista?",
  "77. ¿Visitaría un observatorio astronómico para conocerlo en acción?",
  "78. ¿Le gustaría dirigir el área de importación/exportación de una empresa?",
  "79. ¿Se siente inhibido/a al entrar en un lugar desconocido con gente que no conoce?",
  "80. ¿Le gratificaría trabajar con niños?",
  "81. ¿Haría un logotipo para un afiche de una campaña de prevención del SIDA?",
  "82. ¿Dirigiría un grupo de teatro?",
  "83. ¿Enviaría su currículum a una empresa automotriz que solicita un gerente para el área de producción?",
  "84. ¿Participaría de un grupo internacional de defensa de algo justo y benéfico para la humanidad?",
  "85. ¿Se costearía sus estudios trabajando?",
  "86. ¿Suele defender las llamadas causas perdidas?",
  "87. ¿Ante una emergencia participaría brindando su ayuda?",
  "88. ¿Sabe el significado de las siglas ADN y ARN?",
  "89. ¿Elegiría una carrera universitaria cuyo instrumento de trabajo fuera la utilización de un idioma extranjero?",
  "90. ¿Trabajar con objetos le resulta más gratificante que trabajar con personas?",
  "91. ¿Le gustaría ser el asesor contable de una empresa?",
  "92. ¿Ante un llamado solidario se ofrecería para cuidar a un enfermo?",
  "93. ¿Se siente atraído por la investigación de los misterios del universo como por ejemplo la capa de ozono?",
  "94. ¿El trabajo individual le resulta más rápido y efectivo que el trabajo grupal?",
  "95. ¿Dedicaría parte de su tiempo a ayudar a los habitantes de zonas carenciadas?",
  "96. ¿Cuando decora un ambiente tiene en cuenta la combinación de colores y estilo?",
  "97. ¿Le gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?",
  "98. ¿Sabe el significado de la sigla PBI?"
];

const clavesIntereses = {
  C: [98, 12, 64, 53, 85],
  H: [9, 34, 80, 25, 95],
  A: [21, 45, 96, 57, 28],
  S: [33, 92, 70, 8, 87],
  I: [75, 6, 19, 38, 60],
  D: [84, 31, 48, 73, 5],
  E: [77, 42, 88, 17, 93]
};

const clavesAptitudes = {
  C: [1, 78, 20, 71, 91, 15, 51, 2, 46],
  H: [67, 41, 74, 56, 89, 63, 30, 72, 86],
  A: [11, 50, 3, 81, 36, 22, 39, 76, 82],
  S: [62, 23, 44, 16, 52, 69, 40, 29, 4],
  I: [27, 83, 54, 47, 97, 26, 59, 90, 10],
  D: [65, 14, 37, 58, 24, 13, 66, 18, 43],
  E: [32, 68, 49, 35, 61, 94, 7, 79, 55]
};

function calcularResultados(respuestas) {
  const intereses = { C: 0, H: 0, A: 0, S: 0, I: 0, D: 0, E: 0 };
  const aptitudes = { C: 0, H: 0, A: 0, S: 0, I: 0, D: 0, E: 0 };

  for (const area in clavesIntereses) {
    clavesIntereses[area].forEach((num) => {
      if (respuestas[num] === "SI") intereses[area]++;
    });
  }

  for (const area in clavesAptitudes) {
    clavesAptitudes[area].forEach((num) => {
      if (respuestas[num] === "SI") aptitudes[area]++;
    });
  }

  return { intereses, aptitudes };
}

const AREAS_META = [
  { id: "C", name: "Ciencias", color: "var(--blue)", brief: "Gusto por comprender fenómenos, investigar, analizar y usar el método científico." },
  { id: "H", name: "Humanidades", color: "var(--purple)", brief: "Interés por lectura, escritura, idiomas, historia, filosofía y cultura." },
  { id: "A", name: "Artes", color: "var(--pink)", brief: "Preferencia por crear y expresarse a través de formas artísticas y creativas." },
  { id: "S", name: "Salud", color: "var(--green)", brief: "Interés por el cuidado, la prevención y el bienestar de las personas." },
  { id: "I", name: "Ingenierías", color: "var(--teal)", brief: "Gusto por la tecnología, el diseño de sistemas, la construcción y la lógica aplicada." },
  { id: "D", name: "Derecho", color: "var(--gold)", brief: "Interés por normas, justicia, debate, argumentación y organización social." },
  { id: "E", name: "Economía/Empresa", color: "var(--navy)", brief: "Preferencia por negocios, gestión, finanzas, emprendimiento y liderazgo." }
];

function initChasideUI() {
  const questionListEl = document.getElementById("questionList");
  const questionCounterEl = document.getElementById("questionCounter");
  const prevQuestionBtn = document.getElementById("prevQuestionBtn");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const resultCardsEl = document.getElementById("resultCards");
  const summaryBodyEl = document.getElementById("summaryBody");
  const top3PillsEl = document.getElementById("top3Pills");
  const interpretationsEl = document.getElementById("interpretations");
  const progressTextEl = document.getElementById("progressText");
  const progressBarEl = document.getElementById("progressBar");
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const jumpResultsBtn = document.getElementById("jumpResultsBtn");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (!questionListEl) return;

  const answers = Array(preguntas.length).fill(null);
  let currentIndex = 0;

  function isCurrentAnswered() {
    const num = currentIndex + 1;
    return !!document.querySelector(`input[name="Q_${num}"]:checked`);
  }

  function getCurrentValue() {
    const num = currentIndex + 1;
    return document.querySelector(`input[name="Q_${num}"]:checked`)?.value ?? null;
  }

  function renderSingleQuestion() {
    if (currentIndex >= preguntas.length) {
      questionListEl.innerHTML = '<p class="test-complete">Has respondido todas las preguntas. Haz clic en «Calcular resultados» para ver tu perfil.</p>';
      if (questionCounterEl) questionCounterEl.textContent = "";
      return;
    }
    const num = currentIndex + 1;
    const texto = preguntas[currentIndex];
    const group = `Q_${num}`;
    const saved = answers[currentIndex];
    questionListEl.innerHTML = `
      <article class="q-card" data-qid="${num}">
        <div class="q-row">
          <div class="q-text">${texto}</div>
          <div class="q-actions" role="radiogroup" aria-label="Respuesta">
            <label class="q-toggle is-yes" data-value="SI">
              <input type="radio" name="${group}" value="SI" ${saved === "SI" ? "checked" : ""} />
              <span>Sí</span>
            </label>
            <label class="q-toggle is-no" data-value="NO">
              <input type="radio" name="${group}" value="NO" ${saved === "NO" ? "checked" : ""} />
              <span>No</span>
            </label>
          </div>
        </div>
      </article>
    `;
    if (questionCounterEl) questionCounterEl.textContent = `Pregunta ${num} de ${preguntas.length}`;
  }

  function updateNavButtons() {
    if (prevQuestionBtn) {
      if (currentIndex <= 0) prevQuestionBtn.classList.add("test-nav--hidden");
      else prevQuestionBtn.classList.remove("test-nav--hidden");
    }
    if (nextQuestionBtn) {
      nextQuestionBtn.textContent = currentIndex >= preguntas.length ? "Calcular resultados" : "Siguiente pregunta";
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
  function fillTop1Card(datos) {
    const totales = {};
    AREAS_META.forEach((a) => { totales[a.id] = (datos.intereses[a.id] || 0) + (datos.aptitudes[a.id] || 0); });
    const ordenados = Object.entries(totales).map(([id, total]) => ({ id, total })).sort((a, b) => b.total - a.total);
    const top1 = ordenados[0];
    const top1El = document.getElementById("resultTop1Card");
    if (!top1 || !top1El) return;
    const area = AREAS_META.find((a) => a.id === top1.id);
    if (area) {
      top1El.innerHTML = `<div class="result-top1-card__label">Tu resultado principal</div><div class="result-top1-card__title">${area.id} · ${area.name}</div><p class="result-top1-card__desc">${area.brief}</p>`;
      top1El.style.display = "block";
    }
  }

  function goNextQuestion() {
    if (currentIndex >= preguntas.length) {
      const respuestas = getRespuestas();
      const faltantes = [];
      preguntas.forEach((_, idx) => { const num = idx + 1; if (!respuestas[num]) faltantes.push(num); });
      if (faltantes.length) {
        alert("Responde todas las preguntas para calcular correctamente.");
        return;
      }
      const datos = calcularResultados(respuestas);
      renderResultados(datos);
      fillTop1Card(datos);
      showResultsView();
      return;
    }
    if (!isCurrentAnswered()) {
      alert("Responde la pregunta actual para continuar a la siguiente.");
      return;
    }
    answers[currentIndex] = getCurrentValue();
    currentIndex++;
    renderSingleQuestion();
    updateProgress();
    updateNavButtons();
  }

  function goPrevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      renderSingleQuestion();
      updateNavButtons();
    }
  }

  function getRespuestas() {
    const respuestas = {};
    for (let i = 0; i < preguntas.length; i++) {
      const num = i + 1;
      respuestas[num] = i === currentIndex ? (getCurrentValue() ?? null) : answers[i];
    }
    return respuestas;
  }

  function updateProgress() {
    const total = preguntas.length;
    let completadas = 0;
    for (let i = 0; i < total; i++) {
      if (i === currentIndex) { if (isCurrentAnswered()) completadas++; }
      else if (answers[i] != null) completadas++;
    }
    const pct = Math.round((completadas / Math.max(total, 1)) * 100);
    if (progressTextEl) progressTextEl.textContent = `${pct}%`;
    if (progressBarEl) progressBarEl.style.width = `${pct}%`;
  }

  function marcarToggleSeleccionado(target) {
    const card = target.closest?.(".q-card");
    if (!card) return;
    const toggles = card.querySelectorAll(".q-toggle");
    toggles.forEach((t) => t.classList.remove("is-selected"));
    const label = target.closest?.(".q-toggle");
    if (label) label.classList.add("is-selected");
  }

  function renderResultados(datos) {
    const { intereses, aptitudes } = datos;
    const totales = {};
    AREAS_META.forEach((a) => {
      totales[a.id] = (intereses[a.id] || 0) + (aptitudes[a.id] || 0);
    });

    const max = Math.max(...Object.values(totales), 1);

    if (resultCardsEl) {
      resultCardsEl.innerHTML = AREAS_META.map((area) => {
        const total = totales[area.id];
        const pct = Math.round((total / max) * 100);
        return `
          <div class="result-card" style="--accent:${area.color}">
            <h3>${area.id} · ${area.name}</h3>
            <div class="result-value">${total}</div>
            <div class="bar"><span style="width:${pct}%"></span></div>
          </div>
        `;
      }).join("");
    }

    const ordenados = Object.entries(totales)
      .map(([id, total]) => ({ id, total }))
      .sort((a, b) => b.total - a.total);
    const top3 = ordenados.slice(0, 3);

    if (top3PillsEl) {
      top3PillsEl.innerHTML = top3
        .map((item, idx) => {
          const area = AREAS_META.find((a) => a.id === item.id);
          return `<span class="pill">${idx + 1}. ${area?.name ?? item.id} · ${
            item.total
          }</span>`;
        })
        .join("");
    }

    if (summaryBodyEl) {
      summaryBodyEl.innerHTML = AREAS_META.map((area) => {
        const total = totales[area.id];
        return `
          <tr>
            <td><strong>${area.id} · ${area.name}</strong></td>
            <td><strong>${total}</strong><br /><small>Int: ${
          intereses[area.id] ?? 0
        } · Apt: ${aptitudes[area.id] ?? 0}</small></td>
            <td>${area.brief}</td>
          </tr>
        `;
      }).join("");
    }

    const topSet = new Set(top3.map((t) => t.id));
    if (interpretationsEl) {
      interpretationsEl.innerHTML = AREAS_META.map((area) => `
        <div class="interp-card" style="${
          topSet.has(area.id)
            ? "box-shadow:0 0 0 2px rgba(143,116,247,.18) inset;"
            : ""
        }">
          <h3>${area.id} · ${area.name}${
        topSet.has(area.id) ? " · En tu top 3" : ""
      }</h3>
          <p>${area.brief}</p>
        </div>
      `).join("");
    }
  }

  function resetAll() {
    answers.fill(null);
    currentIndex = 0;
    document
      .querySelectorAll('input[type="radio"]')
      .forEach((el) => (el.checked = false));
    if (resultCardsEl) resultCardsEl.innerHTML = "";
    if (summaryBodyEl) summaryBodyEl.innerHTML = "";
    if (interpretationsEl) interpretationsEl.innerHTML = "";
    if (top3PillsEl)
      top3PillsEl.innerHTML =
        '<span class="pill">Completa el test para ver tu perfil.</span>';
    document
      .querySelectorAll(".q-toggle.is-selected")
      .forEach((el) => el.classList.remove("is-selected"));
    renderSingleQuestion();
    updateNavButtons();
    updateProgress();
    location.hash = "#test";
  }

  prevQuestionBtn?.addEventListener("click", goPrevQuestion);
  nextQuestionBtn?.addEventListener("click", goNextQuestion);
  calculateBtn?.addEventListener("click", () => {
    const respuestas = getRespuestas();
    const faltantes = [];
    preguntas.forEach((_, idx) => {
      const num = idx + 1;
      if (!respuestas[num]) faltantes.push(num);
    });
    if (faltantes.length) {
      alert(
        `Faltan respuestas en las preguntas: ${faltantes.join(
          ", "
        )}.\n\nResponde todas para calcular correctamente.`
      );
      return;
    }
    const datos = calcularResultados(respuestas);
    renderResultados(datos);
    fillTop1Card(datos);
    showResultsView();
  });

  resetBtn?.addEventListener("click", () => { resetAll(); showQuestionsView(); });
  document.getElementById("backToQuestionsBtn")?.addEventListener("click", () => { showQuestionsView(); document.getElementById("test")?.scrollIntoView({ behavior: "smooth" }); });
  jumpResultsBtn?.addEventListener(
    "click",
    () => (location.hash = "#resultados")
  );

  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="radio"]')) {
      marcarToggleSeleccionado(e.target);
      updateProgress();
    }
  });

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  renderSingleQuestion();
  updateNavButtons();
  updateProgress();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChasideUI);
} else {
  initChasideUI();
}