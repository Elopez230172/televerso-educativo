/* TeleVerso Educativo · Estabilidad visual en móviles
   Evita saltos molestos al desplazar la pantalla en dispositivos táctiles.
   Desactiva animaciones continuas y transformaciones hover en pantallas móviles,
   estabiliza las unidades de alto y evita el fondo fijo durante el scroll.
*/
(() => {
  if (document.getElementById('tv-mobile-stability-style')) return;

  const style = document.createElement('style');
  style.id = 'tv-mobile-stability-style';
  style.textContent = `
    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }

    @media (hover: none), (pointer: coarse), (max-width: 768px) {
      html {
        scroll-behavior: auto !important;
      }

      body {
        background-attachment: scroll !important;
        min-height: 100svh !important;
        overscroll-behavior-y: contain;
      }

      #view-home {
        min-height: 78svh !important;
      }

      /* En táctil el estado :hover puede quedar “pegado” y provocar saltos. */
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

      /* El logo flotante y las entradas con rebote se vuelven estáticos en móvil. */
      .tv-home-logo-feature,
      .animate-pop {
        animation: none !important;
        transform: none !important;
      }

      /* Evita transiciones de geometría durante el desplazamiento. */
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

      .tv-home-logo-feature,
      .animate-pop {
        animation: none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
