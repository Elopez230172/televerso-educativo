/* TeleVerso Educativo · Saberes 2.º · refuerzo de proyecto aplicado
   Hace explícitas las tres misiones de lectura y separa el trabajo en papel de los retos digitales.
*/
(() => {
  const FIELD='saberes2';
  const currentField=()=>localStorage.getItem('televerso_active_field')||'lenguajes';

  const readings={
    A:{
      title:'Misión de lectura A · Diseña tu estudio',
      source:'Proyecto pp. 111-115 · Saberes pp. 82-85',
      goal:'Leer para decidir cómo se obtendrán los datos del proyecto, no para hacer un resumen general.',
      steps:[
        'Localiza qué hace investigable una pregunta y escribe la pregunta definitiva del equipo.',
        'Distingue población, muestra o alcance y variables; aplícalos al caso real del grupo.',
        'Define unidad o categorías y el procedimiento o instrumento de obtención.',
        'Prepara el formato donde registrarás los datos crudos antes de calcular o graficar.'
      ],
      deliver:'ENTREGA PARCIAL 1: paquete metodológico = ficha del problema + pregunta + población/alcance + variables + instrumento/procedimiento + tabla base.',
      goes:'Se integra en el apartado “Cómo investigamos” del informe. Cuaderno: p. 9.'
    },
    B:{
      title:'Misión de lectura B · Calcula y representa',
      source:'Saberes pp. 82-92 · Proyecto pp. 116-119',
      goal:'Leer para elegir y aplicar medidas estadísticas y una representación adecuada a los datos reales del equipo.',
      steps:[
        'Calcula con tus datos reales las medidas pertinentes: media, mediana, moda y rango.',
        'Escribe al menos dos procedimientos completos para que otra persona pueda reconstruir los cálculos.',
        'Decide entre barras, línea, histograma o poligonal y justifica por qué responde mejor a la pregunta.',
        'Construye un borrador con título, ejes, unidades y escala; añade una interpretación de 3 a 4 líneas.'
      ],
      deliver:'ENTREGA PARCIAL 2: hoja de análisis estadístico + cálculos visibles + borrador de gráfica + interpretación.',
      goes:'Se integra en “Resultados y representación”. Cuaderno: p. 17.'
    },
    C:{
      title:'Misión de lectura C · Interpreta, contrasta y limita',
      source:'Saberes pp. 92-97 · Proyecto pp. 120-124',
      goal:'Leer para revisar qué muestran los datos, qué no permiten afirmar y qué límites debe reconocer el informe.',
      steps:[
        'Señala un patrón real en una de tus gráficas y cita el dato o medida que lo respalda.',
        'Identifica una limitación concreta de muestra, periodo, fuente o procedimiento.',
        'Detecta una ausencia o posible sesgo y propone una evidencia adicional para contrastarlo.',
        'Reescribe la conclusión final con patrón + evidencia + alcance + al menos una limitación.'
      ],
      deliver:'ENTREGA PARCIAL 3: matriz de interpretación + conclusión final revisada de 5 a 7 líneas.',
      goes:'Se integra en “Interpretación, límites y cierre”. Cuaderno: p. 25.'
    }
  };

  const paperMap={
    sp2_1:['Cuaderno p. 5','Revisa tu ficha del problema y corrige población/alcance, variables y tipos de datos.'],
    sp2_2:['Cuaderno p. 10','Construye una tabla de frecuencias con datos distintos a la sopa digital.'],
    sp2_3:['Cuaderno pp. 11-12 y 24','Resuelve series nuevas y muestra procedimientos de media, mediana, moda y rango.'],
    sp2_4:['Cuaderno pp. 13-19','Construye manualmente barras, línea, histograma y poligonal; después elige dos gráficas para tu proyecto.'],
    sp2_5:['Cuaderno p. 27','Conecta una afirmación del proyecto con dato, gráfica y fuente/procedimiento.'],
    sp2_6:['Cuaderno p. 20','Audita y corrige tus propias gráficas; registra al menos dos cambios.'],
    sp2_7:['Cuaderno p. 25','Usa el vocabulario del reto para fortalecer la interpretación y la conclusión, sin repetir el crucigrama en papel.'],
    sp2_8:['Cuaderno p. 27','Construye dos cadenas de evidencia completas con información real del proyecto.'],
    sp2_9:['Cuaderno p. 30','Redacta conclusiones reales, identifica límites y evita generalizaciones.'],
    sp2_10:['Cuaderno p. 31','Integra las tres entregas parciales, tablas, cálculos y dos gráficas corregidas en el informe final.']
  };

  function patchMissionMeta(){
    if(typeof missionCatalog==='undefined') return;
    Object.entries(paperMap).forEach(([id,[paper,evidence]])=>{
      const m=missionCatalog[id]; if(!m) return;
      m.paper=paper; m.evidence=evidence;
      m.digitalOnlyNote='Reto digital de comprobación: el cuaderno trabaja una aplicación diferente para evitar duplicar ejercicios.';
    });
  }

  function readingCards(){
    return `<div id="tv-sp2-reading-deliveries" class="col-span-full glass-panel p-5 rounded-3xl border border-cyan-500/20">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div><span class="text-[10px] uppercase tracking-widest font-black text-cyan-300">Misiones de lectura obligatorias</span><h4 class="text-lg font-black text-white mt-1">Leer → decidir → producir → integrar</h4><p class="text-[11px] text-slate-400 mt-1">La lectura sólo cuenta cuando produce una pieza utilizable del informe.</p></div>
        <span class="text-[10px] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-black">3 entregas parciales</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
        ${Object.entries(readings).map(([k,r])=>`<button onclick="tvOpenSp2ReadingMission('${k}')" class="text-left rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 p-4 transition"><span class="text-[10px] uppercase tracking-wider text-cyan-300 font-black">${r.title}</span><p class="text-xs text-slate-300 mt-2 leading-relaxed">${r.goal}</p><div class="mt-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-2.5"><span class="text-[9px] uppercase text-emerald-300 font-black">Trabajo que entregas</span><p class="text-[11px] text-white font-semibold mt-1">${r.deliver}</p></div><span class="block text-[10px] text-amber-300 mt-2 font-semibold">${r.source}</span></button>`).join('')}
      </div>
      <div class="mt-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 p-3 text-[11px] text-slate-300"><b class="text-violet-300">Sin duplicar:</b> los juegos R1-R10 se hacen en TeleVerso; el cuaderno usa datos y tareas diferentes para practicar cálculos, construir gráficas y avanzar el informe.</div>
    </div>`;
  }

  function enhanceGrid(){
    patchMissionMeta();
    if(currentField()!==FIELD) return;
    const grid=document.getElementById('student-missions-grid'); if(!grid) return;
    if(!document.getElementById('tv-sp2-reading-deliveries')){
      const roadmap=grid.querySelector('.col-span-full');
      if(roadmap) roadmap.insertAdjacentHTML('afterend',readingCards());
      else grid.insertAdjacentHTML('afterbegin',readingCards());
    }
    grid.querySelectorAll('[id^="badge-mission-sp2_"]').forEach(icon=>{
      const card=icon.closest('.glass-card'); if(!card || card.querySelector('.tv-sp2-no-dup')) return;
      const id=(icon.id||'').replace('badge-mission-',''); const m=missionCatalog?.[id]; if(!m) return;
      const btn=card.querySelector('button');
      const note=document.createElement('div');
      note.className='tv-sp2-no-dup rounded-xl bg-violet-500/10 border border-violet-500/20 p-2.5 mb-3 text-[10px] text-slate-300';
      note.innerHTML='<b class="text-violet-300">Papel ≠ juego digital:</b> '+(m.digitalOnlyNote||'En el cuaderno se aplica con un ejercicio distinto.');
      if(btn) btn.before(note);
    });
  }

  window.tvOpenSp2ReadingMission=function(key){
    const r=readings[key]; if(!r) return;
    const modal=document.getElementById('modal-mission');
    const area=document.getElementById('mission-content-area');
    if(!modal||!area) return;
    modal.classList.remove('hidden');
    area.innerHTML=`<div class="space-y-4 animate-pop"><div class="flex flex-wrap justify-between gap-2"><span class="text-cyan-300 font-black">${r.title}</span><span class="text-amber-300 text-xs font-bold">${r.source}</span></div><div class="glass-card p-5 rounded-2xl"><h3 class="text-xl font-black text-white">📚 Lectura aplicada al proyecto</h3><p class="text-slate-300 text-sm mt-2">${r.goal}</p></div><div class="grid gap-2">${r.steps.map((x,i)=>`<div class="rounded-xl bg-slate-900/70 border border-white/10 p-3 flex gap-3"><span class="shrink-0 w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-300 font-black flex items-center justify-center">${i+1}</span><p class="text-sm text-slate-200">${x}</p></div>`).join('')}</div><div class="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-4"><span class="text-[10px] uppercase tracking-wider text-emerald-300 font-black">Qué debes entregar</span><p class="text-white font-bold mt-1">${r.deliver}</p><p class="text-[11px] text-slate-300 mt-2">${r.goes}</p></div><div class="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-3 text-xs text-slate-300"><b class="text-violet-300">Importante:</b> no copies definiciones del libro. La evidencia debe mostrar decisiones, cálculos, gráficas o redacción del proyecto real.</div></div>`;
  };

  const prevRender=window.renderStudentMissionsGrid;
  if(typeof prevRender==='function'){
    window.renderStudentMissionsGrid=renderStudentMissionsGrid=function(){
      const r=prevRender.apply(this,arguments); setTimeout(enhanceGrid,0); return r;
    };
  }
  const prevSet=window.tvSetField;
  if(typeof prevSet==='function'){
    window.tvSetField=function(field){ const r=prevSet.apply(this,arguments); setTimeout(enhanceGrid,0); return r; };
  }

  patchMissionMeta();
  document.addEventListener('DOMContentLoaded',()=>setTimeout(enhanceGrid,250));
  const obs=new MutationObserver(()=>{ if(currentField()===FIELD) setTimeout(enhanceGrid,0); });
  obs.observe(document.documentElement,{childList:true,subtree:true});
})();
