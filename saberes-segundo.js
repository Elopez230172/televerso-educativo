/* TeleVerso Educativo · Saberes y pensamiento científico · 2.º de Telesecundaria · PPA 1
   PPA: "Yo también puedo generar conocimiento científico"
   Alineado al cuaderno de Lenguajes 2.º: siete etapas oficiales, 3 proyectos académicos y 10 retos.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD='saberes2';
  const FIELD_TITLE='Saberes y pensamiento científico · 2.º grado · PPA 1';
  const PAPER='Cuaderno Saberes 2.º PPA1';
  const STAGE5='Etapa 5 · Distintas fuentes de consulta';
  const meta=(m,desc,paper,stage,pa,evidence)=>Object.assign(m,{
    field:FIELD,fieldTitle:FIELD_TITLE,level:'2.º de Telesecundaria',grade:2,
    cognitiveLevel:'comprender-aplicar-analizar',desc,paper,stage,pa,evidence
  });

  Object.assign(missionCatalog,{
    sp2_1:meta({id:'sp2_1',title:'R1 · Detective de datos',type:'sp2-classify',icon:'🔎',
      cats:['POBLACIÓN','MUESTRA','DATO CUANTITATIVO','DATO CUALITATIVO'],
      items:[
        ['Todas las y los estudiantes de segundo grado de la escuela.',0,'Es el conjunto total sobre el que se quiere obtener información.'],
        ['Doce estudiantes elegidos al azar para estimar la estatura del grupo.',1,'Es una parte de la población seleccionada para observar o medir.'],
        ['La masa corporal registrada en kilogramos.',2,'Se obtiene mediante medición y se expresa numéricamente.'],
        ['El medio de transporte usado para llegar a la escuela.',3,'Describe una categoría, no una cantidad medida.'],
        ['Las 30 personas que integran el grupo si el estudio pregunta por hábitos de lectura del mismo grupo.',0,'Aquí el grupo completo constituye la población del estudio.'],
        ['Ocho números de lista extraídos de una urna para responder una encuesta.',1,'Es una muestra seleccionada mediante un procedimiento al azar.'],
        ['Número de minutos dedicados a leer al día.',2,'Es un valor numérico obtenido al medir tiempo.'],
        ['Tipo de actividad física preferida.',3,'Se organiza por categorías o cualidades.']
      ]},
      'Clasifica ejemplos para distinguir población, muestra y tipos de datos antes de construir tablas o gráficas.',
      `${PAPER} p. 5`,'Etapa 2 · ¡Ése es el problema!','PA1 · Nuestra comunidad en gráficas','Regla para distinguir población, muestra y tipo de dato.'),

    sp2_2:meta({id:'sp2_2',title:'R2 · Sopa estadística',type:'sp2-wordsearch',icon:'🔤',
      grid:[
        'MUESTRAXPQTZABC','LQWERTYMEDIAKLM','MEDIANABCDRANGO','FRECUENCIAPQRST','HISTOGRAMAZXCVB',
        'DATOSQWERTYUIOP','POBLACIONASDFGH','MODAZXCVBNMLKJH','TABLAFRECUENCIA','GRAFICALINEAXYZ',
        'VARIABLEQAZWSXE','FUENTEPLMOKNIJU','ANALISISBCDFGHI','CIENCIATUVWXYYZ','RANGOMEDIAMODAA'
      ],
      words:[
        {word:'MUESTRA',clue:'Parte de una población elegida para estudiar.'},{word:'MEDIA',clue:'Promedio aritmético.'},
        {word:'MEDIANA',clue:'Valor central de un conjunto ordenado.'},{word:'MODA',clue:'Dato que más se repite.'},
        {word:'RANGO',clue:'Diferencia entre valor máximo y mínimo.'},{word:'FRECUENCIA',clue:'Número o proporción de veces que aparece un dato.'},
        {word:'HISTOGRAMA',clue:'Gráfica de barras continuas para intervalos.'},{word:'DATOS',clue:'Información obtenida al contar, medir u observar.'}
      ]},
      'Encuentra conceptos estadísticos en una sopa interactiva y relaciónalos con ejemplos de tu contexto.',
      `${PAPER} p. 10`,STAGE5,'PA1 · Nuestra comunidad en gráficas','Tres conceptos con un ejemplo real.'),

    sp2_3:meta({id:'sp2_3',title:'R3 · Laboratorio de cálculos',type:'sp2-calc',icon:'🧮',
      problems:[
        {q:'Media de 12, 13, 12, 14, 13',ans:12.8,tol:.01,fb:'Suma 64 y divide entre 5.'},
        {q:'Mediana de 3, 4, 4, 5, 5, 5, 6, 20',ans:5,tol:0,fb:'Hay 8 datos; la mediana es el promedio del 4.º y 5.º, ambos 5.'},
        {q:'Moda de 2, 3, 3, 3, 4, 5, 5',ans:3,tol:0,fb:'El 3 es el valor con mayor frecuencia.'},
        {q:'Rango de 10, 11, 12, 13, 14',ans:4,tol:0,fb:'Rango = máximo - mínimo = 14 - 10.'},
        {q:'Media de 8, 8, 8, 8, 20',ans:10.4,tol:.01,fb:'Suma 52 y divide entre 5.'},
        {q:'Rango de 12, 12, 12, 12, 12',ans:0,tol:0,fb:'Máximo y mínimo son iguales.'}
      ]},
      'Resuelve cálculos de media, mediana, moda y rango; después interpreta qué aporta cada medida.',
      `${PAPER} p. 12`,STAGE5,'PA1 · Nuestra comunidad en gráficas','Procedimientos e interpretación de tres conjuntos.'),

    sp2_4:meta({id:'sp2_4',title:'R4 · Selector de gráficas',type:'sp2-match',icon:'📊',
      pairs:[
        ['Cambios de temperatura durante siete días','Gráfica de línea'],
        ['Frecuencias de estaturas agrupadas en intervalos','Histograma'],
        ['Frecuencias ubicadas en marcas de clase','Gráfica poligonal'],
        ['Preferencia entre cuatro actividades','Gráfica de barras'],
        ['Datos individuales antes de graficar','Tabla de frecuencias']
      ]},
      'Empareja cada propósito con la representación que permite comunicar mejor el comportamiento de los datos.',
      `${PAPER} p. 17`,STAGE5,'PA2 · La ciencia y sus cálculos','Justificación de una representación para el artículo.'),

    sp2_5:meta({id:'sp2_5',title:'R5 · Laboratorio de fuentes',type:'sp2-source',icon:'🧪',
      cats:['USABLE Y VERIFICABLE','REQUIERE VERIFICAR','INSUFICIENTE / ENGAÑOSA'],
      items:[
        ['Reporte institucional con fecha, metodología, población y tabla de datos.',0,'Permite rastrear cómo se obtuvo la información.'],
        ['Captura de pantalla con una cifra pero sin enlace, fecha ni autor.',2,'No permite localizar el origen ni el contexto de la cifra.'],
        ['Tabla creada por el grupo a partir de 28 encuestas registradas y conservadas.',0,'El grupo puede explicar el procedimiento de obtención.'],
        ['Publicación de redes que cita “un estudio reciente” pero no lo identifica.',1,'La afirmación podría ser cierta, pero falta localizar el estudio original.'],
        ['Gráfica con porcentajes que suman 140% y sin explicación de respuestas múltiples.',2,'La presentación necesita contexto o puede inducir a error.'],
        ['Nota periodística que enlaza al informe original y resume sus datos.',1,'Conviene revisar el informe original antes de usar la cifra como evidencia principal.']
      ]},
      'Evalúa la trazabilidad de una fuente antes de incorporar datos a un artículo informativo.',
      `${PAPER} p. 18`,STAGE5,'PA2 · La ciencia y sus cálculos','Criterio de verificación para una fuente.'),

    sp2_6:meta({id:'sp2_6',title:'R6 · Detective de gráficas engañosas',type:'sp2-choice',icon:'🕵️',
      qs:[
        ['Dos barras representan 70 y 74, pero el eje vertical inicia en 69. ¿Qué efecto puede producir?',['Hace que la diferencia parezca mucho mayor.','Hace que ambas barras sean idénticas.','Convierte los datos en cualitativos.'],0,'Un eje recortado puede exagerar visualmente diferencias pequeñas.'],
        ['Una gráfica no tiene unidades en el eje vertical. ¿Qué problema aparece?',['No sabemos qué cantidad representa la escala.','La media cambia automáticamente.','El título deja de importar.'],0,'Sin unidades es difícil interpretar la magnitud de los valores.'],
        ['Una gráfica usa intervalos de diferente amplitud como si fueran iguales. ¿Qué conviene hacer?',['Revisar la escala y la construcción antes de comparar alturas.','Elegir la barra de color más fuerte.','Aceptar la conclusión porque hay números.'],0,'La escala debe ser coherente para que la comparación sea válida.'],
        ['Una publicación muestra sólo los meses que favorecen su argumento. ¿Qué falta revisar?',['El periodo completo y el criterio de selección.','La moda del color de las barras.','El tamaño de la letra.'],0,'Seleccionar sólo una parte conveniente puede ocultar la tendencia general.'],
        ['¿Qué combinación fortalece una gráfica científica?',['Título, ejes, unidades, fuente y escala clara.','Colores brillantes y animación.','Muchos iconos sin etiquetas.'],0,'Los elementos de contexto permiten leer y verificar la gráfica.']
      ]},
      'Analiza escalas, ejes, periodos y fuentes para detectar representaciones que pueden distorsionar un mensaje.',
      `${PAPER} p. 20`,STAGE5,'PA2 · La ciencia y sus cálculos','Dos señales de alerta para revisar gráficas publicadas.'),

    sp2_7:meta({id:'sp2_7',title:'R7 · Crucigrama de estadística y equidad',type:'sp2-crossword',icon:'✍️',size:13,
      entries:[
        {word:'DATOS',r:6,c:1,dir:'H',clue:'Información obtenida al observar, contar o medir.'},
        {word:'MEDIA',r:3,c:4,dir:'V',clue:'Promedio aritmético.'},
        {word:'RANGO',r:6,c:4,dir:'V',clue:'Diferencia entre el valor máximo y el mínimo.'},
        {word:'MUESTRA',r:2,c:8,dir:'V',clue:'Parte de una población seleccionada para estudiar.'},
        {word:'EQUIDAD',r:9,c:2,dir:'H',clue:'Condiciones justas para ejercer derechos y oportunidades.'},
        {word:'FUENTE',r:1,c:10,dir:'V',clue:'Origen verificable de la información.'}
      ]},
      'Completa un crucigrama real con conceptos que usarás para organizar datos y explicar límites del estudio.',
      `${PAPER} p. 25`,STAGE5,'PA3 · Equidad de género en gráficas','Dos conceptos usados en una explicación del proyecto.'),

    sp2_8:meta({id:'sp2_8',title:'R8 · Evidencia y representación',type:'sp2-match',icon:'🔗',
      pairs:[
        ['Aportaciones registradas por año','Gráfica de línea'],
        ['Cantidad de casos por área de conocimiento','Gráfica de barras'],
        ['Valores agrupados en intervalos','Histograma'],
        ['Frecuencia conectada por marcas de clase','Gráfica poligonal'],
        ['Persona, aportación y fuente','Tabla de registro']
      ]},
      'Relaciona distintos tipos de evidencia con formas de representación útiles para el proyecto sobre equidad.',
      `${PAPER} p. 27`,STAGE5,'PA3 · Equidad de género en gráficas','Justificación de una pareja y el contexto que no debe perderse.'),

    sp2_9:meta({id:'sp2_9',title:'R9 · Ruta de interpretación',type:'sp2-story',icon:'🧭',
      scenes:[
        {title:'Estación 1 · Frecuencias',q:'Una gráfica muestra 8 casos de un grupo y 5 de otro. ¿Qué conclusión es más rigurosa?',opts:['El primer grupo siempre aporta más.','En esta muestra aparecen 8 y 5 casos; necesito contexto antes de generalizar.'],ans:1,fb:'Una muestra no autoriza conclusiones universales sin revisar alcance y sesgos.'},
        {title:'Estación 2 · Periodo',q:'La fuente sólo cubre el último año. ¿Qué debes hacer?',opts:['Presentarlo como si describiera toda la historia.','Indicar explícitamente el periodo y evitar extender la conclusión.'],ans:1,fb:'El periodo forma parte del contexto de los datos.'},
        {title:'Estación 3 · Escalas',q:'Dos gráficas usan escalas diferentes. ¿Qué haces antes de compararlas?',opts:['Comparo sólo la altura visual.','Reviso unidades, límites y escala de ambos ejes.'],ans:1,fb:'Las escalas diferentes pueden producir impresiones engañosas.'},
        {title:'Estación 4 · Calidad',q:'Un área tiene pocos casos pero aportaciones muy relevantes. ¿Qué reconoce un análisis cuidadoso?',opts:['La frecuencia resume por completo el valor de una aportación.','La cantidad de casos es una dimensión y debe complementarse con contexto cualitativo.'],ans:1,fb:'No todo el significado puede reducirse a una sola frecuencia.'},
        {title:'Estación 5 · Cierre',q:'¿Qué cierre comunica mejor el estudio?',opts:['“Los datos demuestran definitivamente cómo es toda la sociedad”.','“En nuestra colección observamos este patrón; señalamos sus límites y proponemos ampliar la búsqueda”.'],ans:1,fb:'Una conclusión científica declara alcance y límites.'}
      ]},
      'Toma decisiones de interpretación para evitar generalizaciones y explicar con honestidad lo que sí muestran los datos.',
      `${PAPER} p. 29`,STAGE5,'PA3 · Equidad de género en gráficas','Ajuste a una interpretación para declarar alcance y límites.'),

    sp2_10:meta({id:'sp2_10',title:'R10 · Escape DATOS',type:'sp2-escape',icon:'🔐',
      locks:[
        {letter:'D',title:'Dato verificable',q:'¿Qué acompaña mejor a una cifra?',opts:['Su fuente y contexto.','Un color llamativo.','Una opinión sin evidencia.'],ans:0,fb:'Un dato debe poder rastrearse y comprenderse en contexto.'},
        {letter:'A',title:'Análisis',q:'Si existe un valor extremo muy grande, ¿qué medida suele resistir mejor su influencia?',opts:['Mediana.','Media aritmética siempre.','Ninguna, porque no se puede analizar.'],ans:0,fb:'La mediana suele ser menos sensible a valores extremos.'},
        {letter:'T',title:'Tipo de gráfica',q:'¿Qué gráfica muestra cambios a lo largo del tiempo?',opts:['Gráfica de línea.','Histograma necesariamente.','Tabla sin ordenar.'],ans:0,fb:'Una línea ayuda a visualizar tendencias o cambios temporales.'},
        {letter:'O',title:'Origen',q:'¿Qué práctica fortalece un artículo científico escolar?',opts:['Registrar fuente o procedimiento de obtención.','Ocultar de dónde salieron los datos.','Eliminar unidades.'],ans:0,fb:'La trazabilidad permite revisar la evidencia.'},
        {letter:'S',title:'Síntesis',q:'¿Cuál conclusión es más responsable?',opts:['La que reconoce lo que muestran los datos y sus límites.','La que generaliza a toda la población sin revisar la muestra.','La que ignora resultados incómodos.'],ans:0,fb:'La síntesis debe ser proporcional a la evidencia disponible.'}
      ]},
      'Abre cinco candados integrando recolección, cálculo, representación, fuentes e interpretación. Código final: DATOS.',
      `${PAPER} p. 30`,'Etapa 6 · Unimos las piezas','Integración de PA1, PA2 y PA3','Una mejora concreta en cada uno de los tres productos.')
  });

  const prevSetField=window.tvSetField;
  const prevGrid=window.renderStudentMissionsGrid || renderStudentMissionsGrid;
  const prevLaunch=window.launchMission || launchMission;
  const currentField=()=>localStorage.getItem('televerso_active_field') || 'lenguajes';
  const missions=()=>Object.values(missionCatalog).filter(m=>m.field===FIELD);

  const roadmapHtml=()=>`<div class="col-span-full glass-panel p-5 rounded-3xl border border-emerald-500/20">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><span class="text-[10px] uppercase tracking-widest font-black text-emerald-300">Ruta oficial del proyecto</span><h4 class="text-lg font-black text-white mt-1">Las siete etapas del PPA 1</h4></div><span class="text-[11px] text-slate-400">Cuaderno pp. 3-31</span></div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px]">
      ${[
        ['1','¿Qué haremos?','Propósito, detonador y producto.'],
        ['2','¡Ése es el problema!','R1 + diagnóstico de datos.'],
        ['3','¡Una propuesta de solución!','Pregunta y horizonte.'],
        ['4','Paso a paso','Plan, responsables y tiempos.'],
        ['5','Distintas fuentes de consulta','R2-R9 + investigación de los 3 PA.'],
        ['6','Unimos las piezas','Revisión de productos + R10.'],
        ['7','¡Ya lo tenemos!','Presentación, valoración y retroalimentación.']
      ].map(([n,t,d])=>`<div class="rounded-2xl bg-slate-900/70 border border-white/10 p-3"><span class="inline-flex w-7 h-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 font-black">${n}</span><strong class="block text-white mt-2">${t}</strong><span class="block text-slate-400 mt-1 leading-relaxed">${d}</span></div>`).join('')}
    </div></div>`;

  function ensureUI(){
    const selector=document.getElementById('tv-field-selector');
    if(selector && !document.getElementById('tv-btn-spc2')){
      const grid=selector.querySelector('.grid');
      if(grid){
        const b=document.createElement('button');
        b.id='tv-btn-spc2'; b.setAttribute('onclick',"tvSetField('saberes2')");
        b.className='p-4 rounded-2xl text-left bg-slate-800/80 hover:bg-slate-700 border border-white/10 transition';
        b.innerHTML='<span class="block text-[10px] font-black uppercase tracking-wider text-emerald-300">Campo formativo · 2.º grado</span><strong class="block text-white mt-1 text-sm">Saberes · PPA 1</strong><span class="block text-[10px] text-slate-400 mt-1">7 etapas · 3 proyectos · 10 retos</span>';
        grid.appendChild(b);
      }
    }
    const anchor=document.getElementById('tv-badges-leng2') || document.getElementById('tv-badges-spc') || document.getElementById('tv-badges-leng');
    if(anchor && !document.getElementById('tv-badges-spc2')){
      const d=document.createElement('div');d.id='tv-badges-spc2';d.className='hidden';
      d.innerHTML='<h4 class="text-sm font-black text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2"><i class="fa-solid fa-flask text-emerald-400"></i> Insignias Cooperativas · Saberes 2.º</h4><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div id="sp2-badge-data" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Explorador de datos</strong><span class="block text-[11px] text-slate-400">R1-R3 · problema, conceptos y cálculos.</span></div><div id="sp2-badge-graph" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Analista científico</strong><span class="block text-[11px] text-slate-400">R4-R6 · artículo, fuentes y gráficas.</span></div><div id="sp2-badge-science" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Comunicador con evidencia</strong><span class="block text-[11px] text-slate-400">R7-R10 · equidad, interpretación e integración.</span></div></div>';
      anchor.after(d);
    }
    syncVisibility();
  }
  function syncVisibility(){
    const active=currentField()===FIELD;
    document.getElementById('tv-badges-spc2')?.classList.toggle('hidden',!active);
    if(!active) document.getElementById('tv-btn-spc2')?.classList.remove('ring-2','ring-emerald-400','bg-emerald-950/50');
  }
  function updateLocks(){
    const comp=activeStudent?.completed||{};
    missions().forEach(m=>{const e=document.getElementById(`badge-mission-${m.id}`);if(e)e.className=comp[m.id]?'fa-solid fa-circle-check text-emerald-400 text-base':'fa-solid fa-lock text-slate-500 text-base';});
    [['sp2-badge-data',['sp2_1','sp2_2','sp2_3']],['sp2-badge-graph',['sp2_4','sp2_5','sp2_6']],['sp2-badge-science',['sp2_7','sp2_8','sp2_9','sp2_10']]].forEach(([id,ks])=>{const e=document.getElementById(id);if(e)e.classList.toggle('opacity-50',!ks.every(k=>comp[k]));});
  }
  function renderGrid(){
    ensureUI();const c=document.getElementById('student-missions-grid');if(!c)return;
    const ms=missions();const heading=c.previousElementSibling;if(heading&&heading.tagName==='H4')heading.innerHTML='<i class="fa-solid fa-flask text-emerald-400"></i> Saberes y pensamiento científico · 2.º grado · PPA 1 · 7 etapas · 10 retos';
    c.innerHTML=roadmapHtml()+ms.map((m,i)=>`<div class="glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 border-t-emerald-500"><div><div class="flex justify-between items-start gap-2 mb-3"><div class="space-y-1"><span class="inline-block px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase rounded-lg border border-emerald-500/30">Misión ${i+1}</span><span class="block text-[10px] font-black text-cyan-300">${m.stage}</span><span class="block text-[10px] text-slate-400">${m.pa}</span></div><i id="badge-mission-${m.id}" class="fa-solid fa-lock text-slate-500 text-base"></i></div><h4 class="text-base font-bold text-white mb-1.5">${m.icon} ${m.title}</h4><p class="text-slate-300 text-xs mb-2 leading-relaxed">${m.desc}</p><div class="rounded-xl bg-slate-900/50 border border-white/5 p-2.5 mb-3"><span class="text-[9px] uppercase tracking-wider text-slate-500 font-black">Evidencia en papel</span><p class="text-[11px] text-slate-300 mt-1">${m.evidence}</p></div><p class="text-amber-300/90 text-[11px] font-semibold mb-4">Actividad equivalente: ${m.paper}</p></div><button onclick="launchMission('${m.id}')" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition"><i class="fa-solid fa-play mr-1"></i> Iniciar reto</button></div>`).join('');
    ['tv-badges-ens','tv-badges-leng','tv-badges-spc','tv-badges-leng2'].forEach(id=>document.getElementById(id)?.classList.add('hidden'));
    document.getElementById('tv-badges-spc2')?.classList.remove('hidden');
    ['tv-btn-ens','tv-btn-leng','tv-btn-spc','tv-btn-leng2','tv-btn-spc2'].forEach(id=>document.getElementById(id)?.classList.remove('ring-2','ring-emerald-400','ring-sky-400','ring-indigo-400','bg-indigo-950/50','bg-sky-950/50','bg-emerald-950/50'));
    document.getElementById('tv-btn-spc2')?.classList.add('ring-2','ring-emerald-400','bg-emerald-950/50');updateLocks();
  }

  window.tvSetField=function(field){
    if(field===FIELD){localStorage.setItem('televerso_active_field',FIELD);renderGrid();return;}
    localStorage.setItem('televerso_active_field',field);const r=typeof prevSetField==='function'?prevSetField(field):undefined;setTimeout(()=>{ensureUI();syncVisibility();},0);return r;
  };
  window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){if(currentField()===FIELD)return renderGrid();const r=prevGrid();setTimeout(()=>{ensureUI();syncVisibility();},0);return r;};

  function open(m){activeMissionKey=m.id;missionGameState={};document.getElementById('modal-mission').classList.remove('hidden');}
  const head=(m,p='')=>`<div class="flex flex-wrap justify-between gap-2 text-xs font-bold text-emerald-300"><span>${p}</span><span class="text-amber-300">${m.paper}</span></div><div class="flex flex-wrap gap-2"><span class="px-2 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-black">${m.stage}</span><span class="px-2 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] font-black">${m.pa}</span></div><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><p class="text-slate-300 text-xs">${m.desc}</p><p class="text-[11px] text-slate-400"><b class="text-emerald-300">Evidencia:</b> ${m.evidence}</p>`;
  window.launchMission=launchMission=function(id){const m=missionCatalog[id];if(!m||m.field!==FIELD)return prevLaunch(id);open(m);({'sp2-classify':classify,'sp2-wordsearch':wordsearch,'sp2-calc':calc,'sp2-match':match,'sp2-source':classify,'sp2-choice':choice,'sp2-crossword':crossword,'sp2-story':story,'sp2-escape':escape}[m.type]||(()=>{}))(m);};

  function classify(m){missionGameState={list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]};classRender();}
  function classRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=s.list.length){saveMissionResults(`Clasificación completada. Registra en ${m.paper} la evidencia indicada: ${m.evidence}`);return;}const[text,ans,fb]=s.list[s.idx];window._sp2class={text,ans,fb};a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Caso ${s.idx+1}/${s.list.length} · Aciertos ${s.hits}`)}<div class="glass-card p-6 rounded-2xl"><p class="text-base font-semibold text-center">${text}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${m.cats.map((x,i)=>`<button onclick="sp2ClassAnswer(${i})" class="p-3.5 bg-slate-800 hover:bg-emerald-600 rounded-xl font-bold text-xs">${x}</button>`).join('')}</div></div>`;}
  window.sp2ClassAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,o=window._sp2class,ok=i===o.ans;ok?s.hits++:s.errors++;s.details.push({statement:o.text,selected:m.cats[i],expected:m.cats[o.ans],isCorrect:ok,explanation:o.fb});Swal.fire({icon:ok?'success':'info',title:ok?'Correcto':'Revisa la definición',text:o.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;classRender();});};

  function choice(m){missionGameState={idx:0,hits:0,errors:0,details:[]};choiceRender();}
  function choiceRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.qs.length){saveMissionResults(`Reto completado. Registra en ${m.paper}: ${m.evidence}`);return;}const[q,opts]=m.qs[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Pregunta ${s.idx+1}/${m.qs.length} · Aciertos ${s.hits}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-base sm:text-lg font-black text-center mb-4">${q}</p><div class="grid gap-3">${opts.map((o,i)=>`<button onclick="sp2ChoiceAnswer(${i})" class="p-4 bg-slate-800 hover:bg-emerald-600 rounded-xl text-left text-sm font-bold">${String.fromCharCode(65+i)} · ${o}</button>`).join('')}</div></div></div>`;}
  window.sp2ChoiceAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,[q,opts,ans,fb]=m.qs[s.idx],ok=i===ans;ok?s.hits++:s.errors++;s.details.push({statement:q,selected:opts[i],expected:opts[ans],isCorrect:ok,explanation:fb});Swal.fire({icon:ok?'success':'info',title:ok?'Buena lectura':'Revisa la evidencia',text:fb,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;choiceRender();});};

  function calc(m){missionGameState={idx:0,hits:0,errors:0,details:[]};calcRender();}
  function calcRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.problems.length){saveMissionResults(`Laboratorio completado. Compara tus procedimientos con ${m.paper} y registra la interpretación.`);return;}const p=m.problems[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Cálculo ${s.idx+1}/${m.problems.length} · Aciertos ${s.hits}`)}<div class="glass-card p-6 rounded-2xl text-center"><div class="text-4xl mb-3">🧮</div><p class="text-lg font-black mb-4">${p.q}</p><input id="sp2-calc-answer" inputmode="decimal" class="w-full max-w-xs bg-slate-950 border border-emerald-500/40 rounded-xl px-4 py-3 text-center text-xl font-black text-white" placeholder="Escribe el resultado"><button onclick="sp2CalcCheck()" class="mt-4 w-full max-w-xs py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-black">Comprobar</button></div></div>`;}
  window.sp2CalcCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState,p=m.problems[s.idx],raw=document.getElementById('sp2-calc-answer')?.value.replace(',','.'),v=Number(raw);if(!Number.isFinite(v))return Swal.fire('Falta un número','Escribe un resultado numérico.','info');const ok=Math.abs(v-p.ans)<=p.tol;ok?s.hits++:s.errors++;s.details.push({statement:p.q,selected:String(v),expected:String(p.ans),isCorrect:ok,explanation:p.fb});Swal.fire({icon:ok?'success':'info',title:ok?'Cálculo correcto':'Revisa el procedimiento',text:p.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;calcRender();});};

  function match(m){missionGameState={left:m.pairs.map((p,i)=>({i,t:p[0]})).sort(()=>Math.random()-.5),right:m.pairs.map((p,i)=>({i,t:p[1]})).sort(()=>Math.random()-.5),sel:null,done:[],hits:0,errors:0,details:[]};matchRender();}
  function matchRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.done.length===m.pairs.length){saveMissionResults(`Emparejamiento completado. Registra en ${m.paper}: ${m.evidence}`);return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Parejas ${s.done.length}/${m.pairs.length}`)}<p class="text-xs text-slate-400">Elige una tarjeta morada y después su pareja verde.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">${s.left.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="sp2MatchLeft(${o.i})" class="w-full p-3 rounded-xl text-left font-bold text-xs ${s.done.includes(o.i)?'opacity-30 bg-slate-800':s.sel===o.i?'bg-violet-500':'bg-violet-800 hover:bg-violet-700'}">${o.t}</button>`).join('')}</div><div class="space-y-2">${s.right.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="sp2MatchRight(${o.i})" class="w-full p-3 rounded-xl text-left font-semibold text-xs ${s.done.includes(o.i)?'opacity-30 bg-slate-800':'bg-emerald-800 hover:bg-emerald-700'}">${o.t}</button>`).join('')}</div></div></div>`;}
  window.sp2MatchLeft=i=>{missionGameState.sel=i;matchRender();};
  window.sp2MatchRight=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(s.sel===null)return Swal.fire('Primero selecciona a la izquierda','','info');const left=s.sel,ok=left===i;ok?s.hits++:s.errors++;s.details.push({statement:m.pairs[left][0],selected:m.pairs[i][1],expected:m.pairs[left][1],isCorrect:ok,explanation:ok?'Relación correcta.':'Revisa qué representación o función corresponde.'});if(ok){s.done.push(i);s.sel=null;Swal.fire({icon:'success',title:'Pareja correcta',timer:800,showConfirmButton:false}).then(matchRender);}else Swal.fire({icon:'info',title:'No forman pareja',text:'Prueba otra opción.',confirmButtonText:'Seguir'});};

  function wordsearch(m){missionGameState={found:[],start:null,hits:0,errors:0,details:[]};wordRender();}
  function wordRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.found.length===m.words.length){saveMissionResults(`Sopa completada. Registra en ${m.paper}: ${m.evidence}`);return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Encontradas ${s.found.length}/${m.words.length}`)}<p class="text-xs text-slate-400">Toca la primera y la última letra de una palabra en línea recta.</p><div class="grid grid-cols-1 lg:grid-cols-[auto_220px] gap-4"><div class="overflow-auto"><div class="inline-grid gap-0" style="grid-template-columns:repeat(${m.grid[0].length},2rem)">${m.grid.flatMap((row,r)=>row.split('').map((ch,c)=>`<button onclick="sp2WordCell(${r},${c})" class="w-8 h-8 border border-slate-700 text-xs font-black ${s.start&&s.start[0]===r&&s.start[1]===c?'bg-cyan-500 text-slate-950':'bg-slate-900 hover:bg-slate-700'}">${ch}</button>`)).join('')}</div></div><div class="glass-card p-4 rounded-2xl"><h4 class="font-black text-emerald-300 mb-3">Conceptos</h4>${m.words.map(w=>`<div class="mb-2 ${s.found.includes(w.word)?'line-through text-emerald-400':'text-slate-200'}"><strong class="text-xs">${w.word}</strong><span class="block text-[10px] text-slate-400">${w.clue}</span></div>`).join('')}</div></div></div>`;}
  window.sp2WordCell=(r,c)=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(!s.start){s.start=[r,c];wordRender();return;}const[r0,c0]=s.start,dr=Math.sign(r-r0),dc=Math.sign(c-c0);if(!(r===r0||c===c0||Math.abs(r-r0)===Math.abs(c-c0))){s.errors++;s.start=null;return Swal.fire({icon:'info',title:'Selecciona una línea recta',text:'Puede ser horizontal, vertical o diagonal.',confirmButtonText:'Intentar'}).then(wordRender);}const len=Math.max(Math.abs(r-r0),Math.abs(c-c0))+1;let word='';for(let k=0;k<len;k++)word+=m.grid[r0+dr*k][c0+dc*k];const rev=word.split('').reverse().join('');const target=m.words.find(w=>(w.word===word||w.word===rev)&&!s.found.includes(w.word));if(target){s.hits++;s.found.push(target.word);s.details.push({statement:target.clue,selected:target.word,expected:target.word,isCorrect:true,explanation:'Palabra localizada correctamente.'});Swal.fire({icon:'success',title:target.word,text:target.clue,timer:1000,showConfirmButton:false}).then(()=>{s.start=null;wordRender();});}else{s.errors++;s.start=null;Swal.fire({icon:'info',title:'Esa selección no corresponde',text:'Busca otra palabra de la lista.',confirmButtonText:'Seguir'}).then(wordRender);}};

  function crossword(m){missionGameState={hits:0,errors:0,details:[]};crossRender();}
  function crossRender(){const m=missionCatalog[activeMissionKey],a=document.getElementById('mission-content-area'),cells={};m.entries.forEach((e,ei)=>{[...e.word].forEach((ch,k)=>{const r=e.r+(e.dir==='V'?k:0),c=e.c+(e.dir==='H'?k:0),key=`${r}-${c}`;if(!cells[key])cells[key]={r,c,ch,nums:[]};cells[key].nums.push(ei+1);});});const html=[];for(let r=0;r<m.size;r++)for(let c=0;c<m.size;c++){const key=`${r}-${c}`,cell=cells[key];html.push(cell?`<div class="relative w-8 h-8 bg-white border border-slate-500"><input data-cross="${key}" maxlength="1" class="w-full h-full text-center uppercase text-slate-950 font-black text-sm outline-none" aria-label="casilla ${key}">${cell.nums.length?`<span class="absolute left-0.5 top-0 text-[7px] text-slate-500">${cell.nums.join('/')}</span>`:''}</div>`:`<div class="w-8 h-8 bg-transparent"></div>`);}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,'Completa todas las casillas')}<div class="grid grid-cols-1 xl:grid-cols-[auto_300px] gap-5"><div class="overflow-auto"><div class="inline-grid" style="grid-template-columns:repeat(${m.size},2rem)">${html.join('')}</div></div><div class="glass-card p-4 rounded-2xl"><h4 class="font-black text-violet-300 mb-3">Pistas</h4>${m.entries.map((e,i)=>`<p class="text-xs mb-2"><strong>${i+1}. ${e.dir==='H'?'Horizontal':'Vertical'}:</strong> ${e.clue}</p>`).join('')}<button onclick="sp2CrossCheck()" class="w-full mt-3 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-black">Comprobar crucigrama</button></div></div></div>`;}
  window.sp2CrossCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let all=true,correct=0,total=0;const expected={};m.entries.forEach(e=>[...e.word].forEach((ch,k)=>{const r=e.r+(e.dir==='V'?k:0),c=e.c+(e.dir==='H'?k:0);expected[`${r}-${c}`]=ch;}));Object.entries(expected).forEach(([key,ch])=>{total++;const inp=document.querySelector(`[data-cross="${key}"]`),v=(inp?.value||'').toUpperCase();const ok=v===ch;if(ok){correct++;inp?.classList.add('bg-emerald-100');}else{all=false;inp?.classList.add('bg-rose-100');}});if(all){s.hits=m.entries.length;s.details=m.entries.map(e=>({statement:e.clue,selected:e.word,expected:e.word,isCorrect:true,explanation:'Concepto correcto.'}));saveMissionResults(`Crucigrama completado. Registra en ${m.paper}: ${m.evidence}`);}else{s.errors++;Swal.fire({icon:'info',title:'Aún faltan casillas',text:`Letras correctas: ${correct} de ${total}.`,confirmButtonText:'Seguir intentando'});}};

  function story(m){missionGameState={idx:0,hits:0,errors:0,details:[]};storyRender();}
  function storyRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.scenes.length){saveMissionResults(`Ruta completada. Registra en ${m.paper}: ${m.evidence}`);return;}const sc=m.scenes[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Estación ${s.idx+1}/${m.scenes.length}`)}<div class="glass-card p-6 rounded-2xl"><h4 class="font-black text-emerald-300 mb-2">${sc.title}</h4><p class="font-semibold mb-4">${sc.q}</p><div class="grid gap-3">${sc.opts.map((o,i)=>`<button onclick="sp2StoryAnswer(${i})" class="p-4 bg-slate-800 hover:bg-emerald-600 rounded-xl text-left text-sm font-bold">${o}</button>`).join('')}</div></div></div>`;}
  window.sp2StoryAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,sc=m.scenes[s.idx],ok=i===sc.ans;ok?s.hits++:s.errors++;s.details.push({statement:sc.q,selected:sc.opts[i],expected:sc.opts[sc.ans],isCorrect:ok,explanation:sc.fb});Swal.fire({icon:ok?'success':'info',title:ok?'Interpretación rigurosa':'Cuidado con la generalización',text:sc.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;storyRender();});};

  function escape(m){missionGameState={idx:0,hits:0,errors:0,letters:[],details:[]};escapeRender();}
  function escapeRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.locks.length){saveMissionResults(`Escape completado. Código: ${s.letters.join('')}. Registra en ${m.paper}: ${m.evidence}`);return;}const lk=m.locks[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Candado ${s.idx+1}/5 · Código: ${s.letters.join(' ')} ${'_ '.repeat(5-s.letters.length)}`)}<div class="glass-card p-6 rounded-2xl border border-emerald-500/30"><div class="text-center text-4xl mb-3">🔒</div><h4 class="text-center text-lg font-black text-emerald-300 mb-3">${lk.title}</h4><p class="font-semibold mb-4">${lk.q}</p><div class="grid gap-3">${lk.opts.map((o,i)=>`<button onclick="sp2EscapeAnswer(${i})" class="p-3.5 bg-slate-800 hover:bg-emerald-600 rounded-xl text-left font-bold text-sm">${o}</button>`).join('')}</div></div></div>`;}
  window.sp2EscapeAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,lk=m.locks[s.idx],ok=i===lk.ans;ok?s.hits++:s.errors++;s.details.push({statement:lk.q,selected:lk.opts[i],expected:lk.opts[lk.ans],isCorrect:ok,explanation:lk.fb});if(ok){s.letters.push(lk.letter);Swal.fire({icon:'success',title:`Candado abierto: ${lk.letter}`,text:lk.fb,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;escapeRender();});}else Swal.fire({icon:'info',title:'El candado sigue cerrado',text:lk.fb,confirmButtonText:'Intentar otra vez'});};

  setTimeout(ensureUI,0);
})();
