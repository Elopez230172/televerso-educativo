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
