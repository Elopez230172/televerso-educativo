/* TeleVerso Educativo · Modo retos directos
   La plataforma ejecuta los retos sin repetir explicaciones del cuadernillo.
   Conserva únicamente navegación curricular, título/progreso y la interacción necesaria.
*/
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const norm = value => String(value ?? '').replace(/\s+/g, ' ').trim();

  function collectTextSets() {
    const descriptive = new Set();
    const feedback = new Set();
    const walk = value => {
      if (!value) return;
      if (Array.isArray(value)) { value.forEach(walk); return; }
      if (typeof value !== 'object') return;
      Object.entries(value).forEach(([key, val]) => {
        if (typeof val === 'string') {
          const text = norm(val);
          if (key === 'desc' || key === 'paper') descriptive.add(text);
          if (key === 'exp' || key === 'fb' || key === 'explanation') feedback.add(text);
        } else {
          walk(val);
        }
      });
    };
    Object.values(missionCatalog).forEach(m => {
      walk(m);
      if (m?.paper) descriptive.add(norm(`Actividad equivalente: ${m.paper}`));
    });
    return { descriptive, feedback };
  }

  function removeIfDescriptive(el, descriptive) {
    if (!el || !el.isConnected) return;
    const text = norm(el.textContent);
    if (!text) return;
    if (descriptive.has(text) || /^Actividad equivalente\s*:/i.test(text)) el.remove();
  }

  function hideLegacyExplanations() {
    ['tv-sp2-reading-deliveries', 'tv-sp2-block1-banner'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    document.querySelectorAll('.tv-sp2-section-divider, .tv-sp2-mission-block').forEach(el => {
      el.style.display = 'none';
    });
  }

  function simplifyCurriculumSelector() {
    document.querySelectorAll('#tv-curriculum-selector p').forEach(el => {
      const text = norm(el.textContent);
      if (text.startsWith('Las actividades actuales están clasificadas')) el.remove();
    });
  }

  function simplifyMissionCards(descriptive) {
    document.querySelectorAll('#student-missions-grid .glass-card p, #student-missions-grid .glass-card span').forEach(el => {
      removeIfDescriptive(el, descriptive);
    });
  }

  function simplifyMissionModal(descriptive) {
    const area = document.getElementById('mission-content-area');
    if (!area) return;
    area.querySelectorAll('p, span').forEach(el => removeIfDescriptive(el, descriptive));
    area.querySelectorAll('p').forEach(el => {
      const text = norm(el.textContent);
      if (text === 'Aquí importa explicar la decisión, no responder primero.') el.remove();
    });
  }

  function simplify() {
    const { descriptive } = collectTextSets();
    hideLegacyExplanations();
    simplifyCurriculumSelector();
    simplifyMissionCards(descriptive);
    simplifyMissionModal(descriptive);
  }

  function missionIsOpen() {
    const modal = document.getElementById('modal-mission');
    return !!modal && !modal.classList.contains('hidden') && typeof activeMissionKey !== 'undefined' && !!activeMissionKey;
  }

  // En los retos, el feedback conserva sólo el estado (correcto/incorrecto),
  // sin volver a mostrar la explicación conceptual que ya está en el cuadernillo.
  if (window.Swal?.fire && !window.Swal.fire.__tvDirectChallenges) {
    const originalFire = window.Swal.fire.bind(window.Swal);
    const directFire = function(...args) {
      if (missionIsOpen() && args[0] && typeof args[0] === 'object' && !Array.isArray(args[0])) {
        const cfg = { ...args[0] };
        const { feedback } = collectTextSets();
        if (typeof cfg.text === 'string' && feedback.has(norm(cfg.text))) delete cfg.text;
        args[0] = cfg;
      }
      return originalFire(...args);
    };
    directFire.__tvDirectChallenges = true;
    window.Swal.fire = directFire;
  }

  // Los cierres de los juegos ya no envían consignas adicionales al cuadernillo.
  const originalSave = window.saveMissionResults;
  if (typeof originalSave === 'function' && !originalSave.__tvDirectChallenges) {
    const directSave = function() {
      return originalSave.call(this, 'Reto completado.');
    };
    directSave.__tvDirectChallenges = true;
    window.saveMissionResults = directSave;
    try { saveMissionResults = directSave; } catch (_) {}
  }

  const rerunAfter = fn => typeof fn === 'function' ? function(...args) {
    const result = fn.apply(this, args);
    setTimeout(simplify, 40);
    return result;
  } : fn;

  if (typeof window.renderStudentMissionsGrid === 'function' && !window.renderStudentMissionsGrid.__tvDirectChallenges) {
    const wrapped = rerunAfter(window.renderStudentMissionsGrid);
    wrapped.__tvDirectChallenges = true;
    window.renderStudentMissionsGrid = wrapped;
    try { renderStudentMissionsGrid = wrapped; } catch (_) {}
  }

  if (typeof window.renderStudentDashboard === 'function' && !window.renderStudentDashboard.__tvDirectChallenges) {
    const wrapped = rerunAfter(window.renderStudentDashboard);
    wrapped.__tvDirectChallenges = true;
    window.renderStudentDashboard = wrapped;
    try { renderStudentDashboard = wrapped; } catch (_) {}
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(simplify, 500));
  setTimeout(simplify, 0);

  let timer = null;
})();
