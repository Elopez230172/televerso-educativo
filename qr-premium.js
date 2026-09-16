/* TeleVerso Educativo · cargador QR Premium + gestión de alumnos */
(() => {
  const load = (src, done) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    if (done) s.onload = done;
    s.onerror = () => console.error(`No se pudo cargar ${src}`);
    document.head.appendChild(s);
  };
  load('qr-premium-core.js', () => load('gestion-alumnos.js'));
})();

/* Ética, Naturaleza y Sociedades · 3.º · PPA 1
   R1 cerrado en exactamente 25 reactivos efectivos.
   Se reemplaza el banco final para evitar acumulaciones de versiones anteriores. */
(() => {
  if (window.__tvEns3R1Exact25 || typeof missionCatalog === 'undefined') return;
  window.__tvEns3R1Exact25 = true;

  const m = missionCatalog.m1;
  if (!m) return;

  m.field = 'ens';
  m.fieldTitle = 'Ética, Naturaleza y Sociedades';
  m.level = '3.º de Telesecundaria';
  m.difficulty = '3.º secundaria · nivel alto';
  m.cognitiveLevel = 'aplicar-analizar-evaluar-argumentar';
  m.title = 'R1 · Laboratorio de evidencia, interpretación y acción';
  m.desc = '25 reactivos de tercer grado. Distingue evidencia verificable, interpretación razonada y propuesta de investigación o acción en situaciones de historia, agua, territorio, igualdad y participación.';
  m.statements = [
    {text:'En el acta municipal de 1985 se registra la apertura de un pozo para abastecer a tres barrios.',cat:'E',exp:'Es evidencia documental: describe información que puede localizarse y verificarse en una fuente.'},
    {text:'La apertura del pozo resolvió para siempre todos los problemas de agua de la localidad.',cat:'I',exp:'Es una interpretación excesiva: una sola obra no demuestra que el problema quedara resuelto de manera permanente.'},
    {text:'Comparemos actas, testimonios y datos de consumo antes de concluir por qué cambió el acceso al agua.',cat:'P',exp:'Es una propuesta metodológica para contrastar fuentes antes de formular una conclusión.'},
    {text:'En una fotografía aparecen recipientes alineados junto a una toma comunitaria.',cat:'E',exp:'Describe un rasgo observable de la imagen sin atribuir todavía una causa.'},
    {text:'Las personas de la fotografía esperaban porque el servicio era insuficiente.',cat:'I',exp:'Es una inferencia posible, pero debe justificarse con contexto, fecha y otras fuentes.'},
    {text:'Registremos quién administra el servicio, cuánto cuesta y qué zonas reciben agua con menor frecuencia.',cat:'P',exp:'Propone reunir información pertinente para analizar desigualdades de acceso.'},
    {text:'Dos testimonios coinciden en que durante una sequía se redujo el suministro semanal.',cat:'E',exp:'La coincidencia entre testimonios es un dato de la investigación; aún debe valorarse su alcance y corroboración.'},
    {text:'Si dos testimonios coinciden, la versión es necesariamente verdadera en todos sus detalles.',cat:'I',exp:'La coincidencia fortalece una hipótesis, pero no elimina la necesidad de contrastar otras evidencias.'},
    {text:'El mapa escolar muestra que dos colonias están más lejos del depósito principal que las demás.',cat:'E',exp:'Es información espacial observable en el mapa, siempre que la escala y ubicación sean confiables.'},
    {text:'La distancia al depósito es la única causa posible de un servicio desigual.',cat:'I',exp:'Es una explicación monocausal; también pueden intervenir infraestructura, presión, gestión, costos o disponibilidad.'},
    {text:'Organicemos una mesa de diálogo con criterios de derecho al agua, viabilidad y equidad para comparar soluciones.',cat:'P',exp:'Es una propuesta de deliberación con criterios explícitos.'},
    {text:'El reglamento escolar prohíbe excluir a una persona de una actividad por su origen o condición.',cat:'E',exp:'Describe una norma verificable en un documento.'},
    {text:'Como existe una regla contra la discriminación, ya no puede haber prácticas discriminatorias.',cat:'I',exp:'Confunde la existencia de una norma con su cumplimiento efectivo.'},
    {text:'Revisemos participación, trato y resultados para identificar barreras que una regla escrita no haya eliminado.',cat:'P',exp:'Propone analizar la igualdad real, no sólo la formal.'},
    {text:'En una encuesta, 8 de 30 estudiantes reportaron haber observado burlas por forma de hablar.',cat:'E',exp:'Es un dato de esa muestra; debe conservarse el tamaño y contexto al interpretarlo.'},
    {text:'Ese resultado demuestra que exactamente la misma proporción se presenta en todas las escuelas.',cat:'I',exp:'Generaliza una muestra limitada a una población más amplia sin evidencia suficiente.'},
    {text:'Antes de publicar conclusiones, distingamos qué datos son de nuestra escuela y cuáles provienen de fuentes externas.',cat:'P',exp:'Es una propuesta de trazabilidad y delimitación del alcance de la evidencia.'},
    {text:'El registro de operación del pozo indica 14 interrupciones del servicio entre enero y marzo.',cat:'E',exp:'Es un dato verificable en un registro; todavía no explica por qué ocurrieron las interrupciones.'},
    {text:'Las 14 interrupciones ocurrieron únicamente por falta de lluvia.',cat:'I',exp:'Atribuye una causa única sin revisar infraestructura, demanda, mantenimiento, energía, gestión u otros factores.'},
    {text:'Contrastemos lluvia, niveles del pozo, reportes de fallas y horarios de bombeo antes de atribuir una causa.',cat:'P',exp:'Propone contrastar variables y fuentes pertinentes para construir una explicación mejor sustentada.'},
    {text:'En un mapa de 2005 aparece una zona agrícola donde el mapa actual muestra expansión urbana.',cat:'E',exp:'La comparación cartográfica documenta un cambio de uso del territorio si ambas fuentes son comparables.'},
    {text:'La expansión urbana explica por sí sola cualquier cambio posterior en la disponibilidad de agua.',cat:'I',exp:'Es una explicación insuficiente porque puede haber múltiples factores naturales, técnicos, económicos y políticos.'},
    {text:'Construyamos una línea del tiempo con cambios de uso de suelo, población, infraestructura y disponibilidad de agua.',cat:'P',exp:'Organizar variables en el tiempo permite examinar relaciones sin asumir causalidad automática.'},
    {text:'Una crónica de 1930 fue escrita por una autoridad local y describe un conflicto por tierras.',cat:'E',exp:'Autoría, fecha y tema son características verificables de la fuente.'},
    {text:'Identifiquemos qué voces aparecen, cuáles faltan y contrastemos la crónica con testimonios, mapas y otros documentos.',cat:'P',exp:'Propone crítica de fuente y corroboración desde distintas perspectivas.'}
  ];
})();

/* TeleVerso Educativo · Orden personalizado por alumno · GLOBAL
   - Aplica a todos los grados, campos, periodos, PPA y retos del catálogo.
   - Mantiene exactamente el mismo contenido y dificultad.
   - Cada alumno recibe un orden determinístico distinto por actividad.
   - Al reabrir un reto, el mismo alumno conserva su orden.
   - En secuencias/cronologías no altera la solución correcta: sólo controla
     la aleatorización que hace el motor al presentar las piezas.
*/
(() => {
  if (window.__tvOrdenPorAlumnoGlobalV1 || typeof missionCatalog === 'undefined') return;
  window.__tvOrdenPorAlumnoGlobalV1 = true;

  const originalByMission = new WeakMap();

  const currentStudent = () => {
    try { return typeof activeStudent !== 'undefined' ? activeStudent : null; }
    catch (_) { return null; }
  };

  function hashSeed(text) {
    let h = 2166136261 >>> 0;
    const s = String(text || '');
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    h += h << 13; h ^= h >>> 7;
    h += h << 3;  h ^= h >>> 17;
    h += h << 5;
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function() {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function clone(value) {
    if (value === undefined) return undefined;
    try { return structuredClone(value); }
    catch (_) { return JSON.parse(JSON.stringify(value)); }
  }

  function shuffle(array, rng) {
    const out = [...array];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  const shuffleKeys = ['statements','pairs','qs','scenes','entries','words','locks','cards','questions','prompts','challenges','items'];

  function captureOriginal(mission) {
    if (originalByMission.has(mission)) return originalByMission.get(mission);
    const snap = {};
    shuffleKeys.forEach(k => {
      if (Array.isArray(mission[k])) snap[k] = clone(mission[k]);
    });
    originalByMission.set(mission, snap);
    return snap;
  }

  function restoreOriginal(mission) {
    const snap = captureOriginal(mission);
    Object.entries(snap).forEach(([k,v]) => { mission[k] = clone(v); });
  }

  function shuffledOptions(options, correct, rng) {
    if (!Array.isArray(options) || options.length < 2) return {options: clone(options), correct};
    const tagged = options.map((value,index) => ({value,index}));
    const mixed = shuffle(tagged, rng);
    let newCorrect = correct;
    if (Number.isInteger(correct)) newCorrect = mixed.findIndex(x => x.index === correct);
    return {options: mixed.map(x => clone(x.value)), correct: newCorrect};
  }

  function mixQuestion(q, rng) {
    if (Array.isArray(q)) {
      const copy = clone(q);
      if (Array.isArray(copy[1])) {
        const mixed = shuffledOptions(copy[1], copy[2], rng);
        copy[1] = mixed.options;
        if (Number.isInteger(copy[2])) copy[2] = mixed.correct;
      }
      return copy;
    }
    if (!q || typeof q !== 'object') return q;
    const copy = clone(q);
    const optKey = Array.isArray(copy.opts) ? 'opts' : (Array.isArray(copy.options) ? 'options' : null);
    if (!optKey) return copy;
    const ansKey = Object.prototype.hasOwnProperty.call(copy,'ans') ? 'ans'
      : Object.prototype.hasOwnProperty.call(copy,'answer') ? 'answer'
      : Object.prototype.hasOwnProperty.call(copy,'correct') ? 'correct'
      : Object.prototype.hasOwnProperty.call(copy,'correctIndex') ? 'correctIndex' : null;
    const oldCorrect = ansKey ? copy[ansKey] : undefined;
    const mixed = shuffledOptions(copy[optKey], oldCorrect, rng);
    copy[optKey] = mixed.options;
    if (ansKey && Number.isInteger(oldCorrect)) copy[ansKey] = mixed.correct;
    return copy;
  }

  function typeIsOrdered(mission) {
    const t = String(mission?.type || '').toLowerCase();
    return /(sequence|secuencia|timeline|cronolog|orden|order)/.test(t);
  }

  function prepareMission(mission, missionId, student) {
    restoreOriginal(mission);
    if (!student?.id) return;

    const base = `${student.id}|${missionId || mission.id || mission.title || 'mission'}|tv-order-v1`;
    const rngFor = suffix => mulberry32(hashSeed(`${base}|${suffix}`));

    if (Array.isArray(mission.statements)) mission.statements = shuffle(mission.statements, rngFor('statements'));
    if (Array.isArray(mission.pairs)) mission.pairs = shuffle(mission.pairs, rngFor('pairs'));
    if (Array.isArray(mission.entries)) mission.entries = shuffle(mission.entries, rngFor('entries'));
    if (Array.isArray(mission.words)) mission.words = shuffle(mission.words, rngFor('words'));
    if (Array.isArray(mission.cards)) mission.cards = shuffle(mission.cards, rngFor('cards'));
    if (Array.isArray(mission.prompts)) mission.prompts = shuffle(mission.prompts, rngFor('prompts'));
    if (Array.isArray(mission.challenges)) mission.challenges = shuffle(mission.challenges, rngFor('challenges'));

    if (Array.isArray(mission.qs)) {
      const rq = rngFor('qs-options');
      mission.qs = shuffle(mission.qs.map(q => mixQuestion(q, rq)), rngFor('qs-order'));
    }
    if (Array.isArray(mission.questions)) {
      const rq = rngFor('questions-options');
      mission.questions = shuffle(mission.questions.map(q => mixQuestion(q, rq)), rngFor('questions-order'));
    }
    if (Array.isArray(mission.scenes)) {
      const rq = rngFor('scenes-options');
      mission.scenes = shuffle(mission.scenes.map(q => mixQuestion(q, rq)), rngFor('scenes-order'));
    }
    if (Array.isArray(mission.locks)) {
      const rq = rngFor('locks-options');
      mission.locks = shuffle(mission.locks.map(q => mixQuestion(q, rq)), rngFor('locks-order'));
    }

    // Las actividades de clasificación sí pueden cambiar el orden de sus casos.
    // Las secuencias conservan el orden correcto interno y el motor recibe una
    // semilla distinta por alumno para desordenar las piezas visuales.
    if (Array.isArray(mission.items) && !typeIsOrdered(mission)) {
      mission.items = shuffle(mission.items, rngFor('items'));
    }
  }

  const previousLaunchMission = window.launchMission;
  if (typeof previousLaunchMission !== 'function') return;

  const personalizedLaunchMission = function(missionId, ...args) {
    const mission = missionCatalog?.[missionId];
    const student = currentStudent();
    if (!mission || !student?.id) return previousLaunchMission.call(this, missionId, ...args);

    prepareMission(mission, missionId, student);

    // También sustituimos Math.random sólo durante la inicialización síncrona
    // del reto. Así memoramas, secuencias, tarjetas y otros motores que ya
    // barajan internamente reciben una mezcla estable y distinta por alumno.
    const nativeRandom = Math.random;
    Math.random = mulberry32(hashSeed(`${student.id}|${missionId}|engine|tv-order-v1`));
    try {
      return previousLaunchMission.call(this, missionId, ...args);
    } finally {
      Math.random = nativeRandom;
    }
  };

  personalizedLaunchMission.__tvStudentOrderGlobalV1 = true;
  window.launchMission = personalizedLaunchMission;
  try { launchMission = personalizedLaunchMission; } catch (_) {}
})();