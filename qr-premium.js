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