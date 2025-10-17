// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scroll for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Form submission
        function handleSubmit(e) {
            e.preventDefault();
            alert('Thank you for your message! Our team will get back to you within 24 hours.');
            e.target.reset();
        }

const animatedEls = document.querySelectorAll('.animate-fade-up, .animate-slide-left');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.opacity = 1;
    });
  });
  animatedEls.forEach(el => observer.observe(el));

 document.getElementById('year').textContent = new Date().getFullYear();