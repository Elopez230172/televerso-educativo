/* TeleVerso Educativo · Estabilidad visual en móviles
   Reduce saltos visuales sin bloquear el desplazamiento vertical.
   En móvil se desactivan únicamente animaciones y transforms que mueven elementos.
*/
(() => {
  if (document.getElementById('tv-mobile-stability-style')) return;

  const style = document.createElement('style');
  style.id = 'tv-mobile-stability-style';
  style.textContent = `
    @media (hover: none), (pointer: coarse), (max-width: 768px) {
      html {
        scroll-behavior: auto !important;
        overflow-y: auto !important;
        height: auto !important;
        min-height: 100% !important;
        touch-action: pan-y pinch-zoom !important;
      }

      body {
        background-attachment: scroll !important;
        overflow-y: auto !important;
        height: auto !important;
        min-height: 100svh !important;
        overscroll-behavior-y: auto !important;
        touch-action: pan-y pinch-zoom !important;
        -webkit-overflow-scrolling: touch;
      }

      main,
      #view-home,
      #view-student,
      #view-teacher {
        overflow-y: visible !important;
        height: auto !important;
        max-height: none !important;
      }

      #view-home {
        min-height: 78svh !important;
      }

      /* En táctil el estado :hover puede quedar pegado y mover las tarjetas. */
      .glass-card,
      .glass-card:hover,
      .tv-logo-brand,
      .tv-logo-brand:hover,
      .telesec-logo-img,
      .telesec-logo-card:hover .telesec-logo-img,
      [class*="hover:-translate-y"],
      [class*="hover:translate-y"],
      [class*="hover:scale-"] {
        transform: none !important;
      }

      /* Se eliminan sólo las animaciones que cambian la posición del contenido. */
      .tv-home-logo-feature,
      .animate-pop {
        animation: none !important;
        transform: none !important;
      }

      .glass-card {
        transition-property: border-color, background-color, box-shadow, opacity !important;
        transition-duration: 140ms !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto !important;
      }

      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
