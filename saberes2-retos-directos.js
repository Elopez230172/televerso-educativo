/* TeleVerso Educativo · Saberes 2.º · fichas de retos directos
   El cuadernillo conserva explicaciones, lecturas, etapas y evidencias.
   En la plataforma sólo se muestran fichas para abrir y ejecutar los juegos.
*/
(() => {
  const FIELD='saberes2';
  const currentField=()=>localStorage.getItem('televerso_active_field')||'lenguajes';
  const missions=()=>typeof missionCatalog==='undefined'?[]:Object.values(missionCatalog).filter(m=>m?.field===FIELD);
  const norm=v=>String(v??'').replace(/\s+/g,' ').trim();

  function installStyle(){
    if(document.getElementById('tv-sp2-direct-style')) return;
    const style=document.createElement('style');
    style.id='tv-sp2-direct-style';
    style.textContent=`
      #student-missions-grid > #tv-sp2-reading-deliveries,
      #student-missions-grid > #tv-sp2-block1-banner,
      #student-missions-grid > .tv-sp2-section-divider,
      #student-missions-grid > .col-span-full:not(.tv-sp2-simple-card),
      #student-missions-grid .tv-sp2-mission-block,
      #student-missions-grid .tv-sp2-no-dup { display:none !important; }
    `;
    document.head.appendChild(style);
  }

  function completedMap(){ return (typeof activeStudent!=='undefined' && activeStudent?.completed)||{}; }

  function simpleCard(m,i,done){
    return `<div class="tv-sp2-simple-card glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 border-t-emerald-500">
      <div>
        <div class="flex justify-between items-center mb-3">
          <span class="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase rounded-lg border border-emerald-500/30">Reto ${i+1}</span>
          <i id="badge-mission-${m.id}" class="fa-solid ${done?'fa-circle-check text-emerald-400':'fa-lock text-slate-500'} text-base"></i>
        </div>
        <h4 class="text-base font-bold text-white mb-4">${m.icon||'🎮'} ${m.title}</h4>
      </div>
      <button onclick="launchMission('${m.id}')" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20">
        <i class="fa-solid fa-play"></i><span>Iniciar reto</span>
      </button>
    </div>`;
  }

  function renderSimpleGrid(){
    if(currentField()!==FIELD) return;
    installStyle();
    const grid=document.getElementById('student-missions-grid');
    if(!grid) return;
    const ms=missions();
    if(!ms.length) return;
    const comp=completedMap();
    const ids=ms.map(m=>m.id).join('|');
    const current=[...grid.querySelectorAll('.tv-sp2-simple-card [id^="badge-mission-"]')].map(x=>x.id.replace('badge-mission-','')).join('|');
    if(current!==ids){
      grid.innerHTML=ms.map((m,i)=>simpleCard(m,i,!!comp[m.id])).join('');
    }else{
      ms.forEach(m=>{
        const icon=document.getElementById(`badge-mission-${m.id}`);
        if(icon) icon.className=`fa-solid ${comp[m.id]?'fa-circle-check text-emerald-400':'fa-lock text-slate-500'} text-base`;
      });
    }
    const section=grid.parentElement;
    const heading=section?Array.from(section.children).find(el=>el.tagName==='H4'):null;
    if(heading) heading.innerHTML='<i class="fa-solid fa-flask text-emerald-400"></i> Saberes y pensamiento científico · Retos';
  }

  function cleanMissionModal(){
    if(typeof activeMissionKey==='undefined' || !activeMissionKey || typeof missionCatalog==='undefined') return;
    const m=missionCatalog[activeMissionKey];
    if(!m || m.field!==FIELD) return;
    const area=document.getElementById('mission-content-area');
    if(!area) return;

    const hideExact=new Set([m.paper,m.stage,m.project,m.desc,m.evidence,m.readingTask,m.readingSource].filter(Boolean).map(norm));
    area.querySelectorAll('span,p').forEach(el=>{
      const text=norm(el.textContent);
      if(!text) return;
      if(hideExact.has(text) || /^Evidencia\s*:/i.test(text) || /^Actividad equivalente\s*:/i.test(text)) el.style.display='none';
    });
    area.querySelectorAll('.bg-cyan-950\/30').forEach(el=>el.style.display='none');
  }

  function apply(){
    if(currentField()!==FIELD) return;
    renderSimpleGrid();
    cleanMissionModal();
  }

  function wrap(name,delay){
    const fn=window[name];
    if(typeof fn!=='function' || fn.__tvSp2Direct) return;
    const wrapped=function(...args){
      const r=fn.apply(this,args);
      setTimeout(apply,delay);
      return r;
    };
    wrapped.__tvSp2Direct=true;
    window[name]=wrapped;
    try{ if(name==='renderStudentMissionsGrid') renderStudentMissionsGrid=wrapped; }catch(_){}
    try{ if(name==='renderStudentDashboard') renderStudentDashboard=wrapped; }catch(_){}
    try{ if(name==='tvSetField') tvSetField=wrapped; }catch(_){}
  }

  wrap('renderStudentMissionsGrid',40);
  wrap('renderStudentDashboard',60);
  wrap('tvSetField',60);

  document.addEventListener('DOMContentLoaded',()=>setTimeout(apply,500));
  installStyle();
  setTimeout(apply,0);

  let timer=null;
  const observer=new MutationObserver(()=>{
    if(currentField()!==FIELD) return;
    clearTimeout(timer);
    timer=setTimeout(()=>{
      const grid=document.getElementById('student-missions-grid');
      if(grid && !grid.querySelector('.tv-sp2-simple-card')) renderSimpleGrid();
      cleanMissionModal();
    },80);
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
