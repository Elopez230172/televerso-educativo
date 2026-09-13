/* TeleVerso Educativo · Corrección defensiva del campo formativo Saberes y Pensamiento Científico.
   Saberes-addon ya construye el selector de tres campos; este archivo sólo garantiza
   la asignación correcta de las misiones SPC y evita selectores duplicados heredados. */
(() => {
  if (typeof missionCatalog === 'undefined') return;

  const FIELD = 'saberes';
  const FIELD_TITLE = 'Saberes y Pensamiento Científico · PPA 1';

  Object.entries(missionCatalog).forEach(([key, mission]) => {
    if (/^spc\d+$/i.test(key) || /^spc\d+$/i.test(String(mission?.id || ''))) {
      mission.field = FIELD;
      mission.fieldTitle = FIELD_TITLE;
    }
  });

  // Compatibilidad con una versión anterior que añadía un segundo botón de Saberes.
  const cleanLegacyDuplicate = () => {
    const current = document.getElementById('tv-btn-spc');
    const legacy = document.getElementById('tv-btn-saberes');
    if (current && legacy) legacy.remove();
  };

  const previousSetField = window.tvSetField;
  if (typeof previousSetField === 'function') {
    window.tvSetField = function(field) {
      const normalized = ['ens', 'lenguajes', 'saberes'].includes(field) ? field : 'ens';
      localStorage.setItem('televerso_active_field', normalized);
      const result = previousSetField(normalized);
      cleanLegacyDuplicate();
      return result;
    };
  }

  setTimeout(cleanLegacyDuplicate, 0);
})();
