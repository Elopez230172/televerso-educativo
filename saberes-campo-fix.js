/* TeleVerso Educativo · Corrección defensiva del campo formativo Saberes y Pensamiento Científico.
   Saberes-addon ya construye el selector de tres campos; este archivo sólo garantiza
   la asignación correcta de las misiones SPC y evita selectores duplicados heredados. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD = 'saberes';
  const FIELD_TITLE = 'Saberes y Pensamiento Científico · PPA 1';

  Object.entries(missionCatalog).forEach(([key, mission]) => {
    if (/^spc\d+$/i.test(key) || /^spc\d+$/i.test(String(mission?.id || ''))) {
      mission.field = FIELD;
      mission.fieldTitle = FIELD_TITLE;
    }
  });

  // Compatibilidad con una versión anterior que añadía un segundo botón de Saberes.
  const cleanLegacyDuplicate = () => {
    const current = document.getElementById('tv-btn-spc');
    const legacy = document.getElementById('tv-btn-saberes');
    if (current && legacy) legacy.remove();
  };

  const previousSetField = window.tvSetField;
  if (typeof previousSetField === 'function') {
    window.tvSetField = function(field) {
      const normalized = ['ens', 'lenguajes', 'saberes'].includes(field) ? field : 'ens';
      localStorage.setItem('televerso_active_field', normalized);
      const result = previousSetField(normalized);
      cleanLegacyDuplicate();
      return result;
    };
  }

  setTimeout(cleanLegacyDuplicate, 0);
})();

/* TeleVerso Educativo · De lo humano y lo comunitario · 2.º · PPA 1
   PPA: “¡A resolver, construir y reconstruir!”
   Retos: proyecto de vida, decisiones, prevención, plan de acción y potencial.
   Este módulo se instala antes de los demás campos y queda integrado a la cadena
   normal de render/launch. No usa MutationObserver ni listeners de scroll. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD='humano2';
  const FIELD_TITLE='De lo humano y lo comunitario · 2.º grado · PPA 1';
  const PPA_TITLE='¡A resolver, construir y reconstruir!';
  const meta=m=>Object.assign(m,{
    field:FIELD, fieldTitle:FIELD_TITLE, grade:2, level:'2.º de Telesecundaria',
    period:1, periodTitle:'Primer periodo', ppa:1, ppaTitle:'PPA 1',
    curriculumPath:'Primer periodo · PPA 1'
  });

  Object.assign(missionCatalog,{
    hc2_1:meta({
      id:'hc2_1', title:'R1 · Radar de fortalezas e intereses', type:'hc2-classify', icon:'🧭',
      cats:['CAPACIDAD / HABILIDAD','INTERÉS','NECESIDAD DE MEJORA','APOYO / RECURSO'],
      items:[
        ['Organizo materiales y tiempos cuando tengo una lista clara de tareas.',0,'Describe una habilidad observable que ya se usa en una situación concreta.'],
        ['Quiero aprender a editar audio aunque apenas estoy empezando.',1,'Expresa curiosidad y deseo de explorar, no dominio actual.'],
        ['Me cuesta pedir ayuda cuando una tarea me rebasa.',2,'Señala un aspecto que puede desarrollarse mediante práctica y apoyo.'],
        ['Una docente puede orientarme para conocer opciones de estudio.',3,'Es una persona o recurso externo que puede acompañar una decisión.'],
        ['Puedo explicar ideas frente al grupo con ejemplos claros.',0,'Es una capacidad demostrable en una acción.'],
        ['Me atrae participar en proyectos de cuidado ambiental.',1,'Indica un interés que puede orientar metas o actividades.'],
        ['Necesito mejorar mi constancia para terminar tareas largas.',2,'Es una necesidad de mejora que puede convertirse en meta.'],
        ['La biblioteca y el acceso a internet escolar me ayudan a investigar.',3,'Son recursos disponibles para avanzar.'],
        ['Sé escuchar y resumir acuerdos cuando trabajamos en equipo.',0,'Es una habilidad social útil para metas colectivas.'],
        ['Me interesa conocer oficios y profesiones de mi comunidad.',1,'Es una exploración de posibilidades, no una decisión definitiva.'],
        ['Necesito organizar mejor descanso, estudio y actividad física.',2,'Describe una necesidad de equilibrio y autocuidado.'],
        ['Mi familia puede ayudarme a revisar opciones de transporte o horarios.',3,'Es una red de apoyo para valorar alternativas.']
      ]
    }),
    hc2_2:meta({
      id:'hc2_2', title:'R2 · Entrevista inteligente', type:'hc2-choice', icon:'🎤',
      qs:[
        ['Quieres conocer estrategias para alcanzar metas. ¿Qué pregunta es más útil?',['¿Por qué nunca te rindes?','¿Qué hiciste cuando tu primer plan no funcionó?','¿Cuál es tu problema personal más difícil?'],1,'Una pregunta abierta sobre ajustes permite conocer procesos sin invadir datos privados.'],
        ['¿Cuál pregunta conviene evitar por invadir información sensible?',['¿Qué hábito te ayuda a organizarte?','¿Qué recurso de la comunidad te ha servido?','¿Cuál ha sido el peor problema de tu familia?'],2,'El proyecto no necesita conocer experiencias familiares íntimas.'],
        ['Una persona responde muy poco. ¿Qué haces?',['Insistes hasta que cuente detalles.','Reformulas de manera neutral o pasas a otra pregunta.','Inventas una respuesta probable.'],1,'La participación debe ser voluntaria y respetuosa.'],
        ['¿Qué pregunta identifica apoyos?',['¿Quién te ayudó a encontrar información o alternativas cuando la necesitaste?','¿Cuánto dinero gana tu familia?','¿Por qué otros no pueden hacerlo solos?'],0,'Permite reconocer redes de apoyo sin pedir datos económicos.'],
        ['Quieres comparar experiencias. ¿Qué pregunta funciona mejor?',['¿Todos deberían hacer exactamente lo que tú hiciste?','¿Qué opción consideraste además de la que finalmente elegiste?','¿Quién tuvo la culpa cuando algo salió mal?'],1,'Explorar alternativas ayuda a comprender la toma de decisiones.'],
        ['Una respuesta menciona una experiencia dolorosa no solicitada. ¿Qué conviene?',['Pedir más detalles para completar el trabajo.','Difundirla porque es interesante.','No profundizar, cuidar la confidencialidad y buscar orientación adulta si hay riesgo.'],2,'La prioridad es proteger a la persona, no completar una actividad.'],
        ['¿Cuál pregunta ayuda a reconocer aprendizaje de una dificultad?',['¿Qué cambiaste después de darte cuenta de que una estrategia no funcionaba?','¿Por qué fallaste?','¿Quién te impidió triunfar?'],0,'Centra la conversación en ajustes y aprendizaje.'],
        ['Antes de entrevistar, ¿qué debe quedar claro?',['Que la persona puede no responder una pregunta.','Que todas las respuestas serán públicas.','Que debe contestar rápido.'],0,'El consentimiento y la posibilidad de no responder son básicos.'],
        ['¿Qué registro es más ético?',['Nombre completo + problema íntimo + opinión del equipo.','Resumen anónimo de estrategias y apoyos relacionados con el proyecto.','Captura de pantalla de mensajes privados.'],1,'Se conserva lo pertinente y se minimizan datos personales.'],
        ['¿Cuál cierre es adecuado?',['Gracias; usaré sólo las ideas acordadas para el proyecto.','Voy a contar todo al grupo.','Si recuerdas algo privado, mándamelo después.'],0,'Explica el uso de la información y cierra con respeto.']
      ]
    }),
    hc2_3:meta({
      id:'hc2_3', title:'R3 · Mapa de riesgos', type:'hc2-classify', icon:'⚠️',
      cats:['ACCIDENTE / CONDICIÓN INSEGURA','ADICCIÓN / CONSUMO DE RIESGO','VIOLENCIA / CONTROL','FACTOR PROTECTOR'],
      items:[
        ['Usar una herramienta eléctrica sin capacitación ni protección.',0,'La condición aumenta la probabilidad de lesión accidental.'],
        ['Aceptar una sustancia desconocida por presión del grupo.',1,'Involucra consumo de riesgo y presión social.'],
        ['Amenazar repetidamente a una persona para que obedezca.',2,'Es una conducta de violencia y control.'],
        ['Tener identificada una persona adulta de confianza para pedir ayuda.',3,'Es una red de apoyo que reduce vulnerabilidad.'],
        ['Cruzar una carretera en un punto sin visibilidad por ahorrar tiempo.',0,'Es una conducta que eleva el riesgo de accidente.'],
        ['Normalizar el consumo excesivo porque “todos lo hacen”.',1,'Minimiza un riesgo relacionado con consumo y presión social.'],
        ['Aislar a alguien de sus amistades para decidir con quién puede hablar.',2,'El aislamiento y control son señales de violencia.'],
        ['Conocer protocolos de emergencia de la escuela.',3,'La información y organización son factores protectores.'],
        ['Correr en una zona mojada y con obstáculos durante un juego.',0,'El entorno y la conducta combinan riesgo de caída.'],
        ['Compartir medicamentos sin indicación profesional.',1,'Es una práctica de consumo de riesgo.'],
        ['Difundir mensajes humillantes para “dar una lección”.',2,'La humillación intencional es violencia.'],
        ['Practicar cómo decir no y retirarse de una situación riesgosa.',3,'Fortalece habilidades de protección y decisión.']
      ]
    }),
    hc2_4:meta({
      id:'hc2_4', title:'R4 · Semáforo de decisiones', type:'hc2-choice', icon:'🚦',
      qs:[
        ['Tu grupo propone un reto físico peligroso para demostrar valentía. ¿Qué opción es más responsable?',['Participar para evitar burlas.','Grabarlo sin participar.','Rechazarlo, explicar el riesgo y proponer un reto seguro.'],2,'La decisión protege integridad sin renunciar a la participación.'],
        ['Tu meta requiere más tiempo del previsto. ¿Qué haces?',['Revisas pasos y ajustas el plazo con evidencia.','La abandonas de inmediato.','Ocultas el retraso y mantienes la fecha.'],0,'Ajustar un plan puede ser una decisión estratégica.'],
        ['Detectas una posible violencia que te rebasa. ¿Qué es prioritario?',['Confrontar solo a quien parece responsable.','Buscar apoyo adulto o institucional y priorizar seguridad.','Publicar nombres en redes.'],1,'No se debe asumir un riesgo adicional ni exponer a personas.'],
        ['El equipo no tiene el recurso que pensaba usar. ¿Qué conviene?',['Comparar alternativas disponibles y rediseñar.','Seguir igual aunque sea imposible.','Culpar al responsable.'],0,'La factibilidad exige adaptar recursos y estrategia.'],
        ['Dos opciones parecen buenas. ¿Qué criterio ayuda más?',['Elegir la más popular.','Comparar consecuencias, seguridad, impacto y recursos.','Elegir la más rápida siempre.'],1,'Una decisión asertiva compara criterios relevantes.'],
        ['Un compañero propone ocultar un riesgo para que el plan “se vea mejor”.',['Aceptar para obtener mejor calificación.','Eliminar toda la actividad.','Registrar el riesgo y explicar cómo se reducirá.'],2,'Un plan serio reconoce límites y medidas de prevención.'],
        ['Una meta depende totalmente de una sola persona externa. ¿Qué mejora el plan?',['Tener apoyos y alternativas adicionales.','Aumentar la presión sobre esa persona.','No informar al equipo.'],0,'Diversificar apoyos disminuye vulnerabilidad del plan.'],
        ['La información disponible es contradictoria. ¿Qué haces?',['Escoges la que confirma tu idea.','Contrastas fuentes antes de decidir.','Ignoras ambas.'],1,'La decisión debe apoyarse en información suficiente.'],
        ['Un plan logra el objetivo pero excluye a una persona del equipo. ¿Está bien?',['Sí, si fue rápido.','Sí, si la mayoría estuvo de acuerdo.','No; debe revisarse la estrategia para combinar eficacia e inclusión.'],2,'El logro no justifica una exclusión injusta.'],
        ['¿Cuándo es válido cambiar una meta?',['Cuando nueva información o condiciones muestran que otra ruta es más viable o segura.','Nunca.','Sólo cuando alguien más lo ordena.'],0,'Replantear con razones forma parte de la planificación.']
      ]
    }),
    hc2_5:meta({
      id:'hc2_5', title:'R5 · Prioriza y actúa', type:'hc2-sequence', icon:'🧩',
      items:[
        'Describir el problema con evidencia suficiente.',
        'Identificar causas o condiciones que lo favorecen.',
        'Generar varias alternativas de solución.',
        'Comparar seguridad, impacto, costo, tiempo y factibilidad.',
        'Elegir una alternativa y justificar la decisión.',
        'Definir responsables, recursos, pasos e indicadores.',
        'Aplicar, observar resultados y ajustar el plan.'
      ]
    }),
    hc2_6:meta({
      id:'hc2_6', title:'R6 · Problema, acción y apoyo', type:'hc2-match', icon:'🔗',
      pairs:[
        ['Información confusa sobre prevención de adicciones','Solicitar orientación a una institución o profesional confiable.'],
        ['Zona escolar con riesgo de accidente','Documentar la condición y proponer medidas preventivas a responsables.'],
        ['Dificultad para organizar una meta larga','Dividirla en pasos, fechas de revisión y apoyos concretos.'],
        ['Conflictos frecuentes en un equipo','Acordar reglas de diálogo, roles y forma de resolver desacuerdos.'],
        ['Falta de actividad física segura','Diseñar opciones accesibles según espacio, condición y recursos.'],
        ['Una decisión depende de un solo recurso','Preparar una alternativa viable si ese recurso falla.'],
        ['Una persona expresa sentirse en peligro','Buscar acompañamiento adulto o institucional de inmediato.'],
        ['El plan no muestra avance','Revisar indicadores y modificar acciones, no sólo repetirlas.']
      ]
    }),
    hc2_7:meta({
      id:'hc2_7', title:'R7 · Memorama de factores protectores', type:'hc2-memory', icon:'🧠',
      pairs:[
        ['Red de apoyo','Personas e instituciones a quienes se puede acudir para orientación o protección.'],
        ['Autoconocimiento','Reconocer capacidades, emociones, límites e intereses para decidir con mayor claridad.'],
        ['Comunicación asertiva','Expresar necesidades, límites y desacuerdos sin agresión.'],
        ['Información confiable','Datos con procedencia que permiten valorar riesgos y alternativas.'],
        ['Actividad física segura','Movimiento adecuado a condiciones, reglas, espacio y cuidado del cuerpo.'],
        ['Planificación','Organizar pasos, tiempos, recursos y formas de evaluar avance.'],
        ['Límites personales','Decisiones sobre lo que una persona acepta o rechaza para cuidar su bienestar.'],
        ['Pedir ayuda a tiempo','Reconocer cuándo una situación rebasa lo que se puede resolver a solas.']
      ]
    }),
    hc2_8:meta({
      id:'hc2_8', title:'R8 · Brújula de potencial', type:'hc2-choice', icon:'🧭',
      qs:[
        ['“Quiero aprender programación”, pero no definí qué haré primero. ¿Qué falta?',['Una meta completamente distinta.','Un primer paso concreto.','Ocultar la meta.'],1,'La dirección necesita una acción inicial verificable.'],
        ['“Soy constante practicando”, ¿qué componente describe?',['Fortaleza.','Riesgo.','Apoyo externo.'],0,'Es una característica personal que puede ayudar a sostener una meta.'],
        ['El transporte dificulta asistir a una actividad. ¿Qué componente es?',['Interés.','Límite o condición del contexto.','Logro final.'],1,'Es una condición que debe incorporarse al plan.'],
        ['Una docente puede orientar sobre becas y requisitos. ¿Qué representa?',['Apoyo o recurso.','Riesgo.','Meta.'],0,'Es una fuente de orientación externa.'],
        ['Una lesión temporal cambia un plan deportivo. ¿Qué decisión es más estratégica?',['Ignorarla para no perder tiempo.','Abandonar toda actividad futura.','Ajustar la meta y buscar una alternativa segura durante la recuperación.'],2,'El rumbo puede modificarse sin perder el propósito general.'],
        ['Tienes varias fortalezas, pero ninguna meta clara. ¿Qué conviene?',['Explorar opciones y definir un propósito provisional.','Elegir al azar.','Esperar sin investigar.'],0,'La exploración permite convertir fortalezas en opciones.'],
        ['Una meta depende de equipo costoso que no tienes. ¿Qué componente debe revisarse primero?',['La factibilidad y alternativas.','Tu valor personal.','La opinión de redes sociales.'],0,'Conviene ajustar recursos o buscar rutas equivalentes.'],
        ['Cambiaste de interés después de conocer otra opción. ¿Eso invalida tu proyecto de vida?',['Sí, porque una meta nunca cambia.','No; el proyecto puede actualizarse con nueva información.','Sí, a menos que alguien lo autorice.'],1,'Un proyecto de vida es flexible y revisable.'],
        ['¿Cuál frase muestra mejor una meta con control personal?',['“Quiero que todos me admiren”.','“Durante cuatro semanas practicaré 20 minutos tres días por semana y registraré mi avance”.','“Algún día todo saldrá bien”.'],1,'Incluye conducta, plazo y evidencia bajo control propio.'],
        ['¿Qué hace más sólida una brújula personal?',['Sólo fortalezas.','Sólo riesgos.','Fortalezas, límites, apoyos, alternativas y una meta revisable.'],2,'La decisión mejora cuando considera varios componentes.']
      ]
    }),
    hc2_9:meta({
      id:'hc2_9', title:'R9 · Misión estrategia en equipo', type:'hc2-story', icon:'🏁',
      scenes:[
        {q:'Dos integrantes proponen soluciones distintas y ambas parecen viables. ¿Qué hace el equipo?',opts:['Vota sin escuchar razones.','Compara criterios acordados y, si es posible, prueba una opción a pequeña escala.'],ans:1,fb:'Comparar y probar reduce decisiones impulsivas.'},
        {q:'Una actividad deja fuera a una persona por una barrera que puede modificarse. ¿Qué hacen?',opts:['Adaptan reglas o roles para mantener el objetivo con participación.','Continúan porque cambiar “quita tiempo”.'],ans:0,fb:'La estrategia debe combinar logro e inclusión.'},
        {q:'La estrategia elegida aumenta el riesgo de accidente.',opts:['La mantienen porque va ganando.','Detienen, identifican el riesgo y cambian la estrategia.'],ans:1,fb:'La seguridad es un criterio superior al resultado inmediato.'},
        {q:'El equipo cumple la tarea, pero una sola persona hizo casi todo.',opts:['Revisan roles y forma de participación antes de considerar exitoso el proceso.','Lo consideran perfecto porque terminó rápido.'],ans:0,fb:'Un producto colectivo también se evalúa por la participación.'},
        {q:'Aparece una limitación nueva de tiempo.',opts:['Priorizan acciones esenciales y ajustan el alcance.','Fingen que el tiempo no cambió.'],ans:0,fb:'Replanificar es parte del pensamiento estratégico.'},
        {q:'Una regla da ventaja injusta a un equipo.',opts:['Se aprovechan antes de que alguien lo note.','La revisan para conservar juego limpio y un reto comparable.'],ans:1,fb:'La eficacia no debe depender de una ventaja injusta.'}
      ]
    }),
    hc2_10:meta({
      id:'hc2_10', title:'R10 · Escape RUMBO', type:'hc2-escape', icon:'🔐',
      locks:[
        {letter:'R',q:'Un riesgo se diferencia de un factor protector porque…',opts:['el riesgo aumenta la posibilidad de daño y el protector ayuda a reducirla.','ambos significan lo mismo.','el protector elimina toda dificultad.'],ans:0},
        {letter:'U',q:'Una meta verificable necesita…',opts:['ser muy ambiciosa aunque no tenga pasos.','acciones, plazo o criterio de avance observable.','depender sólo de la suerte.'],ans:1},
        {letter:'M',q:'¿Cuándo conviene modificar un plan?',opts:['Cuando nueva información muestra una opción más segura o viable.','Nunca.','Sólo después de fracasar por completo.'],ans:0},
        {letter:'B',q:'Una red de apoyo sólida incluye…',opts:['una sola persona responsable de todo.','personas, recursos o instituciones con funciones claras.','sólo contactos en redes sociales.'],ans:1},
        {letter:'O',q:'Antes de elegir una alternativa conviene…',opts:['comparar consecuencias, recursos, seguridad e impacto.','elegir la primera.','ocultar sus limitaciones.'],ans:0},
        {letter:'R',q:'Si una situación de violencia rebasa al grupo, la respuesta más segura es…',opts:['resolverla a solas.','buscar apoyo adulto o institucional y proteger a las personas.','publicarla para obtener opiniones.'],ans:1},
        {letter:'U',q:'Reconocer una fortaleza sirve para…',opts:['convertirla en recurso para una meta y seguir desarrollándola.','demostrar que no se necesita apoyo.','compararse para sentirse superior.'],ans:0},
        {letter:'M',q:'Un plan de acción está completo cuando…',opts:['tiene una idea general.','incluye objetivo, acciones, responsables, recursos, tiempo e indicadores.','tiene un título atractivo.'],ans:1}
      ]
    })
  });

  const currentField=()=>localStorage.getItem('televerso_active_field')||'';
  const missions=()=>Object.values(missionCatalog).filter(m=>m?.field===FIELD).sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true}));
  const prevSetField=window.tvSetField;
  const prevGrid=window.renderStudentMissionsGrid || (typeof renderStudentMissionsGrid==='function'?renderStudentMissionsGrid:null);
  const prevLaunch=window.launchMission || (typeof launchMission==='function'?launchMission:null);

  function completed(){ return (typeof activeStudent!=='undefined' && activeStudent?.completed)||{}; }
  function renderGrid(){
    const grid=document.getElementById('student-missions-grid'); if(!grid) return;
    const comp=completed(), ms=missions();
    grid.innerHTML=ms.map((m,i)=>`<div class="glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 border-t-rose-500"><div><div class="flex justify-between items-center mb-3"><span class="px-2.5 py-0.5 bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase rounded-lg border border-rose-500/30">Reto ${i+1}</span><i id="badge-mission-${m.id}" class="fa-solid ${comp[m.id]?'fa-circle-check text-emerald-400':'fa-lock text-slate-500'} text-base"></i></div><h4 class="text-base font-bold text-white mb-2">${m.icon} ${m.title}</h4><p class="text-[11px] text-slate-400 mb-4">Proyecto de vida · prevención · decisiones · comunidad</p></div><button onclick="launchMission('${m.id}')" class="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition"><i class="fa-solid fa-play mr-1"></i> Iniciar reto</button></div>`).join('');
    const section=grid.parentElement;
    const heading=section?Array.from(section.children).find(el=>el.tagName==='H4'):null;
    if(heading) heading.innerHTML='<i class="fa-solid fa-people-group text-rose-400"></i> De lo humano y lo comunitario · Retos';
  }

  window.tvSetField=function(field){
    if(field===FIELD){ localStorage.setItem('televerso_active_field',FIELD); renderGrid(); return; }
    return typeof prevSetField==='function'?prevSetField(field):undefined;
  };
  window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){
    if(currentField()===FIELD) return renderGrid();
    return typeof prevGrid==='function'?prevGrid():undefined;
  };

  function openMission(m){
    activeMissionKey=m.id; missionGameState={};
    document.getElementById('modal-mission')?.classList.remove('hidden');
  }
  function area(){ return document.getElementById('mission-content-area'); }
  function head(m,progress=''){
    return `<div class="flex items-center justify-between gap-3 mb-4"><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><span class="text-xs font-black text-rose-300">${progress}</span></div>`;
  }
  function detail(statement,selected,expected,isCorrect,explanation=''){
    missionGameState.details ||= [];
    missionGameState.details.push({statement,selected,expected,isCorrect,explanation});
    if(isCorrect) missionGameState.hits=(missionGameState.hits||0)+1; else missionGameState.errors=(missionGameState.errors||0)+1;
  }
  function finish(){ saveMissionResults('Reto completado.'); }
  function feedback(ok,text=''){
    return Swal.fire({icon:ok?'success':'info',title:ok?'Correcto':'Revisa la decisión',text,confirmButtonText:'Continuar'});
  }

  window.launchMission=launchMission=function(id){
    const m=missionCatalog[id];
    if(!m||m.field!==FIELD) return typeof prevLaunch==='function'?prevLaunch(id):undefined;
    openMission(m);
    const fn={
      'hc2-classify':startClassify,'hc2-choice':startChoice,'hc2-sequence':startSequence,
      'hc2-match':startMatch,'hc2-memory':startMemory,'hc2-story':startStory,'hc2-escape':startEscape
    }[m.type];
    if(fn) fn(m);
  };

  function startClassify(m){ missionGameState={list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]}; renderClassify(m); }
  function renderClassify(m){
    const s=missionGameState,a=area(); if(!a) return;
    if(s.idx>=s.list.length) return finish();
    const [statement,ans,exp]=s.list[s.idx];
    a.innerHTML=head(m,`${s.idx+1}/${s.list.length}`)+`<div class="glass-card p-5 rounded-2xl border border-white/10 mb-4"><p class="text-base font-semibold text-white">${statement}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${m.cats.map((c,i)=>`<button onclick="tvHc2Classify(${i})" class="p-3 rounded-xl bg-slate-800 hover:bg-rose-600 text-sm font-bold text-white border border-white/10">${c}</button>`).join('')}</div>`;
    window.tvHc2Classify=async function(sel){ const ok=sel===ans; detail(statement,m.cats[sel],m.cats[ans],ok,exp); await feedback(ok,ok?'':exp); if(ok)s.idx++; renderClassify(m); };
  }

  function startChoice(m){ missionGameState={idx:0,hits:0,errors:0,details:[]}; renderChoice(m); }
  function renderChoice(m){
    const s=missionGameState,a=area(); if(!a) return;
    if(s.idx>=m.qs.length) return finish();
    const [q,opts,ans,exp]=m.qs[s.idx];
    a.innerHTML=head(m,`${s.idx+1}/${m.qs.length}`)+`<div class="glass-card p-5 rounded-2xl border border-white/10 mb-4"><p class="text-base font-semibold text-white">${q}</p></div><div class="grid grid-cols-1 gap-2">${opts.map((o,i)=>`<button onclick="tvHc2Choice(${i})" class="p-3 text-left rounded-xl bg-slate-800 hover:bg-rose-600 text-sm font-bold text-white border border-white/10"><span class="text-rose-300 mr-2">${String.fromCharCode(65+i)}.</span>${o}</button>`).join('')}</div>`;
    window.tvHc2Choice=async function(sel){ const ok=sel===ans; detail(q,opts[sel],opts[ans],ok,exp); await feedback(ok,ok?'':exp); if(ok)s.idx++; renderChoice(m); };
  }

  function startSequence(m){ missionGameState={pool:m.items.map((text,idx)=>({text,idx})).sort(()=>Math.random()-.5),next:0,hits:0,errors:0,details:[]}; renderSequence(m); }
  function renderSequence(m){
    const s=missionGameState,a=area(); if(!a) return;
    if(s.next>=m.items.length) return finish();
    a.innerHTML=head(m,`Paso ${s.next+1}/${m.items.length}`)+`<p class="text-sm text-slate-300 mb-3">Selecciona el paso que sigue en un plan de acción coherente.</p><div class="grid gap-2">${s.pool.map((x,i)=>`<button onclick="tvHc2Sequence(${i})" class="p-3 text-left rounded-xl bg-slate-800 hover:bg-rose-600 text-sm text-white border border-white/10">${x.text}</button>`).join('')}</div>`;
    window.tvHc2Sequence=async function(i){ const x=s.pool[i], ok=x.idx===s.next; detail(`Paso ${s.next+1}`,x.text,m.items[s.next],ok,'La secuencia va del diagnóstico a la evaluación y ajuste.'); await feedback(ok,ok?'':'Busca el paso que lógicamente debe ocurrir antes de los demás.'); if(ok){s.pool.splice(i,1);s.next++;} renderSequence(m); };
  }

  function startMatch(m){ missionGameState={pairs:[...m.pairs].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]}; renderMatch(m); }
  function renderMatch(m){
    const s=missionGameState,a=area(); if(!a) return;
    if(s.idx>=s.pairs.length) return finish();
    const [left,right]=s.pairs[s.idx];
    const options=[right,...m.pairs.filter(p=>p[1]!==right).map(p=>p[1]).sort(()=>Math.random()-.5).slice(0,2)].sort(()=>Math.random()-.5);
    a.innerHTML=head(m,`${s.idx+1}/${s.pairs.length}`)+`<div class="glass-card p-5 rounded-2xl mb-4"><p class="text-xs uppercase font-black text-rose-300 mb-1">Situación</p><p class="text-base font-bold text-white">${left}</p></div><div class="grid gap-2">${options.map((o,i)=>`<button onclick="tvHc2Match(${i})" class="p-3 text-left rounded-xl bg-slate-800 hover:bg-rose-600 text-sm text-white border border-white/10">${o}</button>`).join('')}</div>`;
    window.tvHc2Match=async function(i){const sel=options[i],ok=sel===right;detail(left,sel,right,ok,'Relaciona la necesidad con una acción o apoyo que atienda directamente el problema.');await feedback(ok,ok?'':'La opción debe ser segura, pertinente y viable para esa necesidad.');if(ok)s.idx++;renderMatch(m);};
  }

  function startMemory(m){
    const cards=[]; m.pairs.forEach((p,i)=>{cards.push({pair:i,text:p[0],kind:'a'});cards.push({pair:i,text:p[1],kind:'b'});});
    missionGameState={cards:cards.sort(()=>Math.random()-.5),open:[],matched:new Set(),hits:0,errors:0,details:[]}; renderMemory(m);
  }
  function renderMemory(m){
    const s=missionGameState,a=area(); if(!a)return;
    if(s.matched.size===m.pairs.length)return finish();
    a.innerHTML=head(m,`${s.matched.size}/${m.pairs.length} pares`)+`<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${s.cards.map((c,i)=>{const show=s.open.includes(i)||s.matched.has(c.pair);return `<button ${s.matched.has(c.pair)?'disabled':''} onclick="tvHc2Memory(${i})" class="min-h-[92px] p-2 rounded-xl border ${s.matched.has(c.pair)?'bg-emerald-900/30 border-emerald-500/40':'bg-slate-800 border-white/10 hover:border-rose-400'} text-xs font-bold text-white">${show?c.text:'?'}</button>`}).join('')}</div>`;
    window.tvHc2Memory=function(i){if(s.open.includes(i)||s.matched.has(s.cards[i].pair)||s.open.length>=2)return;s.open.push(i);renderMemory(m);if(s.open.length===2){const [a1,a2]=s.open,c1=s.cards[a1],c2=s.cards[a2],ok=c1.pair===c2.pair&&c1.kind!==c2.kind;setTimeout(()=>{detail(c1.text,c2.text,m.pairs[c1.pair][1],ok,'Busca la relación entre concepto y significado.');if(ok)s.matched.add(c1.pair);s.open=[];renderMemory(m);},650);}};
  }

  function startStory(m){missionGameState={idx:0,hits:0,errors:0,details:[]};renderStory(m);}
  function renderStory(m){const s=missionGameState,a=area();if(!a)return;if(s.idx>=m.scenes.length)return finish();const sc=m.scenes[s.idx];a.innerHTML=head(m,`Escena ${s.idx+1}/${m.scenes.length}`)+`<div class="glass-card p-5 rounded-2xl mb-4"><p class="text-base font-bold text-white">${sc.q}</p></div><div class="grid gap-2">${sc.opts.map((o,i)=>`<button onclick="tvHc2Story(${i})" class="p-3 text-left rounded-xl bg-slate-800 hover:bg-rose-600 text-sm text-white border border-white/10">${o}</button>`).join('')}</div>`;window.tvHc2Story=async function(i){const ok=i===sc.ans;detail(sc.q,sc.opts[i],sc.opts[sc.ans],ok,sc.fb||'');await feedback(ok,ok?'':sc.fb||'Revisa seguridad, inclusión y factibilidad.');if(ok)s.idx++;renderStory(m);};}

  function startEscape(m){missionGameState={idx:0,hits:0,errors:0,details:[],code:''};renderEscape(m);}
  function renderEscape(m){const s=missionGameState,a=area();if(!a)return;if(s.idx>=m.locks.length){a.innerHTML=head(m,'Código completo')+`<div class="glass-card p-8 rounded-3xl text-center border border-rose-500/30"><div class="text-4xl font-black tracking-[.35em] text-rose-300 mb-3">${s.code}</div><p class="text-slate-300 text-sm">Has integrado autoconocimiento, prevención, planificación y toma de decisiones.</p><button onclick="tvHc2EscapeFinish()" class="mt-5 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 font-black text-white">Completar misión</button></div>`;window.tvHc2EscapeFinish=finish;return;}const lock=m.locks[s.idx];a.innerHTML=head(m,`Candado ${s.idx+1}/${m.locks.length}`)+`<div class="glass-card p-5 rounded-2xl mb-4"><p class="text-xs text-rose-300 font-black mb-1">Código parcial: ${s.code||'—'}</p><p class="text-base font-bold text-white">${lock.q}</p></div><div class="grid gap-2">${lock.opts.map((o,i)=>`<button onclick="tvHc2Escape(${i})" class="p-3 text-left rounded-xl bg-slate-800 hover:bg-rose-600 text-sm text-white border border-white/10">${o}</button>`).join('')}</div>`;window.tvHc2Escape=async function(i){const ok=i===lock.ans;detail(lock.q,lock.opts[i],lock.opts[lock.ans],ok,'Cada candado recupera un criterio central del PPA.');await feedback(ok,ok?`Letra obtenida: ${lock.letter}`:'Revisa qué opción es más segura, viable o responsable.');if(ok){s.code+=lock.letter;s.idx++;}renderEscape(m);};}

  /* Integración tardía con la navegación progresiva existente.
     El campo ya aparece como cuarto botón en 2.º; esta capa lo habilita sin
     modificar los otros campos ni crear observadores globales. */
  function currentStudentId(){try{return typeof activeStudent!=='undefined'&&activeStudent?.id?activeStudent.id:null;}catch(_){return null;}}
  const MODE_KEY='televerso_humano2_mode_student';
  let hStep='field', hPeriod=1, hPpa=1;
  const humanoMode=()=>!!currentStudentId()&&localStorage.getItem(MODE_KEY)===currentStudentId();
  const rememberMode=()=>{const id=currentStudentId();if(id)localStorage.setItem(MODE_KEY,id);};
  const clearMode=()=>{if(humanoMode())localStorage.removeItem(MODE_KEY);};

  function navShell(inner){return `<div class="glass-panel rounded-3xl border border-white/10 p-4 sm:p-5 overflow-hidden relative"><div class="absolute inset-0 pointer-events-none bg-gradient-to-br from-rose-500/5 via-violet-500/5 to-cyan-500/5"></div><div class="relative">${inner}</div></div>`;}
  function renderHumanoNav(){
    if(!humanoMode())return;
    localStorage.setItem('televerso_active_field',FIELD);
    const nav=document.getElementById('tv-curriculum-selector'); if(!nav)return;
    const grid=document.getElementById('student-missions-grid'); const heading=grid?.parentElement?Array.from(grid.parentElement.children).find(el=>el.tagName==='H4'):null;
    let html='';
    if(hStep==='period') html=navShell(`<div class="flex items-center justify-between gap-3 mb-4"><div><span class="text-[10px] uppercase tracking-widest text-rose-300 font-black">De lo humano y lo comunitario</span><h3 class="text-lg font-black text-white mt-1">Elige el periodo</h3></div><button onclick="tvHc2BackToFields()" class="px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300">Cambiar campo</button></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">${[1,2,3].map(n=>`<button onclick="tvProgSelectPeriod(${n})" class="rounded-2xl border ${n===1?'border-rose-400/40 hover:border-rose-400':'border-slate-700'} bg-slate-900/65 p-4 text-left"><span class="text-[9px] uppercase tracking-widest text-rose-300 font-black">Periodo ${n}</span><strong class="block text-white mt-1">${n===1?'Primer periodo':n===2?'Segundo periodo':'Tercer periodo'}</strong><span class="block text-[10px] mt-1 ${n===1?'text-emerald-300':'text-slate-500'}">${n===1?'PPA disponible':'Sin actividades todavía'}</span></button>`).join('')}</div>`);
    else if(hStep==='ppa') html=navShell(`<div class="flex items-center justify-between gap-3 mb-4"><div><div class="text-xs"><span class="font-black text-white">De lo humano y lo comunitario</span> <span class="text-slate-500">›</span> <span class="font-bold text-cyan-200">${hPeriod===1?'Primer periodo':hPeriod===2?'Segundo periodo':'Tercer periodo'}</span></div><h3 class="text-lg font-black text-white mt-1">Elige el PPA</h3></div><button onclick="tvProgSelectField('${FIELD}')" class="px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300">Cambiar periodo</button></div>${hPeriod===1?`<button onclick="tvProgSelectPpa(1)" class="w-full rounded-2xl border border-violet-400/30 hover:border-violet-400 bg-slate-900/65 p-4 text-left"><span class="text-[10px] uppercase tracking-widest text-violet-300 font-black">PPA 1</span><strong class="block text-white mt-1">${PPA_TITLE}</strong></button>`:`<div class="rounded-2xl border border-dashed border-slate-600 p-5 text-sm text-slate-400">Aún no hay PPA cargados en este periodo.</div>`}`);
    else if(hStep==='activities') html=navShell(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div><span class="text-[9px] uppercase tracking-widest text-emerald-300 font-black">Selección activa</span><div class="flex flex-wrap gap-2 text-xs"><span class="font-black text-white">De lo humano y lo comunitario</span><span class="text-slate-500">›</span><span class="font-bold text-cyan-200">Primer periodo</span><span class="text-slate-500">›</span><span class="font-bold text-violet-200">PPA 1</span></div><p class="text-[11px] text-slate-400 mt-1">${PPA_TITLE}</p></div><button onclick="tvHc2BackToFields()" class="px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300">Cambiar selección</button></div>`);
    if(html)nav.innerHTML=html;
    const show=hStep==='activities'&&hPeriod===1&&hPpa===1;
    if(grid)grid.style.display=show?'':'none'; if(heading)heading.style.display=show?'':'none';
    if(show)renderGrid();
  }

  function markFieldAvailable(){
    document.querySelectorAll('button[onclick*="tvProgSelectField"]').forEach(btn=>{
      if(!String(btn.getAttribute('onclick')||'').includes(`'${FIELD}'`))return;
      const small=[...btn.querySelectorAll('span')].find(s=>/Sin actividades todavía/i.test(s.textContent||''));
      if(small){small.textContent='Seleccionar';small.className=small.className.replace(/text-slate-500/g,'text-emerald-300');}
    });
  }

  setTimeout(()=>{
    const baseProgField=window.tvProgSelectField;
    if(typeof baseProgField==='function'&&!baseProgField.__tvHumano2){
      const f=function(field,...args){
        if(field===FIELD){rememberMode();hStep='period';hPeriod=1;hPpa=1;localStorage.setItem('televerso_active_field',FIELD);renderHumanoNav();return;}
        clearMode();return baseProgField.call(this,field,...args);
      };f.__tvHumano2=true;window.tvProgSelectField=f;
    }
    const baseProgPeriod=window.tvProgSelectPeriod;
    if(typeof baseProgPeriod==='function'&&!baseProgPeriod.__tvHumano2){
      const f=function(period,...args){if(humanoMode()){hPeriod=Number(period)||1;hStep='ppa';renderHumanoNav();return;}return baseProgPeriod.call(this,period,...args);};f.__tvHumano2=true;window.tvProgSelectPeriod=f;
    }
    const baseProgPpa=window.tvProgSelectPpa;
    if(typeof baseProgPpa==='function'&&!baseProgPpa.__tvHumano2){
      const f=function(ppa,...args){if(humanoMode()){if(hPeriod!==1||Number(ppa)!==1)return;hPpa=1;hStep='activities';localStorage.setItem('televerso_active_field',FIELD);renderHumanoNav();return;}return baseProgPpa.call(this,ppa,...args);};f.__tvHumano2=true;window.tvProgSelectPpa=f;
    }
    window.tvHc2BackToFields=function(){clearMode();hStep='field';if(typeof baseProgField==='function'){const grade2Default='lenguajes2';localStorage.setItem('televerso_active_field',grade2Default);}const dash=window.renderStudentMissionsGrid;if(typeof dash==='function')dash();setTimeout(markFieldAvailable,220);};

    const baseFinalSet=window.tvSetField;
    if(typeof baseFinalSet==='function'&&!baseFinalSet.__tvHumano2Final){
      const f=function(field,...args){if(field===FIELD){rememberMode();localStorage.setItem('televerso_active_field',FIELD);renderGrid();return;}return baseFinalSet.call(this,field,...args);};f.__tvHumano2Final=true;window.tvSetField=f;try{tvSetField=f;}catch(_){}
    }

    ['renderStudentDashboard','renderStudentMissionsGrid'].forEach(name=>{
      const base=window[name]; if(typeof base!=='function'||base.__tvHumano2Restore)return;
      const f=function(...args){const wanted=humanoMode();const r=base.apply(this,args);if(wanted){localStorage.setItem('televerso_active_field',FIELD);setTimeout(()=>{localStorage.setItem('televerso_active_field',FIELD);renderGrid();renderHumanoNav();},360);}else setTimeout(markFieldAvailable,260);return r;};
      f.__tvHumano2Restore=true;window[name]=f;try{if(name==='renderStudentDashboard')renderStudentDashboard=f;if(name==='renderStudentMissionsGrid')renderStudentMissionsGrid=f;}catch(_){}
    });

    markFieldAvailable();
    if(humanoMode()){hStep='activities';hPeriod=1;hPpa=1;renderHumanoNav();}
  },900);

  document.addEventListener('DOMContentLoaded',()=>setTimeout(markFieldAvailable,1200));
})();
