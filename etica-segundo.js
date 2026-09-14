/* TeleVerso Educativo · Ética, naturaleza y sociedades · 2.º de Telesecundaria · PPA 1
   PPA: "Tenemos derecho a ser diferentes"
   Primer periodo. La plataforma muestra sólo fichas de retos y ejecuta los juegos.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD='etica2';
  const FIELD_TITLE='Ética, naturaleza y sociedades · 2.º grado · PPA 1';
  const meta=m=>Object.assign(m,{field:FIELD,fieldTitle:FIELD_TITLE,grade:2,level:'2.º de Telesecundaria',period:1,periodTitle:'Primer periodo',ppa:1,ppaTitle:'PPA 1'});

  Object.assign(missionCatalog,{
    et2_1:meta({id:'et2_1',title:'R1 · Hecho, inferencia o prejuicio',type:'et2-classify',icon:'🔎',cats:['HECHO','INFERENCIA','PREJUICIO'],items:[
      ['La expedición de Colón llegó al Caribe en 1492.',0],
      ['Una fuente incompleta sugiere que hubo desacuerdos, pero hace falta contrastar.',1],
      ['Quien viste distinto a mí no merece confianza.',2],
      ['Las Antillas estaban habitadas antes de la llegada de expediciones europeas.',0],
      ['Si una noticia sólo muestra una voz, probablemente falten otras perspectivas.',1],
      ['Todos los integrantes de un grupo juvenil piensan exactamente igual.',2],
      ['Una persona puede pertenecer a varios grupos a lo largo de su vida.',0],
      ['El uso repetido de una palabra despectiva puede indicar una mirada discriminatoria.',1],
      ['Una forma distinta de hablar demuestra menor capacidad.',2]
    ]}),
    et2_2:meta({id:'et2_2',title:'R2 · Línea del tiempo transatlántica',type:'et2-sequence',icon:'🧭',items:[
      'Expansión comercial portuguesa por la costa africana.',
      'Colón propone navegar hacia occidente para llegar a Asia.',
      'La Corona de Castilla financia la expedición.',
      'La expedición llega al Caribe en 1492.',
      'Se establecen enclaves y rutas de extracción en las Antillas.',
      'La población originaria enfrenta violencia, trabajo forzado y enfermedades.'
    ]}),
    et2_3:meta({id:'et2_3',title:'R3 · Fuentes bajo lupa',type:'et2-classify',icon:'🕵️',cats:['USAR','CONTRASTAR','DESCARTAR COMO EVIDENCIA PRINCIPAL'],items:[
      ['Libro de texto SEP con autoría editorial y páginas identificables.',0],
      ['Mapa histórico con procedencia, fecha y explicación del contexto.',0],
      ['Video que presenta una cifra sin decir de dónde salió.',1],
      ['Publicación viral que afirma “todos saben que ocurrió así” sin fuentes.',2],
      ['Testimonio de una persona sobre su experiencia de discriminación.',1],
      ['Artículo institucional sobre derechos humanos con referencias consultables.',0],
      ['Imagen recortada sin fecha, lugar ni procedencia.',2],
      ['Nota periodística que enlaza al documento original.',1]
    ]}),
    et2_4:meta({id:'et2_4',title:'R4 · Causas y consecuencias',type:'et2-match',icon:'🔗',pairs:[
      ['Búsqueda de nuevas rutas comerciales','Expansión de exploraciones marítimas europeas'],
      ['Financiamiento de la Corona','Realización de la expedición de 1492'],
      ['Apropiación de territorios y recursos','Conflicto y dominación sobre poblaciones originarias'],
      ['Enfermedades y trabajos forzados','Reducción severa de poblaciones en las Antillas'],
      ['Jerarquización racial','Bases para prácticas posteriores de discriminación']
    ]}),
    et2_5:meta({id:'et2_5',title:'R5 · Carta con evidencia',type:'et2-choice',icon:'✉️',qs:[
      ['¿Qué inicio distingue mejor una recreación de un hecho literal?',['“Sé exactamente todo lo que pensó cada persona en 1492”.','“A partir de las fuentes, imaginamos una voz posible de una persona afectada”.','“No necesito fuentes porque es una carta”.'],1],
      ['¿Qué frase es más rigurosa?',['“Todos los pueblos originarios reaccionaron igual”.','“Las fuentes muestran consecuencias graves; no podemos afirmar que todas las personas reaccionaron de la misma forma”.','“Nadie entendió nada”.'],1],
      ['¿Qué debe acompañar una afirmación histórica en la carta?',['Una fuente o dato verificable.','Un adjetivo fuerte.','Una suposición presentada como certeza.'],0],
      ['¿Qué cierre es más adecuado?',['Una demanda vinculada con dignidad, libertad o justicia.','Un insulto hacia otro grupo.','Una conclusión sin relación con el contexto.'],0],
      ['Si no conocemos las palabras exactas de una persona histórica, ¿qué hacemos?',['Las inventamos y las presentamos como cita.','Indicamos que es una reconstrucción basada en fuentes.','Eliminamos todo contexto.'],1]
    ]}),
    et2_6:meta({id:'et2_6',title:'R6 · Semáforo ético',type:'et2-choice',icon:'🚦',qs:[
      ['Impedir que una persona participe por su origen vulnera principalmente…',['La inclusión y la igualdad.','El orden alfabético.','La memoria histórica.'],0],
      ['Burlarse de una forma de hablar afecta…',['La dignidad y el derecho a la identidad.','La temperatura.','La cronología.'],0],
      ['Escuchar una perspectiva distinta y contrastarla con evidencia es…',['Una práctica de respeto y pensamiento crítico.','Una forma de exclusión.','Una prueba de superioridad.'],0],
      ['Forzar trabajo y negar libertad a una población vulnera…',['Libertad, dignidad y justicia.','Sólo una regla escolar.','Ningún principio.'],0],
      ['Una acción incluyente en la escuela sería…',['Adaptar condiciones para que todas las personas puedan participar.','Separar a quienes son diferentes.','Difundir estereotipos para “evitar problemas”.'],0]
    ]}),
    et2_7:meta({id:'et2_7',title:'R7 · Memorama de identidad y derechos',type:'et2-memory',icon:'🧠',pairs:[
      ['Identidad','Características, experiencias y pertenencias que forman cómo una persona se reconoce.'],
      ['Pertenencia','Sentirse parte de uno o varios grupos sin perder autonomía.'],
      ['Dignidad','Valor inherente de toda persona que exige trato respetuoso.'],
      ['Inclusión','Crear condiciones para que todas las personas participen.'],
      ['Discriminación','Trato desigual que limita o vulnera derechos.'],
      ['Prejuicio','Juicio previo o generalización sin evidencia suficiente.'],
      ['Respeto','Reconocer diferencias sin negar derechos ni dignidad.'],
      ['Libertad','Capacidad de decidir y expresarse dentro del marco de los derechos de los demás.']
    ]}),
    et2_8:meta({id:'et2_8',title:'R8 · Crucigrama del respeto',type:'et2-crossword',icon:'✍️',size:17,entries:[
      {word:'RESPETO',r:8,c:5,dir:'H',clue:'Reconocer la dignidad y los derechos de otras personas.'},
      {word:'DERECHO',r:7,c:6,dir:'V',clue:'Facultad o garantía que protege a las personas.'},
      {word:'LIBERTAD',r:5,c:9,dir:'V',clue:'Principio que permite decidir y expresarse responsablemente.'},
      {word:'PERTENENCIA',r:6,c:5,dir:'V',clue:'Sentirse parte de un grupo o comunidad.'},
      {word:'TOLERANCIA',r:7,c:11,dir:'V',clue:'Disposición a convivir con ideas o prácticas distintas sin agredir.'},
      {word:'DIGNIDAD',r:6,c:8,dir:'H',clue:'Valor inherente de toda persona.'},
      {word:'INCLUSION',r:15,c:5,dir:'H',clue:'Participación sin exclusiones injustificadas.'}
    ]}),
    et2_9:meta({id:'et2_9',title:'R9 · Ruta contra la discriminación',type:'et2-story',icon:'🧭',scenes:[
      {q:'Escuchas una burla sobre la forma de vestir de un compañero. ¿Qué haces?',opts:['Me uno para no quedar fuera.','Detengo la burla y recuerdo que la diferencia no justifica descalificar.'],ans:1},
      {q:'Una publicación generaliza sobre un grupo juvenil. ¿Qué conviene?',opts:['Compartirla de inmediato.','Revisar evidencia y evitar convertir un caso en una etiqueta para todo el grupo.'],ans:1},
      {q:'Dos estudiantes no comparten creencias. ¿Qué conducta es adecuada?',opts:['Exigir que uno cambie.','Dialogar sin negar el derecho del otro a pensar distinto.'],ans:1},
      {q:'Una actividad excluye a una persona por una barrera física. ¿Qué hacemos?',opts:['Decir que “así son las reglas”.','Modificar condiciones razonables para facilitar su participación.'],ans:1},
      {q:'¿Cuál cierre muestra pensamiento crítico?',opts:['“Mi grupo siempre tiene razón”.','“Puedo defender mi identidad sin negar la dignidad ni los derechos de otros”.'],ans:1}
    ]}),
    et2_10:meta({id:'et2_10',title:'R10 · Escape DIGNIDAD',type:'et2-escape',icon:'🔐',locks:[
      {letter:'D',q:'¿Qué debe acompañar un hecho histórico en el periódico mural?',opts:['Una fuente verificable.','Una suposición.','Un rumor.'],ans:0},
      {letter:'I',q:'¿Qué concepto permite pertenecer a varios grupos sin ser idéntico a los demás?',opts:['Identidad.','Exclusión.','Prejuicio.'],ans:0},
      {letter:'G',q:'¿Qué acción mejora una comparación pasado-presente?',opts:['Reconocer semejanzas y diferencias de contexto.','Decir que todo es igual.','Eliminar las fuentes.'],ans:0},
      {letter:'N',q:'¿Qué evita una carta históricamente rigurosa?',opts:['Inventar datos y presentarlos como hechos.','Declarar que es una reconstrucción.','Citar fuentes.'],ans:0},
      {letter:'I',q:'¿Qué práctica combate la exclusión?',opts:['Inclusión.','Burla.','Generalización.'],ans:0},
      {letter:'D',q:'¿Qué valor exige que toda persona sea tratada como valiosa?',opts:['Dignidad.','Ventaja.','Competencia.'],ans:0},
      {letter:'A',q:'¿Qué debe hacerse con una fuente dudosa?',opts:['Analizarla y contrastarla.','Creerla por su diseño.','Ocultar su origen.'],ans:0},
      {letter:'D',q:'¿Qué protege el derecho a ser diferentes?',opts:['Diversidad con igualdad en dignidad y derechos.','Separación obligatoria.','Un solo modo de vivir.'],ans:0}
    ]})
  });

  const currentField=()=>localStorage.getItem('televerso_active_field')||'lenguajes2';
  const missions=()=>Object.values(missionCatalog).filter(m=>m?.field===FIELD).sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true}));
  const prevSetField=window.tvSetField;
  const prevGrid=window.renderStudentMissionsGrid || (typeof renderStudentMissionsGrid==='function'?renderStudentMissionsGrid:null);
  const prevLaunch=window.launchMission || (typeof launchMission==='function'?launchMission:null);

  function completed(){ return (typeof activeStudent!=='undefined' && activeStudent?.completed)||{}; }
  function renderGrid(){
    const grid=document.getElementById('student-missions-grid'); if(!grid) return;
    const comp=completed(); const ms=missions();
    grid.innerHTML=ms.map((m,i)=>`<div class="glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 border-t-amber-500"><div><div class="flex justify-between items-center mb-3"><span class="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase rounded-lg border border-amber-500/30">Reto ${i+1}</span><i id="badge-mission-${m.id}" class="fa-solid ${comp[m.id]?'fa-circle-check text-emerald-400':'fa-lock text-slate-500'} text-base"></i></div><h4 class="text-base font-bold text-white mb-4">${m.icon} ${m.title}</h4></div><button onclick="launchMission('${m.id}')" class="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-xs transition"><i class="fa-solid fa-play mr-1"></i> Iniciar reto</button></div>`).join('');
    const heading=grid.previousElementSibling; if(heading&&heading.tagName==='H4') heading.innerHTML='<i class="fa-solid fa-earth-americas text-amber-400"></i> Ética, naturaleza y sociedades · Retos';
  }

  window.tvSetField=function(field){
    if(field===FIELD){ localStorage.setItem('televerso_active_field',FIELD); renderGrid(); return; }
    return typeof prevSetField==='function'?prevSetField(field):undefined;
  };
  window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){
    if(currentField()===FIELD) return renderGrid();
    return typeof prevGrid==='function'?prevGrid():undefined;
  };

  function open(m){
    activeMissionKey=m.id; missionGameState={};
    const modal=document.getElementById('modal-mission'); if(modal) modal.classList.remove('hidden');
  }
  function head(m,progress=''){
    return `<div class="flex items-center justify-between gap-3"><h3 class="text-xl font-black text-white">${m.icon} ${m.title}</h3><span class="text-xs font-black text-amber-300">${progress}</span></div>`;
  }
  function done(){ saveMissionResults('Reto completado.'); }
  function pop(ok){ return Swal.fire({icon:ok?'success':'info',title:ok?'Correcto':'Intenta de nuevo',showConfirmButton:true,confirmButtonText:'Continuar'}); }

  window.launchMission=launchMission=function(id){
    const m=missionCatalog[id];
    if(!m||m.field!==FIELD) return typeof prevLaunch==='function'?prevLaunch(id):undefined;
    open(m);
    const fn={'et2-classify':classify,'et2-sequence':sequence,'et2-match':match,'et2-choice':choice,'et2-memory':memory,'et2-crossword':crossword,'et2-story':story,'et2-escape':escape}[m.type];
    if(fn) fn(m);
  };

  function classify(m){ missionGameState={list:[...m.items].sort(()=>Math.random()-.5),idx:0,hits:0,errors:0,details:[]}; classifyRender(); }
  function classifyRender(){
    const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area'); if(!a) return;
    if(s.idx>=s.list.length) return done();
    const [q,ans]=s.list[s.idx]; window._et2class={q,ans};
    a.innerHTML=`<div class="space-y-4">${head(m,`${s.idx+1}/${s.list.length}`)}<div class="glass-card p-6 rounded-2xl"><p class="text-base font-bold text-center">${q}</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3">${m.cats.map((x,i)=>`<button onclick="et2Class(${i})" class="p-4 bg-slate-800 hover:bg-amber-600 rounded-xl font-bold text-xs">${x}</button>`).join('')}</div></div>`;
  }
  window.et2Class=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,o=window._et2class,ok=i===o.ans; ok?s.hits++:s.errors++; s.details.push({statement:o.q,selected:m.cats[i],expected:m.cats[o.ans],isCorrect:ok}); pop(ok).then(()=>{s.idx++;classifyRender();});};

  function sequence(m){ missionGameState={items:[...m.items].sort(()=>Math.random()-.5),moves:0,hits:0,errors:0,details:[]}; sequenceRender(); }
  function sequenceRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;a.innerHTML=`<div class="space-y-4">${head(m,'Ordena la secuencia')}<div id="et2-seq" class="space-y-2">${s.items.map((x,i)=>`<div class="flex gap-2"><div class="flex-1 p-3 rounded-xl bg-slate-800 text-sm font-semibold">${i+1}. ${x}</div><button onclick="et2Move(${i},-1)" class="px-3 rounded-xl bg-slate-700">↑</button><button onclick="et2Move(${i},1)" class="px-3 rounded-xl bg-slate-700">↓</button></div>`).join('')}</div><button onclick="et2CheckSeq()" class="w-full py-3 bg-amber-600 rounded-xl font-black">Comprobar</button></div>`;}
  window.et2Move=(i,d)=>{const s=missionGameState,j=i+d;if(j<0||j>=s.items.length)return;[s.items[i],s.items[j]]=[s.items[j],s.items[i]];s.moves++;sequenceRender();};
  window.et2CheckSeq=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState,ok=m.items.every((x,i)=>x===s.items[i]);if(ok){s.hits=m.items.length;s.details=m.items.map(x=>({statement:x,isCorrect:true}));pop(true).then(done);}else{s.errors++;pop(false);}};

  function match(m){ missionGameState={left:m.pairs.map((p,i)=>({i,t:p[0]})).sort(()=>Math.random()-.5),right:m.pairs.map((p,i)=>({i,t:p[1]})).sort(()=>Math.random()-.5),sel:null,done:[],hits:0,errors:0,details:[]}; matchRender(); }
  function matchRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;if(s.done.length===m.pairs.length)return done();a.innerHTML=`<div class="space-y-4">${head(m,`${s.done.length}/${m.pairs.length}`)}<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">${s.left.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="et2MatchL(${o.i})" class="w-full p-3 rounded-xl text-left text-xs font-bold ${s.done.includes(o.i)?'opacity-30 bg-slate-800':s.sel===o.i?'bg-violet-500':'bg-violet-800 hover:bg-violet-700'}">${o.t}</button>`).join('')}</div><div class="space-y-2">${s.right.map(o=>`<button ${s.done.includes(o.i)?'disabled':''} onclick="et2MatchR(${o.i})" class="w-full p-3 rounded-xl text-left text-xs font-semibold ${s.done.includes(o.i)?'opacity-30 bg-slate-800':'bg-amber-800 hover:bg-amber-700'}">${o.t}</button>`).join('')}</div></div></div>`;}
  window.et2MatchL=i=>{missionGameState.sel=i;matchRender();};
  window.et2MatchR=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState;if(s.sel===null)return;const left=s.sel,ok=left===i;ok?s.hits++:s.errors++;s.details.push({statement:m.pairs[left][0],selected:m.pairs[i][1],expected:m.pairs[left][1],isCorrect:ok});if(ok){s.done.push(i);s.sel=null;}pop(ok).then(matchRender);};

  function choice(m){ missionGameState={idx:0,hits:0,errors:0,details:[]}; choiceRender(); }
  function choiceRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;if(s.idx>=m.qs.length)return done();const [q,opts]=m.qs[s.idx];a.innerHTML=`<div class="space-y-4">${head(m,`${s.idx+1}/${m.qs.length}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-base sm:text-lg font-black text-center mb-4">${q}</p><div class="grid gap-3">${opts.map((o,i)=>`<button onclick="et2Choice(${i})" class="p-4 bg-slate-800 hover:bg-amber-600 rounded-xl text-left text-sm font-bold">${String.fromCharCode(65+i)} · ${o}</button>`).join('')}</div></div></div>`;}
  window.et2Choice=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,[q,opts,ans]=m.qs[s.idx],ok=i===ans;ok?s.hits++:s.errors++;s.details.push({statement:q,selected:opts[i],expected:opts[ans],isCorrect:ok});pop(ok).then(()=>{s.idx++;choiceRender();});};

  function memory(m){
    const cards=[];m.pairs.forEach((p,i)=>{cards.push({pair:i,text:p[0],open:false,done:false});cards.push({pair:i,text:p[1],open:false,done:false});});
    missionGameState={cards:cards.sort(()=>Math.random()-.5),first:null,lock:false,hits:0,errors:0,details:[]}; memoryRender();
  }
  function memoryRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;if(s.cards.every(x=>x.done))return done();a.innerHTML=`<div class="space-y-4">${head(m,`${s.hits}/${m.pairs.length}`)}<div class="grid grid-cols-2 md:grid-cols-4 gap-3">${s.cards.map((x,i)=>`<button ${x.done?'disabled':''} onclick="et2Memory(${i})" class="min-h-[92px] p-3 rounded-xl font-bold text-xs ${x.done?'bg-emerald-800/40 text-emerald-200':x.open?'bg-amber-600 text-white':'bg-slate-800 text-slate-300'}">${x.open||x.done?x.text:'?'}</button>`).join('')}</div></div>`;}
  window.et2Memory=i=>{const s=missionGameState;if(s.lock||s.cards[i].done||s.cards[i].open)return;s.cards[i].open=true;if(s.first===null){s.first=i;memoryRender();return;}const j=s.first;s.lock=true;memoryRender();setTimeout(()=>{const ok=s.cards[i].pair===s.cards[j].pair;if(ok){s.cards[i].done=s.cards[j].done=true;s.hits++;s.details.push({statement:s.cards[j].text,selected:s.cards[i].text,isCorrect:true});}else{s.cards[i].open=s.cards[j].open=false;s.errors++;}s.first=null;s.lock=false;memoryRender();},650);};

  function crossword(m){
    const grid=Array.from({length:m.size},()=>Array(m.size).fill(null));
    m.entries.forEach((e,ei)=>{[...e.word].forEach((ch,k)=>{const r=e.r+(e.dir==='V'?k:0),c=e.c+(e.dir==='H'?k:0);if(r<m.size&&c<m.size){grid[r][c]=grid[r][c]||{ch,entries:[]};grid[r][c].entries.push(ei);}});});
    missionGameState={grid,hits:0,errors:0,details:[]}; crosswordRender();
  }
  function crosswordRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;let cells='';for(let r=0;r<m.size;r++){for(let cc=0;cc<m.size;cc++){const cell=s.grid[r][cc];cells+=cell?`<input maxlength="1" data-r="${r}" data-c="${cc}" class="w-7 h-7 sm:w-8 sm:h-8 bg-slate-900 border border-slate-600 text-center font-black uppercase" />`:`<div class="w-7 h-7 sm:w-8 sm:h-8 bg-transparent"></div>`;}}a.innerHTML=`<div class="space-y-4">${head(m,'Completa el crucigrama')}<div class="overflow-auto"><div style="display:grid;grid-template-columns:repeat(${m.size},minmax(0,2rem));width:max-content">${cells}</div></div><div class="grid md:grid-cols-2 gap-2 text-xs">${m.entries.map((e,i)=>`<div class="p-2 rounded-lg bg-slate-900/60"><b>${i+1}.</b> ${e.clue}</div>`).join('')}</div><button onclick="et2CheckCrossword()" class="w-full py-3 bg-amber-600 rounded-xl font-black">Comprobar</button></div>`;}
  window.et2CheckCrossword=()=>{const m=missionCatalog[activeMissionKey],s=missionGameState;let ok=true,filled=0,total=0;document.querySelectorAll('#mission-content-area input[data-r]').forEach(inp=>{const r=+inp.dataset.r,cc=+inp.dataset.c,cell=s.grid[r][cc];total++;if((inp.value||'').toUpperCase()===cell.ch){inp.classList.add('border-emerald-500');filled++;}else{inp.classList.add('border-rose-500');ok=false;}});if(ok){s.hits=total;s.details=m.entries.map(e=>({statement:e.clue,expected:e.word,isCorrect:true}));pop(true).then(done);}else{s.errors++;pop(false);}};

  function story(m){missionGameState={idx:0,hits:0,errors:0,details:[]};storyRender();}
  function storyRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;if(s.idx>=m.scenes.length)return done();const sc=m.scenes[s.idx];a.innerHTML=`<div class="space-y-4">${head(m,`${s.idx+1}/${m.scenes.length}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-lg font-black mb-4">${sc.q}</p><div class="grid gap-3">${sc.opts.map((o,i)=>`<button onclick="et2Story(${i})" class="p-4 bg-slate-800 hover:bg-amber-600 rounded-xl text-left text-sm font-bold">${o}</button>`).join('')}</div></div></div>`;}
  window.et2Story=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,sc=m.scenes[s.idx],ok=i===sc.ans;ok?s.hits++:s.errors++;s.details.push({statement:sc.q,selected:sc.opts[i],expected:sc.opts[sc.ans],isCorrect:ok});pop(ok).then(()=>{s.idx++;storyRender();});};

  function escape(m){missionGameState={idx:0,code:'',hits:0,errors:0,details:[]};escapeRender();}
  function escapeRender(){const m=missionCatalog[activeMissionKey],s=missionGameState,a=document.getElementById('mission-content-area');if(!a)return;if(s.idx>=m.locks.length){a.innerHTML=`<div class="space-y-5 text-center">${head(m,'Código completo')}<div class="text-5xl font-black tracking-[.25em] text-amber-300">${s.code}</div><button onclick="et2FinishEscape()" class="w-full py-3 bg-emerald-600 rounded-xl font-black">Finalizar reto</button></div>`;return;}const L=m.locks[s.idx];a.innerHTML=`<div class="space-y-4">${head(m,`Candado ${s.idx+1}/${m.locks.length} · ${s.code||'_'}`)}<div class="glass-card p-5 rounded-2xl"><p class="text-lg font-black mb-4">${L.q}</p><div class="grid gap-3">${L.opts.map((o,i)=>`<button onclick="et2Escape(${i})" class="p-4 bg-slate-800 hover:bg-amber-600 rounded-xl text-left text-sm font-bold">${o}</button>`).join('')}</div></div></div>`;}
  window.et2Escape=i=>{const m=missionCatalog[activeMissionKey],s=missionGameState,L=m.locks[s.idx],ok=i===L.ans;ok?s.hits++:s.errors++;s.details.push({statement:L.q,selected:L.opts[i],expected:L.opts[L.ans],isCorrect:ok});if(ok)s.code+=L.letter;pop(ok).then(()=>{if(ok)s.idx++;escapeRender();});};
  window.et2FinishEscape=done;

  setTimeout(()=>{if(currentField()===FIELD)renderGrid();},0);
})();
