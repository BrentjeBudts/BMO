// Menu: hamburger op mobiel en klikbare submenu's.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('hoofdmenu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  var subToggles = document.querySelectorAll('.sub-toggle');

  function closeAll(except) {
    subToggles.forEach(function (b) {
      if (b !== except) b.setAttribute('aria-expanded', 'false');
    });
  }

  subToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeAll(btn);
      btn.setAttribute('aria-expanded', String(!open));
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAll();
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-sub')) closeAll();
  });
})();
