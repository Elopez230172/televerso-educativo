/* TeleVerso Educativo · Estabilidad móvil V3
   Evita el brinco vertical sin interferir con el desplazamiento nativo.
   La causa principal mitigada es el anclaje automático del navegador cuando
   partes dinámicas de la interfaz cambian de tamaño mientras se hace scroll.
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
})();
