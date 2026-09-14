/* TeleVerso Educativo · Estabilidad móvil V2
   Objetivo: restaurar por completo el desplazamiento nativo y eliminar los brincos.
   No modifica overflow, height, touch-action ni overscroll del documento.
*/
(() => {
  const isTouch = matchMedia('(hover: none), (pointer: coarse), (max-width: 768px)').matches;
  if (!isTouch) return;

  // Retira cualquier versión anterior que pudiera haber bloqueado o alterado el scroll.
  document.getElementById('tv-mobile-stability-style')?.remove();
  document.getElementById('tv-mobile-stability-v2-style')?.remove();

  // Limpia sólo propiedades inline que una corrección anterior pudiera haber dejado.
  [document.documentElement, document.body].forEach(el => {
    if (!el) return;
    ['overflow','overflow-x','overflow-y','height','max-height','touch-action','overscroll-behavior','overscroll-behavior-y'].forEach(p => el.style.removeProperty(p));
  });

  const style = document.createElement('style');
  style.id = 'tv-mobile-stability-v2-style';
  style.textContent = `
    @media (hover: none), (pointer: coarse), (max-width: 768px) {
      /* El navegador conserva el scroll vertical nativo. No se define overflow/height/touch-action. */
      html, body { scroll-behavior: auto !important; }
      body { background-attachment: scroll !important; }

      /* Evita el salto de la barra superior y repintados costosos en móvil. */
      header { position: relative !important; top: auto !important; }

      /* Reduce repintados que suelen provocar vibración en Safari/Chrome móvil. */
      .glass-panel, .glass-card, header {
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
      }

      /* Elimina movimiento visual sin tocar el desplazamiento de la página. */
      *, *::before, *::after {
        animation: none !important;
        transition-duration: 0s !important;
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
})();
