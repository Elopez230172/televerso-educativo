/* TeleVerso Educativo · Saberes y pensamiento científico · 2.º · Bloque 1
   Organiza las actividades del PPA 1 dentro de un único bloque visible en la plataforma.
*/
(() => {
  const FIELD='saberes2';
  const BLOCK='Bloque 1';
  const BLOCK_TITLE='Bloque 1 · Yo también puedo generar conocimiento científico';
  const PRODUCT='Producto final: Informe científico visual de nuestra comunidad';
  const currentField=()=>localStorage.getItem('televerso_active_field')||'lenguajes';

  const sections={
    1:{title:'Tramo 1 · Diseñamos el estudio',desc:'Misión de lectura A + R1-R2 · Definimos problema, pregunta, población/alcance, variables y tabla base.',ids:['sp2_1','sp2_2'],color:'cyan'},
    2:{title:'Tramo 2 · Calculamos y representamos',desc:'Misión de lectura B + R3-R6 · Calculamos media, mediana, moda y rango; elegimos, construimos y auditamos gráficas.',ids:['sp2_3','sp2_4','sp2_5','sp2_6'],color:'emerald'},
    3:{title:'Tramo 3 · Interpretamos y comunicamos',desc:'Misión de lectura C + R7-R10 · Integramos evidencia, equidad, límites, conclusiones y el producto final.',ids:['sp2_7','sp2_8','sp2_9','sp2_10'],color:'violet'}
  };

  const missionToSection={};
  Object.entries(sections).forEach(([n,s])=>s.ids.forEach(id=>missionToSection[id]=Number(n)));

  function patchCatalog(){
    if(typeof missionCatalog==='undefined') return;
    Object.entries(missionToSection).forEach(([id,section])=>{
      const m=missionCatalog[id]; if(!m) return;
      m.block=BLOCK;
      m.blockTitle=BLOCK_TITLE;
      m.blockSection=section;
      m.fieldTitle='Saberes y pensamiento científico · 2.º grado · Bloque 1';
    });
  }

  function blockBanner(){
    return `<div id="tv-sp2-block1-banner" class="col-span-full glass-panel rounded-3xl p-5 border border-emerald-500/25 overflow-hidden relative">
      <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5"></div>
      <div class="relative flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[10px] font-black uppercase tracking-widest"><i class="fa-solid fa-flask"></i> Campo formativo · Saberes y pensamiento científico</span>
          <h3 class="text-xl sm:text-2xl font-black text-white mt-3">${BLOCK_TITLE}</h3>
          <p class="text-sm text-slate-300 mt-1">PPA 1 · 2.º de Telesecundaria · un proyecto integrado</p>
          <p class="text-xs text-cyan-300 font-bold mt-2">${PRODUCT}</p>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center min-w-[260px]">
          <div class="rounded-2xl bg-slate-900/70 border border-white/10 p-3"><strong class="block text-xl text-white">3</strong><span class="text-[9px] uppercase tracking-wider text-slate-400 font-black">tramos</span></div>
          <div class="rounded-2xl bg-slate-900/70 border border-white/10 p-3"><strong class="block text-xl text-white">10</strong><span class="text-[9px] uppercase tracking-wider text-slate-400 font-black">retos</span></div>
          <div class="rounded-2xl bg-slate-900/70 border border-white/10 p-3"><strong class="block text-xl text-white">3</strong><span class="text-[9px] uppercase tracking-wider text-slate-400 font-black">entregas</span></div>
        </div>
      </div>
    </div>`;
  }

  function sectionDivider(n){
    const s=sections[n];
    const tones={cyan:['border-cyan-500/25','bg-cyan-500/10','text-cyan-300'],emerald:['border-emerald-500/25','bg-emerald-500/10','text-emerald-300'],violet:['border-violet-500/25','bg-violet-500/10','text-violet-300']};
    const [border,bg,text]=tones[s.color];
    return `<div id="tv-sp2-section-${n}" class="tv-sp2-section-divider col-span-full rounded-2xl ${bg} border ${border} p-4">
      <div class="flex flex-wrap items-center justify-between gap-2"><div><span class="text-[10px] uppercase tracking-widest font-black ${text}">${BLOCK} · tramo ${n}</span><h4 class="text-base font-black text-white mt-1">${s.title}</h4><p class="text-[11px] text-slate-300 mt-1">${s.desc}</p></div><span class="px-3 py-1 rounded-full bg-slate-950/40 border border-white/10 text-[10px] font-bold text-slate-300">${s.ids.length} retos digitales</span></div>
    </div>`;
  }

  function tuneSelector(){
    const btn=document.getElementById('tv-btn-spc2');
    if(!btn) return;
    btn.innerHTML='<span class="block text-[10px] font-black uppercase tracking-wider text-emerald-300">Campo formativo · 2.º grado</span><strong class="block text-white mt-1 text-sm">Saberes y pensamiento científico</strong><span class="block text-[10px] text-slate-400 mt-1">Bloque 1 · PPA 1 · 1 proyecto · 1 producto</span>';
  }

  function labelReadingPanel(){
    const panel=document.getElementById('tv-sp2-reading-deliveries');
    if(!panel) return;
    const tag=panel.querySelector('span.text-cyan-300');
    if(tag) tag.textContent='Bloque 1 · Misiones de lectura obligatorias';
    panel.querySelectorAll('button').forEach(btn=>{
      if(btn.querySelector('.tv-sp2-block-chip')) return;
      const chip=document.createElement('span');
      chip.className='tv-sp2-block-chip inline-flex mt-2 px-2 py-0.5 rounded-full bg-slate-950/50 border border-white/10 text-[9px] font-black uppercase tracking-wider text-slate-300';
      chip.textContent=BLOCK;
      btn.appendChild(chip);
    });
  }

  function insertDividers(grid){
    grid.querySelectorAll('.tv-sp2-section-divider').forEach(n=>n.remove());
    [1,2,3].forEach(n=>{
      const firstId=sections[n].ids[0];
      const icon=document.getElementById(`badge-mission-${firstId}`);
      const card=icon?.closest('.glass-card');
      if(card) card.insertAdjacentHTML('beforebegin',sectionDivider(n));
    });
  }

  function labelMissionCards(grid){
    grid.querySelectorAll('[id^="badge-mission-sp2_"]').forEach(icon=>{
      const id=(icon.id||'').replace('badge-mission-','');
      const section=missionToSection[id];
      const card=icon.closest('.glass-card');
      if(!card||!section) return;
      const m=typeof missionCatalog!=='undefined'?missionCatalog[id]:null;
      if(m){m.block=BLOCK;m.blockSection=section;}
      let chip=card.querySelector('.tv-sp2-mission-block');
      if(!chip){
        chip=document.createElement('div');
        chip.className='tv-sp2-mission-block mb-2 flex flex-wrap gap-2';
        const title=card.querySelector('h4');
        if(title) title.before(chip); else card.prepend(chip);
      }
      chip.innerHTML=`<span class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase tracking-wider text-emerald-300">${BLOCK}</span><span class="px-2 py-0.5 rounded-full bg-slate-950/40 border border-white/10 text-[9px] font-bold text-slate-300">Tramo ${section}</span>`;
    });
  }

  function organize(){
    patchCatalog();
    tuneSelector();
    if(currentField()!==FIELD) return;
    const grid=document.getElementById('student-missions-grid'); if(!grid) return;

    const heading=grid.previousElementSibling;
    if(heading&&heading.tagName==='H4') heading.innerHTML='<i class="fa-solid fa-flask text-emerald-400"></i> Saberes y pensamiento científico · 2.º grado · Bloque 1';

    if(!document.getElementById('tv-sp2-block1-banner')){
      const first=grid.firstElementChild;
      if(first) first.insertAdjacentHTML('beforebegin',blockBanner()); else grid.insertAdjacentHTML('afterbegin',blockBanner());
    }
    labelReadingPanel();
    insertDividers(grid);
    labelMissionCards(grid);
  }

  const prevRender=window.renderStudentMissionsGrid;
  if(typeof prevRender==='function'){
    window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){
      const r=prevRender.apply(this,arguments); setTimeout(organize,40); return r;
    };
  }
  const prevSet=window.tvSetField;
  if(typeof prevSet==='function'){
    window.tvSetField=function(field){const r=prevSet.apply(this,arguments);setTimeout(organize,60);return r;};
  }

  patchCatalog();
  document.addEventListener('DOMContentLoaded',()=>setTimeout(organize,400));
})();
