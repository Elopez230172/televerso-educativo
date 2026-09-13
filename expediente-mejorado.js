/* TeleVerso Educativo · Expediente del alumno mejorado
   Organiza el historial por campo formativo y mejora la lectura de resultados. */
(() => {
  const fieldConfig = {
    lenguajes: {
      title: 'Lenguajes',
      subtitle: 'PPA 1 · Voces que cuentan',
      icon: 'fa-comments',
      accent: 'fuchsia',
      classes: {
        border: 'border-fuchsia-500/30',
        bg: 'bg-fuchsia-950/20',
        text: 'text-fuchsia-300',
        chip: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
        bar: 'bg-fuchsia-500'
      }
    },
    ens: {
      title: 'Ética, Naturaleza y Sociedades',
      subtitle: 'Huellas de humanidad · Memoria, agua e igualdad',
      icon: 'fa-earth-americas',
      accent: 'emerald',
      classes: {
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-950/20',
        text: 'text-emerald-300',
        chip: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        bar: 'bg-emerald-500'
      }
    }
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function getFieldInfo(missionKey, activity) {
    const mission = missionCatalog[missionKey] || {};
    const field = mission.field || activity?.field || (String(missionKey).startsWith('len') ? 'lenguajes' : 'ens');
    const config = fieldConfig[field] || {
      title: mission.fieldTitle || 'Otro campo formativo',
      subtitle: '',
      icon: 'fa-folder-open',
      classes: {
        border: 'border-indigo-500/30', bg: 'bg-indigo-950/20', text: 'text-indigo-300',
        chip: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30', bar: 'bg-indigo-500'
      }
    };
    return { field, config, mission };
  }

  function activityTotals(activity) {
    const details = Array.isArray(activity?.details) ? activity.details : [];
    const hits = Number.isFinite(Number(activity?.hits)) ? Number(activity.hits) : details.filter(q => q.isCorrect).length;
    const errors = Number.isFinite(Number(activity?.errors)) ? Number(activity.errors) : details.filter(q => !q.isCorrect).length;
    return { hits, errors, total: hits + errors };
  }

  function renderQuestion(q, qIndex) {
    const ok = !!q.isCorrect;
    return `
      <div class="rounded-2xl border ${ok ? 'border-emerald-500/25 bg-emerald-950/15' : 'border-rose-500/25 bg-rose-950/15'} overflow-hidden">
        <div class="p-3.5 sm:p-4 space-y-2">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-7 h-7 shrink-0 rounded-lg ${ok ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'} flex items-center justify-center text-xs font-black">${qIndex + 1}</span>
              <p class="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">${escapeHtml(q.statement || 'Reactivo')}</p>
            </div>
            <span class="shrink-0 px-2 py-1 rounded-lg text-[10px] font-black uppercase ${ok ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">${ok ? 'Acierto ✓' : 'Error ✗'}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div class="p-3 rounded-xl bg-slate-950/45 border border-white/5">
              <span class="block text-[10px] uppercase tracking-wider text-slate-500 font-black mb-1">Respuesta del alumno</span>
              <span class="text-xs sm:text-sm font-bold ${ok ? 'text-emerald-300' : 'text-rose-300'}">${escapeHtml(q.selected ?? 'Sin registro')}</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-950/45 border border-white/5">
              <span class="block text-[10px] uppercase tracking-wider text-slate-500 font-black mb-1">Respuesta esperada</span>
              <span class="text-xs sm:text-sm font-bold text-emerald-300">${escapeHtml(q.expected ?? 'Sin registro')}</span>
            </div>
          </div>
          ${q.explanation ? `<div class="p-3 rounded-xl bg-blue-950/20 border border-blue-500/15"><span class="text-[10px] uppercase tracking-wider text-blue-300 font-black">Retroalimentación</span><p class="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">${escapeHtml(q.explanation)}</p></div>` : ''}
        </div>
      </div>`;
  }

  function renderActivity(missionKey, activity) {
    const { mission, config } = getFieldInfo(missionKey, activity);
    const { hits, errors, total } = activityTotals(activity);
    const efficiency = total ? Math.round((hits / total) * 100) : 0;
    const details = Array.isArray(activity?.details) ? activity.details : [];
    const title = mission.title || activity?.missionTitle || missionKey;
    const icon = mission.icon || '📌';

    return `
      <article class="glass-card rounded-3xl border border-white/10 overflow-hidden">
        <div class="p-4 sm:p-5 border-b border-white/10">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-start gap-3">
                <div class="w-11 h-11 rounded-2xl ${config.classes.bg} ${config.classes.text} flex items-center justify-center text-xl shrink-0 border ${config.classes.border}">${icon}</div>
                <div class="min-w-0">
                  <h6 class="font-black text-white text-sm sm:text-base leading-snug">${escapeHtml(title)}</h6>
                  <p class="text-[11px] text-slate-500 mt-1"><i class="fa-regular fa-calendar mr-1"></i>${escapeHtml(activity?.completedAt || 'Fecha no registrada')}</p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 text-[11px] font-black">
              <span class="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">${hits} aciertos</span>
              <span class="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/25">${errors} errores</span>
              <span class="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/25">${efficiency}% efectividad</span>
            </div>
          </div>
        </div>
        <details class="group" ${details.length <= 4 ? 'open' : ''}>
          <summary class="cursor-pointer list-none px-4 sm:px-5 py-3 flex justify-between items-center gap-3 bg-slate-950/20 hover:bg-slate-900/40 transition">
            <span class="text-xs font-black text-slate-300"><i class="fa-solid fa-list-check mr-2 text-indigo-400"></i>Ver ${details.length} reactivo${details.length === 1 ? '' : 's'} y retroalimentación</span>
            <i class="fa-solid fa-chevron-down text-slate-500 text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="p-4 sm:p-5 space-y-2.5">
            ${details.length ? details.map(renderQuestion).join('') : '<p class="text-xs text-slate-400 italic">Esta sesión no guardó el desglose de reactivos.</p>'}
          </div>
        </details>
      </article>`;
  }

  function renderFieldSection(field, entries) {
    const config = (fieldConfig[field] || getFieldInfo(entries[0]?.[0], entries[0]?.[1]).config);
    let hits = 0, errors = 0;
    entries.forEach(([, activity]) => {
      const t = activityTotals(activity); hits += t.hits; errors += t.errors;
    });
    const attempts = hits + errors;
    const efficiency = attempts ? Math.round((hits / attempts) * 100) : 0;
    const catalogCount = Object.values(missionCatalog).filter(m => (m.field || (String(m.id || '').startsWith('len') ? 'lenguajes' : 'ens')) === field).length;
    const completed = entries.length;
    const progress = catalogCount ? Math.min(100, Math.round((completed / catalogCount) * 100)) : 0;

    return `
      <section class="rounded-3xl border ${config.classes.border} ${config.classes.bg} overflow-hidden">
        <div class="p-5 sm:p-6 border-b border-white/10">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-slate-950/35 border ${config.classes.border} flex items-center justify-center ${config.classes.text}"><i class="fa-solid ${config.icon} text-xl"></i></div>
              <div>
                <span class="text-[10px] uppercase tracking-[0.16em] font-black ${config.classes.text}">Campo formativo</span>
                <h5 class="text-lg sm:text-xl font-black text-white">${escapeHtml(config.title)}</h5>
                ${config.subtitle ? `<p class="text-xs text-slate-400 mt-0.5">${escapeHtml(config.subtitle)}</p>` : ''}
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 min-w-[260px]">
              <div class="rounded-xl bg-slate-950/35 border border-white/5 p-2.5 text-center"><span class="block text-[9px] uppercase text-slate-500 font-black">Actividades</span><strong class="text-white text-lg">${completed}</strong></div>
              <div class="rounded-xl bg-slate-950/35 border border-white/5 p-2.5 text-center"><span class="block text-[9px] uppercase text-slate-500 font-black">Aciertos</span><strong class="text-emerald-300 text-lg">${hits}</strong></div>
              <div class="rounded-xl bg-slate-950/35 border border-white/5 p-2.5 text-center"><span class="block text-[9px] uppercase text-slate-500 font-black">Efectividad</span><strong class="text-blue-300 text-lg">${efficiency}%</strong></div>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between text-[10px] font-bold text-slate-400 mb-1.5"><span>Progreso de actividades registradas</span><span>${completed}${catalogCount ? ` / ${catalogCount}` : ''}</span></div>
            <div class="h-2 rounded-full bg-slate-950/50 overflow-hidden"><div class="h-full ${config.classes.bar} rounded-full" style="width:${progress}%"></div></div>
          </div>
        </div>
        <div class="p-4 sm:p-5 space-y-4">${entries.map(([key, activity]) => renderActivity(key, activity)).join('')}</div>
      </section>`;
  }

  window.viewStudentStats = function(studentId) {
    const student = localState.students[studentId];
    if (!student) return;

    const group = localState.groups[student.groupId];
    document.getElementById('stats-student-name').innerText = student.name;
    document.getElementById('stats-student-meta').innerText = `Grupo: ${group ? group.name : 'General'} · ID: ${student.id}`;

    const historyEntries = Object.entries(student.history || {});
    let hits = 0, errors = 0;
    historyEntries.forEach(([, activity]) => {
      const t = activityTotals(activity); hits += t.hits; errors += t.errors;
    });
    // Conserva compatibilidad con expedientes antiguos que sólo tenían acumulados globales.
    if (!historyEntries.length) {
      hits = student.totalHits || 0;
      errors = student.totalErrors || 0;
    }
    const total = hits + errors;
    const efficiency = total ? Math.round((hits / total) * 100) : 0;

    document.getElementById('stats-total-score').innerText = student.score || 0;
    document.getElementById('stats-total-hits').innerText = hits;
    document.getElementById('stats-total-errors').innerText = errors;
    document.getElementById('stats-efficiency').innerText = `${efficiency}%`;

    const historyContainer = document.getElementById('stats-history-container');
    if (!historyEntries.length) {
      historyContainer.innerHTML = `<div class="glass-card p-8 rounded-3xl text-center border border-white/10"><div class="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center text-2xl mb-3"><i class="fa-solid fa-folder-open"></i></div><h6 class="font-black text-white">Aún no hay actividades registradas</h6><p class="text-xs text-slate-400 mt-1">Cuando el estudiante complete retos, aparecerán aquí separados por campo formativo.</p></div>`;
    } else {
      const grouped = {};
      historyEntries.forEach(entry => {
        const { field } = getFieldInfo(entry[0], entry[1]);
        (grouped[field] ||= []).push(entry);
      });
      const preferredOrder = ['lenguajes', 'ens'];
      const fields = Object.keys(grouped).sort((a, b) => {
        const ai = preferredOrder.indexOf(a), bi = preferredOrder.indexOf(b);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      });
      historyContainer.innerHTML = fields.map(field => renderFieldSection(field, grouped[field])).join('');
    }

    const sectionTitle = historyContainer?.previousElementSibling;
    if (sectionTitle && sectionTitle.tagName === 'H5') {
      sectionTitle.innerHTML = '<i class="fa-solid fa-layer-group text-indigo-400"></i><span>Desempeño por campo formativo</span>';
    }

    document.getElementById('modal-student-stats').classList.remove('hidden');
  };
})();
