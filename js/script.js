// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you within 24 hours.');
    e.target.reset();
}

// Scroll animations - trigger every time element enters viewport
document.addEventListener('DOMContentLoaded', function() {
    const animatedEls = document.querySelectorAll('.product-card, #why .border, #contact .border, #contact .bg-white');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.classList.add('animate-in');
            } else {
                // Remove animation class when element leaves viewport
                // This allows it to animate again when it comes back into view
                entry.target.classList.remove('animate-in');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    animatedEls.forEach(el => {
        observer.observe(el);
    });

    // Hero section animations (immediate)
    const heroAnimations = document.querySelectorAll('.hero-bg .animate-fade-up');
    heroAnimations.forEach(el => {
        el.style.opacity = '0';
    });

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});