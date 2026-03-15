// =============================
// TEST BIG FIVE · UI NUEVA
// =============================

const preguntas = [
  "Soy el alma de la fiesta.",
  "Me solidarizo con los sentimientos de los demás.",
  "Hago las tareas de inmediato.",
  "Tengo frecuentes cambios de humor.",
  "Tengo la imaginación vívida.",
  "No hablo demasiado.",
  "No me intereso en los problemas de los demás.",
  "Con frecuencia olvido colocar las cosas de vuelta a donde pertenecen.",
  "La mayor parte del tiempo estoy relajado(a).",
  "No estoy interesado(a) en las ideas abstractas.",
  "Hablo con muchas personas distintas en las fiestas.",
  "Siento las emociones de los demás.",
  "Me gusta el orden.",
  "Me enojo con facilidad.",
  "Tengo dificultad para entender las ideas abstractas.",
  "Me mantengo en segundo plano.",
  "En realidad no estoy interesado(a) en los demás.",
  "Hago un desorden con las cosas.",
  "Rara vez me siento triste.",
  "No tengo una buena imaginación.",
  "No me importa ser el centro de atención.",
  "Hago que las personas se sientan cómodas.",
  "Presto atención a los detalles.",
  "Con facilidad me molesto.",
  "Estoy lleno(a) de ideas."
];

// preguntas con puntuación invertida (índices 1-based)
const invertidas = [6, 7, 8, 9, 10, 15, 16, 19, 20, 24];

// escala de respuesta para construir la UI
const ESCALA_META = [
  { value: 1, label: "Muy en desacuerdo" },
  { value: 2, label: "En desacuerdo" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "De acuerdo" },
  { value: 5, label: "Muy de acuerdo" }
];

// Metadatos de factores para resultados
const FACTORES_META = [
  {
    id: "E",
    key: "extraversion",
    name: "Extraversión",
    description:
      "Relacionada con la sociabilidad, la energía al interactuar con otras personas y la tendencia a buscar estímulos externos.",
    long:
      "Puntajes altos en Extraversión suelen indicar personas sociables, expresivas, que disfrutan de la compañía de otros y tienden a ser entusiastas. Puntajes bajos se asocian más con una preferencia por ambientes tranquilos, reflexión interna y menor necesidad de socialización intensa."
  },
  {
    id: "A",
    key: "afabilidad",
    name: "Amabilidad / Afabilidad",
    description:
      "Se vincula con la empatía, la cooperación, la confianza y el interés genuino por los demás.",
    long:
      "Puntajes altos en Amabilidad reflejan personas empáticas, cooperativas, consideradas y dispuestas a ayudar. Puntajes bajos pueden asociarse con una postura más competitiva, directa o escéptica frente a las intenciones de los otros."
  },
  {
    id: "C",
    key: "meticulosidad",
    name: "Responsabilidad / Meticulosidad",
    description:
      "Hace referencia al orden, la disciplina, la organización y la orientación a metas y resultados.",
    long:
      "Puntajes altos en Responsabilidad / Meticulosidad suelen indicar personas organizadas, constantes, cumplidoras y orientadas al logro de objetivos. Puntajes bajos pueden reflejar un estilo más flexible, espontáneo o variable en cuanto a la planificación y el cumplimiento de tareas."
  },
  {
    id: "N",
    key: "estabilidad",
    name: "Estabilidad emocional (↔ Neuroticismo)",
    description:
      "Refleja la forma en que se manejan el estrés, las preocupaciones y las emociones intensas.",
    long:
      "Puntajes altos en Estabilidad emocional indican una buena capacidad para manejar el estrés, mayor calma y sensación de seguridad interna (menor Neuroticismo). Puntajes bajos suelen relacionarse con mayor sensibilidad emocional, preocupación frecuente y tendencia a experimentar cambios de ánimo más marcados."
  },
  {
    id: "O",
    key: "apertura",
    name: "Apertura a la experiencia",
    description:
      "Se asocia con la curiosidad intelectual, la imaginación, la creatividad y la preferencia por la novedad.",
    long:
      "Puntajes altos en Apertura suelen indicar personas imaginativas, creativas, abiertas a ideas nuevas y a explorar experiencias diferentes. Puntajes bajos se vinculan con una preferencia por lo conocido, lo práctico y lo tradicional, con menor interés en lo abstracto o novedoso."
  }
];

function interpretar(valor) {
  if (valor >= 20) return "Alto";
  if (valor >= 15) return "Medio";
  return "Bajo";
}

function initBig5UI() {
  const questionsEl = document.getElementById("questions");
  const questionCounterEl = document.getElementById("questionCounter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resultCardsEl = document.getElementById("resultCards");
  const summaryBodyEl = document.getElementById("summaryBody");
  const top3PillsEl = document.getElementById("top3Pills");
  const interpretationsEl = document.getElementById("interpretations");
  const progressTextEl = document.getElementById("progressText");
  const progressBarEl = document.getElementById("progressBar");
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (!questionsEl) return;

  // Una pregunta a la vez: respuestas guardadas y índice actual
  const answers = Array(preguntas.length).fill(null);
  let currentIndex = 0;

  function isCurrentAnswered() {
    const r = document.querySelector(`input[name="q${currentIndex}"]:checked`);
    return !!r;
  }

  function getCurrentValue() {
    const r = document.querySelector(`input[name="q${currentIndex}"]:checked`);
    return r ? parseInt(r.value, 10) : null;
  }

  function renderSingleQuestion() {
    if (currentIndex >= preguntas.length) {
      questionsEl.innerHTML =
        '<p class="big5-complete">Has respondido todas las preguntas. Haz clic en «Calcular resultados» para ver tu perfil.</p>';
      if (questionCounterEl) questionCounterEl.textContent = "";
      return;
    }

    const idx = currentIndex;
    const num = idx + 1;
    const group = `q${idx}`;
    const selectedValue = answers[idx];

    questionsEl.innerHTML = `
      <article class="q-card" data-qid="${num}">
        <div class="q-row">
          <div class="q-text">
            <strong>${num}.</strong> ${preguntas[idx]}
          </div>
          <div class="q-scale" role="radiogroup" aria-label="Respuesta">
            ${ESCALA_META.map(
              (opt) => `
              <label>
                <input type="radio" name="${group}" value="${opt.value}" ${selectedValue === opt.value ? "checked" : ""} />
                <span>${opt.value}</span>
              </label>
            `
            ).join("")}
          </div>
        </div>
      </article>
    `;

    if (questionCounterEl) {
      questionCounterEl.textContent = `Pregunta ${num} de ${preguntas.length}`;
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
  function fillTop1Card(factores) {
    const totales = { extraversion: factores.extraversion, afabilidad: factores.afabilidad, meticulosidad: factores.meticulosidad, estabilidad: factores.estabilidad, apertura: factores.apertura };
    const ordenados = FACTORES_META.map((f) => ({ ...f, valor: totales[f.key] })).sort((a, b) => b.valor - a.valor);
    const top1 = ordenados[0];
    const top1El = document.getElementById("resultTop1Card");
    if (!top1 || !top1El) return;
    top1El.innerHTML = `<div class="result-top1-card__label">Tu resultado principal</div><div class="result-top1-card__title">${top1.name}</div><p class="result-top1-card__desc">${top1.description}</p>`;
    top1El.style.display = "block";
  }
  function updateNavButtons() {
    if (prevBtn) {
      if (currentIndex <= 0) {
        prevBtn.setAttribute("aria-hidden", "true");
        prevBtn.classList.add("big5-nav--hidden");
      } else {
        prevBtn.removeAttribute("aria-hidden");
        prevBtn.classList.remove("big5-nav--hidden");
      }
    }
    if (nextBtn) {
      if (currentIndex >= preguntas.length) {
        nextBtn.textContent = "Calcular resultados";
      } else {
        nextBtn.textContent = "Siguiente pregunta";
      }
    }
  }

  function getRespuestas() {
    const raw = [...answers];
    if (currentIndex < preguntas.length && isCurrentAnswered()) {
      raw[currentIndex] = getCurrentValue();
    }
    return raw.map((valor, i) => {
      if (valor == null) return null;
      if (invertidas.includes(i + 1)) return 6 - valor;
      return valor;
    });
  }

  function updateProgress() {
    const total = preguntas.length;
    let completadas = 0;
    for (let i = 0; i < total; i++) {
      if (i === currentIndex) {
        if (isCurrentAnswered()) completadas++;
      } else if (answers[i] != null) {
        completadas++;
      }
    }
    const pct = Math.round((completadas / Math.max(total, 1)) * 100);
    if (progressTextEl) progressTextEl.textContent = `${pct}%`;
    if (progressBarEl) progressBarEl.style.width = `${pct}%`;
  }

  function marcarSeleccion(target) {
    const card = target.closest?.(".q-card");
    if (!card) return;
    const labels = card.querySelectorAll(".q-scale label");
    labels.forEach((l) => l.classList.remove("is-selected"));
    const label = target.closest?.("label");
    if (label) label.classList.add("is-selected");
  }

  function goNext() {
    if (currentIndex >= preguntas.length) {
      handleCalcular();
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

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderSingleQuestion();
      updateNavButtons();
    }
  }

  function calcularFactores(respuestas) {
    const extraversion =
      respuestas[0] +
      respuestas[5] +
      respuestas[10] +
      respuestas[15] +
      respuestas[20];

    const afabilidad =
      respuestas[1] +
      respuestas[6] +
      respuestas[11] +
      respuestas[16] +
      respuestas[21];

    const meticulosidad =
      respuestas[2] +
      respuestas[7] +
      respuestas[12] +
      respuestas[17] +
      respuestas[22];

    const estabilidad =
      respuestas[3] +
      respuestas[8] +
      respuestas[13] +
      respuestas[18] +
      respuestas[23];

    const apertura =
      respuestas[4] +
      respuestas[9] +
      respuestas[14] +
      respuestas[19] +
      respuestas[24];

    return { extraversion, afabilidad, meticulosidad, estabilidad, apertura };
  }

  function renderResultados(factores) {
    const totales = {
      extraversion: factores.extraversion,
      afabilidad: factores.afabilidad,
      meticulosidad: factores.meticulosidad,
      estabilidad: factores.estabilidad,
      apertura: factores.apertura
    };

    const max = Math.max(...Object.values(totales), 1);

    if (resultCardsEl) {
      resultCardsEl.innerHTML = FACTORES_META.map((f) => {
        const valor = totales[f.key];
        const pct = Math.round((valor / max) * 100);
        return `
          <div class="result-card">
            <h3>${f.name}</h3>
            <div class="result-value">${valor}</div>
            <div class="bar"><span style="width:${pct}%"></span></div>
          </div>
        `;
      }).join("");
    }

    const ordenados = FACTORES_META.map((f) => ({
      id: f.id,
      key: f.key,
      name: f.name,
      valor: totales[f.key]
    })).sort((a, b) => b.valor - a.valor);

    const top3 = ordenados.slice(0, 3);
    const topSet = new Set(top3.map((t) => t.key));

    if (top3PillsEl) {
      top3PillsEl.innerHTML = top3
        .map(
          (item, idx) => `
        <span class="pill">
          ${idx + 1}. ${item.name} · ${item.valor} (${interpretar(item.valor)})
        </span>
      `
        )
        .join("");
    }

    if (summaryBodyEl) {
      summaryBodyEl.innerHTML = FACTORES_META.map((f) => {
        const valor = totales[f.key];
        return `
          <tr>
            <td><strong>${f.name}</strong></td>
            <td>${valor}</td>
            <td>${interpretar(valor)}</td>
            <td>${f.description}</td>
          </tr>
        `;
      }).join("");
    }

    if (interpretationsEl) {
      interpretationsEl.innerHTML = FACTORES_META.map(
        (f) => `
        <div class="interp-card" style="${
          topSet.has(f.key)
            ? "box-shadow:0 0 0 2px rgba(143,116,247,.18) inset;"
            : ""
        }">
          <h3>${f.name}${
          topSet.has(f.key) ? " · Factor destacado en tu perfil" : ""
        }</h3>
          <p>${f.long}</p>
        </div>
      `
      ).join("");
    }
  }

  function handleCalcular() {
    const respuestas = getRespuestas();
    const faltantes = [];
    for (let i = 0; i < respuestas.length; i++) {
      if (respuestas[i] == null) faltantes.push(i + 1);
    }
    if (faltantes.length) {
      alert(
        `Debes responder todas las preguntas.\n\nFaltan las siguientes: ${faltantes.join(
          ", "
        )}.`
      );
      return;
    }
    const factores = calcularFactores(respuestas);
    renderResultados(factores);
    fillTop1Card(factores);
    showResultsView();
  }

  function resetAll() {
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    currentIndex = 0;
    document
      .querySelectorAll('input[type="radio"]')
      .forEach((el) => (el.checked = false));
    document
      .querySelectorAll(".q-scale label.is-selected")
      .forEach((el) => el.classList.remove("is-selected"));
    if (resultCardsEl) resultCardsEl.innerHTML = "";
    if (summaryBodyEl) summaryBodyEl.innerHTML = "";
    if (interpretationsEl) interpretationsEl.innerHTML = "";
    if (top3PillsEl) {
      top3PillsEl.innerHTML =
        '<span class="pill">Completa el test para ver tu perfil.</span>';
    }
    renderSingleQuestion();
    updateNavButtons();
    updateProgress();
    location.hash = "#test";
  }

  prevBtn?.addEventListener("click", goPrev);
  nextBtn?.addEventListener("click", goNext);

  calculateBtn?.addEventListener("click", handleCalcular);
  resetBtn?.addEventListener("click", () => { resetAll(); showQuestionsView(); });
  document.getElementById("backToQuestionsBtn")?.addEventListener("click", () => { showQuestionsView(); document.getElementById("test")?.scrollIntoView({ behavior: "smooth" }); });

  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="radio"]')) {
      marcarSeleccion(e.target);
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
  document.addEventListener("DOMContentLoaded", initBig5UI);
} else {
  initBig5UI();
}