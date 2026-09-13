/* TeleVerso Educativo · Lenguajes PPA 1 · edición gamificada variada
   3.º de Telesecundaria. Sustituye una ruta centrada en quiz por una combinación
   de clasificación, rompecabezas, Kahoot sin velocidad, memorama, sopa de letras,
   crucigrama, semáforo, emparejamiento, detective multiselección y escape room. */
(() => {
  if (typeof missionCatalog === 'undefined') return;
  const FIELD='lenguajes';
  const TITLE='Lenguajes · PPA 1';
  const setMeta=(m,desc,paper)=>Object.assign(m,{field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar-evaluar',desc,paper});

  if (missionCatalog.len1) {
    missionCatalog.len1.title='R1 · Radar de afirmaciones';
    setMeta(missionCatalog.len1,'Clasifica datos verificables, afirmaciones argumentables y prejuicios; después revisa alcance, generalización y rastreabilidad.','Cuaderno gamificado p. 5');
  }

  if (missionCatalog.len2) {
    const m=missionCatalog.len2;
    m.title='R2 · Rompecabezas del argumento';
    m.icon='🧩'; m.type='lv-order';
    setMeta(m,'Ordena las piezas de una argumentación de tercer grado: tesis, evidencia, razonamiento, contraargumento, respuesta/matiz y conclusión-propuesta.','Cuaderno gamificado p. 10');
    m.items=[
      'Tesis: formular una postura clara, debatible y delimitada.',
      'Evidencia: incorporar información rastreable y pertinente para esa postura.',
      'Razonamiento: explicar por qué la evidencia apoya la tesis y qué no permite afirmar.',
      'Contraargumento: reconocer una objeción seria o un límite de la propuesta.',
      'Respuesta o matiz: ajustar la postura frente a la objeción sin ocultar evidencia.',
      'Conclusión y propuesta: recuperar la postura y plantear una acción viable y evaluable.'
    ];
  }

  if (missionCatalog.len3) {
    const m=missionCatalog.len3;
    m.title='R3 · Kahoot del debate cultural'; m.icon='🎙️'; m.type='lv-kahoot';
    setMeta(m,'Toma decisiones de debate con tarjetas grandes tipo Kahoot. Se evalúan evidencia, escucha, contraargumentación y revisión de postura, no rapidez.','Cuaderno gamificado p. 12');
  }

  if (missionCatalog.len4) {
    missionCatalog.len4.title='R4 · Memorama pluricultural';
    setMeta(missionCatalog.len4,'Relaciona conceptos y explicaciones; la meta final es poder explicar cada pareja con un ejemplo del proyecto.','Cuaderno gamificado p. 17');
  }

  missionCatalog.len5 = {
    id:'len5',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar',
    title:'R5 · Caza de conceptos',type:'lv-wordsearch',icon:'🔤',paper:'Cuaderno gamificado p. 18',
    desc:'Resuelve pistas conceptuales y localiza las respuestas en una sopa de letras. No basta encontrar letras: debes inferir qué concepto corresponde a cada pista.',
    grid:[
      'HKXEYSDAIEEQ','IYFFCDAUOAEA','LYUYODDTHRKA','FIETNAIRAVBE','WNNPTDTDWCO','NXTLEPNRLDNP',
      'HSERXSESGOBW','YUCPTJDNTAGB','OMNUODIOVNCO','CKSECEISTRQV','KMSPJNPSNDYV','DTTXQWGNNHNK'
    ],
    words:[
      {word:'VARIANTE',clue:'Forma de una lengua asociada con región, grupo, generación o situación de uso.'},
      {word:'FUENTE',clue:'Procedencia que permite rastrear y verificar una información.'},
      {word:'IDENTIDAD',clue:'Sentido de quiénes somos y de pertenencia a una comunidad.'},
      {word:'CREDITO',clue:'Reconocimiento de autoría o colaboración en una imagen, testimonio o traducción.'},
      {word:'SESGO',clue:'Tendencia o perspectiva que puede influir en cómo se selecciona o presenta información.'},
      {word:'DIALOGO',clue:'Intercambio respetuoso que permite contrastar ideas y construir acuerdos.'},
      {word:'CONTEXTO',clue:'Información que ayuda a comprender una práctica sin separarla de su situación y significado.'}
    ]
  };

  missionCatalog.len6 = {
    id:'len6',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar',
    title:'R6 · Crucigrama: arte con contexto',type:'lv-crossword',icon:'✍️',paper:'Cuaderno gamificado p. 20',
    desc:'Completa un crucigrama de curaduría, argumentación y divulgación. Las pistas exigen aplicar los conceptos, no repetir una definición aislada.',
    size:15,
    entries:[
      {n:1,word:'INTERCULTURAL',r:7,c:1,dir:'H',clue:'Diálogo entre culturas que busca relaciones respetuosas y cuestiona desigualdades.'},
      {n:2,word:'TESIS',r:7,c:3,dir:'V',clue:'Postura central que se defiende con razones y evidencia.'},
      {n:3,word:'FUENTE',r:6,c:7,dir:'V',clue:'Procedencia que permite verificar una afirmación.'},
      {n:4,word:'CREDITO',r:6,c:11,dir:'V',clue:'Reconocimiento de autoría o colaboración.'},
      {n:5,word:'CEDULA',r:9,c:9,dir:'H',clue:'Texto breve que contextualiza una pieza en una exposición.'},
      {n:6,word:'TEJIDO',r:4,c:1,dir:'V',clue:'Relaciones que construyen vida en común: ___ social.'},
      {n:7,word:'VARIANTE',r:5,c:5,dir:'V',clue:'Forma regional, social o situacional de una lengua.'},
      {n:8,word:'ARTE',r:11,c:9,dir:'H',clue:'Lenguaje y producción cultural que también puede abrir diálogo social.'}
    ]
  };

  missionCatalog.len7 = {
    id:'len7',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar',
    title:'R7 · Semáforo de difusión',type:'lv-traffic',icon:'🚦',paper:'Cuaderno gamificado p. 25',
    desc:'Evalúa situaciones de difusión con VERDE, AMARILLO o ROJO según rastreabilidad, consentimiento, contexto, datos sensibles, variantes y accesibilidad.',
    cats:['VERDE · puede difundirse con los cuidados indicados','AMARILLO · falta verificar o contextualizar','ROJO · no debe difundirse así'],
    items:[
      ['Testimonio autorizado, contextualizado, con crédito acordado y revisión de datos sensibles.',0,'Hay consentimiento, contexto, crédito y cuidado de información personal.'],
      ['Imagen encontrada en redes sin autor visible ni condiciones de uso.',1,'Debe verificarse procedencia, autoría, contexto y permiso antes de reutilizar.'],
      ['Relato comunitario que quienes lo compartieron consideran de circulación restringida.',2,'El valor educativo no autoriza divulgar conocimiento restringido sin permiso explícito.'],
      ['Dato de 2010 usado para describir automáticamente la situación actual.',1,'Puede ser útil, pero debe aclararse la fecha, verificar vigencia y no presentarlo como dato actual.'],
      ['Traducción revisada por hablantes, con variante indicada y colaboración acreditada.',0,'La verificación y contextualización reducen el riesgo de presentar una forma como universal.'],
      ['Audio de una entrevista cuyo nombre se omite, pero la voz identifica a la persona y eso no fue acordado.',2,'La voz también puede identificar; la forma concreta de difusión debe estar cubierta por el consentimiento.'],
      ['Infografía basada en fuente confiable, pero recorta la gráfica para exagerar una diferencia.',2,'Una fuente válida puede usarse de forma engañosa si la representación distorsiona la evidencia.'],
      ['Resumen hecho con IA y comparado cuidadosamente con la fuente original antes de publicarlo.',0,'La herramienta apoya, pero la responsabilidad final recae en quienes verifican con la fuente original.'],
      ['Folleto bien documentado disponible sólo en internet para un público con conectividad desigual.',1,'El contenido puede ser correcto, pero el canal crea una barrera de acceso que debe resolverse.'],
      ['Video con permiso de grabación, pero la edición cambia el sentido de la explicación de una persona.',2,'El permiso no justifica alterar el significado del testimonio.'],
      ['Palabra de una lengua de la comunidad copiada de una publicación sin verificar variante ni contexto.',1,'Hace falta revisar procedencia, variante, significado y situación de uso.'],
      ['Fotografía propia de una pieza artística con pie, autoría, contexto y autorización correspondientes.',0,'La trazabilidad y el permiso están cubiertos para ese uso específico.']
    ]
  };

  missionCatalog.len8 = {
    id:'len8',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'aplicar-analizar',
    title:'R8 · Arma el folleto',type:'lv-match',icon:'🧷',paper:'Cuaderno gamificado p. 26',
    desc:'Empareja cada sección del folleto con su función comunicativa y úsala para revisar tu maqueta.',
    pairs:[
      ['Portada','Presenta el tema, orienta al público y deja claro el propósito.'],
      ['Contexto / problema','Sitúa qué ocurre, dónde, a quién afecta y por qué importa.'],
      ['Evidencia / datos','Sostiene afirmaciones con información rastreable y pertinente.'],
      ['Palabras verificadas','Muestra la lengua sin borrar variante, contexto ni crédito.'],
      ['Imagen + pie','Aporta información visual con procedencia, contexto y autorización.'],
      ['Propuesta / invitación','Plantea una acción viable o una forma de participación.'],
      ['Fuentes y créditos','Permite rastrear información y reconocer colaboraciones.'],
      ['Cierre','Recupera la idea central y deja una pregunta, acuerdo o llamado.']
    ]
  };

  missionCatalog.len9 = {
    id:'len9',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'analizar-evaluar',
    title:'R9 · Detective de traducción',type:'lv-detective',icon:'🕵️',paper:'Cuaderno gamificado p. 27',
    desc:'Cada expediente puede contener más de un problema. Selecciona todas las señales de riesgo antes de proponer una reparación.',
    cases:[
      {text:'“Encontramos una palabra en un traductor automático. No sabemos la variante, pero la publicaremos como la forma correcta.”',options:[['No se verificó con hablantes o una fuente especializada.',true],['Se presenta una forma desconocida como si fuera universal.',true],['La traducción automática se usa como autoridad final.',true],['El problema principal es que la palabra es demasiado corta.',false]],repair:'Verificar forma, variante, sentido y contexto con fuentes o hablantes; acreditar la colaboración.'},
      {text:'“Una persona aceptó la entrevista, pero pidió no publicar su nombre. El equipo subirá el audio con su voz reconocible.”',options:[['La voz también puede identificar a la persona.',true],['Debe revisarse qué forma de difusión fue acordada.',true],['Quitar el nombre escrito basta en cualquier caso.',false],['El consentimiento inicial permite cualquier reutilización futura.',false]],repair:'Acordar específicamente si la voz puede difundirse o anonimizar/usar otra forma que proteja identidad.'},
      {text:'“Dos hablantes proponen traducciones distintas; elegimos la más corta sin preguntar contexto.”',options:[['Puede haber variantes, registros o sentidos contextuales distintos.',true],['Falta documentar por qué se selecciona una forma.',true],['Una de las dos formas necesariamente es incorrecta.',false],['La opción más breve siempre comunica mejor.',false]],repair:'Preguntar por variante, situación de uso y sentido; documentar la decisión o presentar ambas formas si es pertinente.'},
      {text:'“El folleto conserva una palabra original, pero no explica el significado cultural y la usa como adorno.”',options:[['Se borra el contexto de la palabra.',true],['Puede convertir un elemento cultural en decoración superficial.',true],['Conservar una palabra original elimina toda necesidad de explicar.',false],['El diseño visual reemplaza la contextualización.',false]],repair:'Explicar función, contexto y procedencia del término, y justificar por qué se incluye.'},
      {text:'“Una IA resume una entrevista y el equipo copia el resumen sin volver al audio ni a las notas.”',options:[['Falta verificar el resumen con la fuente original.',true],['Puede haberse omitido o alterado contexto.',true],['La IA se convierte automáticamente en la autora del testimonio.',false],['Si el resumen es corto, no necesita revisión.',false]],repair:'Comparar con el registro original, corregir y asumir responsabilidad sobre la versión publicada.'},
      {text:'“La misma traducción se usa para público infantil, una ceremonia formal y un folleto escolar sin revisar registro.”',options:[['El registro y la situación comunicativa pueden cambiar la elección lingüística.',true],['Una equivalencia puede no funcionar igual en todos los contextos.',true],['Toda traducción debe ser idéntica sin importar el propósito.',false],['El contexto sólo importa en textos literarios.',false]],repair:'Ajustar la traducción al propósito, público, registro y variante; explicar decisiones cuando sea necesario.'}
    ]
  };

  missionCatalog.len10 = {
    id:'len10',field:FIELD,fieldTitle:TITLE,level:'3.º de Telesecundaria',cognitiveLevel:'integrar-analizar-evaluar',
    title:'R10 · Escape Voces',type:'lv-escape',icon:'🔐',paper:'Cuaderno gamificado p. 29',
    desc:'Abre cinco candados integrando argumento, fuentes, representación artística, traducción y accesibilidad. Cada respuesta correcta libera una letra del código final VOCES.',
    locks:[
      {letter:'V',title:'Candado de argumento',q:'Una evidencia apoya tu tesis, pero proviene de una muestra pequeña. ¿Qué haces?',opts:['Generalizo a toda la comunidad.','Delimito el alcance y busco contraste antes de generalizar.','Oculto el tamaño de la muestra.'],ans:1,fb:'Una conclusión rigurosa conserva el tamaño y contexto de la muestra.'},
      {letter:'O',title:'Candado de fuente',q:'Una imagen es llamativa pero no tiene autor ni contexto. ¿Qué decisión abre el candado?',opts:['Publicarla porque ya está en internet.','Verificar procedencia, contexto y condiciones de uso antes de incorporarla.','Eliminar cualquier referencia a la fuente.'],ans:1,fb:'Visibilidad pública no equivale a permiso ni a información contextual suficiente.'},
      {letter:'C',title:'Candado de arte',q:'Tu pieza representa una práctica cultural que el equipo no conoce de primera mano.',opts:['Inventar símbolos para que se vea más interesante.','Investigar, consultar y explicar qué parte es interpretación del equipo.','Copiar una imagen sin preguntar.'],ans:1,fb:'La representación responsable exige investigación, contexto y claridad sobre la propia interpretación.'},
      {letter:'E',title:'Candado de traducción',q:'Dos hablantes usan formas distintas para una expresión.',opts:['Una forma debe ser incorrecta.','Investigo variante, registro y contexto, y documento la decisión.','Elijo la más corta.'],ans:1,fb:'La variación puede ser legítima; hay que contextualizarla, no jerarquizarla sin evidencia.'},
      {letter:'S',title:'Candado de difusión',q:'El folleto está bien documentado, pero sólo existe en línea y parte del público no tiene conectividad.',opts:['No importa porque el contenido es correcto.','Ofrezco otra vía de acceso, como versión impresa o lectura compartida.','Cancelo todo el proyecto.'],ans:1,fb:'La accesibilidad forma parte de una difusión responsable.'}
    ]
  };

  const prevLaunch = window.launchMission || launchMission;
  const head=(m,progress='')=>`<div class="flex flex-wrap justify-between gap-2 text-xs font-bold text-violet-300"><span>${progress}</span><span class="text-slate-400">3.º de Telesecundaria · sin puntos por rapidez</span></div><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><p class="text-slate-300 text-xs leading-relaxed">${m.desc}</p>`;
  const safe=(x)=>String(x??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  window.launchMission = launchMission = function(id) {
    const m=missionCatalog[id];
    if (!m?.type?.startsWith('lv-')) return prevLaunch(id);
    activeMissionKey=id; missionGameState={};
    document.getElementById('modal-mission').classList.remove('hidden');
    if(m.type==='lv-order') lvOrder(m);
    else if(m.type==='lv-kahoot') lvKahoot(m);
    else if(m.type==='lv-wordsearch') lvWordSearch(m);
    else if(m.type==='lv-crossword') lvCrossword(m);
    else if(m.type==='lv-traffic') lvTraffic(m);
    else if(m.type==='lv-match') lvMatch(m);
    else if(m.type==='lv-detective') lvDetective(m);
    else if(m.type==='lv-escape') lvEscape(m);
  };

  function lvOrder(m){ missionGameState={items:[...m.items].sort(()=>Math.random()-.5),hits:0,errors:0,details:[]}; lvOrderRender(); }
  function lvOrderRender(){
    const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');
    a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Ordena ${m.items.length} piezas`)}<div class="space-y-2">${s.items.map((x,i)=>`<div class="glass-card p-3 rounded-xl flex items-center gap-3"><span class="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center font-black">${i+1}</span><span class="flex-1 text-xs sm:text-sm font-semibold">${safe(x)}</span><button onclick="lvOrderMove(${i},-1)" class="px-3 py-2 bg-slate-800 rounded-lg">▲</button><button onclick="lvOrderMove(${i},1)" class="px-3 py-2 bg-slate-800 rounded-lg">▼</button></div>`).join('')}</div><button onclick="lvOrderCheck()" class="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-black rounded-xl">Comprobar argumento</button></div>`;
  }
  window.lvOrderMove=(i,d)=>{const s=missionGameState,j=i+d;if(j<0||j>=s.items.length)return;[s.items[i],s.items[j]]=[s.items[j],s.items[i]];lvOrderRender();};
  window.lvOrderCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let ok=0;s.items.forEach((x,i)=>{if(x===m.items[i])ok++;});if(ok===m.items.length){s.hits=ok;s.details=m.items.map((x,i)=>({statement:`Pieza ${i+1}`,selected:x,expected:x,isCorrect:true,explanation:'La pieza ocupa una posición coherente en la arquitectura argumentativa.'}));saveMissionResults('¡Argumento desbloqueado! Ahora escribe un ejemplo propio en el cuaderno.');}else{s.errors++;Swal.fire({icon:'info',title:'Aún no encaja',text:`${ok} de ${m.items.length} piezas están en la posición esperada. Revisa qué función cumple cada una.`,confirmButtonText:'Seguir armando'});}};

  function lvKahoot(m){missionGameState={idx:0,hits:0,errors:0,details:[],streak:0};lvKahootRender();}
  function lvKahootRender(){
    const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');
    if(s.idx>=m.qs.length){saveMissionResults(`¡Ronda completada! Mejor racha de razonamiento: ${s.streakMax||0}.`);return;}
    const [q,opts]=m.qs[s.idx];
    const cls=['bg-rose-600 hover:bg-rose-500','bg-blue-600 hover:bg-blue-500','bg-amber-500 hover:bg-amber-400','bg-emerald-600 hover:bg-emerald-500'];
    a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Tarjeta ${s.idx+1} de ${m.qs.length} · Aciertos ${s.hits}`)}<div class="glass-card p-5 sm:p-7 rounded-2xl text-center"><p class="text-base sm:text-lg font-black">${safe(q)}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${opts.map((o,i)=>`<button onclick="lvKahootAnswer(${i})" class="${cls[i%cls.length]} p-4 sm:p-5 rounded-2xl text-left text-white font-black shadow-lg"><span class="inline-flex w-7 h-7 rounded-md bg-black/20 items-center justify-center mr-2">${String.fromCharCode(65+i)}</span>${safe(o)}</button>`).join('')}</div><p class="text-center text-[11px] text-slate-400 italic">Piensa antes de responder: la velocidad no modifica el puntaje.</p></div>`;
  }
  window.lvKahootAnswer=(i)=>{const m=missionCatalog[activeMissionKey],s=missionGameState,[q,opts,ans,fb]=m.qs[s.idx],ok=i===ans;if(ok){s.hits++;s.streak=(s.streak||0)+1;s.streakMax=Math.max(s.streakMax||0,s.streak);}else{s.errors++;s.streak=0;}s.details.push({statement:q,selected:opts[i],expected:opts[ans],isCorrect:ok,explanation:fb});Swal.fire({icon:ok?'success':'info',title:ok?'¡Decisión sólida!':'Revisa el argumento',text:fb,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;lvKahootRender();});};

  function lvWordSearch(m){missionGameState={selected:[],solved:[],solvedCells:{},hits:0,errors:0,details:[]};lvWordRender();}
  function lvWordRender(){
    const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');
    if(s.solved.length===m.words.length){saveMissionResults('¡Caza completa! Elige dos conceptos y escribe un ejemplo de tu proyecto en el cuaderno.');return;}
    const cells=[];m.grid.forEach((row,r)=>[...row].forEach((ch,c)=>{const idx=r*m.grid.length+c,sel=s.selected.includes(idx),sol=!!s.solvedCells[idx];cells.push(`<button onclick="lvWordPick(${idx})" class="w-7 h-7 sm:w-9 sm:h-9 rounded-md border text-xs sm:text-sm font-black ${sol?'bg-emerald-600/70 border-emerald-400':sel?'bg-violet-600 border-violet-300':'bg-slate-900/80 border-slate-700 hover:border-violet-400'}">${ch}</button>`);}));
    a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Conceptos encontrados ${s.solved.length}/${m.words.length}`)}<div class="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-5"><div class="grid grid-cols-12 gap-1 justify-center">${cells.join('')}</div><div class="space-y-2"><div class="text-xs font-black text-violet-300 uppercase tracking-wide">Pistas</div>${m.words.map((w,i)=>`<div class="p-2.5 rounded-xl border ${s.solved.includes(w.word)?'border-emerald-500/40 bg-emerald-950/20':'border-slate-700 bg-slate-900/50'}"><span class="text-xs font-bold">${i+1}. ${safe(w.clue)}</span>${s.solved.includes(w.word)?`<span class="block text-emerald-300 text-[11px] font-black mt-1">✓ ${w.word}</span>`:''}</div>`).join('')}</div></div><p class="text-[11px] text-slate-400">Selecciona la primera y la última letra de una palabra en línea recta: horizontal, vertical o diagonal.</p></div>`;
  }
  window.lvWordPick=(idx)=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(s.solvedCells[idx])return;if(s.selected.includes(idx)){s.selected=[];lvWordRender();return;}s.selected.push(idx);if(s.selected.length<2){lvWordRender();return;}const N=m.grid.length,[a,b]=s.selected,r1=Math.floor(a/N),c1=a%N,r2=Math.floor(b/N),c2=b%N,dr=Math.sign(r2-r1),dc=Math.sign(c2-c1),steps=Math.max(Math.abs(r2-r1),Math.abs(c2-c1));if(!((r1===r2)||(c1===c2)||(Math.abs(r2-r1)===Math.abs(c2-c1)))){s.errors++;s.selected=[];Swal.fire({icon:'info',title:'Línea no válida',text:'La selección debe ser horizontal, vertical o diagonal.'}).then(lvWordRender);return;}let text='',indices=[];for(let k=0;k<=steps;k++){const r=r1+k*dr,c=c1+k*dc;indices.push(r*N+c);text+=m.grid[r][c];}const rev=[...text].reverse().join('');const hit=m.words.find(w=>!s.solved.includes(w.word)&&(text===w.word||rev===w.word));if(hit){s.hits++;s.solved.push(hit.word);indices.forEach(i=>s.solvedCells[i]=true);s.details.push({statement:hit.clue,selected:hit.word,expected:hit.word,isCorrect:true,explanation:'Concepto inferido y localizado correctamente.'});s.selected=[];Swal.fire({icon:'success',title:`¡Encontraste ${hit.word}!`,text:hit.clue,timer:1200,showConfirmButton:false}).then(lvWordRender);}else{s.errors++;s.details.push({statement:'Selección en sopa de letras',selected:text,expected:'Una palabra que resuelva una pista pendiente',isCorrect:false,explanation:'La secuencia seleccionada no corresponde a un concepto pendiente.'});s.selected=[];Swal.fire({icon:'info',title:'No corresponde a una pista',text:'Revisa la definición e intenta otra trayectoria.'}).then(lvWordRender);}};

  function lvCrossword(m){const cells={};m.entries.forEach(e=>{[...e.word].forEach((ch,i)=>{const r=e.r+(e.dir==='V'?i:0),c=e.c+(e.dir==='H'?i:0);cells[`${r}-${c}`]=ch;});});missionGameState={cells,values:{},hits:0,errors:0,details:[]};lvCrossRender();}
  function lvCrossRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area'),boxes=[];for(let r=0;r<m.size;r++)for(let c=0;c<m.size;c++){const key=`${r}-${c}`;boxes.push(s.cells[key]?`<input id="lv-cw-${r}-${c}" maxlength="1" value="${safe(s.values[key]||'')}" oninput="lvCwInput(${r},${c},this.value)" class="w-6 h-6 sm:w-8 sm:h-8 text-center uppercase font-black text-slate-950 bg-white border border-slate-400 rounded-sm"/>`:`<div class="w-6 h-6 sm:w-8 sm:h-8"></div>`);}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,'Completa las 8 palabras que se cruzan')}<div class="grid grid-cols-1 xl:grid-cols-[auto,1fr] gap-5"><div class="grid grid-cols-15 gap-px bg-slate-800/40 p-2 rounded-xl overflow-auto">${boxes.join('')}</div><div class="space-y-2">${m.entries.map(e=>`<div class="text-xs p-2 rounded-lg bg-slate-900/60 border border-slate-700"><b>${e.n}. ${e.dir==='H'?'Horizontal':'Vertical'}:</b> ${safe(e.clue)}</div>`).join('')}</div></div><button onclick="lvCrossCheck()" class="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-black">Comprobar crucigrama</button></div>`;}
  window.lvCwInput=(r,c,v)=>{missionGameState.values[`${r}-${c}`]=(v||'').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').slice(-1);};
  window.lvCrossCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let correct=0,details=[];m.entries.forEach(e=>{let got='';[...e.word].forEach((ch,i)=>{const r=e.r+(e.dir==='V'?i:0),c=e.c+(e.dir==='H'?i:0);got+=(s.values[`${r}-${c}`]||'');});const ok=got===e.word;if(ok)correct++;details.push({statement:e.clue,selected:got||'(vacío)',expected:e.word,isCorrect:ok,explanation:ok?'Palabra correcta.':'Revisa la pista y las letras que cruzan.'});});s.hits=correct;s.details=details;if(correct===m.entries.length){saveMissionResults('¡Crucigrama completo! Elige dos términos y úsalos en una cédula o argumento del cuaderno.');}else{s.errors++;Swal.fire({icon:'info',title:'Aún hay cruces por resolver',text:`Tienes ${correct} de ${m.entries.length} palabras correctas.`,confirmButtonText:'Seguir'});}};

  function lvTraffic(m){missionGameState={list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]};lvTrafficRender();}
  function lvTrafficRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=s.list.length){saveMissionResults('¡Semáforo completado! Registra en el cuaderno una decisión que cambiarás antes de publicar.');return;}const [text]=s.list[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Caso ${s.idx+1} de ${s.list.length}`)}<div class="glass-card p-6 rounded-2xl text-center"><p class="text-base sm:text-lg font-semibold">${safe(text)}</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><button onclick="lvTrafficAnswer(0)" class="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 font-black">🟢 VERDE</button><button onclick="lvTrafficAnswer(1)" class="p-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black">🟡 AMARILLO</button><button onclick="lvTrafficAnswer(2)" class="p-4 rounded-2xl bg-rose-600 hover:bg-rose-500 font-black">🔴 ROJO</button></div></div>`;}
  window.lvTrafficAnswer=(i)=>{const m=missionCatalog[activeMissionKey],s=missionGameState,[text,ans,fb]=s.list[s.idx],ok=i===ans;ok?s.hits++:s.errors++;s.details.push({statement:text,selected:m.cats[i],expected:m.cats[ans],isCorrect:ok,explanation:fb});Swal.fire({icon:ok?'success':'info',title:ok?'Criterio correcto':'Revisa el nivel de riesgo',text:fb,confirmButtonText:'Continuar'}).then(()=>{s.idx++;lvTrafficRender();});};

  function lvMatch(m){const right=m.pairs.map((p,i)=>({i,text:p[1]})).sort(()=>Math.random()-.5);missionGameState={right,selL:null,matched:[],hits:0,errors:0,details:[]};lvMatchRender();}
  function lvMatchRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.matched.length===m.pairs.length){saveMissionResults('¡Folleto armado! Revisa tu maqueta de papel y cambia una sección si no cumple su función.');return;}a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Parejas resueltas ${s.matched.length}/${m.pairs.length}`)}<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"><div class="space-y-2"><div class="text-xs font-black text-violet-300">SECCIONES</div>${m.pairs.map((p,i)=>`<button ${s.matched.includes(i)?'disabled':''} onclick="lvMatchLeft(${i})" class="w-full text-left p-3 rounded-xl border ${s.matched.includes(i)?'opacity-35 border-emerald-500 bg-emerald-950/20':s.selL===i?'border-violet-300 bg-violet-700':'border-slate-700 bg-slate-900/60'} font-bold text-sm">${safe(p[0])}</button>`).join('')}</div><div class="space-y-2"><div class="text-xs font-black text-violet-300">FUNCIÓN</div>${s.right.map((r,j)=>`<button ${s.matched.includes(r.i)?'disabled':''} onclick="lvMatchRight(${j})" class="w-full text-left p-3 rounded-xl border ${s.matched.includes(r.i)?'opacity-35 border-emerald-500 bg-emerald-950/20':'border-slate-700 bg-slate-900/60 hover:border-violet-400'} text-xs">${safe(r.text)}</button>`).join('')}</div></div></div>`;}
  window.lvMatchLeft=(i)=>{missionGameState.selL=i;lvMatchRender();};
  window.lvMatchRight=(j)=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(s.selL===null){Swal.fire({icon:'info',title:'Primero elige una sección',text:'Después selecciona la función que le corresponde.'});return;}const r=s.right[j],ok=r.i===s.selL,left=m.pairs[s.selL][0];if(ok){s.hits++;s.matched.push(s.selL);s.details.push({statement:left,selected:r.text,expected:m.pairs[s.selL][1],isCorrect:true,explanation:'La sección quedó vinculada con su función comunicativa.'});s.selL=null;Swal.fire({icon:'success',title:'¡Pareja correcta!',text:'Ahora revisa si esa función se cumple en tu maqueta.',timer:1100,showConfirmButton:false}).then(lvMatchRender);}else{s.errors++;s.details.push({statement:left,selected:r.text,expected:m.pairs[s.selL][1],isCorrect:false,explanation:'La función seleccionada corresponde a otra sección.'});Swal.fire({icon:'info',title:'No encaja',text:'Piensa qué necesita encontrar el lector en esa parte del folleto.'}).then(lvMatchRender);}};

  function lvDetective(m){missionGameState={idx:0,selected:[],hits:0,errors:0,details:[]};lvDetectiveRender();}
  function lvDetectiveRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.cases.length){saveMissionResults('¡Expedientes resueltos! Lleva una reparación al banco lingüístico o al folleto.');return;}const cs=m.cases[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Expediente ${s.idx+1} de ${m.cases.length}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-base sm:text-lg font-semibold">${safe(cs.text)}</p></div><div class="space-y-2">${cs.options.map((o,i)=>`<button onclick="lvDetectiveToggle(${i})" class="w-full p-3 rounded-xl border text-left text-xs sm:text-sm ${s.selected.includes(i)?'border-amber-300 bg-amber-500/20':'border-slate-700 bg-slate-900/60'}">${s.selected.includes(i)?'☑':'☐'} ${safe(o[0])}</button>`).join('')}</div><button onclick="lvDetectiveCheck()" class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-black">Revisar señales seleccionadas</button><p class="text-[11px] text-slate-400 italic">Puede haber más de una señal de riesgo.</p></div>`;}
  window.lvDetectiveToggle=(i)=>{const s=missionGameState;s.selected=s.selected.includes(i)?s.selected.filter(x=>x!==i):[...s.selected,i];lvDetectiveRender();};
  window.lvDetectiveCheck=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState,cs=m.cases[s.idx],expected=cs.options.map((o,i)=>o[1]?i:null).filter(i=>i!==null),sel=[...s.selected].sort((a,b)=>a-b),ok=expected.length===sel.length&&expected.every((v,i)=>v===sel[i]);if(ok)s.hits++;else s.errors++;s.details.push({statement:cs.text,selected:sel.map(i=>cs.options[i][0]).join(' | ')||'(ninguna)',expected:expected.map(i=>cs.options[i][0]).join(' | '),isCorrect:ok,explanation:`Reparación: ${cs.repair}`});Swal.fire({icon:ok?'success':'info',title:ok?'¡Expediente resuelto!':'Faltó o sobró una señal',text:`Reparación sugerida: ${cs.repair}`,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;s.selected=[];lvDetectiveRender();});};

  function lvEscape(m){missionGameState={idx:0,hits:0,errors:0,details:[],code:''};lvEscapeRender();}
  function lvEscapeRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(s.idx>=m.locks.length){a.innerHTML=`<div class="space-y-5 text-center animate-pop">${head(m,'Todos los candados abiertos')}<div class="glass-card p-8 rounded-3xl border border-emerald-500/30"><div class="text-5xl mb-3">🔓</div><div class="text-sm text-slate-400 uppercase font-black">Código final</div><div class="text-5xl sm:text-6xl font-black tracking-[.25em] text-emerald-300 mt-2">${s.code}</div><p class="text-sm mt-4 text-slate-300">El escape termina cuando puedes justificar tus decisiones, no cuando recuerdas una contraseña.</p></div><button onclick="lvEscapeFinish()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-black">Guardar resultado</button></div>`;return;}const lock=m.locks[s.idx];a.innerHTML=`<div class="space-y-4 animate-pop">${head(m,`Candado ${s.idx+1}/${m.locks.length} · Código ${s.code||'_____'} `)}<div class="glass-card p-6 rounded-2xl border border-violet-500/20"><div class="text-xs font-black text-violet-300 uppercase">${safe(lock.title)}</div><p class="text-base sm:text-lg font-semibold mt-3">${safe(lock.q)}</p></div><div class="space-y-2">${lock.opts.map((o,i)=>`<button onclick="lvEscapeAnswer(${i})" class="w-full text-left p-4 bg-slate-900/70 hover:bg-violet-700 border border-slate-700 rounded-xl font-bold text-sm">${String.fromCharCode(65+i)} · ${safe(o)}</button>`).join('')}</div></div>`;}
  window.lvEscapeAnswer=(i)=>{const m=missionCatalog[activeMissionKey],s=missionGameState,lock=m.locks[s.idx],ok=i===lock.ans;if(ok){s.hits++;s.code+=lock.letter;s.details.push({statement:lock.q,selected:lock.opts[i],expected:lock.opts[lock.ans],isCorrect:true,explanation:lock.fb});Swal.fire({icon:'success',title:`Candado abierto · ${lock.letter}`,text:lock.fb,confirmButtonText:'Siguiente'}).then(()=>{s.idx++;lvEscapeRender();});}else{s.errors++;s.details.push({statement:lock.q,selected:lock.opts[i],expected:lock.opts[lock.ans],isCorrect:false,explanation:lock.fb});Swal.fire({icon:'info',title:'El candado sigue cerrado',text:lock.fb,confirmButtonText:'Intentar otra vez'});}};
  window.lvEscapeFinish=()=>saveMissionResults(`¡Escape completado! Código ${missionGameState.code}. Registra en el cuaderno qué criterio fue más importante.`);
})();