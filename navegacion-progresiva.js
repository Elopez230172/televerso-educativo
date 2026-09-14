/* TeleVerso Educativo · Navegación curricular progresiva
   Muestra una sola decisión a la vez: Campo -> Periodo -> PPA -> Retos.
   Se aplica a 2.º y 3.º, para cualquier grupo/alumno con grado identificado.
*/
(() => {
  const PERIODS={
    1:{label:'Primer periodo',short:'1.er periodo'},
    2:{label:'Segundo periodo',short:'2.º periodo'},
    3:{label:'Tercer periodo',short:'3.er periodo'}
  };
  const FIELDS={
    2:[
      {key:'lenguajes2',label:'Lenguajes',icon:'fa-language',tone:'indigo',real:true,ppa1:'Nos comunicamos en la riqueza de la diversidad'},
      {key:'saberes2',label:'Saberes y pensamiento científico',icon:'fa-flask',tone:'emerald',real:true,ppa1:'Yo también puedo generar conocimiento científico'},
      {key:'etica2',label:'Ética, naturaleza y sociedades',icon:'fa-earth-americas',tone:'amber',real:true,ppa1:'Tenemos derecho a ser diferentes'},
      {key:'humano2',label:'De lo humano y lo comunitario',icon:'fa-people-group',tone:'rose',real:false}
    ],
    3:[
      {key:'lenguajes',label:'Lenguajes',icon:'fa-language',tone:'indigo',real:true,ppa1:'Nuestras culturas y lenguas: todas cuentan y valen'},
      {key:'saberes',label:'Saberes y pensamiento científico',icon:'fa-flask',tone:'emerald',real:true,ppa1:'Necesidades satisfechas sin la Tierra desecha'},
      {key:'ens',label:'Ética, naturaleza y sociedades',icon:'fa-earth-americas',tone:'amber',real:true,ppa1:'Actividades del primer periodo'},
      {key:'humano3',label:'De lo humano y lo comunitario',icon:'fa-people-group',tone:'rose',real:false}
    ]
  };
  const tones={
    indigo:'border-indigo-400/35 hover:border-indigo-400 text-indigo-300',
    emerald:'border-emerald-400/35 hover:border-emerald-400 text-emerald-300',
    amber:'border-amber-400/35 hover:border-amber-400 text-amber-300',
    rose:'border-rose-400/35 hover:border-rose-400 text-rose-300'
  };

  const baseSelectField=window.tvCurrSelectField;
  const baseSelectPeriod=window.tvCurrSelectPeriod;
  const baseSelectPpa=window.tvCurrSelectPpa;
  let step='field';
  let lastStudentId=null;
  let timer=null;
  let applying=false;

  const normalizeGrade=v=>{
    if(v===2||v==='2'||v==='2°'||v==='2º') return 2;
    if(v===3||v==='3'||v==='3°'||v==='3º') return 3;
    return null;
  };
  const inferGrade=name=>{
    const s=String(name||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if(/\bsegundo\b/.test(s)||/(^|\s)2\s*[°ºo]\s*[a-z]?\b/.test(s)) return 2;
    if(/\btercero\b/.test(s)||/(^|\s)3\s*[°ºo]\s*[a-z]?\b/.test(s)) return 3;
    return null;
  };
  function grade(){
    if(typeof activeStudent==='undefined'||!activeStudent) return null;
    const group=(typeof localState!=='undefined'&&localState?.groups)?localState.groups[activeStudent.groupId]:null;
    return normalizeGrade(activeStudent.grade)||normalizeGrade(group?.grade)||inferGrade(group?.name);
  }
  function studentId(){ return (typeof activeStudent!=='undefined'&&activeStudent?.id)||null; }
  function cfg(g,key){ return (FIELDS[g]||[]).find(x=>x.key===key)||null; }
  function state(g){
    const active=localStorage.getItem('televerso_active_field');
    let field=localStorage.getItem(`televerso_curr_field_g${g}`);
    if(!(FIELDS[g]||[]).some(x=>x.key===field)) field=(FIELDS[g]||[]).some(x=>x.key===active)?active:(g===2?'lenguajes2':'lenguajes');
    let period=Number(localStorage.getItem(`televerso_curr_period_${field}_g${g}`))||1;
    if(![1,2,3].includes(period)) period=1;
    const ppa=Number(localStorage.getItem(`televerso_curr_ppa_${field}_p${period}_g${g}`))||1;
    return {field,period,ppa};
  }
  function ppas(g,s){
    const f=cfg(g,s.field);
    if(!f?.real||s.period!==1) return [];
    return [{id:1,title:f.ppa1||'Actividades disponibles'}];
  }
  function syncStudent(){
    const id=studentId();
    if(!id){ lastStudentId=null; step='field'; return; }
    if(id!==lastStudentId){ lastStudentId=id; step='field'; }
  }

  function fieldCards(g){
    return (FIELDS[g]||[]).map(f=>`<button type="button" onclick="tvProgSelectField('${f.key}')" class="text-left rounded-2xl border bg-slate-900/65 p-4 transition ${tones[f.tone]||tones.indigo}">
      <div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-slate-950/60 flex items-center justify-center"><i class="fa-solid ${f.icon}"></i></div><div class="min-w-0"><strong class="block text-sm text-white leading-tight">${f.label}</strong><span class="block text-[10px] mt-1 ${f.real?'text-emerald-300':'text-slate-500'}">${f.real?'Seleccionar':'Sin actividades todavía'}</span></div></div>
    </button>`).join('');
  }
  function selectedBar(g,s,level){
    const f=cfg(g,s.field);
    const bits=[`<span class="font-black text-white">${f?.label||'Campo'}</span>`];
    if(level==='ppa'||level==='activities') bits.push(`<span class="text-slate-500">›</span><span class="font-bold text-cyan-200">${PERIODS[s.period].label}</span>`);
    if(level==='activities') bits.push(`<span class="text-slate-500">›</span><span class="font-bold text-violet-200">PPA ${s.ppa}</span>`);
    return `<div class="flex flex-wrap items-center gap-2 text-xs">${bits.join('')}</div>`;
  }
  function shell(inner){
    return `<div class="glass-panel rounded-3xl border border-white/10 p-4 sm:p-5 overflow-hidden relative"><div class="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/5 via-cyan-500/5 to-emerald-500/5"></div><div class="relative">${inner}</div></div>`;
  }
  function fieldView(g){
    return shell(`<div class="mb-4"><span class="text-[10px] uppercase tracking-[.18em] text-cyan-300 font-black">${g}.º de Telesecundaria</span><h3 class="text-xl font-black text-white mt-1">Elige el campo formativo</h3></div><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">${fieldCards(g)}</div>`);
  }
  function periodView(g,s){
    return shell(`<div class="flex items-center justify-between gap-3 mb-4"><div>${selectedBar(g,s,'period')}<h3 class="text-lg font-black text-white mt-1">Elige el periodo</h3></div><button onclick="tvProgBack('field')" class="shrink-0 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300 hover:border-indigo-400/50"><i class="fa-solid fa-rotate-left mr-1"></i>Cambiar campo</button></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">${[1,2,3].map(n=>`<button onclick="tvProgSelectPeriod(${n})" class="rounded-2xl border border-cyan-400/25 hover:border-cyan-400 bg-slate-900/65 p-4 text-left transition"><span class="text-[9px] uppercase tracking-widest text-cyan-300 font-black">Periodo ${n}</span><strong class="block text-white mt-1">${PERIODS[n].label}</strong></button>`).join('')}</div>`);
  }
  function ppaView(g,s){
    const list=ppas(g,s);
    const content=list.length?`<div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">${list.map(p=>`<button onclick="tvProgSelectPpa(${p.id})" class="rounded-2xl border border-violet-400/25 hover:border-violet-400 bg-slate-900/65 p-4 text-left transition"><span class="text-[10px] uppercase tracking-widest text-violet-300 font-black">PPA ${p.id}</span><strong class="block text-white mt-1">${p.title}</strong></button>`).join('')}</div>`:`<div class="rounded-2xl border border-dashed border-slate-600 bg-slate-950/35 p-5"><p class="text-sm text-slate-300"><i class="fa-solid fa-folder-open text-slate-500 mr-2"></i>No hay PPA cargados en esta selección.</p></div>`;
    return shell(`<div class="flex items-center justify-between gap-3 mb-4"><div>${selectedBar(g,s,'ppa')}<h3 class="text-lg font-black text-white mt-1">Elige el PPA</h3></div><button onclick="tvProgBack('period')" class="shrink-0 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300 hover:border-cyan-400/50"><i class="fa-solid fa-rotate-left mr-1"></i>Cambiar periodo</button></div>${content}`);
  }
  function activityView(g,s){
    return shell(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div><span class="text-[9px] uppercase tracking-widest text-emerald-300 font-black">Selección activa</span>${selectedBar(g,s,'activities')}</div><button onclick="tvProgBack('field')" class="px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-[11px] font-bold text-slate-300 hover:border-indigo-400/50"><i class="fa-solid fa-sliders mr-1"></i>Cambiar selección</button></div>`);
  }

  function missionParts(){
    const grid=document.getElementById('student-missions-grid');
    if(!grid) return {};
    const section=grid.parentElement;
    const heading=section?Array.from(section.children).find(el=>el.tagName==='H4'):null;
    return {grid,section,heading};
  }
  function setActivitiesVisible(show){
    const {grid,heading}=missionParts();
    if(grid) grid.style.display=show?'':'none';
    if(heading) heading.style.display=show?'':'none';
    const empty=document.getElementById('tv-curriculum-empty');
    if(empty) empty.style.display='none';
    if(!show){
      ['tv-badges-ens','tv-badges-leng','tv-badges-spc','tv-badges-leng2','tv-badges-spc2'].forEach(id=>document.getElementById(id)?.classList.add('hidden'));
    }
  }
  function render(){
    if(applying) return;
    applying=true;
    try{
      syncStudent();
      const g=grade();
      if(!g) return;
      const nav=document.getElementById('tv-curriculum-selector');
      if(!nav) return;
      const s=state(g);
      let html='';
      if(step==='field') html=fieldView(g);
      else if(step==='period') html=periodView(g,s);
      else if(step==='ppa') html=ppaView(g,s);
      else html=activityView(g,s);
      const signature=`progressive|${studentId()}|${g}|${step}|${s.field}|${s.period}|${s.ppa}`;
      if(nav.dataset.progressiveSignature!==signature){
        nav.innerHTML=html;
        nav.dataset.progressiveSignature=signature;
      }
      const available=ppas(g,s).some(p=>p.id===s.ppa)&&!!cfg(g,s.field)?.real;
      setActivitiesVisible(step==='activities'&&available);
    }finally{ applying=false; }
  }

  window.tvProgSelectField=function(field){
    const g=grade(); if(!g||!cfg(g,field)) return;
    step='period';
    if(typeof baseSelectField==='function') baseSelectField(field);
    setTimeout(render,120);
  };
  window.tvProgSelectPeriod=function(period){
    if(![1,2,3].includes(Number(period))) return;
    step='ppa';
    if(typeof baseSelectPeriod==='function') baseSelectPeriod(Number(period));
    setTimeout(render,100);
  };
  window.tvProgSelectPpa=function(ppa){
    const g=grade(); if(!g) return;
    const s=state(g);
    if(!ppas(g,s).some(p=>p.id===Number(ppa))) return;
    step='activities';
    if(typeof baseSelectPpa==='function') baseSelectPpa(Number(ppa));
    setTimeout(render,120);
  };
  window.tvProgBack=function(target){
    step=['field','period','ppa'].includes(target)?target:'field';
    render();
  };

  function wrap(name,delay){
    const fn=window[name];
    if(typeof fn!=='function'||fn.__tvProgressiveNav) return;
    const wrapped=function(...args){
      const r=fn.apply(this,args);
      setTimeout(render,delay);
      return r;
    };
    wrapped.__tvProgressiveNav=true;
    window[name]=wrapped;
    try{ if(name==='renderStudentDashboard') renderStudentDashboard=wrapped; }catch(_){}
    try{ if(name==='renderStudentMissionsGrid') renderStudentMissionsGrid=wrapped; }catch(_){}
  }
  wrap('renderStudentDashboard',180);
  wrap('renderStudentMissionsGrid',140);

  document.addEventListener('DOMContentLoaded',()=>setTimeout(render,700));
  setTimeout(render,100);
  const observer=new MutationObserver(()=>{
    clearTimeout(timer);
    timer=setTimeout(render,120);
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
