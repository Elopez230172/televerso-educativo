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
      /* El scroll sigue siendo totalmente nativo. */
      html, body { scroll-behavior: auto !important; }
      body {
        background-attachment: scroll !important;
        min-height: 100svh !important;
      }

      /* Evita que Chrome/Safari elijan un botón/tarjeta parcialmente visible
         como ancla y corrijan el scroll una y otra vez cuando cambia el DOM. */
      html, body, main, header,
      #view-home, #view-student,
      #tv-curriculum-selector, #student-missions-grid,
      .glass-panel, .glass-card, button {
        overflow-anchor: none !important;
      }

      /* Evita saltos derivados del viewport dinámico y del encabezado sticky. */
      header {
        position: relative !important;
        top: auto !important;
      }
      #view-home {
        min-height: calc(100svh - 90px) !important;
      }

      /* Los filtros de fondo y transforms son costosos en scroll móvil. */
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

  /* Firestore escucha toda la colección students. Si cambia otro alumno,
     no reconstruimos el tablero del alumno activo si su estado visible es igual. */
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

  /* El acceso QR permanece en la URL. checkUrlLogin() se ejecuta en cada
     snapshot de estudiantes; si la sesión ya corresponde a ese QR, no repite
     render ni vuelve a entrar a la misma vista. */
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

  /* switchView() recrea el logo del alumno con un setTimeout. Evitamos hacerlo
     si la vista solicitada ya está activa, sin tocar el scroll del navegador. */
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

/* TeleVerso Educativo · Progresión secuencial de misiones
   Regla global para todos los campos formativos y grados:
   dentro de cada Campo + Periodo + PPA, no se puede abrir una misión nueva
   hasta completar todas las anteriores. Las misiones ya completadas sí pueden repetirse.
   No usa MutationObserver, IntersectionObserver ni listeners de scroll.
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
  const missionScope = mission => [
    mission?.field || 'general',
    Number(mission?.period || 1),
    Number(mission?.ppa || 1)
  ].join('|');

  const missionById = id => missionCatalog?.[id] || null;

  function visibleOrderForScope(scope) {
    const grid = document.getElementById('student-missions-grid');
    if (!grid) return [];

    const ids = [...grid.querySelectorAll('[id^="badge-mission-"]')]
      .map(el => String(el.id || '').replace('badge-mission-', ''))
      .filter(Boolean)
      .filter(id => missionById(id) && missionScope(missionById(id)) === scope);

    return [...new Set(ids)];
  }

  function catalogOrderForScope(scope) {
    return Object.values(missionCatalog)
      .filter(m => m?.id && missionScope(m) === scope)
      .map(m => m.id);
  }

  function orderedIdsForMission(missionId) {
    const mission = missionById(missionId);
    if (!mission) return [];
    const scope = missionScope(mission);
    const visible = visibleOrderForScope(scope);
    if (visible.includes(missionId)) return visible;
    return catalogOrderForScope(scope);
  }

  function progressionState(missionId) {
    const mission = missionById(missionId);
    if (!mission) return null;

    const completed = completedMap();
    const ordered = orderedIdsForMission(missionId);
    const index = ordered.indexOf(missionId);
    const done = !!completed[missionId];

    if (index <= 0) {
      return { mission, ordered, index, done, unlocked: true, firstMissingId: null };
    }

    const previous = ordered.slice(0, index);
    const firstMissingId = previous.find(id => !completed[id]) || null;
    return {
      mission,
      ordered,
      index,
      done,
      unlocked: done || !firstMissingId,
      firstMissingId
    };
  }

  function rememberButton(button) {
    if (!button) return;
    if (button.dataset.tvSeqOriginalHtml === undefined) {
      button.dataset.tvSeqOriginalHtml = button.innerHTML;
    }
    if (button.dataset.tvSeqOriginalTitle === undefined) {
      button.dataset.tvSeqOriginalTitle = button.getAttribute('title') || '';
    }
  }

  function restoreButton(button) {
    if (!button) return;
    rememberButton(button);
    button.disabled = false;
    button.removeAttribute('aria-disabled');
    button.style.opacity = '';
    button.style.cursor = '';
    button.style.filter = '';
    button.style.boxShadow = '';
    button.title = button.dataset.tvSeqOriginalTitle || '';
  }

  function paintCard(card, icon, button, state) {
    if (!card || !button || !state) return;
    rememberButton(button);

    const locked = !state.unlocked;
    card.dataset.tvSequenceLocked = locked ? '1' : '0';
    card.style.opacity = locked ? '0.58' : '';
    card.style.filter = locked ? 'grayscale(0.28)' : '';

    if (state.done) {
      restoreButton(button);
      button.innerHTML = '<i class="fa-solid fa-rotate-right"></i><span>Repetir reto</span>';
      button.title = 'Este reto ya fue completado. Puedes repetirlo.';
      if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-400 text-base';
      return;
    }

    if (locked) {
      button.disabled = true;
      button.setAttribute('aria-disabled', 'true');
      button.innerHTML = '<i class="fa-solid fa-lock"></i><span>Completa el reto anterior</span>';
      button.title = 'Debes completar primero las misiones anteriores de este PPA.';
      button.style.opacity = '0.68';
      button.style.cursor = 'not-allowed';
      button.style.filter = 'grayscale(0.35)';
      button.style.boxShadow = 'none';
      if (icon) icon.className = 'fa-solid fa-lock text-slate-600 text-base';
      return;
    }

    restoreButton(button);
    button.innerHTML = button.dataset.tvSeqOriginalHtml || '<i class="fa-solid fa-play"></i><span>Iniciar reto</span>';
    button.title = 'Reto disponible';
    if (icon) icon.className = 'fa-solid fa-lock-open text-cyan-300 text-base';
  }

  function applySequenceLocks() {
    const grid = document.getElementById('student-missions-grid');
    if (!grid || !currentStudent()) return;

    [...grid.querySelectorAll('[id^="badge-mission-"]')].forEach(icon => {
      const missionId = String(icon.id || '').replace('badge-mission-', '');
      const state = progressionState(missionId);
      const card = icon.closest('.glass-card');
      const button = card?.querySelector('button[onclick*="launchMission"]');
      if (!state || !card || !button) return;
      paintCard(card, icon, button, state);
    });
  }

  function blockedNotice(state) {
    const missing = state?.firstMissingId ? missionById(state.firstMissingId) : null;
    const missingTitle = missing?.title || 'el reto anterior';
    if (window.Swal?.fire) {
      window.Swal.fire({
        toast: true,
        position: 'top',
        icon: 'info',
        title: 'Reto bloqueado',
        text: `Primero completa: ${missingTitle}`,
        showConfirmButton: false,
        timer: 2600,
        timerProgressBar: true
      });
    }
  }

  const baseLaunchMission = window.launchMission;
  if (typeof baseLaunchMission === 'function' && !baseLaunchMission.__tvSequentialProgress) {
    const guardedLaunchMission = function(missionId, ...args) {
      const state = progressionState(missionId);
      if (state && !state.unlocked) {
        blockedNotice(state);
        applySequenceLocks();
        return;
      }
      return baseLaunchMission.call(this, missionId, ...args);
    };
    guardedLaunchMission.__tvSequentialProgress = true;
    window.launchMission = guardedLaunchMission;
    try { launchMission = guardedLaunchMission; } catch (_) {}
  }

  const baseSaveMissionResults = window.saveMissionResults;
  if (typeof baseSaveMissionResults === 'function' && !baseSaveMissionResults.__tvSequentialProgress) {
    const sequentialSaveMissionResults = function(...args) {
      const result = baseSaveMissionResults.apply(this, args);
      if (result && typeof result.finally === 'function') {
        return result.finally(() => setTimeout(applySequenceLocks, 160));
      }
      setTimeout(applySequenceLocks, 160);
      return result;
    };
    sequentialSaveMissionResults.__tvSequentialProgress = true;
    window.saveMissionResults = sequentialSaveMissionResults;
    try { saveMissionResults = sequentialSaveMissionResults; } catch (_) {}
  }

  function wrapAfter(name, delay = 260) {
    const fn = window[name];
    if (typeof fn !== 'function' || fn.__tvSequentialProgressAfter) return;
    const wrapped = function(...args) {
      const result = fn.apply(this, args);
      setTimeout(applySequenceLocks, delay);
      return result;
    };
    wrapped.__tvSequentialProgressAfter = true;
    window[name] = wrapped;
    try {
      if (name === 'renderStudentMissionsGrid') renderStudentMissionsGrid = wrapped;
      if (name === 'renderStudentDashboard') renderStudentDashboard = wrapped;
      if (name === 'tvSetField') tvSetField = wrapped;
    } catch (_) {}
  }

  wrapAfter('renderStudentMissionsGrid', 300);
  wrapAfter('renderStudentDashboard', 320);
  wrapAfter('tvSetField', 280);
  wrapAfter('tvCurrSelectField', 300);
  wrapAfter('tvCurrSelectPeriod', 300);
  wrapAfter('tvCurrSelectPpa', 300);
  wrapAfter('tvProgSelectField', 320);
  wrapAfter('tvProgSelectPeriod', 320);
  wrapAfter('tvProgSelectPpa', 320);

  document.addEventListener('DOMContentLoaded', () => setTimeout(applySequenceLocks, 900));
  setTimeout(applySequenceLocks, 420);
})();
