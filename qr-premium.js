/* TeleVerso Educativo · cargador QR Premium + gestión de alumnos */
(() => {
  const load = (src, done) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    if (done) s.onload = done;
    s.onerror = () => console.error(`No se pudo cargar ${src}`);
    document.head.appendChild(s);
  };
  load('qr-premium-core.js', () => load('gestion-alumnos.js'));
})();