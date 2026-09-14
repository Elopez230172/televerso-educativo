/* TeleVerso Educativo · Acceso por grado escolar
   Separa las actividades de 2.º y 3.º de Telesecundaria según el grado del grupo inscrito.
   - 2.º: Lenguajes, Saberes y Ética PPA 1 (lenguajes2, saberes2, etica2)
   - 3.º: Ética, Lenguajes 3.º y Saberes
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD_GRADE = { lenguajes2: 2, saberes2: 2, etica2: 2, ens: 3, lenguajes: 3, saberes: 3 };
  const GRADE_FIELDS = { 2: ['lenguajes2', 'saberes2', 'etica2'], 3: ['ens', 'lenguajes', 'saberes'] };
  const DEFAULT_FIELD = {2: 'lenguajes2', 3: 'lenguajes'};

  const normalizeGrade = value => {
    if (value === 2 || value === '2' || value === '2°' || value === '2º') return 2;
    if (value === 3 || value === '3' || value === '3°' || value === '3º') return 3;
    return null;
  };

  const inferGradeFromName = name => {
    const s = String(name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (/\bsegundo\b/.test(s) || /(^|\s)2\s*[°ºo]\s*[a-z]?\b/.test(s)) return 2;
    if (/\btercero\b/.test(s) || /(^|\s)3\s*[°ºo]\s*[a-z]?\b/.test(s)) return 3;
    return null;
  };

  const groupForStudent = student => student ? localState?.groups?.[student.groupId] : null;
  const getStudentGrade = student => {
    if (!student) return null;
    return normalizeGrade(student.grade) || normalizeGrade(groupForStudent(student)?.grade) || inferGradeFromName(groupForStudent(student)?.name);
  };
  const gradeForMission = mission => {
    if (!mission) return null;
    const explicit = normalizeGrade(mission.grade);
    if (explicit) return explicit;
    if (mission.field && FIELD_GRADE[mission.field]) return FIELD_GRADE[mission.field];
    const level = String(mission.level || '');
    if (/2\.?\s*[°º]?/.test(level)) return 2;
    if (/3\.?\s*[°º]?/.test(level)) return 3;
    return null;
  };
  const allowedFields = grade => GRADE_FIELDS[grade] || [];
  const isFieldAllowed = (field, grade) => allowedFields(grade).includes(field);

  function setPreferredFieldForGrade(grade) {
    if (!grade) return null;
    const key = `televerso_active_field_g${grade}`;
    const saved = localStorage.getItem(key);
    const current = localStorage.getItem('televerso_active_field');
    const field = isFieldAllowed(saved, grade) ? saved : (isFieldAllowed(current, grade) ? current : DEFAULT_FIELD[grade]);
    localStorage.setItem('televerso_active_field', field);
    return field;
  }

  function showGradePendingMessage() {
    const grid = document.getElementById('student-missions-grid');
    if (!grid) return;
    grid.innerHTML = `<div class="glass-panel p-6 rounded-3xl border border-amber-500/30 sm:col-span-2 lg:col-span-3"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center text-xl"><i class="fa-solid fa-graduation-cap"></i></div><div><h4 class="font-black text-white">Tu grupo necesita tener un grado asignado</h4><p class="text-slate-300 text-sm mt-1">Por seguridad, TeleVerso no mostrará actividades de 2.º ni de 3.º hasta que el docente asigne el grado del grupo desde el Panel Docente.</p></div></div></div>`;
  }

  function applyStudentGradeUI() {
    if (!activeStudent) return;
    const grade = getStudentGrade(activeStudent);
    const selector = document.getElementById('tv-field-selector');
    const map = {'tv-btn-ens':3,'tv-btn-leng':3,'tv-btn-spc':3,'tv-btn-leng2':2,'tv-btn-spc2':2,'tv-btn-etica2':2};
    Object.entries(map).forEach(([id,g]) => { const el=document.getElementById(id); if(el) el.style.display=grade===g?'':'none'; });
    const grid = selector?.querySelector('.grid');
    if (grid) {
      grid.classList.remove('sm:grid-cols-2','sm:grid-cols-3','lg:grid-cols-4');
      if (grade === 3) grid.classList.add('sm:grid-cols-3'); else if (grade === 2) grid.classList.add('sm:grid-cols-3'); else grid.classList.add('sm:grid-cols-1');
    }
    const grp = groupForStudent(activeStudent);
    const meta = document.getElementById('student-group-display');
    if (meta) meta.innerText = `Grupo: ${grp ? grp.name : 'General'}${grade ? ` · ${grade}.º grado` : ' · grado pendiente'}`;
    if (!grade) showGradePendingMessage();
  }

  const prevSetField = window.tvSetField;
  window.tvSetField = function(field) {
    const grade = getStudentGrade(activeStudent);
    if (activeStudent && (!grade || !isFieldAllowed(field, grade))) {
      if (typeof Swal !== 'undefined') Swal.fire({icon:'warning',title:grade?'Contenido exclusivo de otro grado':'Grado no asignado',text:grade?`Tu inscripción corresponde a ${grade}.º de Telesecundaria. Sólo puedes abrir actividades de tu grado.`:'El docente debe asignar el grado de tu grupo antes de entrar a las actividades.',confirmButtonText:'Entendido'});
      return;
    }
    if (grade) localStorage.setItem(`televerso_active_field_g${grade}`, field);
    localStorage.setItem('televerso_active_field', field);
    return typeof prevSetField === 'function' ? prevSetField(field) : undefined;
  };

  const prevLaunchMission = window.launchMission;
  window.launchMission = function(id) {
    const mission = missionCatalog[id];
    const grade = getStudentGrade(activeStudent);
    const mGrade = gradeForMission(mission);
    if (activeStudent && (!grade || (mGrade && mGrade !== grade))) {
      if (typeof Swal !== 'undefined') Swal.fire({icon:'error',title:'Actividad no disponible para tu grado',text:grade?`Esta misión corresponde a ${mGrade || 'otro'}.º y tu grupo está inscrito en ${grade}.º.`:'Tu grupo todavía no tiene grado asignado.',confirmButtonText:'Cerrar'});
      return;
    }
    return typeof prevLaunchMission === 'function' ? prevLaunchMission(id) : undefined;
  };

  const prevRenderGrid = window.renderStudentMissionsGrid;
  window.renderStudentMissionsGrid = function() {
    const grade = getStudentGrade(activeStudent);
    if (activeStudent && grade) setPreferredFieldForGrade(grade);
    const result = typeof prevRenderGrid === 'function' ? prevRenderGrid() : undefined;
    setTimeout(() => { applyStudentGradeUI(); if (activeStudent && !getStudentGrade(activeStudent)) showGradePendingMessage(); }, 0);
    return result;
  };

  const prevRenderDashboard = window.renderStudentDashboard;
  window.renderStudentDashboard = function() {
    if (activeStudent) { const grade=getStudentGrade(activeStudent); if (grade) setPreferredFieldForGrade(grade); }
    const result = typeof prevRenderDashboard === 'function' ? prevRenderDashboard() : undefined;
    setTimeout(applyStudentGradeUI, 0);
    return result;
  };

  function enhanceNewGroupForm() {
    const input = document.getElementById('input-group-name');
    if (!input || document.getElementById('tv-new-group-grade')) return;
    const row = input.parentElement; if (!row) return;
    row.classList.add('flex-wrap');
    const select = document.createElement('select');
    select.id='tv-new-group-grade';
    select.className='bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500';
    select.innerHTML='<option value="">Grado...</option><option value="2">2.º grado</option><option value="3">3.º grado</option>';
    row.insertBefore(select,row.lastElementChild);
    const label=input.closest('.glass-card')?.querySelector('label');
    if(label) label.innerHTML='Crear Nuevo Grupo Escolar <span class="text-amber-300">· el grado controla qué actividades verá el alumno</span>';
  }

  const originalCreateGroup = window.createGroupCloud;
  window.createGroupCloud = async function() {
    const input=document.getElementById('input-group-name');
    const gradeSelect=document.getElementById('tv-new-group-grade');
    const name=input?.value?.trim();
    const grade=normalizeGrade(gradeSelect?.value);
    if(!name) return;
    if(!grade){ if(typeof Swal!=='undefined') await Swal.fire('Falta el grado','Selecciona 2.º o 3.º antes de crear el grupo.','warning'); return; }
    if(!db) return typeof originalCreateGroup==='function'?originalCreateGroup():undefined;
    const gId='GRP_'+Date.now();
    try { await db.collection('groups').doc(gId).set({id:gId,name,grade,students:[]}); input.value=''; if(gradeSelect) gradeSelect.value=''; }
    catch(e){ if(typeof Swal!=='undefined') Swal.fire('Error',e.message,'error'); }
  };

  window.tvSetGroupGrade = async function(groupId,value) {
    const grade=normalizeGrade(value);
    if(!grade || !localState?.groups?.[groupId]) return;
    const group=localState.groups[groupId];
    try {
      if(db){ const batch=db.batch(); batch.set(db.collection('groups').doc(groupId),{grade},{merge:true}); (group.students||[]).forEach(sid=>batch.set(db.collection('students').doc(sid),{grade},{merge:true})); await batch.commit(); }
      group.grade=grade;
      (group.students||[]).forEach(sid=>{if(localState.students?.[sid]) localState.students[sid].grade=grade;});
      enhanceTeacherGradeControls();
      if(activeStudent?.groupId===groupId) renderStudentDashboard();
      if(typeof Swal!=='undefined') Swal.fire({icon:'success',title:`Grupo asignado a ${grade}.º`,text:'Los alumnos de este grupo sólo verán actividades de su grado.',timer:1700,showConfirmButton:false});
    } catch(e){ if(typeof Swal!=='undefined') Swal.fire('Error',e.message,'error'); }
  };

  function enhanceTeacherGradeControls() {
    enhanceNewGroupForm();
    Object.values(localState?.groups||{}).forEach(group=>{
      const addButton=document.querySelector(`button[onclick="addStudentCloud('${group.id}')"]`);
      const card=addButton?.closest('.glass-card'); if(!card) return;
      let box=card.querySelector(`[data-grade-group="${group.id}"]`);
      if(!box){
        box=document.createElement('div'); box.dataset.gradeGroup=group.id; box.className='flex flex-wrap items-center gap-2 pt-2 border-t border-white/10';
        box.innerHTML=`<span class="text-[11px] font-black uppercase tracking-wider text-slate-400"><i class="fa-solid fa-graduation-cap mr-1"></i> Acceso por grado</span><select onchange="tvSetGroupGrade('${group.id}', this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs font-bold"><option value="">Asignar grado</option><option value="2">2.º grado</option><option value="3">3.º grado</option></select><span class="tv-grade-status text-xs font-bold"></span>`;
        card.appendChild(box);
      }
      const grade=normalizeGrade(group.grade)||inferGradeFromName(group.name);
      const sel=box.querySelector('select'); if(sel&&grade) sel.value=String(grade);
      const status=box.querySelector('.tv-grade-status');
      if(status){
        if(normalizeGrade(group.grade)){status.className='tv-grade-status text-xs font-bold text-emerald-300';status.textContent=`${grade}.º confirmado`;}
        else if(grade){status.className='tv-grade-status text-xs font-bold text-amber-300';status.textContent=`${grade}.º detectado por el nombre · confirma en el selector`;}
        else {status.className='tv-grade-status text-xs font-bold text-rose-300';status.textContent='Sin grado: el alumnado no podrá abrir actividades';}
      }
    });
  }

  const prevRenderTeacherGroups=window.renderTeacherGroups;
  window.renderTeacherGroups=function(){const result=typeof prevRenderTeacherGroups==='function'?prevRenderTeacherGroups():undefined;setTimeout(enhanceTeacherGradeControls,0);return result;};

  setTimeout(()=>{enhanceNewGroupForm();if(activeStudent) renderStudentDashboard();},0);
})();