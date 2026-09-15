/* TeleVerso · Evaluación formativa en el expediente y la misma base Firestore. */
(() => {
  'use strict';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fields = {ens:'Ética, Naturaleza y Sociedades',etica2:'Ética, Naturaleza y Sociedades · 2.º',lenguajes:'Lenguajes',lenguajes2:'Lenguajes · 2.º',saberes:'Saberes y Pensamiento Científico',saberes2:'Saberes y Pensamiento Científico · 2.º',humano2:'De lo Humano y lo Comunitario · 2.º'};
  // Two independent 32-bit hashes: compare identical prompts AND expected answers,
  // not array positions (the games shuffle questions).
  function fingerprint(q) {
    const text=JSON.stringify([q.statement,q.expected]);let a=2166136261,b=5381;
    for(let i=0;i<text.length;i++){a=Math.imul(a^text.charCodeAt(i),16777619);b=Math.imul(b,33)^text.charCodeAt(i);}
    return (a>>>0).toString(36)+'-'+(b>>>0).toString(36);
  }
  function evidence(activity) {
    const unique=new Map();
    for(const q of Array.isArray(activity?.details)?activity.details:[]){
      if(!q||typeof q.statement!=='string'||!q.statement.trim()||typeof q.isCorrect!=='boolean'||typeof q.expected!=='string')continue;
      const id=fingerprint(q);
      if(!unique.has(id))unique.set(id,{...q,id,first:q.isCorrect,choices:[]});
      unique.get(id).choices.push(String(q.selected??'Sin registro'));
    }
    return [...unique.values()];
  }
  function profile(key,activity) {
    const m=typeof missionCatalog!=='undefined'?missionCatalog[key]||{}:{};
    const type=activity?.assessmentType||m.type||'';
    const field=activity?.field||m.field||'otro';
    // These engines may replace details with the final correct arrangement.
    // Never interpret a success-only completion log as independent mastery.
    const practice=/memory|wordsearch|crossword|sequence|match/.test(type);
    const skill=/memory/.test(type)?'Asociación y memoria de posiciones':/wordsearch/.test(type)?'Localización de vocabulario':/crossword/.test(type)?'Recuperación de conceptos':/sequence/.test(type)?'Organización de procedimientos':/classify/.test(type)?'Clasificación con criterios':/calc/.test(type)?'Resolución de cálculos':/match/.test(type)?'Relación de conceptos':'Interpretación y elección de respuestas';
    return {key,type,field,practice,skill,title:activity?.missionTitle||m.title||key};
  }
  function snapshot(activity) {
    return {at:activity.completedAtISO||activity.completedAt||'Fecha no registrada',items:Object.fromEntries(evidence(activity).map(q=>[q.id,q.first]))};
  }
  function trail(previous) {
    if(!previous)return [];
    const old=Array.isArray(previous.assessmentTrail)?previous.assessmentTrail.filter(x=>x&&x.items):[];
    const all=[...old,snapshot(previous)];
    return all.length>8?[all[0],...all.slice(-7)]:all;
  }
  function report(student,field='all') {
    const activities=Object.entries(student.history||{}).map(([key,a])=>{
      const p=profile(key,a),items=evidence(a),correct=items.filter(q=>q.first).length;
      const percent=items.length?Math.round(100*correct/items.length):null;
      const level=p.practice?'Práctica, sin nivel de dominio':items.length<3?'Evidencia insuficiente':percent<60?'Refuerzo prioritario':percent<80?'En desarrollo':'Desempeño favorable';
      const past=Array.isArray(a.assessmentTrail)?a.assessmentTrail.filter(x=>x&&x.items):[];
      const baseline=past[0];const common=baseline?items.filter(q=>typeof baseline.items[q.id]==='boolean'):[];
      const firstHits=common.filter(q=>baseline.items[q.id]).length,lastHits=common.filter(q=>q.first).length;
      const recurrent=items.filter(q=>past.filter(s=>s.items[q.id]===false).length+(q.first?0:1)>=2);
      return {...p,activity:a,items,correct,percent,level,past,common,firstHits,lastHits,recurrent};
    }).filter(a=>field==='all'||a.field===field);
    return {activities,priorities:activities.filter(a=>a.level==='Refuerzo prioritario'),favorable:activities.filter(a=>a.level==='Desempeño favorable')};
  }
  function recommendation(a) {
    if(a.practice)return 'Retoma los conceptos encontrados y pide explicarlos sin tarjetas ni banco de palabras. Después presenta tres situaciones nuevas para comprobar su comprensión.';
    if(/saberes/.test(a.field))return 'Modela un ejemplo pensando en voz alta. Pide identificar datos, representar el problema y justificar cada operación o conclusión. Resuelve después un ejemplo parecido y otro con datos diferentes.';
    if(/lenguajes/.test(a.field))return 'Contrasta dos ejemplos del contenido que presentó dificultad. Pide señalar diferencias, justificar la elección y elaborar un ejemplo propio o corregir un fragmento con apoyo de la retroalimentación.';
    if(a.field==='humano2')return 'Analiza un caso cercano a la vida escolar. Identifica necesidades, compara alternativas y acuerda una acción con responsable, plazo y una evidencia para revisar sus resultados.';
    return 'Contrasta un caso y un contraejemplo del contenido que presentó dificultad. Pide distinguir datos de interpretaciones y justificar una decisión con dos evidencias. Aplica después el criterio en una situación nueva.';
  }
  function activityHtml(a) {
    const errors=a.items.filter(q=>!q.first);
    return `<article class="tv-eval-card"><div class="tv-eval-heading"><h4>${esc(a.title)}</h4><strong class="tv-eval-badge">${esc(a.level)}</strong></div>
      <p class="tv-eval-muted">${esc(fields[a.field]||a.field)} · ${esc(a.skill)} · ${esc(a.activity.completedAt||'Fecha no registrada')}</p>
      <p>${a.items.length?`<strong>${a.correct} de ${a.items.length}</strong> reactivos distintos con primera respuesta registrada correcta (${a.percent}%).`:'La entrega no tiene un desglose compatible de respuestas; no se atribuyen dificultades específicas.'}</p>
      <p>${a.practice?'Este formato puede conservar solo la solución final corregida o no asociar los fallos a cada concepto. No se reconstruyen primeras elecciones a partir de ese registro. Completarlo no demuestra dominio conceptual.':a.items.length<3?'Faltan al menos tres reactivos distintos para emitir una valoración orientativa sobre esta actividad.':a.percent<80?'Las respuestas muestran contenidos que conviene retomar. Los errores que aparecen abajo son evidencias para conversar con el alumno, no un diagnóstico de su causa.':'Muestra un desempeño favorable en los reactivos disponibles. Hace falta comprobar si explica sus decisiones y aplica lo aprendido en otros ejemplos.'}</p>
      <details><summary>Contenidos y respuestas que requieren revisión (${errors.length})</summary>${errors.length?errors.map(q=>`<div class="tv-eval-evidence"><strong>${esc(q.statement)}</strong><p>Primera elección: ${esc(q.choices[0])}. Respuesta esperada: ${esc(q.expected)}.</p>${q.choices.length>1?`<p>Elecciones registradas: ${esc(q.choices.join(' → '))}.</p>`:''}<p>${esc(q.explanation||'Revisar el razonamiento con el alumno.')}</p></div>`).join(''):'<p>No hay errores por reactivo registrados. En juegos de práctica esto no permite concluir que no hubo dificultades.</p>'}</details>
      <p><strong>Evolución:</strong> ${a.practice?'No se infiere evolución conceptual de los aciertos de este juego.':a.common.length?`En ${a.common.length} reactivos idénticos, pasó de ${a.firstHits} a ${a.lastHits} primeras respuestas correctas entre la primera sesión conservada y la actual. La repetición puede favorecer memorización; no demuestra transferencia.`:'No hay dos sesiones con reactivos idénticos conservados para comparar. El seguimiento se construye a partir de esta actualización.'}</p>
      ${!a.practice?`<p><strong>Dificultades recurrentes:</strong> ${a.recurrent.length?`${a.recurrent.length} reactivos presentan error inicial en dos o más sesiones conservadas: ${a.recurrent.map(q=>esc(q.statement)).join(' · ')}`:'No hay errores repetidos comprobables entre las sesiones conservadas.'}</p>`:''}
      <p><strong>${a.level==='Desempeño favorable'?'Profundización':'Refuerzo sugerido'}:</strong> ${esc(recommendation(a))}</p>
      <p><strong>Comprobar el avance:</strong> Usa tres reactivos nuevos del mismo contenido. Solicita resolverlos sin pistas y justificar al menos dos respuestas con criterios o evidencias pertinentes. Registra la explicación con la rúbrica docente.</p>
    </article>`;
  }
  function groupHtml(student,field) {
    const peers=Object.values(localState.students).filter(s=>s.groupId===student.groupId);
    const missions=new Map();
    peers.forEach(s=>report(s,field).activities.forEach(a=>{
      const item=missions.get(a.key)||{title:a.title,need:0,enough:0,limited:0};
      if(a.practice||a.items.length<3)item.limited++;else{item.enough++;if(a.percent<80)item.need++;}
      missions.set(a.key,item);
    }));
    return `<details><summary>Necesidades compartidas del grupo</summary><p>Se consideran ${peers.length} alumnos del mismo grupo y el campo seleccionado. Los alumnos sin una entrega de la misión no se contabilizan como evaluados.</p>${[...missions.values()].sort((a,b)=>b.need-a.need).map(a=>`<p><strong>${esc(a.title)}</strong>: ${a.need} de ${a.enough} alumnos con evidencia suficiente requieren refuerzo; ${a.limited} tienen evidencia limitada o solo de práctica.</p>`).join('')||'<p>No hay evidencias para comparar.</p>'}</details>`;
  }
  const criteria=[['clarity','Explica una idea con claridad'],['evidence','Utiliza evidencias pertinentes'],['reasoning','Relaciona la evidencia con su conclusión'],['limits','Reconoce límites u otras perspectivas']];
  const levels=['Sin valorar','Requiere acompañamiento','En desarrollo','Logrado'];
  let currentId=null,currentField='all',dirty=false,saving=false;
  const teacherOpen=()=>!document.getElementById('modal-teacher')?.classList.contains('hidden');
  function mount(studentId) {
    if(!teacherOpen())return;
    if(currentId!==studentId){currentField='all';dirty=false;}
    currentId=studentId;
    const history=document.getElementById('stats-history-container');if(!history)return;
    let root=document.getElementById('tv-evaluation');
    if(!root){root=document.createElement('section');root.id='tv-evaluation';history.parentElement.before(root);}
    render();
  }
  function render() {
    const student=localState.students[currentId],root=document.getElementById('tv-evaluation');if(!student||!root)return;
    const result=report(student,currentField),all=report(student).activities;
    const fieldOptions=[...new Set(all.map(a=>a.field))];
    const group=localState.groups[student.groupId];
    const review=student.formativeReview||{};
    root.innerHTML=`<div class="tv-eval-heading"><div><p class="tv-eval-kicker">TELEVERSO · EXPEDIENTE DEL ALUMNO</p><h3>Evaluación formativa y refuerzo</h3></div><button type="button" id="tv-eval-print">Imprimir evaluación</button></div>
      <div class="tv-eval-controls"><label>Campo formativo <select id="tv-eval-field"><option value="all">Todos los campos</option>${fieldOptions.map(f=>`<option value="${esc(f)}" ${currentField===f?'selected':''}>${esc(fields[f]||f)}</option>`).join('')}</select></label><button type="button" id="tv-eval-refresh">Actualizar evidencias</button></div>
      <div id="tv-eval-report"><h3>${esc(student.name)} · ${esc(group?.name||'Sin grupo')}</h3><p>Campo: ${esc(currentField==='all'?'Todos los campos':fields[currentField]||currentField)} · ${result.activities.length} actividades registradas · Informe: ${esc(new Date().toLocaleString('es-MX'))}</p>
      <div class="tv-eval-metrics"><strong>${result.priorities.length} prioridades de refuerzo</strong><strong>${result.favorable.length} desempeños favorables</strong><strong>${result.activities.filter(a=>a.level==='Evidencia insuficiente').length} actividades con evidencia insuficiente</strong></div>
      <p><strong>Síntesis:</strong> ${!result.activities.length?'Todavía no hay actividades registradas en este campo.':result.priorities.length?`Conviene comenzar por ${result.priorities.map(a=>esc(a.title)).join('; ')}. Consulta los errores concretos para elegir qué contenidos retomar.`:'No se identifican prioridades altas con evidencia suficiente. Esto no equivale a dominar todos los contenidos; revisa las áreas en desarrollo y las evidencias pendientes.'}</p>
      <details><summary>Criterios y alcance del informe</summary><p>Se analiza la primera respuesta registrada por reactivo, no los puntos acumulados ni la respuesta corregida al final. Cada reactivo cuenta una vez en la actividad actual. Con 3 o más reactivos: menos de 60% requiere refuerzo prioritario; 60–79% está en desarrollo; desde 80% es favorable. Son umbrales orientativos, no una calificación oficial. Las habilidades se describen según el formato de la tarea, no como capacidades generales del alumno.</p><p>El historial anterior solo conservaba la última sesión de cada misión. Desde esta actualización se guardan resúmenes compactos de hasta ocho sesiones anteriores (la primera y las siete más recientes), además de la actual. No se reconstruyen intentos que ya no existen. Las comparaciones usan la misma consigna y respuesta esperada.</p><p>No se registran sistemáticamente pistas, tiempo efectivo ni explicaciones abiertas. No es posible determinar autonomía, motivación, causas del error o argumentación a partir de aciertos. Las actividades de memoria y búsqueda no reciben nivel de dominio. Las etiquetas históricas se complementan con el catálogo actual cuando faltan metadatos.</p></details>
      ${result.activities.map(activityHtml).join('')}
      <article class="tv-eval-card"><h4>Valoración docente de la argumentación</h4><p>Se aplica a una explicación oral, escrita o actividad de seguimiento. Esta valoración corresponde al alumno completo y se conserva en su expediente.</p><div id="tv-eval-rubric">${criteria.map(([key,label])=>`<label class="tv-eval-rubric"><strong>${label}</strong><select data-criterion="${key}" aria-label="${label}">${levels.map(l=>`<option ${review[key]===l?'selected':''}>${l}</option>`).join('')}</select></label>`).join('')}</div>
      <p>Logrado: presenta una explicación pertinente y suficiente. En desarrollo: incluye elementos correctos pero incompletos. Requiere acompañamiento: necesita preguntas guía o modelado. Sin valorar: falta evidencia.</p>
      <label class="tv-eval-label">Evidencia observada y fecha de la actividad<textarea id="tv-eval-evidence" maxlength="3000" rows="3" placeholder="Describe la explicación del alumno y en qué actividad la observaste.">${esc(review.evidence||'')}</textarea></label>
      <label class="tv-eval-label">Plan de refuerzo y criterio de seguimiento<textarea id="tv-eval-plan" maxlength="3000" rows="3" placeholder="Contenido, actividad, apoyo, fecha de revisión y qué resultado esperas observar.">${esc(review.plan||'')}</textarea></label>
      <p id="tv-eval-saved">${review.updatedAt?'Última valoración guardada: '+esc(new Date(review.updatedAt).toLocaleString('es-MX')):'Sin valoración docente guardada.'}</p>
      <button type="button" id="tv-eval-save" data-no-print>Guardar valoración en el expediente</button><p id="tv-eval-status" role="status" data-no-print></p></article></div>${groupHtml(student,currentField)}`;
    root.querySelector('#tv-eval-field').onchange=e=>{if(dirty&&!window.confirm('Hay una valoración sin guardar. ¿Descartar los cambios?')){e.target.value=currentField;return;}currentField=e.target.value;dirty=false;render();};
    root.querySelector('#tv-eval-refresh').onclick=()=>{if(!dirty||window.confirm('¿Descartar la valoración sin guardar y actualizar?')){dirty=false;render();}};
    root.querySelector('#tv-eval-save').onclick=saveReview;
    root.querySelector('#tv-eval-print').onclick=printReport;
    root.querySelectorAll('[data-criterion],textarea').forEach(el=>el.oninput=()=>{dirty=true;root.querySelector('#tv-eval-status').textContent='Cambios sin guardar.';});
  }
  async function saveReview() {
    if(saving||!teacherOpen()||!currentId)return;
    const id=currentId,root=document.getElementById('tv-evaluation'),status=root.querySelector('#tv-eval-status'),button=root.querySelector('#tv-eval-save');
    if(!db){status.textContent='No hay conexión con la base de datos. La valoración no se ha guardado.';return;}
    const review={evidence:root.querySelector('#tv-eval-evidence').value.trim(),plan:root.querySelector('#tv-eval-plan').value.trim(),updatedAt:new Date().toISOString()};
    root.querySelectorAll('[data-criterion]').forEach(el=>review[el.dataset.criterion]=el.value);
    if(!review.evidence&&criteria.some(([k])=>review[k]!=='Sin valorar')){status.textContent='Describe la evidencia observada antes de asignar niveles.';return;}
    saving=true;button.disabled=true;status.textContent='Guardando; espera la confirmación de la nube…';
    root.querySelectorAll('select,textarea,#tv-eval-refresh').forEach(el=>el.disabled=true);
    try{
      await db.collection('students').doc(id).update({formativeReview:review});
      if(localState.students[id])localState.students[id].formativeReview=review;
      if(activeStudent?.id===id)activeStudent.formativeReview=review;
      if(currentId===id){dirty=false;status.textContent='Valoración guardada en el expediente.';root.querySelector('#tv-eval-saved').textContent='Última valoración guardada: '+new Date(review.updatedAt).toLocaleString('es-MX');}
    }catch(e){status.textContent='No se pudo guardar. Conserva el panel abierto o imprime el borrador e inténtalo de nuevo.';}
    finally{saving=false;button.disabled=false;root.querySelectorAll('select,textarea,#tv-eval-refresh').forEach(el=>el.disabled=false);}
  }
  function printReport() {
    if(!teacherOpen())return;
    const source=document.getElementById('tv-eval-report');if(!source)return;
    const clone=source.cloneNode(true);
    const inputs=source.querySelectorAll('select,textarea');
    clone.querySelectorAll('select,textarea').forEach((el,i)=>{const p=document.createElement('p');p.textContent=inputs[i].value;p.style.whiteSpace='pre-wrap';el.replaceWith(p);});
    clone.querySelectorAll('[data-no-print]').forEach(el=>el.remove());
    clone.querySelectorAll('details').forEach(el=>el.open=true);
    const area=document.getElementById('print-area');
    area.innerHTML='<style>#print-area{font:11pt/1.5 Arial;color:#17213b}#print-area h2,#print-area h3,#print-area h4{color:#30377d}#print-area article{border-top:1px solid #bbb;padding:12px 0}#print-area p{margin:8px 0}#print-area summary{font-weight:bold}#print-area .tv-eval-evidence{break-inside:avoid}#print-area .tv-eval-metrics{display:flex;gap:20px}</style><h2>TeleVerso Educativo · Evaluación formativa</h2>'+(dirty?'<p>Borrador: incluye cambios docentes todavía no guardados.</p>':'');
    area.appendChild(clone);window.print();
  }
  const style=document.createElement('style');style.textContent=`
    #tv-evaluation{border:1px solid #6366f1;border-radius:20px;padding:20px;background:#10182c;color:#e2e8f0;font-size:16px;line-height:1.65;overflow-wrap:anywhere}
    #tv-evaluation h3{font-size:21px;font-weight:800;color:#c7d2fe}#tv-evaluation h4{font-size:18px;font-weight:800;color:#ddd6fe}#tv-evaluation p{margin:12px 0}
    .tv-eval-heading,.tv-eval-controls{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}.tv-eval-kicker{font-size:13px;letter-spacing:.08em;color:#a5b4fc}.tv-eval-muted{color:#cbd5e1;font-size:14px}
    .tv-eval-card{border:1px solid #475569;border-radius:14px;padding:18px;margin:18px 0;background:#172137}.tv-eval-badge{border:1px solid #818cf8;border-radius:8px;padding:6px 10px;font-size:14px;color:#e0e7ff}
    .tv-eval-metrics{display:flex;gap:12px;flex-wrap:wrap;margin:16px 0}.tv-eval-metrics strong{background:#292451;padding:12px;border-radius:10px;color:#ddd6fe}
    #tv-evaluation button{background:#4f46e5;color:white;border-radius:10px;padding:10px 16px;font-weight:700;cursor:pointer;font-size:14px}#tv-evaluation button:disabled{opacity:.5;cursor:wait}
    #tv-evaluation select,#tv-evaluation textarea{background:#0f172a;color:#f1f5f9;border:1px solid #64748b;border-radius:8px;padding:10px;max-width:100%;font:inherit}#tv-evaluation textarea{display:block;width:100%;margin-top:8px}
    #tv-evaluation :focus-visible{outline:3px solid #a5b4fc;outline-offset:3px}#tv-evaluation details{padding:12px;background:#0f172a;border-radius:10px;margin:12px 0}#tv-evaluation summary{cursor:pointer;font-weight:bold}.tv-eval-evidence{border-bottom:1px solid #334155;padding:12px 0}
    .tv-eval-rubric{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:14px 0}.tv-eval-label{display:block;margin:16px 0}
    @media(max-width:600px){#tv-evaluation{padding:14px}.tv-eval-card{padding:12px}.tv-eval-rubric{align-items:stretch;flex-direction:column}.tv-eval-controls select{width:100%}}
  `;document.head.appendChild(style);
  const baseView=window.viewStudentStats;
  window.viewStudentStats=function(id){if(dirty&&currentId!==id&&!window.confirm('¿Descartar la valoración sin guardar?'))return;const result=baseView.apply(this,arguments);mount(id);return result;};
  const baseClose=window.closeStatsModal;
  window.closeStatsModal=function(){if(dirty&&!window.confirm('Hay una valoración sin guardar. ¿Cerrar de todas formas?'))return;dirty=false;return baseClose.apply(this,arguments);};
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
  window.TeleversoAssessment={evidence,profile,report,trail,snapshot};
})();
