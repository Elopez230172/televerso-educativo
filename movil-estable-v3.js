/* TeleVerso Educativo · Estabilidad móvil V3
   Evita el brinco vertical sin interferir con el desplazamiento nativo.
   Además de neutralizar anclaje/animaciones móviles, evita repetir renders
   equivalentes cuando Firestore actualiza a otros alumnos o el QR ya está activo.
*/
(() => {
  const mobile = matchMedia('(hover: none), (pointer: coarse), (max-width: 820px)').matches;
  if (!mobile) return;

  document.getElementById('tv-mobile-stability-style')?.remove();
  document.getElementById('tv-mobile-stability-v2-style')?.remove();
  document.getElementById('tv-mobile-stability-v3-style')?.remove();

  const style = document.createElement('style');
  style.id = 'tv-mobile-stability-v3-style';
  style.textContent = `
    @media (hover: none), (pointer: coarse), (max-width: 820px) {
      html, body { scroll-behavior: auto !important; }
      body {
        background-attachment: scroll !important;
        min-height: 100svh !important;
      }

      html, body, main, header,
      #view-home, #view-student,
      #tv-curriculum-selector, #student-missions-grid,
      .glass-panel, .glass-card, button {
        overflow-anchor: none !important;
      }

      header {
        position: relative !important;
        top: auto !important;
      }
      #view-home {
        min-height: calc(100svh - 90px) !important;
      }

      .glass-panel, .glass-card, header, .telesec-logo-card {
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
      }

      *, *::before, *::after {
        animation: none !important;
        transition-duration: 0s !important;
        scroll-snap-align: none !important;
      }

      .glass-card,
      .glass-card:hover,
      .tv-logo-brand,
      .tv-logo-brand:hover,
      .tv-home-logo-feature,
      .telesec-logo-img,
      .telesec-logo-card:hover .telesec-logo-img,
      [class*="hover:-translate-y"],
      [class*="hover:translate-y"],
      [class*="hover:scale-"] {
        transform: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  const studentViewVisible = () => {
    const home = document.getElementById('view-home');
    const student = document.getElementById('view-student');
    return !!home && !!student &&
      home.classList.contains('hidden') &&
      !student.classList.contains('hidden');
  };

  const currentStudent = () => {
    try {
      return typeof activeStudent !== 'undefined' ? activeStudent : null;
    } catch (_) {
      return null;
    }
  };

  const dashboardSignature = () => {
    const student = currentStudent();
    if (!student) return 'no-student';

    let group = null;
    try {
      group = (typeof localState !== 'undefined' && localState?.groups)
        ? localState.groups[student.groupId]
        : null;
    } catch (_) {}

    const completed = Object.entries(student.completed || {})
      .filter(([, done]) => !!done)
      .map(([id]) => id)
      .sort()
      .join(',');

    return [
      student.id || '',
      student.name || '',
      student.groupId || '',
      student.grade ?? '',
      group?.name || '',
      group?.grade ?? '',
      Number(student.score || 0),
      Number(student.totalHits || 0),
      Number(student.totalErrors || 0),
      completed,
      localStorage.getItem('televerso_active_field') || ''
    ].join('|');
  };

  const baseDashboard = window.renderStudentDashboard;
  if (typeof baseDashboard === 'function' && !baseDashboard.__tvMobileStableV3) {
    let lastSignature = null;
    const stableDashboard = function(...args) {
      const signature = dashboardSignature();
      if (studentViewVisible() && signature === lastSignature) return;
      const result = baseDashboard.apply(this, args);
      lastSignature = dashboardSignature();
      return result;
    };
    stableDashboard.__tvMobileStableV3 = true;
    window.renderStudentDashboard = stableDashboard;
    try { renderStudentDashboard = stableDashboard; } catch (_) {}
  }

  const baseCheckUrlLogin = window.checkUrlLogin;
  if (typeof baseCheckUrlLogin === 'function' && !baseCheckUrlLogin.__tvMobileStableV3) {
    const stableCheckUrlLogin = function(...args) {
      const token = new URLSearchParams(window.location.search).get('s');
      const student = currentStudent();
      if (token && student?.id === token && studentViewVisible()) return;
      return baseCheckUrlLogin.apply(this, args);
    };
    stableCheckUrlLogin.__tvMobileStableV3 = true;
    window.checkUrlLogin = stableCheckUrlLogin;
    try { checkUrlLogin = stableCheckUrlLogin; } catch (_) {}
  }

  const baseSwitchView = window.switchView;
  if (typeof baseSwitchView === 'function' && !baseSwitchView.__tvMobileStableV3) {
    const stableSwitchView = function(viewId, ...rest) {
      const home = document.getElementById('view-home');
      const student = document.getElementById('view-student');
      const alreadyHome = viewId === 'view-home' && home && student &&
        !home.classList.contains('hidden') && student.classList.contains('hidden');
      const alreadyStudent = viewId === 'view-student' && studentViewVisible();

      if (alreadyHome || alreadyStudent) return;
      return baseSwitchView.call(this, viewId, ...rest);
    };
    stableSwitchView.__tvMobileStableV3 = true;
    window.switchView = stableSwitchView;
    try { switchView = stableSwitchView; } catch (_) {}
  }
})();

/* TeleVerso Educativo · Progresión secuencial global V2
   Se aplica a TODOS los campos, grados, periodos y PPA.
   - Sólo la primera actividad pendiente queda disponible.
   - Las posteriores muestran “En espera”.
   - Una actividad completada puede repetirse.
   - La protección se valida también al intentar abrir la misión.
   No usa observers ni listeners de scroll/touch/resize.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const currentStudent = () => {
    try {
      return typeof activeStudent !== 'undefined' ? activeStudent : null;
    } catch (_) {
      return null;
    }
  };

  const completedMap = () => currentStudent()?.completed || {};

  const catalogEntries = () => Object.entries(missionCatalog || {}).map(([key, mission], insertion) => ({
    key: String(key),
    mission,
    id: String(mission?.id || key),
    insertion
  })).filter(x => x.mission);

  function entryForId(id) {
    const wanted = String(id || '');
    if (!wanted) return null;
    const direct = missionCatalog?.[wanted];
    if (direct) {
      const entries = catalogEntries();
      return entries.find(x => x.key === wanted) || { key: wanted, mission: direct, id: String(direct.id || wanted), insertion: 0 };
    }
    return catalogEntries().find(x => x.id === wanted) || null;
  }

  const missionScope = mission => [
    mission?.field || 'general',
    Number(mission?.period || 1),
    Number(mission?.ppa || 1)
  ].join('|');

  function isMissionCompleted(entry) {
    if (!entry) return false;
    const completed = completedMap();
    if (completed[entry.id] || completed[entry.key]) return true;
    return catalogEntries()
      .filter(x => x.mission === entry.mission)
      .some(x => completed[x.id] || completed[x.key]);
  }

  function missionRank(entry) {
    const mission = entry?.mission || {};
    const explicit = Number(mission.sequence ?? mission.order ?? mission.position ?? mission.challengeNumber);
    if (Number.isFinite(explicit) && explicit > 0) return explicit;

    const title = String(mission.title || '');
    const titleMatch = title.match(/\bR(?:eto)?\s*[-.:]?\s*(\d+)\b/i);
    if (titleMatch) return Number(titleMatch[1]);

    const idMatch = String(entry?.id || '').match(/(\d+)(?!.*\d)/);
    if (idMatch) return Number(idMatch[1]);

    return 100000 + Number(entry?.insertion || 0);
  }

  function orderedEntriesForScope(scope) {
    return catalogEntries()
      .filter(x => missionScope(x.mission) === scope)
      .sort((a, b) => {
        const rankDiff = missionRank(a) - missionRank(b);
        return rankDiff || a.insertion - b.insertion;
      });
  }

  function progressionState(missionId) {
    const entry = entryForId(missionId);
    if (!entry) return null;

    const ordered = orderedEntriesForScope(missionScope(entry.mission));
    const index = ordered.findIndex(x => x.mission === entry.mission || x.id === entry.id || x.key === entry.key);
    const done = isMissionCompleted(entry);

    if (index <= 0) {
      return { entry, ordered, index, done, unlocked: true, firstMissing: null };
    }

    const previous = ordered.slice(0, index);
    const firstMissing = previous.find(x => !isMissionCompleted(x)) || null;
    return {
      entry,
      ordered,
      index,
      done,
      unlocked: !firstMissing,
      firstMissing
    };
  }

  function rememberAction(el) {
    if (!el) return;
    if (el.dataset.tvSeqOriginalHtml === undefined) el.dataset.tvSeqOriginalHtml = el.innerHTML;
    if (el.dataset.tvSeqOriginalTitle === undefined) el.dataset.tvSeqOriginalTitle = el.getAttribute('title') || '';
    if (el.dataset.tvSeqOriginalDisabled === undefined) el.dataset.tvSeqOriginalDisabled = el.disabled ? '1' : '0';
  }

  function restoreAction(el) {
    if (!el) return;
    rememberAction(el);
    if ('disabled' in el) el.disabled = el.dataset.tvSeqOriginalDisabled === '1';
    el.removeAttribute('aria-disabled');
    el.style.opacity = '';
    el.style.cursor = '';
    el.style.filter = '';
    el.style.boxShadow = '';
    el.style.pointerEvents = '';
    el.title = el.dataset.tvSeqOriginalTitle || '';
  }

  function actionElements(card) {
    if (!card) return [];
    return [...card.querySelectorAll('button, a[href], [role="button"]')];
  }

  function primaryAction(card) {
    if (!card) return null;
    return card.querySelector('button[onclick*="launchMission"], a[onclick*="launchMission"], button, [role="button"], a[href]');
  }

  function paintCard(card, icon, state) {
    if (!card || !state) return;

    const actions = actionElements(card);
    const primary = primaryAction(card);
    actions.forEach(rememberAction);
    if (primary) rememberAction(primary);

    const locked = !state.unlocked;
    card.dataset.tvSequenceLocked = locked ? '1' : '0';
    card.dataset.tvMissionId = state.entry.id;
    card.style.opacity = locked ? '0.52' : '';
    card.style.filter = locked ? 'grayscale(0.45)' : '';

    if (state.done) {
      actions.forEach(restoreAction);
      if (primary) {
        primary.innerHTML = '<i class="fa-solid fa-rotate-right mr-1"></i><span>Repetir reto</span>';
        primary.title = 'Actividad completada. Puedes repetirla.';
      }
      if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-400 text-base';
      return;
    }

    if (locked) {
      actions.forEach(el => {
        if ('disabled' in el) el.disabled = true;
        el.setAttribute('aria-disabled', 'true');
        el.style.opacity = '0.66';
        el.style.cursor = 'not-allowed';
        el.style.filter = 'grayscale(0.45)';
        el.style.boxShadow = 'none';
        if (el.tagName === 'A') el.style.pointerEvents = 'none';
      });
      if (primary) {
        const previousTitle = state.firstMissing?.mission?.title || 'la actividad anterior';
        primary.innerHTML = '<i class="fa-solid fa-hourglass-half mr-1"></i><span>En espera</span>';
        primary.title = `Primero completa: ${previousTitle}`;
      }
      if (icon) icon.className = 'fa-solid fa-lock text-slate-600 text-base';
      return;
    }

    actions.forEach(restoreAction);
    if (primary) {
      primary.innerHTML = primary.dataset.tvSeqOriginalHtml || '<i class="fa-solid fa-play mr-1"></i><span>Iniciar reto</span>';
      primary.title = 'Actividad disponible';
    }
    if (icon) icon.className = 'fa-solid fa-lock-open text-cyan-300 text-base';
  }

  function applySequenceLocks() {
    const grid = document.getElementById('student-missions-grid');
    if (!grid || !currentStudent()) return;

    [...grid.querySelectorAll('.glass-card')].forEach(card => {
      const icon = card.querySelector('[id^="badge-mission-"]');
      let rawId = icon ? String(icon.id || '').replace('badge-mission-', '') : '';

      if (!rawId) {
        const launcher = card.querySelector('[onclick*="launchMission"]');
        const onclick = launcher?.getAttribute('onclick') || '';
        const match = onclick.match(/launchMission\(\s*['"]([^'"]+)['"]/);
        rawId = match?.[1] || '';
      }

      if (!rawId) return;
      const state = progressionState(rawId);
      if (!state) return;
      paintCard(card, icon, state);
    });
  }

  let lateApplyTimer = null;
  function scheduleSequenceLocks() {
    applySequenceLocks();
    Promise.resolve().then(applySequenceLocks);
    clearTimeout(lateApplyTimer);
    lateApplyTimer = setTimeout(applySequenceLocks, 430);
  }

  function blockedNotice(state) {
    const missingTitle = state?.firstMissing?.mission?.title || 'la actividad anterior';
    if (window.Swal?.fire) {
      window.Swal.fire({
        toast: true,
        position: 'top',
        icon: 'info',
        title: 'Actividad en espera',
        text: `Primero completa: ${missingTitle}`,
        showConfirmButton: false,
        timer: 2600,
        timerProgressBar: true
      });
    }
  }

  const baseLaunchMission = window.launchMission;
  if (typeof baseLaunchMission === 'function' && !baseLaunchMission.__tvSequentialProgressV2) {
    const guardedLaunchMission = function(missionId, ...args) {
      const state = progressionState(missionId);
      if (state && !state.unlocked) {
        blockedNotice(state);
        scheduleSequenceLocks();
        return;
      }
      const result = baseLaunchMission.call(this, missionId, ...args);
      scheduleSequenceLocks();
      return result;
    };
    guardedLaunchMission.__tvSequentialProgressV2 = true;
    window.launchMission = guardedLaunchMission;
    try { launchMission = guardedLaunchMission; } catch (_) {}
  }

  const baseSaveMissionResults = window.saveMissionResults;
  if (typeof baseSaveMissionResults === 'function' && !baseSaveMissionResults.__tvSequentialProgressV2) {
    const sequentialSaveMissionResults = function(...args) {
      const result = baseSaveMissionResults.apply(this, args);
      if (result && typeof result.finally === 'function') {
        return result.finally(scheduleSequenceLocks);
      }
      scheduleSequenceLocks();
      return result;
    };
    sequentialSaveMissionResults.__tvSequentialProgressV2 = true;
    window.saveMissionResults = sequentialSaveMissionResults;
    try { saveMissionResults = sequentialSaveMissionResults; } catch (_) {}
  }

  function wrapAfter(name) {
    const fn = window[name];
    if (typeof fn !== 'function' || fn.__tvSequentialProgressV2After) return;
    const wrapped = function(...args) {
      const result = fn.apply(this, args);
      scheduleSequenceLocks();
      return result;
    };
    wrapped.__tvSequentialProgressV2After = true;
    window[name] = wrapped;
    try {
      if (name === 'renderStudentMissionsGrid') renderStudentMissionsGrid = wrapped;
      if (name === 'renderStudentDashboard') renderStudentDashboard = wrapped;
      if (name === 'tvSetField') tvSetField = wrapped;
    } catch (_) {}
  }

  [
    'renderStudentMissionsGrid', 'renderStudentDashboard', 'tvSetField',
    'tvCurrSelectField', 'tvCurrSelectPeriod', 'tvCurrSelectPpa',
    'tvProgSelectField', 'tvProgSelectPeriod', 'tvProgSelectPpa'
  ].forEach(wrapAfter);

  document.addEventListener('click', event => {
    const card = event.target?.closest?.('#student-missions-grid .glass-card[data-tv-sequence-locked="1"]');
    if (!card) return;
    const action = event.target.closest('button, a, [role="button"]');
    if (!action) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const state = progressionState(card.dataset.tvMissionId);
    blockedNotice(state);
    scheduleSequenceLocks();
  }, true);

  window.tvApplySequenceLocks = scheduleSequenceLocks;
  document.addEventListener('DOMContentLoaded', scheduleSequenceLocks);
  scheduleSequenceLocks();
})();

/* TeleVerso Educativo · Regreso visible desde cualquier actividad
   Mantiene al alumno en el mismo campo / periodo / PPA y vuelve a la lista de retos.
*/
(() => {
  function clearActiveMission() {
    try { activeMissionKey = null; } catch (_) {}
  }

  function backToActivities() {
    const modal = document.getElementById('modal-mission');
    if (!modal) return;
    if (typeof window.closeMissionModal === 'function') {
      window.closeMissionModal();
    } else {
      modal.classList.add('hidden');
      clearActiveMission();
    }
    if (typeof window.tvApplySequenceLocks === 'function') window.tvApplySequenceLocks();
  }

  function ensureBackButton() {
    const modal = document.getElementById('modal-mission');
    const area = document.getElementById('mission-content-area');
    const panel = area?.parentElement;
    if (!modal || !area || !panel || document.getElementById('tv-mission-back-bar')) return;

    const bar = document.createElement('div');
    bar.id = 'tv-mission-back-bar';
    bar.className = 'sticky top-0 z-20 -mx-1 mb-4 pb-3 pt-1 bg-slate-950/95 border-b border-white/10';
    bar.innerHTML = `
      <button type="button" id="tv-mission-back-button"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 text-cyan-100 text-xs sm:text-sm font-black shadow-lg"
        title="Cerrar esta actividad y volver a la lista de retos">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Volver a actividades</span>
      </button>`;
    panel.insertBefore(bar, area);
    bar.querySelector('#tv-mission-back-button')?.addEventListener('click', backToActivities);

    const closeButton = panel.querySelector('button[onclick="closeMissionModal()"]');
    if (closeButton) {
      closeButton.setAttribute('title', 'Volver a actividades');
      closeButton.setAttribute('aria-label', 'Volver a actividades');
    }
  }

  const baseCloseMissionModal = window.closeMissionModal;
  if (typeof baseCloseMissionModal === 'function' && !baseCloseMissionModal.__tvBackToActivities) {
    const stableClose = function(...args) {
      const result = baseCloseMissionModal.apply(this, args);
      clearActiveMission();
      if (typeof window.tvApplySequenceLocks === 'function') window.tvApplySequenceLocks();
      return result;
    };
    stableClose.__tvBackToActivities = true;
    window.closeMissionModal = stableClose;
    try { closeMissionModal = stableClose; } catch (_) {}
  }

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const modal = document.getElementById('modal-mission');
    if (!modal || modal.classList.contains('hidden')) return;
    backToActivities();
  });

  window.tvBackToActivities = backToActivities;
  ensureBackButton();
  document.addEventListener('DOMContentLoaded', ensureBackButton);
})();
