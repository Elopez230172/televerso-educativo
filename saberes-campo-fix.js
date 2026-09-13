/* TeleVerso Educativo · Corrección de campo formativo Saberes y Pensamiento Científico
   Reasigna las misiones SPC al campo correcto y habilita su selector visual independiente. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD = 'saberes';
  const FIELD_TITLE = 'Saberes y Pensamiento Científico · PPA 1';

  // Reasignación explícita y defensiva de todas las misiones SPC.
  Object.entries(missionCatalog).forEach(([key, mission]) => {
    if (/^spc\d+$/i.test(key) || /^spc\d+$/i.test(String(mission?.id || ''))) {
      mission.field = FIELD;
      mission.fieldTitle = FIELD_TITLE;
    }
  });

  const meta = {
    ens: {
      title: 'Ética, Naturaleza y Sociedades',
      subtitle: 'Huellas de humanidad',
      border: 'border-t-indigo-500',
      button: 'bg-indigo-600 hover:bg-indigo-500',
      accent: 'text-emerald-300'
    },
    lenguajes: {
      title: 'Lenguajes · PPA 1',
      subtitle: 'Voces que cuentan',
      border: 'border-t-fuchsia-500',
      button: 'bg-fuchsia-600 hover:bg-fuchsia-500',
      accent: 'text-fuchsia-300'
    },
    saberes: {
      title: 'Saberes y Pensamiento Científico · PPA 1',
      subtitle: 'Necesidades satisfechas sin la Tierra desecha',
      border: 'border-t-cyan-500',
      button: 'bg-cyan-600 hover:bg-cyan-500',
      accent: 'text-cyan-300'
    }
  };

  function ensureSaberesSelector() {
    const selector = document.getElementById('tv-field-selector');
    if (!selector) return;
    const grid = selector.querySelector('.grid');
    if (!grid) return;

    grid.classList.remove('sm:grid-cols-2');
    grid.classList.add('sm:grid-cols-2', 'lg:grid-cols-3');

    if (!document.getElementById('tv-btn-saberes')) {
      const button = document.createElement('button');
      button.id = 'tv-btn-saberes';
      button.setAttribute('onclick', "tvSetField('saberes')");
      button.className = 'p-4 rounded-2xl text-left bg-slate-800/80 hover:bg-slate-700 border border-white/10 transition';
      button.innerHTML = `
        <span class="block text-xs font-black uppercase tracking-wider text-cyan-300">Campo formativo</span>
        <strong class="block text-white mt-1">Saberes y Pensamiento Científico · PPA 1</strong>
        <span class="block text-[11px] text-slate-400 mt-1">Necesidades satisfechas sin la Tierra desecha</span>`;
      grid.appendChild(button);
    }
  }

  function activeField() {
    const saved = localStorage.getItem('televerso_active_field');
    return meta[saved] ? saved : 'ens';
  }

  window.renderStudentMissionsGrid = function() {
    // El complemento de Lenguajes crea el selector. Si aún no existe, invocamos
    // una vez el render previo para que lo construya y luego aplicamos la corrección.
    const c = document.getElementById('student-missions-grid');
    if (!c) return;

    ensureSaberesSelector();
    const field = activeField();
    const cfg = meta[field];
    const missions = Object.values(missionCatalog).filter(m => (m.field || 'ens') === field);

    const heading = c.previousElementSibling;
    if (heading && heading.tagName === 'H4') {
      heading.innerHTML = `<i class="fa-solid fa-list-check text-indigo-400"></i> ${cfg.title} · ${missions.length} retos`;
    }

    c.innerHTML = missions.map((m, i) => `
      <div class="glass-card p-5 rounded-3xl flex flex-col justify-between border-t-2 ${cfg.border}">
        <div>
          <div class="flex justify-between items-center mb-3">
            <span class="px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase rounded-lg border border-indigo-500/30">Misión ${i + 1}</span>
            <i id="badge-mission-${m.id}" class="fa-solid fa-lock text-slate-500 text-base"></i>
          </div>
          <span class="block text-[10px] uppercase tracking-wider font-black ${cfg.accent} mb-1">${cfg.title}</span>
          <h4 class="text-base font-bold text-white mb-1.5">${m.icon || '🔬'} ${m.title}</h4>
          <p class="text-slate-300 text-xs ${m.paper ? 'mb-2' : 'mb-4'} leading-relaxed">${m.desc || ''}</p>
          ${m.paper ? `<p class="text-amber-300/90 text-[11px] font-semibold mb-4">✏️ Actividad equivalente: ${m.paper}</p>` : ''}
        </div>
        <button onclick="launchMission('${m.id}')" class="w-full py-2.5 ${cfg.button} text-white font-bold rounded-xl text-xs transition">
          <i class="fa-solid fa-play mr-1"></i> Iniciar Reto
        </button>
      </div>`).join('');

    const ens = document.getElementById('tv-badges-ens');
    const lng = document.getElementById('tv-badges-leng');
    if (ens) ens.classList.toggle('hidden', field !== 'ens');
    if (lng) lng.classList.toggle('hidden', field !== 'lenguajes');

    ['tv-btn-ens', 'tv-btn-leng', 'tv-btn-saberes'].forEach(id => {
      document.getElementById(id)?.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-950/50');
    });
    const activeId = field === 'lenguajes' ? 'tv-btn-leng' : field === 'saberes' ? 'tv-btn-saberes' : 'tv-btn-ens';
    document.getElementById(activeId)?.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-950/50');

    // Actualiza candados / estado de misiones cuando el alumno ya está activo.
    if (typeof activeStudent !== 'undefined' && activeStudent) {
      missions.forEach(m => {
        const icon = document.getElementById(`badge-mission-${m.id}`);
        if (!icon) return;
        const done = !!activeStudent?.history?.[m.id];
        icon.className = done ? 'fa-solid fa-circle-check text-emerald-400 text-base' : 'fa-solid fa-lock text-slate-500 text-base';
      });
    }
  };

  // Asegura que el selector aparezca correctamente al volver a abrir el tablero.
  const previousSetField = window.tvSetField;
  window.tvSetField = function(field) {
    const normalized = meta[field] ? field : 'ens';
    localStorage.setItem('televerso_active_field', normalized);
    if (typeof previousSetField === 'function') {
      previousSetField(normalized);
    } else {
      window.renderStudentMissionsGrid();
    }
    ensureSaberesSelector();
  };

  // Si el selector ya está visible al cargar este archivo, se corrige de inmediato.
  setTimeout(() => {
    ensureSaberesSelector();
    const grid = document.getElementById('student-missions-grid');
    if (grid && !grid.closest('.hidden')) window.renderStudentMissionsGrid();
  }, 0);
})();
