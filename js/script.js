(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal], .reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('is-visible');
      return;
    }
    io.observe(el);
  });
})();
