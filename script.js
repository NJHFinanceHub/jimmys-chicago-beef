/* Jimmy's Chicago Beef — tiny bit of JS for the nav + year */
(function () {
  // Mobile nav toggle
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Auto-update footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
