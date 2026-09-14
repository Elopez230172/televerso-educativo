/* TeleVerso Educativo · Estabilidad móvil
   Corrección conservadora: no modifica overflow, height, touch-action ni overscroll.
   Deja que iOS/Android manejen el desplazamiento de forma nativa y sólo elimina
   efectos visuales que pueden provocar saltos o repintados durante el scroll.
*/
(() => {
  if (document.getElementById('tv-mobile-stability-style')) return;

  const style = document.createElement('style');
  style.id = 'tv-mobile-stability-style';
  style.textContent = `
    @media (hover: none), (pointer: coarse), (max-width: 768px) {
      /* IMPORTANTE: no tocar overflow, height, touch-action ni overscroll. */
      html, body {
        scroll-behavior: auto !important;
      }

      body {
        background-attachment: scroll !important;
      }

      /* El encabezado deja de ser sticky en móvil para evitar repintados/saltos. */
      header {
        position: relative !important;
        top: auto !important;
      }

      /* Backdrop-filter + sticky/transforms puede producir brincos en Safari/Chrome móvil. */
      .glass-panel,
      .glass-card,
      header {
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
      }

      /* En móvil no usamos animaciones ni transiciones geométricas. */
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

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation: none !important;
        transition-duration: 0s !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
