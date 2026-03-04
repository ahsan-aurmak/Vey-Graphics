(function () {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('open');
    });

    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (form && feedback) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      feedback.className = '';

      if (!name || !email || !message) {
        feedback.textContent = 'Please complete all fields before sending your message.';
        feedback.classList.add('error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.classList.add('error');
        return;
      }

      feedback.textContent = 'Thank you. Your message has been prepared successfully.';
      feedback.classList.add('success');
      form.reset();
    });
  }

  const revealNodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealNodes.forEach(function (node) {
      node.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  revealNodes.forEach(function (node) {
    observer.observe(node);
  });
})();
