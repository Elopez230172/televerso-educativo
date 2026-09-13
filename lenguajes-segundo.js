/* TeleVerso Educativo · Lenguajes · 2.º de Telesecundaria · PPA 1
   PPA: "¡Nos comunicamos en la riqueza de la diversidad!"
   Ruta paralela e independiente de Lenguajes 3.º.
   Mecánicas: clasificación, sopa de letras, ordenar, Kahoot sin velocidad,
   memorama, emparejamiento, crucigrama, historieta ordenable, ruta narrativa y escape.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD='lenguajes2';
  const FIELD_TITLE='Lenguajes · 2.º grado · PPA 1';
  const PAPER='Cuaderno Lenguajes 2.º PPA1';
  const meta=(m,desc,paper)=>Object.assign(m,{field:FIELD,fieldTitle:FIELD_TITLE,level:'2.º de Telesecundaria',cognitiveLevel:'comprender-aplicar-analizar',desc,paper});

  Object.assign(missionCatalog, {
    l2_1: meta({
      id:'l2_1',title:'R1 · Detective de variantes',type:'l2-classify',icon:'🔎',
      cats:['CONTEXTO · cambia según la situación','VARIANTE · forma de hablar de un grupo o región','ESTEREOTIPO · juicio que debemos revisar'],
      items:[
        ['Una estudiante usa un registro más formal al exponer que al conversar en el recreo.',0,'La situación comunicativa cambia y con ella las elecciones de palabras y tono.'],
        ['En una región se usa una palabra distinta para nombrar el mismo alimento.',1,'Es un ejemplo de variación léxica relacionada con región o comunidad.'],
        ['“Quien usa esa expresión habla mal español”.',2,'Convierte una diferencia lingüística en un juicio sobre la persona.'],
        ['Dos personas pronuncian de manera diferente una palabra y aun así se comprenden.',1,'La pronunciación también puede variar sin impedir la comunicación.'],
        ['En un chat aparecen abreviaturas que no se usarían igual en una carta formal.',0,'El registro depende del canal, el propósito y el destinatario.'],
        ['“Sólo una forma de hablar es correcta en cualquier situación”.',2,'Ignora que la lengua cambia según contexto, región y comunidad.'],
        ['Una palabra del náhuatl se usa hoy dentro del español mexicano.',1,'El contacto entre lenguas puede enriquecer el vocabulario.'],
        ['Una misma persona saluda de modo distinto a su familia y a una autoridad que visita la escuela.',0,'Adecuar el registro al interlocutor es parte de la competencia comunicativa.'],
        ['“Si no entiendo su acento, su manera de hablar no vale”.',2,'La dificultad de comprensión no justifica desvalorizar una variante o a sus hablantes.']
      ]
    },'Clasifica situaciones para distinguir contexto comunicativo, variantes lingüísticas y estereotipos. La meta es explicar por qué hablar diferente no significa hablar peor.',`${PAPER} p. 5`),

    l2_2: meta({
      id:'l2_2',title:'R2 · Sopa de palabras en movimiento',type:'l2-wordsearch',icon:'🔤',
      grid:[
        'QEXPRESIONPCYB','DEUFZVCONTEXTO','NTCMMRTOQIRAVX','DVLIRYEIYUKDJN','FOVEDAXGXIQYFQ','DUJANEUQITGELY','FRYQRGNATSKPAD',
        'LZJHBIUTHSTCCX','PCYRYEAAIEVRPR','FIQTNGRNYDXWOG','WJMVULOQTOADHH','CKASRHSHAECDWU','BHCBKDIALOGOCQ','HIVPRESTAMOPGR'
      ],
      words:[
        {word:'VARIANTE',clue:'Forma de una lengua asociada con una región, grupo o situación de uso.'},
        {word:'CONTEXTO',clue:'Situación, lugar, participantes y propósito que ayudan a comprender un mensaje.'},
        {word:'IDENTIDAD',clue:'Sentido de quiénes somos y de pertenencia a una comunidad.'},
        {word:'LENGUA',clue:'Sistema de comunicación compartido por una comunidad de hablantes.'},
        {word:'PRESTAMO',clue:'Palabra incorporada desde otra lengua.'},
        {word:'DIALOGO',clue:'Intercambio de ideas entre personas.'},
        {word:'EXPRESION',clue:'Manera de comunicar pensamientos, emociones o significados.'},
        {word:'REGISTRO',clue:'Elección de formas lingüísticas según situación, destinatario y propósito.'}
      ]
    },'Resuelve pistas conceptuales y localiza las palabras en una sopa interactiva. Después relaciona conceptos con ejemplos de tu entorno.',`${PAPER} p. 10`),

    l2_3: meta({
      id:'l2_3',title:'R3 · Rompecabezas del esquema',type:'l2-sequence',icon:'🧩',
      items:[
        'Definir qué idea principal comunicará el esquema ilustrado.',
        'Seleccionar ejemplos lingüísticos verificables y comprensibles.',
        'Agrupar los ejemplos en categorías que tengan sentido.',
        'Escribir títulos y frases breves que expliquen las relaciones.',
        'Elegir imágenes, flechas o símbolos que realmente ayuden a comprender.',
        'Revisar que no haya burlas, etiquetas o generalizaciones sobre hablantes.',
        'Probar el esquema con otra persona y corregir lo que resulte confuso.'
      ]
    },'Ordena las decisiones necesarias para construir un esquema ilustrado claro, contextualizado y respetuoso.',`${PAPER} p. 12`),

    l2_4: meta({
      id:'l2_4',title:'R4 · Kahoot pluricultural',type:'l2-choice',icon:'🎯',
      qs:[
        ['Quieres explicar una festividad a alguien que no la conoce. ¿Qué opción comunica mejor?',['Decir sólo el nombre.','Incluir nombre, contexto, imagen y una explicación breve.','Usar una imagen sin pie ni explicación.'],1,'Dar contexto ayuda a que la imagen o el nombre no se interpreten fuera de su sentido.'],
        ['Encuentras dos formas de decir una frase en otra lengua. ¿Qué conviene?',['Elegir la más corta al azar.','Preguntar por variante, región o situación de uso.','Decir que una forma está “mal”.'],1,'Las diferencias pueden corresponder a variantes o contextos distintos.'],
        ['Una exposición combina palabras, imágenes y narración oral. ¿Qué demuestra?',['Que varios lenguajes pueden funcionar juntos en un mismo acto comunicativo.','Que sólo las imágenes comunican.','Que el texto escrito ya no sirve.'],0,'Los recursos escritos, orales y gráficos pueden complementarse.'],
        ['Un compañero no comprende una palabra que usaste. ¿Qué acción favorece la comunicación?',['Burlarse.','Explicarla con un ejemplo o apoyo visual.','Repetirla más rápido.'],1,'Comunicar implica ajustar recursos para que el público construya el sentido.'],
        ['Quieres mostrar diversidad cultural. ¿Qué opción es más cuidadosa?',['Presentar una práctica como si representara a todas las personas.','Mostrar ejemplos con contexto y reconocer que dentro de una cultura también hay diferencias.','Evitar explicar cualquier diferencia.'],1,'La diversidad existe entre culturas y también dentro de cada comunidad.'],
        ['Una frase traducida por una aplicación suena extraña y nadie del equipo puede verificarla. ¿Qué haces?',['La publicas porque la aplicación siempre sabe.','La dejas marcada como pendiente y buscas una fuente o persona que pueda verificarla.','La cambias por una palabra inventada.'],1,'Una herramienta puede apoyar, pero el equipo sigue siendo responsable de verificar.'],
        ['¿Cuál es un buen cierre de exposición?',['Recuperar la idea central e invitar al público a preguntar.','Leer todos los apuntes otra vez.','Terminar sin decir nada.'],0,'El cierre ayuda a fijar el propósito y abre el diálogo.']
      ]
    },'Tarjetas grandes tipo Kahoot para tomar decisiones sobre lenguajes escritos, orales y gráficos, traducción, contexto y diversidad. Sin cronómetro.',`${PAPER} p. 17`),

    l2_5: meta({
      id:'l2_5',title:'R5 · Memorama de actos comunicativos',type:'l2-memory',icon:'🧠',
      pairs:[
        ['Relato oral','Conserva y transmite experiencias mediante voz, memoria y escucha.'],
        ['Texto escrito','Permite registrar, releer y compartir información a distancia o con el tiempo.'],
        ['Imagen / cartel','Organiza información visual y puede reforzar una idea con símbolos.'],
        ['Gesto','Puede complementar o modificar el sentido de lo que se dice.'],
        ['Indumentaria','Puede comunicar pertenencia, ocasión o función según el contexto.'],
        ['Música / sonido','Puede marcar ambiente, ritmo, emoción o participación colectiva.'],
        ['Palabra en otra lengua','Puede abrir otra perspectiva si se verifica y se explica su contexto.']
      ]
    },'Relaciona formas de comunicación con su función. Al terminar, aplica cuatro parejas a ejemplos de tu comunidad.',`${PAPER} p. 18`),

    l2_6: meta({
      id:'l2_6',title:'R6 · Empareja para exponer',type:'l2-match',icon:'🧷',
      pairs:[
        ['Saludo y propósito','Ubica qué se presentará y para qué.'],
        ['Contexto de la práctica','Explica lugar, momento, participantes y sentido.'],
        ['Palabra o frase verificada','Muestra otra lengua sin inventar equivalencias.'],
        ['Imagen o ejemplo','Ayuda al público a observar o comprender una idea concreta.'],
        ['Explicación en español','Aclara el significado para el público.'],
        ['Fuente o crédito','Reconoce procedencia de la información o colaboración.'],
        ['Cierre y preguntas','Recupera la idea central e invita al diálogo.']
      ]
    },'Empareja cada parte del guion con su función para construir una exposición breve, clara y respetuosa.',`${PAPER} p. 20`),

    l2_7: meta({
      id:'l2_7',title:'R7 · Crucigrama de fiesta y cultura',type:'l2-crossword',icon:'✍️',
      size:15,
      entries:[
        {n:1,word:'TRADICION',r:7,c:3,dir:'H',clue:'Prácticas y significados que una comunidad transmite y transforma con el tiempo.'},
        {n:2,word:'NARRACION',r:6,c:5,dir:'V',clue:'Relato de acontecimientos con personajes, tiempo y espacio.'},
        {n:3,word:'IDENTIDAD',r:14,c:2,dir:'H',clue:'Sentido de pertenencia que puede expresarse en lengua, relatos y costumbres.'},
        {n:4,word:'FESTIVIDAD',r:12,c:1,dir:'H',clue:'Celebración colectiva que puede incluir música, comida, indumentaria o rituales.'},
        {n:5,word:'CONTEXTO',r:13,c:4,dir:'H',clue:'Información sobre lugar, momento y participantes que ayuda a comprender una práctica.'},
        {n:6,word:'NARRADOR',r:7,c:11,dir:'V',clue:'Persona o voz que cuenta una historia.'},
        {n:7,word:'COMPARAR',r:11,c:5,dir:'H',clue:'Poner dos casos en relación para reconocer semejanzas y diferencias.'}
      ]
    },'Resuelve un crucigrama con conceptos necesarios para investigar y redactar una narración festiva con contexto.',`${PAPER} p. 25`),

    l2_8: meta({
      id:'l2_8',title:'R8 · Historieta desordenada',type:'l2-sequence',icon:'🗯️',
      items:[
        'Una visitante escucha una palabra durante una fiesta y pregunta qué significa.',
        'Una joven del lugar explica el significado y aclara que en otra comunidad puede decirse de otra manera.',
        'La visitante reconoce que había supuesto que sólo existía una forma “correcta”.',
        'Ambas observan un cartel con imágenes, palabras y créditos de quienes colaboraron.',
        'La joven invita a consultar otras voces para conocer más variantes y relatos.'
      ]
    },'Ordena las viñetas para construir una interacción respetuosa entre hablantes y reconocer que el contexto cambia el sentido.',`${PAPER} p. 27`),

    l2_9: meta({
      id:'l2_9',title:'R9 · Ruta de narración festiva',type:'l2-story',icon:'🎭',
      scenes:[
        {title:'Escena 1 · El inicio',q:'¿Cómo conviene iniciar?',opts:['“Había una fiesta rara y todos hacían cosas extrañas”.','Ubicar lugar, momento, participantes y propósito de la celebración.'],ans:1,fb:'El contexto permite comprender antes de juzgar.'},
        {title:'Escena 2 · La voz',q:'¿Qué narrador resulta más riguroso?',opts:['Una voz que sabe todo aunque no diga de dónde lo obtuvo.','Una voz que distingue lo observado de lo que otras personas le explicaron.'],ans:1,fb:'Distinguir observación y testimonio hace la narración más clara.'},
        {title:'Escena 3 · Una palabra',q:'Incluyes una palabra de la comunidad. ¿Qué haces?',opts:['La escribes sin explicar porque “se ve auténtica”.','La verificas y explicas brevemente qué significa en esa situación.'],ans:1,fb:'Una palabra no debe convertirse en decoración sin sentido.'},
        {title:'Escena 4 · Comparación',q:'Encuentras una festividad parecida en otro país. ¿Cómo la comparas?',opts:['Decides cuál es mejor.','Señalas semejanzas y diferencias, explicando que responden a contextos distintos.'],ans:1,fb:'Comparar sirve para comprender, no para jerarquizar culturas.'},
        {title:'Escena 5 · El cierre',q:'¿Qué cierre fortalece tu relato?',opts:['Terminar justo después del último acontecimiento.','Recuperar qué permite comprender la historia sobre identidad, comunicación o comunidad.'],ans:1,fb:'El cierre puede devolver al lector la idea central de la narración.'}
      ]
    },'Recorre cinco decisiones de escritura para construir una narración festiva con contexto, voz, detalle lingüístico, comparación y cierre.',`${PAPER} p. 29`),

    l2_10: meta({
      id:'l2_10',title:'R10 · Escape Diversidad',type:'l2-escape',icon:'🔐',
      locks:[
        {letter:'V',title:'Candado de variante',q:'Una palabra cambia entre regiones. ¿Qué conclusión abre el candado?',opts:['Una forma es inferior.','Las lenguas presentan variantes; necesito contexto para explicar el uso.','Ninguna de las dos pertenece al español.'],ans:1,fb:'La variación es parte del funcionamiento de las lenguas.'},
        {letter:'O',title:'Candado de oralidad',q:'Un relato vive en la memoria de varias personas. ¿Cómo documentarlo?',opts:['Escuchar, registrar quién lo comparte y conservar que es una fuente oral.','Inventar un autor escrito.','Descartar el relato porque no está impreso.'],ans:0,fb:'La oralidad es una forma válida de transmisión; debe documentarse con su procedencia.'},
        {letter:'C',title:'Candado de contexto',q:'Una imagen de una festividad no tiene fecha ni lugar. ¿Qué falta antes de usarla?',opts:['Sólo hacerla más grande.','Buscar procedencia, lugar, momento y qué representa.','Cambiar los colores.'],ans:1,fb:'Sin contexto, una imagen puede interpretarse de forma equivocada.'},
        {letter:'E',title:'Candado de exposición',q:'Una frase traducida no ha sido verificada. ¿Qué decisión es responsable?',opts:['Presentarla como correcta.','Marcarla como pendiente y verificarla con una fuente o persona competente.','Cambiar una palabra al azar.'],ans:1,fb:'La verificación es parte del trabajo comunicativo.'},
        {letter:'S',title:'Candado de sentido',q:'Comparas dos festividades. ¿Qué forma evita convertirlas en competencia?',opts:['Explicar semejanzas, diferencias y contextos sin decidir cuál es “mejor”.','Dar puntos a cada cultura.','Elegir la más llamativa como superior.'],ans:0,fb:'La comparación intercultural busca comprender, no establecer jerarquías.'}
      ]
    },'Escape final de cinco candados que integra esquema ilustrado, exposición en distintas lenguas y narración festiva. El código final es VOCES.',`${PAPER} p. 30`)
  });

  const prevSetField=window.tvSetField;
  const prevGrid=window.renderStudentMissionsGrid || renderStudentMissionsGrid;
  const prevLaunch=window.launchMission || launchMission;
  const currentField=()=>localStorage.getItem('televerso_active_field') || 'lenguajes';
  const l2Missions=()=>Object.values(missionCatalog).filter(m=>m.field===FIELD);

  function ensureL2UI(){
    const selector=document.getElementById('tv-field-selector');
    if(selector && !document.getElementById('tv-btn-leng2')){
      const grid=selector.querySelector('.grid');
      if(grid){
        grid.classList.remove('sm:grid-cols-3');
        grid.classList.add('sm:grid-cols-2','lg:grid-cols-4');
        const b=document.createElement('button');
        b.id='tv-btn-leng2'; b.setAttribute('onclick',"tvSetField('lenguajes2')");
        b.className='p-4 rounded-2xl text-left bg-slate-800/80 hover:bg-slate-700 border border-white/10 transition';
        b.innerHTML='<span class="block text-[10px] font-black uppercase tracking-wider text-sky-300">Campo formativo · 2.º grado</span><strong class="block text-white mt-1 text-sm">Lenguajes · PPA 1</strong><span class="block text-[10px] text-slate-400 mt-1">Riqueza de la diversidad</span>';
        grid.appendChild(b);
      }
    }
    const ens=document.getElementById('tv-badges-ens');
    if(ens && !document.getElementById('tv-badges-leng2')){
      const d=document.createElement('div'); d.id='tv-badges-leng2'; d.className='hidden';
      d.innerHTML='<h4 class="text-sm font-black text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2"><i class="fa-solid fa-award text-sky-400"></i> Insignias Cooperativas · Lenguajes 2.º</h4><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div id="l2-badge-explorer" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Explorador lingüístico</strong><span class="block text-[11px] text-slate-400">R1-R3 · variantes, conceptos y esquema.</span></div><div id="l2-badge-communicator" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Comunicador pluricultural</strong><span class="block text-[11px] text-slate-400">R4-R6 · actos comunicativos y exposición.</span></div><div id="l2-badge-narrator" class="glass-card p-4 rounded-2xl opacity-50"><strong class="text-white">Narrador de la diversidad</strong><span class="block text-[11px] text-slate-400">R7-R10 · fiesta, historieta y narración.</span></div></div>';
      const anchor=document.getElementById('tv-badges-spc') || document.getElementById('tv-badges-leng') || ens;
      anchor.after(d);
    }
  }

  function updateL2Locks(){
    const comp=activeStudent?.completed || {};
    l2Missions().forEach(m=>{const el=document.getElementById(`badge-mission-${m.id}`);if(el)el.className=comp[m.id]?'fa-solid fa-circle-check text-emerald-400 text-base':'fa-solid fa-lock text-slate-500 text-base';});
    [['l2-badge-explorer',['l2_1','l2_2','l2_3']],['l2-badge-communicator',['l2_4','l2_5','l2_6']],['l2-badge-narrator',['l2_7','l2_8','l2_9','l2_10']]].forEach(([id,ks])=>{const e=document.getElementById(id);if(e)e.classList.toggle('opacity-50',!ks.every(k=>comp[k]));});
  }

  function renderL2Grid(){
    ensureL2UI();
    const c=document.getElementById('student-missions-grid'); if(!c)return;
    const missions=l2Missions();
    const heading=c.previousElementSibling; if(heading&&heading.tagName==='H4')heading.innerHTML='<i class="fa-solid fa-list-check text-sky-400"></i> Lenguajes · 2.º grado · PPA 1 · 10 retos';
    c.innerHTML=missions.map((m,i)=>`<div class="glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 border-t-sky-500"><div><div class="flex justify-between items-center mb-3"><span class="px-2.5 py-0.5 bg-sky-500/20 text-sky-300 text-[10px] font-black uppercase rounded-lg border border-sky-500/30">Misión ${i+1}</span><i id="badge-mission-${m.id}" class="fa-solid fa-lock text-slate-500 text-base"></i></div><h4 class="text-base font-bold text-white mb-1.5">${m.icon} ${m.title}</h4><p class="text-slate-300 text-xs mb-2 leading-relaxed">${m.desc}</p><p class="text-amber-300/90 text-[11px] font-semibold mb-4">Actividad equivalente: ${m.paper}</p></div><button onclick="launchMission('${m.id}')" class="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs transition"><i class="fa-solid fa-play mr-1"></i> Iniciar reto</button></div>`).join('');
    ['tv-badges-ens','tv-badges-leng','tv-badges-spc'].forEach(id=>document.getElementById(id)?.classList.add('hidden'));
    document.getElementById('tv-badges-leng2')?.classList.remove('hidden');
    ['tv-btn-ens','tv-btn-leng','tv-btn-spc','tv-btn-leng2'].forEach(id=>document.getElementById(id)?.classList.remove('ring-2','ring-sky-400','ring-indigo-400','bg-indigo-950/50','bg-sky-950/50'));
    document.getElementById('tv-btn-leng2')?.classList.add('ring-2','ring-sky-400','bg-sky-950/50');
    updateL2Locks();
  }

  window.tvSetField=function(field){
    if(field===FIELD){localStorage.setItem('televerso_active_field',FIELD);renderL2Grid();return;}
    localStorage.setItem('televerso_active_field',field);
    const r=typeof prevSetField==='function'?prevSetField(field):undefined;
    setTimeout(ensureL2UI,0); return r;
  };
  window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){
    if(currentField()===FIELD) return renderL2Grid();
    const r=prevGrid(); setTimeout(ensureL2UI,0); return r;
  };

  function openMission(m){activeMissionKey=m.id;missionGameState={};document.getElementById('modal-mission').classList.remove('hidden');}
  const head=(m,progress='')=>`<div class="flex flex-wrap justify-between gap-2 text-xs font-bold text-sky-300"><span>${progress}</span><span class="text-amber-300">${m.paper}</span></div><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><p class="text-slate-300 text-xs">${m.desc}</p>`;
  window.launchMission=launchMission=function(id){const m=missionCatalog[id];if(!m||m.field!==FIELD)return prevLaunch(id);openMission(m);({'l2-classify':l2Classify,'l2-wordsearch':l2Wordsearch,'l2-sequence':l2Sequence,'l2-choice':l2Choice,'l2-memory':l2Memory,'l2-match':l2Match,'l2-crossword':l2Crossword,'l2-story':l2Story,'l2-escape':l2Escape}[m.type]||(()=>{}))(m);};

  function l2Classify(m){missionGameState={list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]};l2ClassRender();}
  function l2ClassRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=s.list.length){saveMissionResults('Reto completado. Elige una frase del cuaderno y explica por qué la corregirías o conservarías.');return;}const [text,ans,fb]=s.list[s.idx];window._l2class={text,ans,fb};a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Caso ${s.idx+1} de ${s.list.length} · Aciertos ${s.hits}`)}<div class="glass-card p-6 rounded-2xl text-center"><p class="text-base sm:text-lg font-semibold">${text}</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3">${m.cats.map((x,i)=>`<button onclick="l2ClassAnswer(${i})" class="p-3.5 bg-slate-800 hover:bg-sky-600 rounded-xl font-bold text-xs sm:text-sm">${x}</button>`).join('')}</div></div>`;}
  window.l2ClassAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,o=window._l2class,ok=i===o.ans;ok?s.hits++:s.errors++;s.details.push({statement:o.text,selected:m.cats[i],expected:m.cats[o.ans],isCorrect:ok,explanation:o.fb});Swal.fire({icon:ok?'success':'info',title:ok?'Bien observado':'Revisa el contexto',text:o.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;l2ClassRender();});};

  function l2Choice(m){missionGameState={idx:0,hits:0,errors:0,details:[]};l2ChoiceRender();}
  function l2ChoiceRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.qs.length){saveMissionResults('Kahoot completado. No se evaluó la rapidez: registra en el cuaderno una decisión que mejoraste.');return;}const[q,opts]=m.qs[s.idx];const bg=['bg-rose-600 hover:bg-rose-500','bg-blue-600 hover:bg-blue-500','bg-amber-500 hover:bg-amber-400','bg-emerald-600 hover:bg-emerald-500'];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Tarjeta ${s.idx+1} de ${m.qs.length} · Aciertos ${s.hits}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-base sm:text-lg font-black text-center mb-4">${q}</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${opts.map((o,i)=>`<button onclick="l2ChoiceAnswer(${i})" class="min-h-20 p-4 ${bg[i%bg.length]} text-white rounded-2xl font-black text-sm text-left">${String.fromCharCode(65+i)} · ${o}</button>`).join('')}</div></div><p class="text-[11px] text-slate-400 italic">Aquí importa explicar la decisión, no responder primero.</p></div>`;}
  window.l2ChoiceAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,[q,opts,ans,fb]=m.qs[s.idx],ok=i===ans;ok?s.hits++:s.errors++;s.details.push({statement:q,selected:opts[i],expected:opts[ans],isCorrect:ok,explanation:fb});Swal.fire({icon:ok?'success':'info',title:ok?'Buena decisión':'Vuelve al propósito comunicativo',text:fb,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;l2ChoiceRender();});};

  function l2Sequence(m){missionGameState={items:[...m.items].sort(()=>Math.random()-.5),hits:0,errors:0,details:[]};l2SeqRender();}
  function l2SeqRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Ordena ${m.items.length} tarjetas`)}<div class="space-y-2">${s.items.map((x,i)=>`<div class="glass-card p-3 rounded-xl flex items-center gap-3"><span class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-black text-xs">${i+1}</span><span class="flex-1 text-xs sm:text-sm font-semibold">${x}</span><button onclick="l2SeqMove(${i},-1)" class="px-2.5 py-2 bg-slate-800 rounded-lg">▲</button><button onclick="l2SeqMove(${i},1)" class="px-2.5 py-2 bg-slate-800 rounded-lg">▼</button></div>`).join('')}</div><button onclick="l2SeqCheck()" class="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl">Comprobar orden</button></div>`;}
  window.l2SeqMove=(i,d)=>{const s=missionGameState,j=i+d;if(j<0||j>=s.items.length)return;[s.items[i],s.items[j]]=[s.items[j],s.items[i]];l2SeqRender();};
  window.l2SeqCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let n=0;s.items.forEach((x,i)=>{if(x===m.items[i])n++;});if(n===m.items.length){s.hits=n;s.details=m.items.map((x,i)=>({statement:`Paso ${i+1}`,selected:x,expected:x,isCorrect:true,explanation:'Ubicación correcta en la secuencia.'}));saveMissionResults('Secuencia completada. Usa este orden para revisar el producto correspondiente en el cuaderno.');}else{s.errors+=m.items.length-n;Swal.fire({icon:'info',title:'Aún hay piezas por mover',text:`Tienes ${n} de ${m.items.length} en la posición esperada.`,confirmButtonText:'Seguir intentando'});}};

  function l2Memory(m){let deck=[];m.pairs.forEach((p,i)=>deck.push({p:i,t:p[0]},{p:i,t:p[1]}));missionGameState={deck:deck.sort(()=>Math.random()-.5),flipped:[],matched:[],hits:0,errors:0,details:[]};l2MemRender();}
  function l2MemRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.matched.length===s.deck.length){saveMissionResults('Memorama completado. Elige cuatro parejas y busca ejemplos reales en tu comunidad.');return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Parejas ${s.matched.length/2}/${m.pairs.length}`)}<div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">${s.deck.map((c,i)=>{const show=s.flipped.includes(i)||s.matched.includes(i);return`<button onclick="l2MemFlip(${i})" class="min-h-24 glass-card rounded-2xl p-2.5 text-center ${s.matched.includes(i)?'opacity-40 pointer-events-none':''}">${show?`<span class="text-xs font-bold">${c.t}</span>`:'<i class="fa-solid fa-shapes text-2xl text-sky-400"></i>'}</button>`;}).join('')}</div></div>`;}
  window.l2MemFlip=i=>{const s=missionGameState;if(s.flipped.length>=2||s.flipped.includes(i)||s.matched.includes(i))return;s.flipped.push(i);l2MemRender();if(s.flipped.length===2){const[a,b]=s.flipped,c1=s.deck[a],c2=s.deck[b];if(c1.p===c2.p){s.hits++;s.matched.push(a,b);s.details.push({statement:c1.t,selected:c2.t,expected:c2.t,isCorrect:true,explanation:'Pareja correcta.'});s.flipped=[];setTimeout(l2MemRender,250);}else{s.errors++;setTimeout(()=>{s.flipped=[];l2MemRender();},850);}}};

  function l2Match(m){missionGameState={left:m.pairs.map((p,i)=>({i,t:p[0]})).sort(()=>Math.random()-.5),right:m.pairs.map((p,i)=>({i,t:p[1]})).sort(()=>Math.random()-.5),sel:null,done:[],hits:0,errors:0,details:[]};l2MatchRender();}
  function l2MatchRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.done.length===m.pairs.length){saveMissionResults('Emparejamiento completado. Usa las funciones para ordenar tu guion de exposición.');return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Parejas ${s.done.length}/${m.pairs.length}`)}<p class="text-xs text-slate-400">Primero elige una tarjeta azul; después selecciona su función verde.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">${s.left.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="l2MatchLeft(${o.i})" class="w-full p-3 rounded-xl text-left font-bold text-xs ${s.done.includes(o.i)?'opacity-30 bg-slate-800':s.sel===o.i?'bg-sky-500':'bg-sky-800 hover:bg-sky-700'}">${o.t}</button>`).join('')}</div><div class="space-y-2">${s.right.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="l2MatchRight(${o.i})" class="w-full p-3 rounded-xl text-left font-semibold text-xs ${s.done.includes(o.i)?'opacity-30 bg-slate-800':'bg-emerald-800 hover:bg-emerald-700'}">${o.t}</button>`).join('')}</div></div></div>`;}
  window.l2MatchLeft=i=>{missionGameState.sel=i;l2MatchRender();};
  window.l2MatchRight=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(s.sel===null)return Swal.fire({icon:'info',title:'Primero elige una parte del guion',text:'Selecciona una tarjeta azul y después su función.'});const ok=s.sel===i,li=s.sel;ok?s.hits++:s.errors++;s.details.push({statement:m.pairs[li][0],selected:m.pairs[i][1],expected:m.pairs[li][1],isCorrect:ok,explanation:ok?'Función correcta.':'Busca qué función cumple realmente esa parte del guion.'});if(ok){s.done.push(i);s.sel=null;Swal.fire({icon:'success',title:'Pareja correcta',text:m.pairs[i][1],timer:900,showConfirmButton:false}).then(l2MatchRender);}else Swal.fire({icon:'info',title:'No forman pareja',text:'Prueba otra función; conserva la tarjeta azul seleccionada.',confirmButtonText:'Intentar otra'});};

  function l2Wordsearch(m){
    const positions={};const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];const G=m.grid.map(r=>r.split(''));
    m.words.forEach(w=>{const word=w.word.toUpperCase();for(let r=0;r<G.length;r++)for(let c=0;c<G[0].length;c++)for(const[dr,dc]of dirs){let ok=true,coords=[];for(let k=0;k<word.length;k++){const rr=r+dr*k,cc=c+dc*k;if(rr<0||cc<0||rr>=G.length||cc>=G[0].length||G[rr][cc]!==word[k]){ok=false;break;}coords.push(`${rr}-${cc}`);}if(ok&&!positions[word])positions[word]=coords;}});
    missionGameState={positions,found:[],start:null,hits:0,errors:0,details:[]};l2WSRender();
  }
  function l2WSRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.found.length===m.words.length){saveMissionResults('Sopa completada. Elige tres conceptos y escribe un ejemplo de tu entorno en el cuaderno.');return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Encontradas ${s.found.length}/${m.words.length}`)}<p class="text-xs text-slate-400">Haz clic en la primera letra y después en la última. La palabra debe estar en línea recta.</p><div class="grid lg:grid-cols-[auto_1fr] gap-5 items-start"><div class="inline-grid gap-0" style="grid-template-columns:repeat(${m.grid[0].length},1.8rem)">${m.grid.flatMap((row,r)=>row.split('').map((ch,c)=>{const key=`${r}-${c}`,found=Object.entries(s.positions).some(([w,coords])=>s.found.includes(w)&&coords.includes(key)),sel=s.start===key;return`<button onclick="l2WSCell(${r},${c})" class="w-7 h-7 text-[11px] font-black border border-slate-600 ${found?'bg-emerald-600':sel?'bg-amber-500':'bg-slate-800 hover:bg-sky-700'}">${ch}</button>`;})).join('')}</div><div class="space-y-2">${m.words.map((w,i)=>`<div class="p-3 rounded-xl ${s.found.includes(w.word)?'bg-emerald-900/50 line-through':'glass-card'}"><span class="text-[10px] text-sky-300 font-black">PISTA ${i+1}</span><p class="text-xs">${w.clue}</p></div>`).join('')}</div></div></div>`;}
  window.l2WSCell=(r,c)=>{const m=missionCatalog[activeMissionKey],s=missionGameState,key=`${r}-${c}`;if(!s.start){s.start=key;l2WSRender();return;}const start=s.start;s.start=null;let hit=null;for(const w of m.words){if(s.found.includes(w.word))continue;const coords=s.positions[w.word];if(coords&&((coords[0]===start&&coords[coords.length-1]===key)||(coords[0]===key&&coords[coords.length-1]===start))){hit=w;break;}}if(hit){s.hits++;s.found.push(hit.word);s.details.push({statement:hit.clue,selected:hit.word,expected:hit.word,isCorrect:true,explanation:'Concepto localizado a partir de la pista.'});Swal.fire({icon:'success',title:`Encontraste ${hit.word}`,text:hit.clue,timer:900,showConfirmButton:false}).then(l2WSRender);}else{s.errors++;Swal.fire({icon:'info',title:'Esa línea no corresponde',text:'Prueba con otra pista o revisa la dirección.',timer:900,showConfirmButton:false}).then(l2WSRender);}};

  function l2Crossword(m){missionGameState={answers:{},hits:0,errors:0,details:[]};l2CWRender();}
  function l2CWRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');const cells={};m.entries.forEach(e=>{[...e.word].forEach((ch,k)=>{const r=e.r+(e.dir==='V'?k:0),c=e.c+(e.dir==='H'?k:0),key=`${r}-${c}`;cells[key]=ch;});});let grid='';for(let r=0;r<m.size;r++)for(let c=0;c<m.size;c++){const key=`${r}-${c}`;grid+=cells[key]?`<div class="w-7 h-7 border border-slate-500 bg-white text-slate-900 flex items-center justify-center text-[11px] font-black"></div>`:`<div class="w-7 h-7 bg-slate-950/80"></div>`;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,'Completa las 7 pistas')}<div class="grid lg:grid-cols-[auto_1fr] gap-5"><div><div class="inline-grid gap-0" style="grid-template-columns:repeat(${m.size},1.75rem)">${grid}</div><p class="text-[10px] text-slate-500 mt-2">La cuadrícula muestra la forma general; escribe las respuestas en las pistas.</p></div><div class="space-y-2">${m.entries.map(e=>`<div class="glass-card p-3 rounded-xl"><label class="text-xs"><b>${e.n}. ${e.clue}</b></label><input id="l2cw-${e.n}" value="${s.answers[e.n]||''}" class="mt-2 w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 uppercase text-sm" placeholder="Respuesta"></div>`).join('')}</div></div><button onclick="l2CWCheck()" class="w-full py-3 bg-sky-600 hover:bg-sky-500 rounded-xl font-black">Comprobar crucigrama</button></div>`;}
  window.l2CWCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let correct=0;s.details=[];m.entries.forEach(e=>{const v=(document.getElementById(`l2cw-${e.n}`)?.value||'').trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');s.answers[e.n]=v;const exp=e.word.normalize('NFD').replace(/[\u0300-\u036f]/g,'');const ok=v===exp;if(ok)correct++;s.details.push({statement:e.clue,selected:v,expected:e.word,isCorrect:ok,explanation:ok?'Concepto correcto.':'Revisa la pista y el significado en el cuaderno.'});});s.hits=correct;s.errors=m.entries.length-correct;if(correct===m.entries.length)saveMissionResults('Crucigrama completado. Escribe en el cuaderno un ejemplo propio de dos conceptos.');else Swal.fire({icon:'info',title:`${correct} de ${m.entries.length} correctas`,text:'Revisa las pistas que aún no coinciden.',confirmButtonText:'Seguir'}).then(l2CWRender);};

  function l2Story(m){missionGameState={idx:0,hits:0,errors:0,details:[]};l2StoryRender();}
  function l2StoryRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.scenes.length){saveMissionResults('Ruta narrativa completada. Revisa tu borrador y aplica al menos una de estas decisiones.');return;}const sc=m.scenes[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`${sc.title} · ${s.idx+1}/${m.scenes.length}`)}<div class="glass-card p-6 rounded-2xl"><p class="text-lg font-black mb-4">${sc.q}</p><div class="grid gap-3">${sc.opts.map((o,i)=>`<button onclick="l2StoryAnswer(${i})" class="p-4 text-left rounded-xl font-bold text-sm ${i?'bg-emerald-700 hover:bg-emerald-600':'bg-slate-700 hover:bg-slate-600'}">${o}</button>`).join('')}</div></div></div>`;}
  window.l2StoryAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,sc=m.scenes[s.idx],ok=i===sc.ans;ok?s.hits++:s.errors++;s.details.push({statement:sc.q,selected:sc.opts[i],expected:sc.opts[sc.ans],isCorrect:ok,explanation:sc.fb});Swal.fire({icon:ok?'success':'info',title:ok?'La historia gana contexto':'Prueba una decisión más clara',text:sc.fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;l2StoryRender();});};

  function l2Escape(m){missionGameState={idx:0,hits:0,errors:0,letters:[],details:[]};l2EscapeRender();}
  function l2EscapeRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.locks.length){saveMissionResults(`Escape completado. Código: ${s.letters.join('')}. Explica una mejora para cada producto del PPA.`);return;}const lk=m.locks[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Candado ${s.idx+1}/5 · Código: ${s.letters.join(' ')} ${'_ '.repeat(5-s.letters.length)}`)}<div class="glass-card p-6 rounded-2xl border border-rose-500/30"><div class="text-center text-4xl mb-3">🔒</div><h4 class="text-center text-lg font-black text-rose-300 mb-3">${lk.title}</h4><p class="font-semibold mb-4">${lk.q}</p><div class="grid gap-3">${lk.opts.map((o,i)=>`<button onclick="l2EscapeAnswer(${i})" class="p-3.5 bg-slate-800 hover:bg-rose-600 rounded-xl text-left font-bold text-sm">${o}</button>`).join('')}</div></div></div>`;}
  window.l2EscapeAnswer=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,lk=m.locks[s.idx],ok=i===lk.ans;ok?s.hits++:s.errors++;s.details.push({statement:lk.q,selected:lk.opts[i],expected:lk.opts[lk.ans],isCorrect:ok,explanation:lk.fb});if(ok){s.letters.push(lk.letter);Swal.fire({icon:'success',title:`Candado abierto: ${lk.letter}`,text:lk.fb,confirmButtonText:'Siguiente candado'}).then(()=>{s.idx++;l2EscapeRender();});}else Swal.fire({icon:'info',title:'El candado sigue cerrado',text:lk.fb,confirmButtonText:'Intentar otra vez'});};

  setTimeout(ensureL2UI,0);
})();
