/* TeleVerso Educativo · Acceso por grado escolar
   Separa las actividades de 2.º y 3.º de Telesecundaria según el grado del grupo inscrito.
   - 2.º: Lenguajes, Saberes y Ética PPA 1 (lenguajes2, saberes2, etica2)
   - 3.º: Ética, Lenguajes 3.º y Saberes
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD_GRADE = { lenguajes2: 2, saberes2: 2, etica2: 2, ens: 3, lenguajes: 3, saberes: 3 };
  const GRADE_FIELDS = { 2: ['lenguajes2', 'saberes2', 'etica2'], 3: ['ens', 'lenguajes', 'saberes'] };
  const DEFAULT_FIELD = {2: 'lenguajes2', 3: 'lenguajes'};

  const normalizeGrade = value => {
    if (value === 2 || value === '2' || value === '2°' || value === '2º') return 2;
    if (value === 3 || value === '3' || value === '3°' || value === '3º') return 3;
    return null;
  };

  const inferGradeFromName = name => {
    const s = String(name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (/\bsegundo\b/.test(s) || /(^|\s)2\s*[°ºo]\s*[a-z]?\b/.test(s)) return 2;
    if (/\btercero\b/.test(s) || /(^|\s)3\s*[°ºo]\s*[a-z]?\b/.test(s)) return 3;
    return null;
  };

  const groupForStudent = student => student ? localState?.groups?.[student.groupId] : null;
  const getStudentGrade = student => {
    if (!student) return null;
    return normalizeGrade(student.grade) || normalizeGrade(groupForStudent(student)?.grade) || inferGradeFromName(groupForStudent(student)?.name);
  };
  const gradeForMission = mission => {
    if (!mission) return null;
    const explicit = normalizeGrade(mission.grade);
    if (explicit) return explicit;
    if (mission.field && FIELD_GRADE[mission.field]) return FIELD_GRADE[mission.field];
    const level = String(mission.level || '');
    if (/2\.?\s*[°º]?/.test(level)) return 2;
    if (/3\.?\s*[°º]?/.test(level)) return 3;
    return null;
  };
  const allowedFields = grade => GRADE_FIELDS[grade] || [];
  const isFieldAllowed = (field, grade) => allowedFields(grade).includes(field);

  function setPreferredFieldForGrade(grade) {
    if (!grade) return null;
    const key = `televerso_active_field_g${grade}`;
    const saved = localStorage.getItem(key);
    const current = localStorage.getItem('televerso_active_field');
    const field = isFieldAllowed(saved, grade) ? saved : (isFieldAllowed(current, grade) ? current : DEFAULT_FIELD[grade]);
    localStorage.setItem('televerso_active_field', field);
    return field;
  }

  function showGradePendingMessage() {
    const grid = document.getElementById('student-missions-grid');
    if (!grid) return;
    grid.innerHTML = `<div class="glass-panel p-6 rounded-3xl border border-amber-500/30 sm:col-span-2 lg:col-span-3"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center text-xl"><i class="fa-solid fa-graduation-cap"></i></div><div><h4 class="font-black text-white">Tu grupo necesita tener un grado asignado</h4><p class="text-slate-300 text-sm mt-1">Por seguridad, TeleVerso no mostrará actividades de 2.º ni de 3.º hasta que el docente asigne el grado del grupo desde el Panel Docente.</p></div></div></div>`;
  }

  function applyStudentGradeUI() {
    if (!activeStudent) return;
    const grade = getStudentGrade(activeStudent);
    const selector = document.getElementById('tv-field-selector');
    const map = {'tv-btn-ens':3,'tv-btn-leng':3,'tv-btn-spc':3,'tv-btn-leng2':2,'tv-btn-spc2':2,'tv-btn-etica2':2};
    Object.entries(map).forEach(([id,g]) => { const el=document.getElementById(id); if(el) el.style.display=grade===g?'':'none'; });
    const grid = selector?.querySelector('.grid');
    if (grid) {
      grid.classList.remove('sm:grid-cols-2','sm:grid-cols-3','lg:grid-cols-4');
      if (grade === 3) grid.classList.add('sm:grid-cols-3'); else if (grade === 2) grid.classList.add('sm:grid-cols-3'); else grid.classList.add('sm:grid-cols-1');
    }
    const grp = groupForStudent(activeStudent);
    const meta = document.getElementById('student-group-display');
    if (meta) meta.innerText = `Grupo: ${grp ? grp.name : 'General'}${grade ? ` · ${grade}.º grado` : ' · grado pendiente'}`;
    if (!grade) showGradePendingMessage();
  }

  const prevSetField = window.tvSetField;
  window.tvSetField = function(field) {
    const grade = getStudentGrade(activeStudent);
    if (activeStudent && (!grade || !isFieldAllowed(field, grade))) {
      if (typeof Swal !== 'undefined') Swal.fire({icon:'warning',title:grade?'Contenido exclusivo de otro grado':'Grado no asignado',text:grade?`Tu inscripción corresponde a ${grade}.º de Telesecundaria. Sólo puedes abrir actividades de tu grado.`:'El docente debe asignar el grado de tu grupo antes de entrar a las actividades.',confirmButtonText:'Entendido'});
      return;
    }
    if (grade) localStorage.setItem(`televerso_active_field_g${grade}`, field);
    localStorage.setItem('televerso_active_field', field);
    return typeof prevSetField === 'function' ? prevSetField(field) : undefined;
  };

  const prevLaunchMission = window.launchMission;
  window.launchMission = function(id) {
    const mission = missionCatalog[id];
    const grade = getStudentGrade(activeStudent);
    const mGrade = gradeForMission(mission);
    if (activeStudent && (!grade || (mGrade && mGrade !== grade))) {
      if (typeof Swal !== 'undefined') Swal.fire({icon:'error',title:'Actividad no disponible para tu grado',text:grade?`Esta misión corresponde a ${mGrade || 'otro'}.º y tu grupo está inscrito en ${grade}.º.`:'Tu grupo todavía no tiene grado asignado.',confirmButtonText:'Cerrar'});
      return;
    }
    return typeof prevLaunchMission === 'function' ? prevLaunchMission(id) : undefined;
  };

  const prevRenderGrid = window.renderStudentMissionsGrid;
  window.renderStudentMissionsGrid = function() {
    const grade = getStudentGrade(activeStudent);
    if (activeStudent && grade) setPreferredFieldForGrade(grade);
    const result = typeof prevRenderGrid === 'function' ? prevRenderGrid() : undefined;
    setTimeout(() => { applyStudentGradeUI(); if (activeStudent && !getStudentGrade(activeStudent)) showGradePendingMessage(); }, 0);
    return result;
  };

  const prevRenderDashboard = window.renderStudentDashboard;
  window.renderStudentDashboard = function() {
    if (activeStudent) { const grade=getStudentGrade(activeStudent); if (grade) setPreferredFieldForGrade(grade); }
    const result = typeof prevRenderDashboard === 'function' ? prevRenderDashboard() : undefined;
    setTimeout(applyStudentGradeUI, 0);
    return result;
  };

  function enhanceNewGroupForm() {
    const input = document.getElementById('input-group-name');
    if (!input || document.getElementById('tv-new-group-grade')) return;
    const row = input.parentElement; if (!row) return;
    row.classList.add('flex-wrap');
    const select = document.createElement('select');
    select.id='tv-new-group-grade';
    select.className='bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500';
    select.innerHTML='<option value="">Grado...</option><option value="2">2.º grado</option><option value="3">3.º grado</option>';
    row.insertBefore(select,row.lastElementChild);
    const label=input.closest('.glass-card')?.querySelector('label');
    if(label) label.innerHTML='Crear Nuevo Grupo Escolar <span class="text-amber-300">· el grado controla qué actividades verá el alumno</span>';
  }

  const originalCreateGroup = window.createGroupCloud;
  window.createGroupCloud = async function() {
    const input=document.getElementById('input-group-name');
    const gradeSelect=document.getElementById('tv-new-group-grade');
    const name=input?.value?.trim();
    const grade=normalizeGrade(gradeSelect?.value);
    if(!name) return;
    if(!grade){ if(typeof Swal!=='undefined') await Swal.fire('Falta el grado','Selecciona 2.º o 3.º antes de crear el grupo.','warning'); return; }
    if(!db) return typeof originalCreateGroup==='function'?originalCreateGroup():undefined;
    const gId='GRP_'+Date.now();
    try { await db.collection('groups').doc(gId).set({id:gId,name,grade,students:[]}); input.value=''; if(gradeSelect) gradeSelect.value=''; }
    catch(e){ if(typeof Swal!=='undefined') Swal.fire('Error',e.message,'error'); }
  };

  window.tvSetGroupGrade = async function(groupId,value) {
    const grade=normalizeGrade(value);
    if(!grade || !localState?.groups?.[groupId]) return;
    const group=localState.groups[groupId];
    try {
      if(db){ const batch=db.batch(); batch.set(db.collection('groups').doc(groupId),{grade},{merge:true}); (group.students||[]).forEach(sid=>batch.set(db.collection('students').doc(sid),{grade},{merge:true})); await batch.commit(); }
      group.grade=grade;
      (group.students||[]).forEach(sid=>{if(localState.students?.[sid]) localState.students[sid].grade=grade;});
      enhanceTeacherGradeControls();
      if(activeStudent?.groupId===groupId) renderStudentDashboard();
      if(typeof Swal!=='undefined') Swal.fire({icon:'success',title:`Grupo asignado a ${grade}.º`,text:'Los alumnos de este grupo sólo verán actividades de su grado.',timer:1700,showConfirmButton:false});
    } catch(e){ if(typeof Swal!=='undefined') Swal.fire('Error',e.message,'error'); }
  };

  function enhanceTeacherGradeControls() {
    enhanceNewGroupForm();
    Object.values(localState?.groups||{}).forEach(group=>{
      const addButton=document.querySelector(`button[onclick="addStudentCloud('${group.id}')"]`);
      const card=addButton?.closest('.glass-card'); if(!card) return;
      let box=card.querySelector(`[data-grade-group="${group.id}"]`);
      if(!box){
        box=document.createElement('div'); box.dataset.gradeGroup=group.id; box.className='flex flex-wrap items-center gap-2 pt-2 border-t border-white/10';
        box.innerHTML=`<span class="text-[11px] font-black uppercase tracking-wider text-slate-400"><i class="fa-solid fa-graduation-cap mr-1"></i> Acceso por grado</span><select onchange="tvSetGroupGrade('${group.id}', this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs font-bold"><option value="">Asignar grado</option><option value="2">2.º grado</option><option value="3">3.º grado</option></select><span class="tv-grade-status text-xs font-bold"></span>`;
        card.appendChild(box);
      }
      const grade=normalizeGrade(group.grade)||inferGradeFromName(group.name);
      const sel=box.querySelector('select'); if(sel&&grade) sel.value=String(grade);
      const status=box.querySelector('.tv-grade-status');
      if(status){
        if(normalizeGrade(group.grade)){status.className='tv-grade-status text-xs font-bold text-emerald-300';status.textContent=`${grade}.º confirmado`;}
        else if(grade){status.className='tv-grade-status text-xs font-bold text-amber-300';status.textContent=`${grade}.º detectado por el nombre · confirma en el selector`;}
        else {status.className='tv-grade-status text-xs font-bold text-rose-300';status.textContent='Sin grado: el alumnado no podrá abrir actividades';}
      }
    });
  }

  const prevRenderTeacherGroups=window.renderTeacherGroups;
  window.renderTeacherGroups=function(){const result=typeof prevRenderTeacherGroups==='function'?prevRenderTeacherGroups():undefined;setTimeout(enhanceTeacherGradeControls,0);return result;};

  setTimeout(()=>{enhanceNewGroupForm();if(activeStudent) renderStudentDashboard();},0);
})();

/* Refuerzo 2026-09-16 · Ética, Naturaleza y Sociedades · 3.º · PPA 1
   Amplía la cantidad y la exigencia cognitiva de los 10 retos sin cambiar
   sus mecánicas ni el progreso ya guardado de los alumnos. */
(() => {
  if (window.__tvEns3Refuerzo20260916 || typeof missionCatalog === 'undefined') return;
  window.__tvEns3Refuerzo20260916 = true;

  const tag = m => {
    if (!m) return null;
    m.level = '3.º de Telesecundaria';
    m.difficulty = '3.º secundaria · nivel alto';
    m.cognitiveLevel = 'aplicar-analizar-evaluar-argumentar';
    return m;
  };

  const m1 = tag(missionCatalog.m1);
  if (m1) {
    m1.title = 'R1 · Laboratorio de evidencia, interpretación y acción';
    m1.desc = 'Clasifica y justifica 36 situaciones de tercer grado: evidencia verificable, interpretación razonada o propuesta de investigación/acción. Analiza fuentes, agua, territorio, derechos, igualdad y participación.';
    m1.statements = [...(m1.statements || []),
      {text:'El registro de operación del pozo indica 14 interrupciones del servicio entre enero y marzo.',cat:'E',exp:'Es un dato verificable en un registro; todavía no explica por qué ocurrieron las interrupciones.'},
      {text:'Las 14 interrupciones ocurrieron únicamente por falta de lluvia.',cat:'I',exp:'Atribuye una causa única sin revisar infraestructura, demanda, mantenimiento, energía, gestión u otros factores.'},
      {text:'Contrastemos lluvia, niveles del pozo, reportes de fallas y horarios de bombeo antes de atribuir una causa.',cat:'P',exp:'Propone contrastar variables y fuentes pertinentes para construir una explicación mejor sustentada.'},
      {text:'Una norma municipal reconoce que el servicio de agua debe prestarse sin discriminación.',cat:'E',exp:'La existencia de la norma puede comprobarse en el documento correspondiente.'},
      {text:'Como el derecho está escrito, todas las personas reciben en la práctica el mismo servicio.',cat:'I',exp:'Confunde igualdad normativa con condiciones reales de acceso; hace falta evidencia de implementación.'},
      {text:'Comparemos continuidad, calidad, costo y distancia de acceso entre zonas antes de evaluar la igualdad del servicio.',cat:'P',exp:'Propone indicadores concretos y comparables para analizar igualdad sustantiva.'},
      {text:'En un mapa de 2005 aparece una zona agrícola donde el mapa actual muestra expansión urbana.',cat:'E',exp:'La comparación cartográfica documenta un cambio de uso del territorio si ambas fuentes son comparables.'},
      {text:'La expansión urbana explica por sí sola cualquier cambio posterior en la disponibilidad de agua.',cat:'I',exp:'Es una explicación insuficiente porque puede haber múltiples factores naturales, técnicos, económicos y políticos.'},
      {text:'Construyamos una línea del tiempo con cambios de uso de suelo, población, infraestructura y disponibilidad de agua.',cat:'P',exp:'Organizar variables en el tiempo permite examinar relaciones sin asumir causalidad automática.'},
      {text:'En 22 de 40 encuestas se menciona que el principal problema es la baja presión del agua.',cat:'E',exp:'Es un resultado de esa muestra concreta; debe conservarse el tamaño y la forma de levantamiento.'},
      {text:'Ese resultado demuestra que la baja presión es el principal problema de toda la localidad.',cat:'I',exp:'Generaliza una muestra a una población mayor sin demostrar representatividad.'},
      {text:'Antes de generalizar, revisemos cómo se seleccionó la muestra y comparemos datos de otras zonas.',cat:'P',exp:'Propone verificar representatividad y ampliar el contraste.'},
      {text:'Una crónica de 1930 fue escrita por una autoridad local y describe un conflicto por tierras.',cat:'E',exp:'Autoría, fecha y tema son características verificables de la fuente.'},
      {text:'Por haber sido escrita por una autoridad, la crónica es necesariamente neutral y completa.',cat:'I',exp:'La posición del autor puede influir en selección, lenguaje y silencios; ninguna fuente es automáticamente completa.'},
      {text:'Identifiquemos qué voces aparecen, cuáles faltan y contrastemos la crónica con testimonios, mapas y otros documentos.',cat:'P',exp:'Propone crítica de fuente y corroboración desde distintas perspectivas.'},
      {text:'Los datos de participación muestran que 6 de 25 cargos de representación estudiantil fueron ocupados por mujeres.',cat:'E',exp:'Es un dato cuantitativo verificable para ese periodo y universo observado.'},
      {text:'La diferencia se debe a que las mujeres tienen menos interés natural en participar.',cat:'I',exp:'Es una explicación estereotipada que no está respaldada por los datos y omite barreras posibles.'},
      {text:'Investiguemos horarios, reglas, distribución de tareas, experiencias de trato y oportunidades antes de explicar la diferencia.',cat:'P',exp:'Propone indagar condiciones estructurales y experiencias, en vez de atribuir el resultado a un prejuicio.'}
    ];
  }

  const m2 = tag(missionCatalog.m2);
  if (m2) {
    m2.desc = 'Memorama de 20 conceptos de tercer grado para interpretar procesos históricos, territorio, derecho al agua, desigualdad y participación.';
    m2.pairs = [...(m2.pairs || []),
      {c:'Perspectiva histórica',d:'Punto de vista situado desde el que una persona o grupo interpreta un proceso según su contexto e intereses.'},
      {c:'Actor social',d:'Persona, grupo o institución que interviene en un proceso y puede tener intereses, recursos y capacidad de acción distintos.'},
      {c:'Territorio',d:'Espacio vivido y organizado mediante relaciones sociales, económicas, políticas, culturales y ambientales.'},
      {c:'Justicia hídrica',d:'Análisis de cómo se distribuyen el acceso, los beneficios, costos, riesgos y decisiones relacionados con el agua.'},
      {c:'Igualdad sustantiva',d:'Condición en la que los derechos pueden ejercerse efectivamente, atendiendo barreras que producen desigualdad real.'},
      {c:'Rendición de cuentas',d:'Obligación de informar, justificar decisiones y permitir evaluación de resultados y responsabilidades.'}
    ];
  }

  const m3 = tag(missionCatalog.m3);
  if (m3) {
    m3.desc = '18 reactivos de crítica de fuentes: autoría, propósito, contexto, sesgo, silencios, corroboración, representatividad y alcance de las conclusiones.';
    m3.qs = [...(m3.qs || []),
      ['Un censo de 1940 usa categorías distintas a las actuales. ¿Qué debes hacer antes de comparar porcentajes?',['Revisar definiciones, cobertura y método de ambos censos','Usar las categorías como si fueran idénticas','Comparar sólo los totales','Eliminar el censo antiguo'],0,'Las categorías cambian históricamente; sin equivalencia conceptual la comparación puede ser engañosa.'],
      ['Una imagen fue publicada por una institución para promover una obra pública. ¿Qué aspecto debe analizarse?',['El propósito comunicativo y qué elementos selecciona o deja fuera','Sólo la resolución de la imagen','El número de colores','La marca de la cámara'],0,'El propósito de producción influye en qué se muestra y cómo se presenta.'],
      ['Una entrevista recoge una experiencia de discriminación. ¿Cuál uso es responsable?',['Reconocer su valor como experiencia y evitar presentarla como prueba de que todas las personas vivieron lo mismo','Generalizarla a toda la población','Descartarla por ser subjetiva','Usarla sin consentimiento ni contexto'],0,'Un testimonio aporta experiencia situada; su alcance no debe exagerarse.'],
      ['Dos tablas dan cifras diferentes para el mismo año. ¿Cuál es el siguiente paso más riguroso?',['Revisar población cubierta, definiciones, fuentes y método de cálculo','Elegir la cifra mayor','Promediarlas automáticamente','Descartar ambas sin revisar'],0,'Las discrepancias pueden explicarse por métodos o universos distintos y deben investigarse.'],
      ['Una nota actual describe un conflicto histórico con lenguaje muy valorativo. ¿Qué conviene separar?',['Los datos documentados de las valoraciones e interpretaciones del autor','El título del cuerpo de texto','Las fechas de los nombres','Las imágenes del pie de página'],0,'Distinguir evidencia de valoración ayuda a evaluar argumentos.'],
      ['¿Qué fortalece una explicación sobre cambio histórico?',['Usar varias fuentes, explicar relaciones causales y reconocer límites o incertidumbres','Citar una sola frase contundente','Eliminar evidencias contradictorias','Afirmar que una causa explica todo'],0,'Una explicación histórica sólida integra evidencia diversa y evita el monocausalismo.']
    ];
  }

  const m4 = tag(missionCatalog.m4);
  if (m4) {
    m4.desc = 'Ordena 14 pasos de una investigación histórica de tercer grado, desde la pregunta hasta la revisión pública y el archivo de evidencias.';
    m4.items = [...(m4.items || []),
      'Recibir preguntas o críticas y distinguir cuáles exigen revisar la explicación.',
      'Incorporar correcciones justificadas sin borrar la evidencia que originó el cambio.',
      'Redactar una conclusión que distinga lo bien sustentado de lo probable o todavía incierto.',
      'Conservar un registro de fuentes, decisiones y preguntas nuevas para que la investigación pueda revisarse.'
    ];
  }

  const m5 = tag(missionCatalog.m5);
  if (m5) {
    m5.desc = 'Analiza con datos el agua y el territorio: disponibilidad, cuenca, acuíferos, infraestructura, acceso, calidad, costo, desigualdad y sustentabilidad.';
    m5.qs = [...(m5.qs || []),
      ['Zona A recibe agua 6 días por semana y Zona B 3 días. Ambas tienen la misma población. ¿Qué indicador muestra directamente una desigualdad de continuidad?',['Días de servicio por semana','Color de las tuberías','Número de calles','Nombre del operador'],0,'La continuidad del servicio puede compararse con una unidad común.'],
      ['Un acuífero se recarga 80 unidades y se extraen 104. Si el patrón continúa, ¿cuál es el balance anual?',['-24 unidades','+24 unidades','184 unidades de excedente','0'],0,'80 - 104 = -24; el balance negativo advierte presión sobre la reserva.'],
      ['Una presa está llena, pero una comunidad no recibe agua potable. ¿Qué dimensión falta considerar?',['Infraestructura, potabilización, distribución y gestión del servicio','Sólo precipitación','Sólo volumen almacenado','Sólo temperatura'],0,'Tener agua almacenada no equivale a acceso domiciliario seguro.'],
      ['El consumo total sube 10%, pero la población crece 20%. ¿Qué dato conviene calcular antes de concluir que cada persona consume más?',['Consumo per cápita','Número de fotografías','Longitud de la red','Promedio de edades'],0,'El total puede aumentar por crecimiento poblacional; el consumo por persona permite comparar mejor.'],
      ['Una propuesta reduce fugas, pero deja sin servicio a zonas periféricas durante las reparaciones. ¿Qué debe incluir el plan?',['Medidas temporales de acceso, calendario, comunicación y seguimiento por zona','Sólo el ahorro esperado','Sólo el costo total','Nada adicional'],0,'La eficiencia debe combinarse con continuidad y equidad durante la intervención.'],
      ['¿Cuál conclusión distingue mejor disponibilidad y acceso?',['Puede existir agua en una región y aun así haber acceso desigual por infraestructura, calidad, costo o gestión','Si hay agua natural, el acceso siempre es igual','Acceso y disponibilidad significan exactamente lo mismo','La infraestructura no influye'],0,'La disponibilidad física es sólo una parte del acceso efectivo.']
    ];
  }

  const m6 = tag(missionCatalog.m6);
  if (m6) {
    m6.desc = 'Clasifica causas/condiciones, consecuencias/indicadores y respuestas de gestión en 18 situaciones sobre agua y territorio.';
    m6.items = [...(m6.items || []),
      ['Pérdida de vegetación en una zona de recarga y aumento de superficie impermeable.',0,'Es una condición que puede reducir infiltración y aumentar escurrimiento superficial.'],
      ['Mayor frecuencia de hogares que almacenan agua por interrupciones del servicio.',1,'Es un indicador social observable asociado a problemas de continuidad.'],
      ['Publicar por colonia los horarios, caudales y reportes de calidad del agua.',2,'Es una respuesta de transparencia y gestión que permite vigilancia ciudadana.'],
      ['Crecimiento de la demanda sin ampliación ni mantenimiento de la red.',0,'Puede aumentar presión sobre una infraestructura insuficiente.'],
      ['Aumento de fugas visibles y pérdida de presión en la red.',1,'Son consecuencias o indicadores que pueden revelar deterioro de infraestructura.'],
      ['Crear metas de reducción de fugas con responsables, presupuesto e indicadores públicos.',2,'Es una respuesta de gestión con seguimiento verificable.']
    ];
  }

  const m7 = tag(missionCatalog.m7);
  if (m7) {
    m7.desc = 'Delibera sobre decisiones públicas del agua con 15+ casos que exigen evidencia, derechos, equidad, viabilidad, participación y evaluación.';
    m7.qs = [...(m7.qs || []),
      ['Una propuesta ahorra mucha agua pero desplaza el costo a familias con menor ingreso. ¿Qué evaluación es más completa?',['Comparar ahorro, distribución de costos, asequibilidad y alternativas','Elegirla porque ahorra más','Rechazar cualquier tarifa','Mirar sólo el presupuesto'],0,'La política debe valorar eficiencia y justicia distributiva.'],
      ['Un comité sólo invita a propietarios, aunque también hay personas arrendatarias afectadas. ¿Qué principio falta?',['Participación de los grupos afectados','Rapidez de decisión','Secreto institucional','Mayor publicidad'],0,'La participación debe incluir a quienes reciben beneficios o cargas de la decisión.'],
      ['Dos acciones tienen beneficios semejantes. Una puede evaluarse con datos mensuales y la otra no define indicadores. ¿Cuál ventaja tiene la primera?',['Permite seguimiento y rendición de cuentas','Siempre cuesta menos','Nunca tendrá efectos negativos','Evita consultar a la comunidad'],0,'Los indicadores permiten saber si una acción produjo los resultados esperados.'],
      ['Una solución funciona en temporada de lluvias pero no en sequía. ¿Qué criterio faltó?',['Evaluar su desempeño bajo distintos escenarios y riesgos','Elegir un nombre más atractivo','Aumentar la publicidad','Eliminar las mediciones'],0,'La viabilidad depende de condiciones cambiantes y debe evaluarse ante escenarios críticos.'],
      ['¿Qué argumento es más democrático en una mesa de decisiones?',['“Propongo esta opción por estos datos y cambiaría de postura si aparece evidencia mejor”','“Mi grupo es mayoría y no necesita explicar”','“Quien discrepa no entiende nada”','“No publiquemos los criterios”'],0,'La deliberación democrática combina razones, apertura a revisión y transparencia.'],
      ['Después de seis meses, el consumo baja pero las quejas por calidad aumentan. ¿Qué corresponde hacer?',['Evaluar ambos resultados y revisar la política, no declarar éxito sólo por el ahorro','Ignorar la calidad','Cancelar toda medición','Usar sólo el promedio de consumo'],0,'Una política puede mejorar un indicador y empeorar otro.']
    ];
  }

  const m8 = tag(missionCatalog.m8);
  if (m8) {
    m8.desc = 'Clasifica 18 situaciones y argumenta si expresan igualdad/derecho, equidad/ajuste o discriminación/barrera.';
    m8.items = [...(m8.items || []),
      ['Publicar información escolar en un formato que todo el alumnado pueda consultar en condiciones equivalentes.',0,'Busca garantizar un acceso común al mismo derecho a la información.'],
      ['Ofrecer intérprete de lengua de señas cuando es necesario para participar plenamente en una reunión.',1,'Es una medida de equidad que remueve una barrera de comunicación.'],
      ['Negar la representación de un equipo a una persona por su forma de hablar, aunque cumpla los requisitos.',2,'La exclusión se basa en una característica identitaria y limita un derecho u oportunidad.'],
      ['Establecer un procedimiento de queja disponible para cualquier estudiante y con reglas conocidas.',0,'Expresa una garantía común de acceso a un mecanismo de protección.'],
      ['Adaptar temporalmente una actividad para una lesión sin cambiar el aprendizaje que se evalúa.',1,'Ajusta condiciones para mantener participación y propósito educativo.'],
      ['Separar a estudiantes por origen comunitario porque “así habrá menos conflictos”.',2,'Produce segregación basada en origen y normaliza un prejuicio en lugar de atender el conflicto.']
    ];
  }

  const m9 = tag(missionCatalog.m9);
  if (m9) {
    m9.desc = 'Resuelve dilemas de convivencia de tercer grado: derechos, privacidad, libertad, igualdad, seguridad, inclusión, mayoría, proporcionalidad y participación.';
    m9.qs = [...(m9.qs || []),
      ['Una escuela quiere revisar mensajes privados de todo el alumnado para prevenir conflictos. ¿Qué análisis es más responsable?',['Valorar necesidad, proporcionalidad, privacidad y alternativas menos invasivas','Aceptar cualquier vigilancia por seguridad','Revisar sólo a quien piensa distinto','Publicar los mensajes para disuadir'],0,'Una medida de seguridad debe justificar necesidad y evitar restricciones excesivas.'],
      ['Una estudiante denuncia burlas y la respuesta es “todos reciben bromas”. ¿Qué falta analizar?',['Si el trato está ligado a una característica, produce daño o exclusión y requiere intervención','Sólo cuántas personas rieron','Si la mayoría lo considera divertido','Nada, porque una broma nunca afecta derechos'],0,'La normalización de una conducta no elimina su posible efecto discriminatorio.'],
      ['Una comunidad escolar debe elegir entre dos medidas que afectan de manera distinta a varios grupos. ¿Qué procedimiento es mejor?',['Hacer públicos los criterios, escuchar a los afectados y justificar la opción con evidencia','Elegir en secreto','Dejar decidir al grupo más numeroso sin límites','Evitar registrar desacuerdos'],0,'La legitimidad mejora con transparencia, participación y razones revisables.'],
      ['Una expresión crítica incomoda a una autoridad, pero no amenaza ni discrimina. ¿Qué principio debe considerarse?',['La libertad de expresión protege la crítica, dentro de límites relacionados con derechos de otras personas','Toda crítica debe prohibirse','La autoridad nunca puede ser cuestionada','Sólo la mayoría puede opinar'],0,'La convivencia democrática admite crítica y desacuerdo respetuoso.'],
      ['Una medida de inclusión se aplica por un periodo definido para reducir una barrera comprobada. ¿Qué pregunta permite evaluarla?',['Si la barrera disminuyó, qué efectos produjo y si la medida sigue siendo necesaria y proporcional','Si todos recibieron exactamente lo mismo','Si fue popular en redes','Si nunca puede modificarse'],0,'Las medidas de equidad deben evaluarse por sus objetivos, efectos y necesidad.'],
      ['Dos estudiantes sostienen afirmaciones opuestas sobre discriminación. ¿Qué respuesta fortalece el diálogo?',['Pedir ejemplos y evidencia, escuchar experiencias y distinguir desacuerdo de descalificación personal','Decidir por volumen de voz','Difundir rumores','Evitar cualquier discusión'],0,'El diálogo democrático combina escucha, evidencia y respeto a la dignidad.']
    ];
  }

  const m10 = tag(missionCatalog.m10);
  if (m10) {
    m10.desc = 'Reto integrador ampliado: historia, fuentes, territorio, agua, datos, derechos, igualdad, equidad y participación en decisiones complejas.';
    m10.qs = [...(m10.qs || []),
      ['Un mapa de 1990 y otro de 2025 muestran expansión urbana sobre una zona de recarga. ¿Qué conclusión es responsable?',['Existe un cambio territorial documentable; para afirmar su efecto sobre el acuífero se necesitan además datos hidrológicos','La expansión prueba por sí sola la causa de cualquier sequía','Los mapas no son fuentes','El acuífero necesariamente desapareció'],0,'La evidencia cartográfica muestra cambio espacial, pero la causalidad hidrológica requiere más información.'],
      ['Un programa mejora el promedio de horas de servicio de 8 a 10, pero en la zona con menor ingreso baja de 5 a 4. ¿Qué evaluación es correcta?',['Mejoró el promedio general, pero empeoró una desigualdad que debe analizarse','Fue igualmente exitoso en todas las zonas','El promedio hace irrelevante la zona vulnerable','No se pueden comparar horas'],0,'Los promedios pueden ocultar efectos distributivos opuestos.'],
      ['Tres fuentes coinciden en la fecha de una protesta, pero una la llama “disturbio” y otra “movilización ciudadana”. ¿Qué debes analizar?',['El lenguaje, la posición de los autores, sus evidencias y el contexto','Elegir el término más dramático','Suponer que una fuente miente','Eliminar ambas versiones'],0,'El vocabulario puede expresar perspectivas e intereses distintos sobre un mismo hecho.'],
      ['De 60 estudiantes, 18 reportan una barrera para participar. ¿Qué porcentaje representa?',['30%','18%','42%','60%'],0,'18/60 = 0.30, equivalente a 30% de la muestra.'],
      ['Una propuesta garantiza el mismo horario de atención para todas las zonas, pero una comunidad está a dos horas de distancia. ¿Qué concepto ayuda a revisar la justicia de la medida?',['Equidad y acceso efectivo','Sólo igualdad formal','Promedio aritmético','Neutralidad del mapa'],0,'Tratar igual puede no producir acceso real cuando las condiciones de partida son distintas.'],
      ['Un equipo usa una encuesta voluntaria en línea para describir a toda la comunidad. ¿Qué limitación debe reconocer?',['Puede haber sesgo de selección y exclusión de quienes no tienen acceso o no respondieron','Toda encuesta en línea es exacta','La muestra es necesariamente representativa','No importa quién respondió'],0,'La forma de selección afecta representatividad y alcance de las conclusiones.'],
      ['Una política fue diseñada con participación comunitaria, pero no se publican resultados. ¿Qué principio falta fortalecer?',['Rendición de cuentas y evaluación pública','Sólo libertad de tránsito','Sólo tradición oral','Privacidad absoluta de la institución'],0,'La participación inicial no sustituye la obligación de informar y evaluar resultados.'],
      ['¿Cuál cierre muestra mayor nivel de pensamiento crítico?',['“Con estas evidencias sostenemos una explicación provisional, señalamos sus límites y proponemos qué datos faltan para revisarla”','“Ya tenemos la verdad definitiva”','“Una fuente basta para cualquier conclusión”','“Si la mayoría está de acuerdo, la evidencia no importa”'],0,'El pensamiento crítico reconoce evidencia, alcance, incertidumbre y posibilidad de revisión.']
    ];
  }
})();