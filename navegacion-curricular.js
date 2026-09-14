/* TeleVerso Educativo · Navegación curricular por grado
   Jerarquía: Campo formativo -> Periodo -> PPA -> Actividades.
   Todas las actividades existentes se clasifican como Primer periodo · PPA 1.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const PERIODS = {
    1: {label:'Primer periodo', short:'1.er periodo'},
    2: {label:'Segundo periodo', short:'2.º periodo'},
    3: {label:'Tercer periodo', short:'3.er periodo'}
  };

  const FIELDS = {
    2: [
      {key:'lenguajes2', label:'Lenguajes', icon:'fa-language', tone:'indigo', real:true, ppa1:'Nos comunicamos en la riqueza de la diversidad'},
      {key:'saberes2', label:'Saberes y pensamiento científico', icon:'fa-flask', tone:'emerald', real:true, ppa1:'Yo también puedo generar conocimiento científico'},
      {key:'etica2', label:'Ética, naturaleza y sociedades', icon:'fa-earth-americas', tone:'amber', real:true, ppa1:'Tenemos derecho a ser diferentes'},
      {key:'humano2', label:'De lo humano y lo comunitario', icon:'fa-people-group', tone:'rose', real:false}
    ],
    3: [
      {key:'lenguajes', label:'Lenguajes', icon:'fa-language', tone:'indigo', real:true, ppa1:'Nuestras culturas y lenguas: todas cuentan y valen'},
      {key:'saberes', label:'Saberes y pensamiento científico', icon:'fa-flask', tone:'emerald', real:true, ppa1:'Necesidades satisfechas sin la Tierra desecha'},
      {key:'ens', label:'Ética, naturaleza y sociedades', icon:'fa-earth-americas', tone:'amber', real:true, ppa1:'Actividades del primer periodo'},
      {key:'humano3', label:'De lo humano y lo comunitario', icon:'fa-people-group', tone:'rose', real:false}
    ]
  };

  const REAL_FIELDS = new Set(['lenguajes2','saberes2','etica2','lenguajes','saberes','ens']);
  const DEFAULT_FIELD = {2:'lenguajes2',3:'lenguajes'};

  const normalizeGrade = value => {
    if (value === 2 || value === '2' || value === '2°' || value === '2º') return 2;
    if (value === 3 || value === '3' || value === '3°' || value === '3º') return 3;
    return null;
  };

  const inferGrade = name => {
    const s=String(name||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if (/\bsegundo\b/.test(s) || /(^|\s)2\s*[°ºo]\s*[a-z]?\b/.test(s)) return 2;
    if (/\btercero\b/.test(s) || /(^|\s)3\s*[°ºo]\s*[a-z]?\b/.test(s)) return 3;
    return null;
  };

  function studentGrade(){
    if (typeof activeStudent === 'undefined' || !activeStudent) return null;
    const group=(typeof localState!=='undefined' && localState?.groups) ? localState.groups[activeStudent.groupId] : null;
    return normalizeGrade(activeStudent.grade) || normalizeGrade(group?.grade) || inferGrade(group?.name);
  }

  function fieldConfig(grade,key){ return (FIELDS[grade]||[]).find(x=>x.key===key) || null; }
  function storageKey(grade,suffix){ return `televerso_curr_${suffix}_g${grade}`; }

  function patchCatalog(){
    Object.values(missionCatalog).forEach(m=>{
      if (!m || !REAL_FIELDS.has(m.field)) return;
      m.period=1;
      m.periodTitle='Primer periodo';
      m.ppa=1;
      m.ppaTitle='PPA 1';
      m.curriculumPath='Primer periodo · PPA 1';
    });
  }

  function getState(grade){
    const options=FIELDS[grade]||[];
    const active=localStorage.getItem('televerso_active_field');
    let field=localStorage.getItem(storageKey(grade,'field'));
    if (!options.some(x=>x.key===field)) field=options.some(x=>x.key===active) ? active : DEFAULT_FIELD[grade];
    let period=Number(localStorage.getItem(storageKey(grade,`period_${field}`))) || 1;
    if (![1,2,3].includes(period)) period=1;
    let ppa=Number(localStorage.getItem(storageKey(grade,`ppa_${field}_p${period}`))) || 1;
    return {field,period,ppa};
  }

  function saveField(grade,field){ localStorage.setItem(storageKey(grade,'field'),field); }
  function savePeriod(grade,field,period){ localStorage.setItem(storageKey(grade,`period_${field}`),String(period)); }
  function savePpa(grade,field,period,ppa){ localStorage.setItem(storageKey(grade,`ppa_${field}_p${period}`),String(ppa)); }

  function ppasFor(grade,field,period){
    const cfg=fieldConfig(grade,field);
    if (!cfg?.real || period!==1) return [];
    return [{id:1,title:cfg.ppa1 || 'Actividades disponibles'}];
  }

  const toneClasses={
    indigo:{active:'border-indigo-400 bg-indigo-500/15 text-indigo-200',icon:'text-indigo-300'},
    emerald:{active:'border-emerald-400 bg-emerald-500/15 text-emerald-200',icon:'text-emerald-300'},
    amber:{active:'border-amber-400 bg-amber-500/15 text-amber-200',icon:'text-amber-300'},
    rose:{active:'border-rose-400 bg-rose-500/15 text-rose-200',icon:'text-rose-300'}
  };

  function fieldButton(cfg,selected){
    const tone=toneClasses[cfg.tone]||toneClasses.indigo;
    return `<button type="button" onclick="tvCurrSelectField('${cfg.key}')" class="tv-curr-field-btn text-left rounded-2xl border p-3.5 transition ${selected?tone.active:'border-white/10 bg-slate-900/55 hover:border-white/25 text-slate-200'}">
      <div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-slate-950/45 flex items-center justify-center ${tone.icon}"><i class="fa-solid ${cfg.icon}"></i></div><div class="min-w-0 flex-1"><strong class="block text-sm leading-tight">${cfg.label}</strong><span class="block text-[10px] mt-1 ${cfg.real?'text-emerald-300':'text-slate-500'}">${cfg.real?'Actividades disponibles':'Sin actividades cargadas todavía'}</span></div>${selected?'<i class="fa-solid fa-circle-check text-xs mt-1"></i>':''}</div>
    </button>`;
  }

  function periodButton(n,selected){
    return `<button type="button" onclick="tvCurrSelectPeriod(${n})" class="rounded-xl border px-4 py-3 text-sm font-black transition ${selected?'border-cyan-400 bg-cyan-500/15 text-cyan-200':'border-white/10 bg-slate-900/55 text-slate-300 hover:border-white/25'}"><span class="block text-[9px] uppercase tracking-widest opacity-70">Periodo ${n}</span>${PERIODS[n].label}</button>`;
  }

  function ppaPanel(grade,state){
    const list=ppasFor(grade,state.field,state.period);
    if (!list.length) return `<div class="rounded-2xl border border-dashed border-slate-600 bg-slate-950/30 p-4 text-sm text-slate-400"><i class="fa-solid fa-folder-open mr-2 text-slate-500"></i>Aún no hay PPA cargados para <b class="text-slate-300">${PERIODS[state.period].label}</b> en este campo formativo.</div>`;
    return `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">${list.map(p=>`<button type="button" onclick="tvCurrSelectPpa(${p.id})" class="text-left rounded-2xl border p-4 transition ${state.ppa===p.id?'border-violet-400 bg-violet-500/15':'border-white/10 bg-slate-900/55 hover:border-violet-400/40'}"><span class="text-[10px] uppercase tracking-widest font-black text-violet-300">PPA ${p.id}</span><strong class="block text-white mt-1">${p.title}</strong><span class="block text-[10px] text-slate-400 mt-1">${PERIODS[state.period].label}</span></button>`).join('')}</div>`;
  }

  function navHtml(grade,state){
    const cfg=fieldConfig(grade,state.field);
    return `<div class="glass-panel rounded-3xl border border-white/10 p-5 sm:p-6 space-y-5 overflow-hidden relative">
      <div class="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/5 via-cyan-500/5 to-emerald-500/5"></div>
      <div class="relative flex flex-wrap items-center justify-between gap-3"><div><span class="text-[10px] uppercase tracking-[.18em] text-cyan-300 font-black">Ruta curricular · ${grade}.º de Telesecundaria</span><h3 class="text-xl sm:text-2xl font-black text-white mt-1">Selecciona campo, periodo y PPA</h3><p class="text-xs text-slate-400 mt-1">Las actividades actuales están clasificadas en <b class="text-slate-300">Primer periodo · PPA 1</b>.</p></div><div class="px-3 py-2 rounded-xl bg-slate-950/45 border border-white/10 text-xs text-slate-300"><i class="fa-solid fa-route mr-2 text-cyan-300"></i>${cfg?.label||'Campo formativo'} → ${PERIODS[state.period].short}${ppasFor(grade,state.field,state.period).length?` → PPA ${state.ppa}`:''}</div></div>
      <div class="relative"><div class="flex items-center gap-2 mb-2"><span class="w-6 h-6 rounded-lg bg-indigo-500/15 text-indigo-300 flex items-center justify-center text-xs font-black">1</span><h4 class="text-xs font-black uppercase tracking-wider text-slate-300">Campo formativo</h4></div><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">${(FIELDS[grade]||[]).map(f=>fieldButton(f,f.key===state.field)).join('')}</div></div>
      <div class="relative"><div class="flex items-center gap-2 mb-2"><span class="w-6 h-6 rounded-lg bg-cyan-500/15 text-cyan-300 flex items-center justify-center text-xs font-black">2</span><h4 class="text-xs font-black uppercase tracking-wider text-slate-300">Periodo</h4></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">${[1,2,3].map(n=>periodButton(n,n===state.period)).join('')}</div></div>
      <div class="relative"><div class="flex items-center gap-2 mb-2"><span class="w-6 h-6 rounded-lg bg-violet-500/15 text-violet-300 flex items-center justify-center text-xs font-black">3</span><h4 class="text-xs font-black uppercase tracking-wider text-slate-300">Proyecto Parcial de Aula (PPA)</h4></div>${ppaPanel(grade,state)}</div>
    </div>`;
  }

  function findMissionSection(){
    const grid=document.getElementById('student-missions-grid');
    if(!grid) return null;
    const section=grid.parentElement;
    const heading=section ? Array.from(section.children).find(el=>el.tagName==='H4') : null;
    return {grid,section,heading};
  }

  function ensureNavigation(grade,state){
    const parts=findMissionSection(); if(!parts?.section) return;
    let nav=document.getElementById('tv-curriculum-selector');
    if(!nav){ nav=document.createElement('div'); nav.id='tv-curriculum-selector'; nav.className='mb-6'; parts.section.insertBefore(nav,parts.section.firstChild); }
    const signature=`${grade}|${state.field}|${state.period}|${state.ppa}`;
    if(nav.dataset.signature!==signature){ nav.innerHTML=navHtml(grade,state); nav.dataset.signature=signature; }
  }

  function hideLegacySelector(){
    const old=document.getElementById('tv-field-selector');
    if(old){old.style.display='none';old.setAttribute('aria-hidden','true');}
  }

  function replaceText(root,from,to){
    if(!root) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{ if(n.nodeValue.includes(from)) n.nodeValue=n.nodeValue.split(from).join(to); });
  }

  function adaptLegacySaberes(){
    const banner=document.getElementById('tv-sp2-block1-banner');
    if(banner) replaceText(banner,'Bloque 1','Primer periodo · PPA 1');
    document.querySelectorAll('.tv-sp2-section-divider').forEach(el=>replaceText(el,'Bloque 1','Primer periodo · PPA 1'));
    const readings=document.getElementById('tv-sp2-reading-deliveries');
    if(readings) replaceText(readings,'Bloque 1','Primer periodo · PPA 1');
  }

  function labelMissionCards(){
    document.querySelectorAll('[id^="badge-mission-"]').forEach(icon=>{
      const id=(icon.id||'').replace('badge-mission-','');
      const m=missionCatalog[id];
      if(!m || !REAL_FIELDS.has(m.field)) return;
      const card=icon.closest('.glass-card'); if(!card) return;
      let row=card.querySelector('.tv-curriculum-mission-meta');
      if(!row){ row=document.createElement('div'); row.className='tv-curriculum-mission-meta flex flex-wrap gap-1.5 mb-2'; card.insertBefore(row,card.firstChild); }
      const html='<span class="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-black uppercase tracking-wider text-cyan-300">Primer periodo</span><span class="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-black uppercase tracking-wider text-violet-300">PPA 1</span>';
      if(row.innerHTML!==html) row.innerHTML=html;
    });
  }

  function ensureEmptyMessage(grade,state,showActivities){
    const parts=findMissionSection(); if(!parts?.grid) return;
    let empty=document.getElementById('tv-curriculum-empty');
    if(!empty){ empty=document.createElement('div'); empty.id='tv-curriculum-empty'; empty.className='hidden glass-panel rounded-3xl border border-amber-500/20 p-6'; parts.grid.insertAdjacentElement('afterend',empty); }
    if(showActivities){ empty.classList.add('hidden'); return; }
    const cfg=fieldConfig(grade,state.field);
    const ppas=ppasFor(grade,state.field,state.period);
    empty.innerHTML=`<div class="flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-300 flex items-center justify-center text-xl"><i class="fa-solid fa-hourglass-half"></i></div><div><span class="text-[10px] uppercase tracking-widest font-black text-amber-300">${PERIODS[state.period].label}</span><h4 class="text-lg font-black text-white mt-1">${cfg?.label||'Campo formativo'}</h4><p class="text-sm text-slate-300 mt-1">${ppas.length?'Selecciona un PPA para ver sus actividades.':'Todavía no hay PPA ni actividades cargadas en esta sección.'}</p><p class="text-xs text-slate-500 mt-2">La estructura ya está preparada para incorporar nuevos PPA en el segundo y tercer periodo sin mezclar actividades.</p></div></div>`;
    empty.classList.remove('hidden');
  }

  function applyView(){
    patchCatalog();
    hideLegacySelector();
    const grade=studentGrade(); if(!grade) return;
    const state=getState(grade);
    ensureNavigation(grade,state);

    const parts=findMissionSection(); if(!parts?.grid) return;
    const cfg=fieldConfig(grade,state.field);
    const available=ppasFor(grade,state.field,state.period).some(p=>p.id===state.ppa);
    const realAndActive=!!cfg?.real && available;
    parts.grid.style.display=realAndActive?'':'none';
    ensureEmptyMessage(grade,state,realAndActive);

    if(parts.heading){
      parts.heading.innerHTML=`<i class="fa-solid fa-list-check text-cyan-400"></i> Actividades · ${cfg?.label||'Campo formativo'} · ${PERIODS[state.period].label}${available?` · PPA ${state.ppa}`:''}`;
    }
    if(realAndActive){ labelMissionCards(); if(state.field==='saberes2') adaptLegacySaberes(); }
  }

  window.tvCurrSelectField=function(field){
    const grade=studentGrade(); if(!grade) return;
    const cfg=fieldConfig(grade,field); if(!cfg) return;
    saveField(grade,field); savePeriod(grade,field,1); savePpa(grade,field,1,1);
    if(cfg.real && typeof window.tvSetField==='function') window.tvSetField(field);
    setTimeout(applyView,80);
  };

  window.tvCurrSelectPeriod=function(period){
    const grade=studentGrade(); if(!grade || ![1,2,3].includes(Number(period))) return;
    const state=getState(grade); savePeriod(grade,state.field,Number(period)); savePpa(grade,state.field,Number(period),1); setTimeout(applyView,0);
  };

  window.tvCurrSelectPpa=function(ppa){
    const grade=studentGrade(); if(!grade) return;
    const state=getState(grade); const valid=ppasFor(grade,state.field,state.period).some(p=>p.id===Number(ppa)); if(!valid) return;
    savePpa(grade,state.field,state.period,Number(ppa)); setTimeout(applyView,0);
  };

  const prevSetField=window.tvSetField;
  if(typeof prevSetField==='function'){
    window.tvSetField=function(field){
      const grade=studentGrade();
      if(grade && fieldConfig(grade,field)?.real) saveField(grade,field);
      const r=prevSetField.apply(this,arguments); setTimeout(applyView,90); return r;
    };
  }

  const prevRenderGrid=window.renderStudentMissionsGrid;
  if(typeof prevRenderGrid==='function'){
    window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){ const r=prevRenderGrid.apply(this,arguments); setTimeout(applyView,120); return r; };
  }

  const prevDashboard=window.renderStudentDashboard;
  if(typeof prevDashboard==='function'){
    window.renderStudentDashboard=renderStudentDashboard=function(){ const r=prevDashboard.apply(this,arguments); setTimeout(applyView,160); return r; };
  }

  patchCatalog();
  document.addEventListener('DOMContentLoaded',()=>setTimeout(applyView,500));
  let timer=null;
})();