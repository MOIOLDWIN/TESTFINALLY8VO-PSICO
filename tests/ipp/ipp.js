/* Test IPP - Inventario de Intereses y Preferencias Profesionales */

/* PUNTUACIÓN OFICIAL */
const VALORES_RESPUESTA = {
    A: 2,
    B: 1,
    C: 0,
    D: 0
  };
  
  /* ÁREAS PROFESIONALES OFICIALES DEL IPP */
  const AREAS = [
    { id:"CIENTIFICO_EXPERIMENTAL", name:"Científico Experimental",
      desc:"Interés por investigación científica, física, química, biología y experimentación."},
  
    { id:"CIENTIFICO_TECNICO", name:"Científico Técnico",
      desc:"Interés por ingeniería, arquitectura, tecnología y diseño de sistemas."},
  
    { id:"CIENTIFICO_SANITARIO", name:"Científico Sanitario",
      desc:"Vocación por medicina, salud humana o animal, enfermería y ciencias médicas."},
  
    { id:"TEORICO_HUMANISTA", name:"Teórico Humanista",
      desc:"Interés por historia, filosofía, antropología y estudio del pensamiento humano."},
  
    { id:"LITERARIO", name:"Literario",
      desc:"Interés por escritura, periodismo, literatura y comunicación."},
  
    { id:"PSICOPEDAGOGICO", name:"Psicopedagógico",
      desc:"Vocación por educación, psicología educativa y orientación."},
  
    { id:"POLITICO_SOCIAL", name:"Político Social",
      desc:"Interés por derecho, política, justicia y trabajo social."},
  
    { id:"ECONOMICO_EMPRESARIAL", name:"Económico Empresarial",
      desc:"Interés por negocios, economía y gestión empresarial."},
  
    { id:"PERSUASIVO_COMERCIAL", name:"Persuasivo Comercial",
      desc:"Habilidad para ventas, marketing, publicidad y negociación."},
  
    { id:"ADMINISTRATIVO", name:"Administrativo",
      desc:"Interés por gestión de oficinas, organización y tareas administrativas."},
  
    { id:"DEPORTIVO", name:"Deportivo",
      desc:"Preferencia por deporte, entrenamiento físico y competición."},
  
    { id:"AGROPECUARIO", name:"Agropecuario",
      desc:"Interés por agricultura, ganadería y trabajo con la naturaleza."},
  
    { id:"ARTISTICO_MUSICAL", name:"Artístico Musical",
      desc:"Vocación por música, canto, composición o interpretación musical."},
  
    { id:"ARTISTICO_PLASTICO", name:"Artístico Plástico",
      desc:"Interés por pintura, escultura, diseño y artes visuales."},
  
    { id:"MILITAR_SEGURIDAD", name:"Militar Seguridad",
      desc:"Vocación por seguridad pública, ejército o protección."},
  
    { id:"AVENTURA_RIESGO", name:"Aventura Riesgo",
      desc:"Atracción por actividades extremas, exploración y desafíos."},
  
    { id:"MECANICO_MANUAL", name:"Mecánico Manual",
      desc:"Preferencia por trabajos técnicos manuales y mecánica."}
  ];
  
  /* PREGUNTAS (solo ejemplo, debes mantener las 204) */
  
  const preguntas =  [
        { id:1, texto:"Investigar y experimentar en el campo de la mecánica, la óptica, la física nuclear, etc."},
        { id:2, texto:"Estudiar la composición y estructura de la atmósfera y los astros (planetas, satélites, etc.)."},
        { id:3, texto:"Trabajar como analista clínico."},
        { id:4, texto:"Proyectar y dirigir la construcción de edificios. Preparar los planos de edificios o zonas completas de la ciudad (barrios, parques, zonas comerciales, etc.)."},
        { id:5, texto:"Ser arquitecto."},
        { id:6, texto:"Diagnosticar y tratar enfermedades del cuerpo humano."},
        { id:7, texto:"Ser médico."},
        { id:8, texto:"Ser farmacéutico."},
        { id:9, texto:"Investigar los orígenes de la raza humana consultando restos antiguos. Proyectar excavaciones para descubrir restos del pasado."},
        { id:10, texto:"Ejercer la profesión de antropólogo."},
        { id:11, texto:"Escribir novelas, cuentos, relatos u obras literarias para su publicación."},
        { id:12, texto:"Ser escritor profesional."},
        { id:13, texto:"Dar clases en un colegio, en un instituto o en la universidad."},
        { id:14, texto:"Dar clase a niños ciegos, sordos o mentalmente deficientes, utilizando procedimientos especiales."},
        { id:15, texto:"Trabajar como profesor."},
        { id:16, texto:"Formar parte del gobierno de un país. Intervenir en debates, preparación de leyes, decretos, etc."},
        { id:17, texto:"Ser abogado."},
        { id:18, texto:"Asesorar sobre problemas contables y financieros. Organizar y dirigir los servicios de control de presupuestos y contabilidad."},
        { id:19, texto:"Ejercer la profesión de banquero."},
        { id:20, texto:"Ser empresario."},
        { id:21, texto:"Proyectar y organizar actividades turísticas para ofrecérselas a los clientes."},
        { id:22, texto:"Trabajar como agente de seguros."},
        { id:23, texto:"Realizar anotaciones contables, preparar relaciones de pagos y cobros. Cobrar, pagar y comprobar que esto se ha hecho correctamente."},
        { id:24, texto:"Ser cajero de una empresa o de un banco."},
        { id:25, texto:"Observar y analizar la actuación de los deportistas y enseñarles técnicas para remediar sus fallos."},
        { id:26, texto:"Cuidar caballos y prepararlos para las carreras."},
        { id:27, texto:"Ser árbitro de fútbol."},
        { id:28, texto:"Criar en un acuario crustáceos, peces y moluscos. Organizar controlar y administrar todos los aspectos de esta explotación."},
        { id:29, texto:"Organizar y explotar una hacienda agrícola o forestal para obtener productos de la tierra y venderlos."},
        { id:30, texto:"Realizar el trabajo de ganadero profesional."},
        { id:31, texto:"Actuar en representaciones teatrales, rodajes de cine o televisión. Aprender un papel, ensayar e interpretar el personaje."},
        { id:32, texto:"Tocar uno o varios instrumentos musicales actuando como solista o formando parte de una orquesta o de un grupo musical."},
        { id:33, texto:"Ser bailarín profesional."},
        { id:34, texto:"Crear y realizar dibujos acompañándolos con frases. Realizar ilustraciones para los libros."},
        { id:35, texto:"Diseñar prendas de vestir, complementos (zapatos, bolsos, cinturones, etc.) o joyas."},
        { id:36, texto:"Realizar el trabajo de decorador."},
        { id:37, texto:"Proteger a las personas que puedan encontrarse en un local, evitando que se cometan hechos delictivos en el mismo."},
        { id:38, texto:"Prevenir o apagar incendios, proteger o salvar a las personas durante éstos. Estudiar los riesgos que puedan producirlos, para eliminarlos."},
        { id:39, texto:"Ser agente de seguridad."},
        { id:40, texto:"Hacer canotaje grupal o individual (kayak)."},
        { id:41, texto:"Realizar en un circo ejercicios con animales adiestrados (leones, etc.) o actuar en un trapecio."},
        { id:42, texto:"Ser astronauta."},
        { id:43, texto:"Construir edificios y obras colocando ladrillos, puertas, cañerías, instalaciones eléctricas, etc."},
        { id:44, texto:"Manejar y controlar el equipo y los aparatos transmisores en emisoras de radio y televisión."},
        { id:45, texto:"Ejercer la profesión de carpintero."},
        { id:46, texto:"Hacer pronósticos sobre la dirección de las masas de aire, temperatura y humedad del ambiente."},
        { id:47, texto:"Trabajar como astrónomo profesional."},
        { id:48, texto:"Ejercer la profesión de biólogo."},
        { id:49, texto:"Proyectar maquinaria para cultivos agrarios o para ganadería y dirigir su construcción."},
        { id:50, texto:"Ser capitán de barco."},
        
        { id:51, texto:"Curar por medio de ejercicios físicos o de masajes algunas enfermedades por ejemplo, parálisis, torceduras, enfermedades nerviosas, etc."},
        { id:52, texto:"Ser veterinario."},
        { id:53, texto:"Realizar investigaciones sobre la distribución de las razas humanas y la organización política, social y económica de determinadas zonas."},
        { id:54, texto:"Realizar investigaciones y estudios sobre teología (ciencia que trata de Dios)."},
        { id:55, texto:"Ejercer la profesión de arqueólogo."},
        { id:56, texto:"Coordinar la redacción de una publicación (revista, periódico, etc.) examinando los trabajos que se presenten y seleccionando los que se van a publicar."},
        { id:57, texto:"Ser novelista."},
        { id:58, texto:"Preparar pruebas, exámenes y evaluaciones y calificar a los alumnos que los realizan."},
        { id:59, texto:"Trabajar como rehabilitador de adictos."},
        { id:60, texto:"Realizar el trabajo de orientador escolar."},
        { id:61, texto:"Intervenir en contratos y testamentos. Autorizar con tu firma escrituras y contratos."},
        { id:62, texto:"Trabajar como asistente social."},
        { id:63, texto:"Dirigir las actividades de un banco o participar en ellas. Otorgar créditos, invertir dinero, etc."},
        { id:64, texto:"Ser economista."},
        { id:65, texto:"Visitar a los profesionales de la medicina para mostrarles productos farmacéuticos."},
        { id:66, texto:"Recibir a los clientes de un hotel o restaurante. Proporcionarles la información que necesitan."},
        { id:67, texto:"Trabajar como director de ventas."},
        { id:68, texto:"Organizar las tareas de los empleados del departamento administrativo."},
        { id:69, texto:"Trabajar como técnico de computadora."},
        { id:70, texto:"Realizar ejercicios físicos bajo las órdenes de un entrenador o de un preparador."},
        { id:71, texto:"Entrenar a deportistas o equipos para perfeccionar sus conocimientos y aptitudes."},
        { id:72, texto:"Trabajar como entrenador deportivo."},
        { id:73, texto:"Dirigir los trabajos de una explotación forestal."},
        { id:74, texto:"Criar ganado (ovejas, vacas, etc.) para aprovechar su carne, lana, leche u otros productos."},
        { id:75, texto:"Trabajar como director de un zoológico."},
        { id:76, texto:"Crear y escribir composiciones y canciones."},
        { id:77, texto:"Dar recitales de canto o de música."},
        { id:78, texto:"Ser actor profesional."},
        { id:79, texto:"Restaurar cuadros, muebles y obras de arte."},
        { id:80, texto:"Crear esculturas con madera, arcilla, metal, etc."},
        
        { id:81, texto:"Ser dibujante profesional."},
        { id:82, texto:"Detener a los que cometen delitos, perseguirlos y ponerlos a disposición de la autoridad judicial."},
        { id:83, texto:"Pertenecer al ejército y prestar servicio en organismos y establecimientos militares."},
        { id:84, texto:"Ser policía."},
        { id:85, texto:"Descender a cavernas profundas para estudiar las características de la tierra."},
        { id:86, texto:"Investigar con carácter privado casos criminales o robos para descubrir a los autores."},
        { id:87, texto:"Ser submarinista profesional."},
        { id:88, texto:"Confeccionar ropa según un modelo."},
        { id:89, texto:"Ajustar maquinaria e instalar equipos eléctricos o electrónicos."},
        { id:90, texto:"Ejercer la profesión de electricista."},
        { id:91, texto:"Estudiar la vida vegetal (árboles y plantas)."},
        { id:92, texto:"Trabajar como geólogo profesional."},
        { id:93, texto:"Coordinar las actividades a bordo de un barco."},
        { id:94, texto:"Aplicar la informática para analizar necesidades y problemas."},
        { id:95, texto:"Ser ingeniero."},
        { id:96, texto:"Aplicar los conocimientos de medicina para el tratamiento de las afecciones dentales."},
        { id:97, texto:"Ejercer la profesión de auxiliar de enfermería."},
        { id:98, texto:"Difundir una doctrina religiosa y prestar servicios educativos o médicos."},
        { id:99, texto:"Ser sacerdote."},
        { id:100, texto:"Trabajar como conservador de museos profesionales."},
        
        { id:101, texto:"Entrevistar a personas para publicar sus respuestas en la prensa, radio o televisión."},
        { id:102, texto:"Ser guionista de cine o de televisión."},
        { id:103, texto:"Determinar que personas son adecuadas para realizar determinados estudios o trabajos."},
        { id:104, texto:"Trabajar como profesor de educación especial."},
        { id:105, texto:"Representar a tu país o gobierno en otros países."},
        { id:106, texto:"Intervenir ante los tribunales de justicia en nombre de la ley."},
        { id:107, texto:"Ser diplomático."},
        { id:108, texto:"Dirigir un establecimiento comercial propio."},
        { id:109, texto:"Ser gerente de una empresa."},
        { id:110, texto:"Proyectar, crear o diseñar anuncios publicitarios."},
        
        { id:111, texto:"Trabajar como profesional de relaciones públicas."},
        { id:112, texto:"Ser vendedor profesional."},
        { id:113, texto:"Recibir el dinero que entregan los clientes y devolver el cambio."},
        { id:114, texto:"Ser teleoperador."},
        { id:115, texto:"Dirigir competencias deportivas y aplicar reglas."},
        { id:116, texto:"Ser atleta profesional."},
        { id:117, texto:"Ejercer la profesión de preparador físico."},
        { id:118, texto:"Preparar redes, dirigir tareas de pesca y capturar pescado."},
        { id:119, texto:"Ser ingeniero forestal."},
        { id:120, texto:"Trabajar como agricultor profesional."},
        
        { id:121, texto:"Dirigir una orquesta o banda de música."},
        { id:122, texto:"Ser cantante profesional."},
        { id:123, texto:"Ser compositor."},
        { id:124, texto:"Manejar cámaras de cine o televisión."},
        { id:125, texto:"Ser escultor."},
        { id:126, texto:"Trabajar como fotógrafo profesional."},
        { id:127, texto:"Prestar servicios de protección y vigilancia."},
        { id:128, texto:"Ser bombero."},
        { id:129, texto:"Trabajar como seguridad en el palacio de justicia."},
        { id:130, texto:"Conducir autos a gran velocidad en carreras."},
        
        { id:131, texto:"Ser detective profesional."},
        { id:132, texto:"Ser piloto de carreras."},
        { id:133, texto:"Manejar máquinas para fabricar hilos o tejidos."},
        { id:134, texto:"Ejercer la profesión de modista o sastre."},
        { id:135, texto:"Trabajar como albañil profesional."},
        { id:136, texto:"Investigar por medio de la ciencia estadística."},
        { id:137, texto:"Ejercer la profesión de matemático."},
        { id:138, texto:"Conducir aviones y vigilar los instrumentos del vuelo."},
        { id:139, texto:"Ser controlador aéreo."},
        { id:140, texto:"Ser piloto de avión."},
        
        { id:141, texto:"Diagnosticar, prevenir y tratar enfermedades de los animales."},
        { id:142, texto:"Ser dentista."},
        { id:143, texto:"Realizar estudios e investigaciones sobre la actuación del hombre en el pasado."},
        { id:144, texto:"Ser historiador."},
        { id:145, texto:"Analizar cualidades de obras literarias, artísticas o musicales y escribir críticas."},
        { id:146, texto:"Redactar noticias para la prensa, radio o televisión."},
        { id:147, texto:"Trabajar como locutor o presentador de radio o televisión."},
        { id:148, texto:"Estudiar la conducta de las personas e investigar problemas psicológicos."},
        { id:149, texto:"Realizar el trabajo de psicólogo escolar."},
        { id:150, texto:"Investigar problemas sociales, económicos y relaciones de las sociedades humanas."},
        
        { id:151, texto:"Ejercer la profesión de sociólogo."},
        { id:152, texto:"Ser notario."},
        { id:153, texto:"Establecer el plan de una empresa teniendo en cuenta su situación y perspectivas."},
        { id:154, texto:"Trabajar como auditor profesional."},
        { id:155, texto:"Contratar pólizas de seguros y asesorar a clientes."},
        { id:156, texto:"Ejercer la profesión de publicista."},
        { id:157, texto:"Ordenar, clasificar y archivar documentos y atender llamadas."},
        { id:158, texto:"Organizar y controlar almacenamiento y expedición de mercancías."},
        { id:159, texto:"Trabajar como digitador."},
        { id:160, texto:"Participar en competiciones deportivas."},
        
        { id:161, texto:"Trabajar como cuidador de caballos de carreras."},
        { id:162, texto:"Ser entrenador de fútbol."},
        { id:163, texto:"Cultivar hortalizas, flores o árboles para vender."},
        { id:164, texto:"Trabajar como director de una granja ganadera."},
        { id:165, texto:"Ser ingeniero agrónomo."},
        { id:166, texto:"Idear pasos de baile y dirigir ensayos."},
        { id:167, texto:"Ser coreógrafo profesional."},
        { id:168, texto:"Ser músico."},
        { id:169, texto:"Realizar bocetos para decorar casas o edificios."},
        { id:170, texto:"Ser pintor artístico."},
        
        { id:171, texto:"Trabajar como diseñador de moda."},
        { id:172, texto:"Mantener la seguridad y el orden público."},
        { id:173, texto:"Trabajar como oficial de prisiones."},
        { id:174, texto:"Ser salvavidas."},
        { id:175, texto:"Participar en viajes espaciales."},
        { id:176, texto:"Ser instructor de canotaje."},
        { id:177, texto:"Ser trapecista profesional."},
        { id:178, texto:"Preparar y tratar madera para obtener tablas o papel."},
        { id:179, texto:"Ejercer la profesión de gasfitero."},
        { id:180, texto:"Trabajar como tejedor."},
        
        { id:181, texto:"Realizar experimentos para estudiar fenómenos químicos."},
        { id:182, texto:"Ejercer la profesión de físico."},
        { id:183, texto:"Estudiar y construir puentes, presas, túneles o fábricas."},
        { id:184, texto:"Ser maestro de obra."},
        { id:185, texto:"Realizar intervenciones quirúrgicas."},
        { id:186, texto:"Investigar en laboratorio las causas de enfermedades."},
        { id:187, texto:"Ejercer la profesión de fisioterapeuta."},
        { id:188, texto:"Acompañar visitantes en museos o monumentos explicando su historia."},
        { id:189, texto:"Ser filósofo."},
        { id:190, texto:"Traducir libros o artículos de un idioma a otro."},
        
        { id:191, texto:"Ser periodista."},
        { id:192, texto:"Trabajar como traductor profesional."},
        { id:193, texto:"Aplicar pruebas psicológicas y establecer tratamientos."},
        { id:194, texto:"Ser profesor de universidad."},
        { id:195, texto:"Administrar justicia conforme a las leyes."},
        { id:196, texto:"Ser político profesional."},
        { id:197, texto:"Representar a una empresa en negociaciones."},
        { id:198, texto:"Aplicar teoría económica para solucionar problemas."},
        { id:199, texto:"Trabajar como director financiero de una empresa."},
        { id:200, texto:"Vender casas o propiedades como representante de propietarios."},
        
        { id:201, texto:"Trabajar como recepcionista en un centro."},
        { id:202, texto:"Utilizar computadoras para llevar las cuentas de una empresa."},
        { id:203, texto:"Ejercer la profesión de administración."},
        { id:204, texto:"Trabajar como secretaria."}
        ];
  
  /* =======================
     INICIO DEL TEST
  ======================= */
  
  function initIPP(){
  
  const contenedor = document.getElementById("preguntas");
  const progressTextEl = document.getElementById("progressText");
  const progressBarEl = document.getElementById("progressBar");
  
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  
  const resultCardsEl = document.getElementById("resultCards");
  const calculateBtn = document.getElementById("calculateBtn");
  
  const answers = Array(preguntas.length).fill(null);
  let currentIndex = 0;
  
  
  /* =======================
     RENDER PREGUNTA
  ======================= */
  
  function renderQuestion(){

  const p = preguntas[currentIndex];
  const saved = answers[currentIndex];

  contenedor.innerHTML = `
  <article class="ipp-pregunta question-card">
    <span class="ipp-pregunta__num">Pregunta ${p.id} de ${preguntas.length}</span>
    <p class="ipp-pregunta__texto">${p.texto}</p>
    <div class="ipp-opciones options">
      <label class="option">
        <input type="radio" name="p${p.id}" value="A" ${saved === "A" ? "checked" : ""}>
        <span>A — Me gusta</span>
      </label>
      <label class="option">
        <input type="radio" name="p${p.id}" value="B" ${saved === "B" ? "checked" : ""}>
        <span>B — Me es indiferente o tengo dudas</span>
      </label>
      <label class="option">
        <input type="radio" name="p${p.id}" value="C" ${saved === "C" ? "checked" : ""}>
        <span>C — No me gusta</span>
      </label>
      <label class="option">
        <input type="radio" name="p${p.id}" value="D" ${saved === "D" ? "checked" : ""}>
        <span>D — No conozco esa actividad</span>
      </label>
    </div>
  </article>
  `;

  updateProgress();

  }
  
  
  /* =======================
     PROGRESO
  ======================= */
  
  function updateProgress(){
  
  const contestadas = answers.filter(a=>a!==null).length;
  const porcentaje = Math.round((contestadas/preguntas.length)*100);
  
  if(progressTextEl) progressTextEl.textContent = porcentaje+"%";
  if(progressBarEl) progressBarEl.style.width = porcentaje+"%";
  
  }
  
  
  /* =======================
     CALCULAR RESULTADOS
  ======================= */
  
  function calcularResultados(){
  
  const resultados = {};
  
  preguntas.forEach((p,i)=>{
  
  const r = answers[i];
  if(!r) return;
  
  const valor = VALORES_RESPUESTA[r];
  
  if(!resultados[p.area]) resultados[p.area]=0;
  
  resultados[p.area]+=valor;
  
  });
  
  return resultados;
  
  }
  
  
  /* =======================
     INTERPRETACIÓN
  ======================= */
  
  function interpretar(resultados){
  
  const lista = Object.entries(resultados)
  .map(([area,puntaje])=>({area,puntaje}));
  
  lista.sort((a,b)=>b.puntaje-a.puntaje);
  
  return lista.slice(0,3);
  
  }
  
  
  /* =======================
     MOSTRAR RESULTADOS
  ======================= */
  
  function renderResultados(){
  
  const resultados = calcularResultados();
  
  const top = interpretar(resultados);
  
  resultCardsEl.innerHTML = top.map((r,i)=>{
  
  const areaInfo = AREAS.find(a=>a.id===r.area);
  
  return `
  <div class="result-card">
  <h3>${i+1}. ${areaInfo.name}</h3>
  <p>${areaInfo.desc}</p>
  <strong>Puntaje: ${r.puntaje}</strong>
  </div>
  `;
  
  }).join("");
  
  }
  
  
  /* =======================
     EVENTOS
  ======================= */
  
  nextBtn.onclick = ()=>{
  
  const r = document.querySelector(`input[name="p${preguntas[currentIndex].id}"]:checked`);
  
  if(!r){
  alert("Selecciona una respuesta");
  return;
  }
  
  answers[currentIndex] = r.value;
  
  currentIndex++;
  
  if(currentIndex >= preguntas.length){
  renderResultados();
  return;
  }
  
  renderQuestion();
  
  };
  
  prevBtn.onclick = ()=>{
  
  if(currentIndex>0){
  currentIndex--;
  renderQuestion();
  }
  
  };
  
  calculateBtn.onclick = renderResultados;
  
  
  /* =======================
     INICIO
  ======================= */
  
  renderQuestion();
  
  }
  
  
  /* =======================
     LOAD
  ======================= */
  
  document.addEventListener("DOMContentLoaded", initIPP);