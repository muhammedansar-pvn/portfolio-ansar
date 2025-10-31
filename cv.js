        // Mobile menu toggle

    const mobileBtn = document.getElementById('mobileBtn');
    const mobileNav = document.getElementById('mobileNav');
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Theme toggle (desktop + mobile)
    const themeBtns = [document.getElementById('themeBtn'), document.getElementById('themeBtnMobile')];
    themeBtns.forEach(btn => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
      });
    });

    // Contact form simulation
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.innerText = 'Sending...';
      setTimeout(() => {
        status.innerText = 'Message sent (demo).';
        form.reset();
      }, 900);
    });

    // Footer year
    document.getElementById('year').innerText = new Date().getFullYear();
    
  


