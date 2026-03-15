const tests = [
  { folder: "holland", title: "Test de Holland", faculty: "Orientación vocacional", category: "Vocacional", status: "available", tag1: "Vocacional", tag2: "Disponible", accent: "purple", desc: "Evalúa intereses profesionales en cuatro partes y genera un perfil final con tus tres dimensiones más altas." },
  { folder: "kurder", title: "Test de Kurder", faculty: "Computación", category: "Carrera", status: "available", tag1: "Computación", tag2: "Disponible", accent: "dark", desc: "Evaluación orientada a identificar intereses vinculados al área de computación y proyección vocacional." },
  { folder: "chadise", title: "Test CHASIDE", faculty: "Facultad de Salud", category: "Nivelación", status: "available", tag1: "Salud", tag2: "Disponible", accent: "blue", desc: "Instrumento pensado para procesos de orientación en estudiantes de Salud y también para Nivelación." },
  { folder: "big5", title: "Evaluación de personalidad · Big Five", faculty: "Orientación vocacional", category: "Psicológico", status: "available", tag1: "Personalidad", tag2: "Disponible", accent: "green", desc: "Evalúa tu perfil en los cinco grandes factores de personalidad (Apertura, Responsabilidad, Extraversión, Amabilidad y Neuroticismo)." },
  { folder: "ipp", title: "Test IPP", faculty: "Empresarial", category: "Carrera", status: "available", tag1: "Empresarial", tag2: "Disponible", accent: "gold", desc: "Instrumento de intereses profesionales destinado a estudiantes del área empresarial." },
  { folder: "orientaccion-vocacional", title: "Test de orientación vocacional", faculty: "Ciencias económicas", category: "Nivelación", status: "available", tag1: "Nivelación", tag2: "Disponible", accent: "teal", desc: "Prueba destinada al proceso de nivelación, con una presentación clara y adaptable a futuros resultados." }
];

const cardsGrid = document.getElementById("cardsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const shuffleBtn = document.getElementById("shuffleBtn");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const categoryButtons = document.querySelectorAll(".segmented[aria-label='Categoría'] button");
const filterButtons = document.querySelectorAll(".segmented[aria-label='Estado'] button");

let activeCategory = "all";
let activeFilter = "all";
let activeSearch = "";
let currentTests = [...tests];

function cardTemplate(test) {
  const isAvailable = test.status === "available";
  const primaryLabel = isAvailable ? "Iniciar" : "Ver información";
  const statusText = isAvailable ? "Disponible" : "Próximamente";
  const accentClass = { dark: "accent-dark", blue: "accent-blue", green: "accent-green", pink: "accent-pink", purple: "accent-purple", gold: "accent-gold", teal: "accent-teal" }[test.accent] || "accent-dark";
  return `<article class="test-card ${accentClass}">
    <div class="test-card__head">
      <h3>${test.title}</h3>
      <span class="status-pill ${isAvailable ? "badge-available" : "badge-soon"}">${statusText}</span>
    </div>
    <p>${test.desc}</p>
    <div class="meta-pills">
      <span class="mini-pill">${test.tag1}</span>
      <span class="mini-pill">${test.tag2}</span>
      ${test.category ? `<span class="mini-pill">${test.category}</span>` : ""}
    </div>
    <div class="actions">
      <a class="action-primary" href="./tests/${test.folder}/${test.folder}.html">${primaryLabel}</a>
      <a class="action-secondary" href="./tests/${test.folder}/${test.folder}.html">Detalles</a>
    </div>
  </article>`;
}

function renderCards(list) {
  cardsGrid.innerHTML = list.map(cardTemplate).join("");
  emptyState.style.display = list.length ? "none" : "block";
}

function applyFilters() {
  const filtered = currentTests.filter(test => {
    const matchesCategory = activeCategory === "all" ? true : (test.category === activeCategory);
    const matchesFilter = activeFilter === "all" ? true : test.status === activeFilter;
    const haystack = (test.title + " " + test.faculty + " " + test.desc + " " + test.tag1 + " " + test.tag2 + (test.category || "")).toLowerCase();
    const matchesSearch = activeSearch ? haystack.includes(activeSearch) : true;
    return matchesCategory && matchesFilter && matchesSearch;
  });
  renderCards(filtered);
}

function shuffleArray(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

searchInput.addEventListener("input", e => { activeSearch = e.target.value.trim().toLowerCase(); applyFilters(); });

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    activeCategory = btn.dataset.category || "all";
    applyFilters();
  });
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    activeFilter = btn.dataset.filter || "all";
    applyFilters();
  });
});

shuffleBtn.addEventListener("click", () => { currentTests = shuffleArray(currentTests); applyFilters(); });
navToggle?.addEventListener("click", () => { const isOpen = navMenu.classList.toggle("is-open"); navToggle.setAttribute("aria-expanded", String(isOpen)); });
renderCards(currentTests);
