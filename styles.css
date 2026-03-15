/**
 * Tests organizados por facultad. Cada test tiene facultad y carreras como tags.
 * Filtros: Todos | Ciencias de la Computación | ... | Nivelación
 */
const FACULTIES = [
  {
    id: "computacion",
    filterLabel: "Ciencias de la Computación",
    name: "Facultad de Ciencias de la Computación",
    testTitle: "Test de Kuder",
    testFolder: "kurder",
    desc: "Evaluación orientada a identificar intereses vinculados al área de computación y proyección vocacional.",
    careers: [
      "Software",
      "Telemática"
    ],
    accent: "dark"
  },
  {
    id: "empresariales",
    filterLabel: "Ciencias Empresariales",
    name: "Facultad de Ciencias Empresariales",
    testTitle: "Test IPP",
    testFolder: "ipp",
    desc: "Instrumento de intereses profesionales destinado a estudiantes del área empresarial.",
    careers: [
      "Contabilidad y Auditoría",
      "Gestión del Talento Humano",
    ],
    accent: "gold"
  },
  {
    id: "sociales",
    filterLabel: "Ciencias Sociales Económicas y Financieras",
    name: "Facultad de Ciencias Sociales Económicas y Financieras",
    testTitle: "Test Vocacional",
    testFolder: "orientaccion-vocacional",
    desc: "Prueba de orientación vocacional con intereses y aptitudes por campos profesionales.",
    careers: ["Economía", "Finanzas"],
    accent: "teal"
  },
  {
    id: "salud",
    filterLabel: "Ciencias de la Salud",
    name: "Facultad de Ciencias de la Salud",
    testTitle: "Test CHASIDE",
    testFolder: "chadise",
    desc: "Instrumento pensado para procesos de orientación en estudiantes de Salud y nivelación.",
    careers: ["Enfermería"],
    accent: "blue"
  },
  {
    id: "educacion",
    filterLabel: "Ciencias de la Educación",
    name: "Facultad de Ciencias de la Educación",
    testTitle: "Test de Holland",
    testFolder: "holland",
    desc: "Evalúa intereses profesionales en cuatro partes y genera un perfil con tus tres dimensiones más altas.",
    careers: [
      "Educación Básica",
      "Psicopedagogía",
      "Pedagogía de los Idiomas Nacionales y Extranjeros"
    ],
    accent: "purple"
  },
  {
    id: "nivelacion",
    filterLabel: "Nivelación",
    name: "Nivelación",
    testTitle: "Test Big Five",
    testFolder: "big5",
    desc: "Evalúa tu perfil en los cinco grandes factores de personalidad.",
    careers: [],
    accent: "green"
  }
];

const FILTER_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "computacion", label: "Ciencias de la Computación" },
  { value: "empresariales", label: "Ciencias Empresariales" },
  { value: "sociales", label: "Ciencias Sociales Económicas y Financieras" },
  { value: "salud", label: "Ciencias de la Salud" },
  { value: "educacion", label: "Ciencias de la Educación" },
  { value: "nivelacion", label: "Nivelación" }
];

const ACCENT_CLASSES = {
  dark: "accent-dark",
  blue: "accent-blue",
  green: "accent-green",
  pink: "accent-pink",
  purple: "accent-purple",
  gold: "accent-gold",
  teal: "accent-teal"
};

const cardsGrid = document.getElementById("cardsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const facultySelect = document.getElementById("facultySelect");
const btnAllFaculties = document.getElementById("btnAllFaculties");

let activeFaculty = "all";
let activeSearch = "";

function cardTemplate(test) {
  const accentClass = ACCENT_CLASSES[test.accent] || "accent-dark";
  const testUrl = `./tests/${test.testFolder}/${test.testFolder}.html`;
  const facultyTag = `<span class="mini-pill">${test.filterLabel}</span>`;
  const careerTags = (test.careers || []).map((c) => `<span class="mini-pill">${c}</span>`).join("");
  return `<article class="test-card ${accentClass}" data-faculty-id="${test.id}">
    <div class="test-card__head">
      <h3>${test.testTitle}</h3>
      <span class="status-pill badge-available">Disponible</span>
    </div>
    <p>${test.desc}</p>
    <div class="meta-pills">
      ${facultyTag}
      ${careerTags}
    </div>
    <div class="actions">
      <a class="action-primary" href="${testUrl}">Iniciar</a>
      <a class="action-secondary" href="${testUrl}">Detalles</a>
    </div>
  </article>`;
}

function getVisibleTests() {
  let list = FACULTIES;
  if (activeFaculty !== "all") {
    list = list.filter((f) => f.id === activeFaculty);
  }
  if (activeSearch.trim()) {
    const q = activeSearch.trim().toLowerCase();
    list = list.filter(
      (f) =>
        f.testTitle.toLowerCase().includes(q) ||
        f.name.toLowerCase().includes(q) ||
        f.filterLabel.toLowerCase().includes(q) ||
        (f.careers || []).some((c) => c.toLowerCase().includes(q))
    );
  }
  return list;
}

function renderCards() {
  const list = getVisibleTests();
  cardsGrid.innerHTML = list.map(cardTemplate).join("");
  emptyState.style.display = list.length ? "none" : "block";
}

function applyFilters() {
  renderCards();
}

function buildFilterButtons() {
  if (!facultySelect || !btnAllFaculties) return;
  
  const optionsHTML = FILTER_OPTIONS.filter(opt => opt.value !== "all").map(
    (opt) => `<option value="${opt.value}">${opt.label}</option>`
  ).join("");
  
  facultySelect.innerHTML += optionsHTML;

  const updateActiveState = () => {
    if (activeFaculty === "all") {
      btnAllFaculties.classList.add("is-active");
      facultySelect.value = "all";
    } else {
      btnAllFaculties.classList.remove("is-active");
      facultySelect.value = activeFaculty;
    }
  };

  facultySelect.addEventListener("change", (e) => {
    activeFaculty = e.target.value;
    updateActiveState();
    applyFilters();
  });

  btnAllFaculties.addEventListener("click", () => {
    activeFaculty = "all";
    updateActiveState();
    applyFilters();
  });

  updateActiveState();
}

searchInput.addEventListener("input", (e) => {
  activeSearch = e.target.value.trim();
  applyFilters();
});

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

buildFilterButtons();
renderCards();
