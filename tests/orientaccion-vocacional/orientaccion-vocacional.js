// =====================================
// TEST DE ORIENTACIÓN VOCACIONAL
// =====================================

// ESCALAS

const escalaIntereses = [
  "Me desagrada mucho o totalmente",
  "Me desagrada algo o en parte",
  "Me es indiferente",
  "Me gusta algo o en parte",
  "Me gusta mucho"
];

const escalaAptitudes = [
  "Considero ser incompetente",
  "Considero ser muy poco competente",
  "Considero ser medianamente competente",
  "Considero ser competente",
  "Considero ser muy competente"
];

// =====================================
// PREGUNTAS INTERESES
// =====================================

const intereses = [
  [
    "Atender y cuidar enfermos.",
    "Proteger a los muchachos menores del grupo.",
    "Ser miembro de una sociedad de ayuda y asistencia.",
    "Enseñar a leer a los analfabetos.",
    "Ayudar a tus compañeros en sus dificultades y preocupaciones.",
    "Funcionario al servicio de las clases humildes."
  ],

  [
    "Intervenir activamente en las discusiones de clase.",
    "Ser jefe de grupo.",
    "Dirigir la campaña política de un candidato estudiantil.",
    "Hacer propaganda para la difusión de una idea.",
    "Leer biografías de políticos eminentes.",
    "Experto en relaciones sociales de una gran empresa."
  ],

  [
    "Escribir cuentos, crónicas o artículos.",
    "Leer obras literarias.",
    "Hacer versos para una publicación.",
    "Representar un papel en una obra de teatro.",
    "Participar en un concurso de oratoria.",
    "Escritor en un periódico o empresa editorial."
  ],

  [
    "Dibujar y pintar.",
    "Modelar con barro o plastilina.",
    "Encargarte del decorado de un festival.",
    "Idear y mostrar el escudo de un club.",
    "Diseñar vestuario para una obra teatral.",
    "Dibujante profesional."
  ],

  [
    "Cantar en un coro estudiantil.",
    "Escuchar música clásica.",
    "Aprender taquigrafía o escribir a máquina.",
    "Ser miembro de una asociación musical.",
    "Leer biografías de músicos.",
    "Concertista en una sinfónica."
  ],

  [
    "Llevar en orden tus libros y cuadernos.",
    "Ordenar y clasificar libros de una biblioteca.",
    "Aprender a tocar un instrumento.",
    "Ayudar a calificar pruebas.",
    "Encargarte del archivo de una sociedad.",
    "Técnico organizador de oficinas."
  ],

  [
    "Conocer la estructura de plantas y animales.",
    "Hacer experimentos en laboratorio.",
    "Investigar costumbres de los pueblos.",
    "Estudiar movimientos sociales.",
    "Leer revistas científicas.",
    "Investigador en laboratorio."
  ],

  [
    "Resolver cuestiones matemáticas.",
    "Resolver problemas de aritmética.",
    "Llevar cuentas de una institución.",
    "Explicar matemáticas a otros.",
    "Participar en concursos de matemáticas.",
    "Experto calculista."
  ],

  [
    "Armar y desarmar objetos.",
    "Manejar herramientas y maquinaria.",
    "Construir muebles u objetos.",
    "Reparar instalaciones eléctricas o de gas.",
    "Dirigir una construcción.",
    "Perito mecánico."
    ],
    
    [
    "Salir de excursión.",
    "Pertenecer a un club de exploradores.",
    "Trabajar al aire libre.",
    "Sembrar en una granja.",
    "Atender animales en un rancho.",
    "Técnico con actividades fuera de la ciudad."
  ]
];

// =====================================
// PREGUNTAS APTITUDES
// =====================================

const aptitudes = [
  [
    "Tratar y hablar con sensibilidad a las personas.",
    "Ser miembro activo en un club.",
    "Colaborar con la comunidad.",
    "Escuchar a otros con paciencia.",
    "Conversar con naturalidad en reuniones.",
    "Actuar con desinterés."
  ],

  [
    "Ser jefe competente de un grupo.",
    "Organizar festivales o eventos.",
    "Convencer a otros.",
    "Dar órdenes con seguridad.",
    "Dirigir en situaciones difíciles.",
    "Corregir a otros sin ofender."
  ],

  [
    "Expresarte con facilidad.",
    "Redactar artículos.",
    "Componer versos.",
    "Escribir cuentos.",
    "Apreciar la buena literatura.",
    "Hablar en público sin temor."
  ],

  [
    "Dibujar figuras humanas u objetos.",
    "Pintar paisajes.",
    "Decorar artísticamente espacios.",
    "Modelar barro o plastilina.",
    "Apreciar pintura.",
    "Colaborar en libros de arte."
  ],

  [
    "Cantar en grupo.",
    "Tocar un instrumento.",
    "Distinguir cuando alguien desentona.",
    "Entonar canciones.",
    "Apreciar buena música.",
    "Dirigir un conjunto musical."
  ],

  [
    "Llevar apuntes ordenados.",
    "Clasificar documentos.",
    "Redactar cartas.",
    "Manejar datos con rapidez.",
    "Tomar recados correctamente.",
    "Crear métodos de trabajo."
  ],

  [
    "Entender biología.",
    "Entender física.",
    "Entender química.",
    "Comprender hechos económicos.",
    "Comprender hechos históricos.",
    "Realizar investigaciones científicas."
  ],

  [
    "Realizar operaciones aritméticas.",
    "Resolver problemas matemáticos.",
    "Resolver rompecabezas numéricos.",
    "Resolver problemas de álgebra.",
    "Resolver geometría.",
    "Enseñar matemáticas."
  ],

  [
    "Armar objetos mecánicos.",
    "Desarmar objetos complejos.",
    "Resolver rompecabezas mecánicos.",
    "Armar muebles.",
    "Comprender motores.",
    "Inducir resultados prácticos."
  ],

  [
    "Actividades manuales.",
    "Usar herramientas de carpintería.",
    "Manejar herramientas mecánicas.",
    "Manipular piezas pequeñas.",
    "Hacer trazos geométricos.",
    "Modelismo."
  ]
];

// =====================================
// ESTADO Y RENDER POR CAMPO
// =====================================

const TOTAL_CAMPOS = intereses.length + aptitudes.length; // 20

const stateIntereses = intereses.map((campo) => campo.map(() => null));
const stateAptitudes = aptitudes.map((campo) => campo.map(() => null));

let currentCampoIndex = 0; // 0..TOTAL_CAMPOS-1
let finishedCampos = false;

function getCampoInfo(index) {
  if (index < intereses.length) {
    return {
      tipo: "interes",
      grupo: "INTERESES",
      arrayIndex: index,
      lista: intereses[index],
      escala: escalaIntereses,
      valores: stateIntereses[index]
    };
  }
  const idx = index - intereses.length;
  return {
    tipo: "aptitud",
    grupo: "APTITUDES",
    arrayIndex: idx,
    lista: aptitudes[idx],
    escala: escalaAptitudes,
    valores: stateAptitudes[idx]
  };
}

function renderCampoActual() {
  const contenedor = document.getElementById("questions");
  const counterEl = document.getElementById("ovFieldCounter");

  if (!contenedor) return;

  if (finishedCampos) {
    contenedor.innerHTML =
      '<p class="ov-item-text">Has respondido todos los campos. Puedes revisar tus respuestas con «Anterior campo» o presionar «Calcular resultados» para ver tu perfil.</p>';
    if (counterEl) counterEl.textContent = "";
    return;
  }

  const info = getCampoInfo(currentCampoIndex);
  const numeroCampo = info.arrayIndex + 1;
  const tituloGrupo =
    info.tipo === "interes" ? "Intereses" : "Aptitudes (auto-percepción)";

  let html = "";

  html += `
    <div class="ov-field-header">
      <div>
        <div class="ov-field-title">Campo ${numeroCampo} · ${tituloGrupo}</div>
        <div class="ov-field-sub">
          Valora cada actividad con la escala de 1 a 5.
        </div>
      </div>
      <div class="ov-field-sub">
        ${info.tipo === "interes" ? "Escala de intereses" : "Escala de aptitudes"}
      </div>
    </div>
  `;

  info.lista.forEach((pregunta, j) => {
    const valorGuardado = info.valores[j]; // 0..4 o null
    html += `
      <div class="ov-item">
        <div class="ov-item-text">${pregunta}</div>
        <div class="ov-scale-row" data-row="${j}">
          ${info.escala
            .map((texto, k) => {
              const checked = valorGuardado === k ? "checked" : "";
              const selectedClass =
                valorGuardado === k
                  ? "ov-scale-chip is-selected"
                  : "ov-scale-chip";
              const nombre =
                info.tipo === "interes"
                  ? "i" + info.arrayIndex + "_" + j
                  : "a" + info.arrayIndex + "_" + j;
              return (
                '<label class="' +
                selectedClass +
                '">' +
                '<input type="radio" name="' +
                nombre +
                '" value="' +
                k +
                '" ' +
                checked +
                " />" +
                "<span><strong>" +
                (k + 1) +
                "</strong></span>" +
                "<small>" +
                texto +
                "</small>" +
                "</label>"
              );
            })
            .join("")}
        </div>
      </div>
    `;
  });

  contenedor.innerHTML = html;

  if (counterEl) {
    const etiquetaGrupo = info.tipo === "interes" ? "Intereses" : "Aptitudes";
    counterEl.textContent = `Campo ${currentCampoIndex + 1} de ${TOTAL_CAMPOS} · ${etiquetaGrupo}`;
  }

  // marcar selección visual al cambiar
  contenedor.querySelectorAll(".ov-scale-row input[type=radio]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const row = e.target.closest(".ov-scale-row");
      if (!row) return;
      row.querySelectorAll(".ov-scale-chip").forEach((chip) =>
        chip.classList.remove("is-selected")
      );
      const chip = e.target.closest(".ov-scale-chip");
      if (chip) chip.classList.add("is-selected");
    });
  });
}

function guardarCampoActual() {
  if (finishedCampos) return true;
  const info = getCampoInfo(currentCampoIndex);
  const contenedor = document.getElementById("questions");
  if (!contenedor) return true;

  const filas = contenedor.querySelectorAll(".ov-scale-row");
  let incompletas = [];

  filas.forEach((fila, j) => {
    const inputSeleccionado = fila.querySelector("input[type=radio]:checked");
    if (!inputSeleccionado) {
      incompletas.push(j + 1);
    } else {
      const valor = parseInt(inputSeleccionado.value, 10);
      if (info.tipo === "interes") {
        stateIntereses[info.arrayIndex][j] = valor;
      } else {
        stateAptitudes[info.arrayIndex][j] = valor;
      }
    }
  });

  if (incompletas.length) {
    alert(
      `Faltan respuestas en este campo (${incompletas
        .map((n) => "#" + n)
        .join(
          ", "
        )}).\n\nResponde todas las actividades antes de pasar al siguiente campo.`
    );
    return false;
  }

  return true;
}

function updateProgress() {
  const progressTextEl = document.getElementById("progressText");
  const progressBarEl = document.getElementById("progressBar");
  if (!progressTextEl && !progressBarEl) return;

  let completados = 0;
  for (let i = 0; i < intereses.length; i++) {
    if (stateIntereses[i].every((v) => v !== null)) completados++;
  }
  for (let i = 0; i < aptitudes.length; i++) {
    if (stateAptitudes[i].every((v) => v !== null)) completados++;
  }

  const pct = Math.round((completados / TOTAL_CAMPOS) * 100);
  if (progressTextEl) progressTextEl.textContent = pct + "%";
  if (progressBarEl) progressBarEl.style.width = pct + "%";
}

function actualizarBotonesNav() {
  const prevBtn = document.getElementById("prevFieldBtn");
  const nextBtn = document.getElementById("nextFieldBtn");

  if (prevBtn) {
    if (!finishedCampos && currentCampoIndex === 0) {
      prevBtn.classList.add("ov-nav__btn--hidden");
    } else {
      prevBtn.classList.remove("ov-nav__btn--hidden");
    }
  }

  if (nextBtn) {
    nextBtn.textContent = finishedCampos ? "Calcular resultados" : "Siguiente campo";
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
function fillTop1Card(resultadosIntereses, resultadosAptitudes) {
  const campos = resultadosIntereses.map((int, i) => ({
    id: i + 1,
    nombre: nombresCampos[i],
    descripcion: descripcionesCampos[i],
    intereses: int,
    aptitudes: resultadosAptitudes[i] ?? 0,
    total: int + (resultadosAptitudes[i] ?? 0)
  }));
  const ordenados = [...campos].sort((a, b) => b.total - a.total);
  const top1 = ordenados[0];
  const top1El = document.getElementById("resultTop1Card");
  if (!top1 || !top1El) return;
  top1El.innerHTML = `<div class="result-top1-card__label">Tu resultado principal</div><div class="result-top1-card__title">${top1.nombre}</div><p class="result-top1-card__desc">${top1.descripcion}</p>`;
  top1El.style.display = "block";
}

function irAlSiguienteCampo() {
  if (finishedCampos) {
    calcular();
    return;
  }

  if (!guardarCampoActual()) return;

  if (currentCampoIndex < TOTAL_CAMPOS - 1) {
    currentCampoIndex++;
    renderCampoActual();
    actualizarBotonesNav();
    updateProgress();
  } else {
    finishedCampos = true;
    renderCampoActual();
    actualizarBotonesNav();
    updateProgress();
  }
}

function irAlCampoAnterior() {
  if (finishedCampos) {
    finishedCampos = false;
    currentCampoIndex = TOTAL_CAMPOS - 1;
    renderCampoActual();
    actualizarBotonesNav();
    updateProgress();
    return;
  }
  if (currentCampoIndex > 0) {
    currentCampoIndex--;
    renderCampoActual();
    actualizarBotonesNav();
    updateProgress();
  }
}
// =====================================
// NOMBRES DE AREAS VOCACIONALES
// =====================================

const nombresCampos = [
    "Servicio social",
    "Liderazgo y política",
    "Comunicación y literatura",
    "Arte visual y diseño",
    "Música y expresión artística",
    "Organización y administración",
    "Ciencia e investigación",
    "Matemática y análisis lógico",
    "Tecnología y mecánica",
    "Trabajo al aire libre"
    ];
    
    const descripcionesCampos = [
    
    "Inclinación hacia ayudar a otras personas, trabajar en servicios sociales, educación o asistencia comunitaria.",
    
    "Interés por dirigir grupos, organizar actividades, participar en liderazgo o política.",
    
    "Gusto por la escritura, lectura, expresión oral y comunicación.",
    
    "Interés por actividades artísticas como dibujo, pintura, diseño o creatividad visual.",
    
    "Inclinación hacia la música, interpretación musical o actividades relacionadas.",
    
    "Preferencia por actividades de organización, administración y trabajo de oficina.",
    
    "Gusto por investigar, experimentar y comprender fenómenos científicos.",
    
    "Habilidad para trabajar con números, cálculos y razonamiento lógico.",
    
    "Interés por maquinaria, tecnología, ingeniería o mecánica.",
    
    "Preferencia por trabajar en la naturaleza, agricultura o actividades al aire libre."
    
    ];
// =====================================
// CÁLCULO DE RESULTADOS USANDO ESTADO
// =====================================

function renderResultados(resultadosIntereses, resultadosAptitudes) {

    const resultCardsEl = document.getElementById("resultCards");
    const summaryBodyEl = document.getElementById("summaryBody");
    const top3PillsEl = document.getElementById("top3Pills");
    const interpretationsEl = document.getElementById("interpretations");
    const resultadosBlock = document.getElementById("resultados");
  
    const placeholder =
      resultadosBlock && resultadosBlock.querySelector(".ov-results-placeholder");
  
    if (placeholder) {
      placeholder.style.display = "none";
    }
  
    // Crear objeto de áreas
    const campos = resultadosIntereses.map((int, i) => {
  
      const apt = resultadosAptitudes[i] ?? 0;
  
      return {
  
        id: i + 1,
        nombre: nombresCampos[i],
        descripcion: descripcionesCampos[i],
        intereses: int,
        aptitudes: apt,
        total: int + apt
  
      };
  
    });
  
    const maxTotal = Math.max(...campos.map(c => c.total), 1);
  
    // =============================
    // TARJETAS DE RESULTADO
    // =============================
  
    if (resultCardsEl) {
  
      resultCardsEl.innerHTML = campos.map(c => {
  
        const pct = Math.round((c.total / maxTotal) * 100);
  
        return `
        <div class="result-card">
  
          <h3>${c.nombre}</h3>
  
          <div class="result-value">${c.total}</div>
  
          <p class="result-sub">
          Intereses: ${c.intereses} · Aptitudes: ${c.aptitudes}
          </p>
  
          <div class="bar">
            <span style="width:${pct}%"></span>
          </div>
  
        </div>
        `;
  
      }).join("");
  
    }
  
    // =============================
    // TOP 3 AREAS
    // =============================
  
    const ordenados = [...campos].sort((a,b)=>b.total-a.total);
  
    const top3 = ordenados.slice(0,3);
  
    if (top3PillsEl) {
  
      top3PillsEl.innerHTML = top3.map((c,i)=>`
  
        <span class="pill">
  
        ${i+1}. ${c.nombre}
  
        </span>
  
      `).join("");
  
    }
  
    // =============================
    // TABLA RESUMEN
    // =============================
  
    if (summaryBodyEl) {
  
      summaryBodyEl.innerHTML = campos.map(c=>`
  
        <tr>
  
          <td><strong>${c.nombre}</strong></td>
  
          <td>${c.intereses}</td>
  
          <td>${c.aptitudes}</td>
  
          <td><strong>${c.total}</strong></td>
  
        </tr>
  
      `).join("");
  
    }
  
    // =============================
    // INTERPRETACION
    // =============================
  
    if (interpretationsEl) {
  
      interpretationsEl.innerHTML = top3.map(c=>`
  
        <div class="interp-card">
  
          <h3>${c.nombre}</h3>
  
          <p>${c.descripcion}</p>
  
          <p>
  
          <strong>Interpretación:</strong> Tus respuestas indican
          una mayor afinidad con esta área vocacional. Esto sugiere
          que podrías sentir mayor motivación y satisfacción en
          profesiones relacionadas con este campo.
  
          </p>
  
        </div>
  
      `).join("");
  
    }
  
  }

function calcular() {
  // Validar que todo esté respondido
  for (let i = 0; i < intereses.length; i++) {
    if (stateIntereses[i].some((v) => v === null)) {
      alert(
        `Faltan respuestas en el Campo ${i + 1} de INTERESES.\n\nRevisa todos los campos antes de calcular.`
      );
      return;
    }
  }

  for (let i = 0; i < aptitudes.length; i++) {
    if (stateAptitudes[i].some((v) => v === null)) {
      alert(
        `Faltan respuestas en el Campo ${i + 1} de APTITUDES.\n\nRevisa todos los campos antes de calcular.`
      );
      return;
    }
  }

  const resultadosIntereses = [];
  const resultadosAptitudes = [];

  stateIntereses.forEach((campo) => {
    const suma = campo.reduce((acc, v) => acc + (v ?? 0), 0);
    resultadosIntereses.push(suma);
  });

  stateAptitudes.forEach((campo) => {
    const suma = campo.reduce((acc, v) => acc + (v ?? 0), 0);
    resultadosAptitudes.push(suma);
  });

  renderResultados(resultadosIntereses, resultadosAptitudes);
  fillTop1Card(resultadosIntereses, resultadosAptitudes);
  showResultsView();
}

function initOV() {
  renderCampoActual();
  actualizarBotonesNav();
  updateProgress();

  const prevBtn = document.getElementById("prevFieldBtn");
  const nextBtn = document.getElementById("nextFieldBtn");

  prevBtn?.addEventListener("click", irAlCampoAnterior);
  nextBtn?.addEventListener("click", irAlSiguienteCampo);
  document.getElementById("backToQuestionsBtn")?.addEventListener("click", () => { showQuestionsView(); document.getElementById("test")?.scrollIntoView({ behavior: "smooth" }); });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOV);
} else {
  initOV();
}
