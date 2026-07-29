// T&A Visualidad Digital - Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const nav = document.querySelector('.glass-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Select Elements for Scroll Reveal
    const revealElements = [
        ...document.querySelectorAll('.service-card'),
        ...document.querySelectorAll('.feature-item'),
        ...document.querySelectorAll('.stat-card'),
        document.querySelector('.section-header'),
        document.querySelector('.cta-glass-container')
    ];

    // Add reveal class to set initial state
    revealElements.forEach(el => {
        if(el) el.classList.add('reveal');
    });

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        if(el) observer.observe(el);
    });

    // 4. Mouse Move effect for Mouse Tracking Mockup (3D Tilt Effect)
    const mockup = document.querySelector('.glass-mockup');
    
    if (mockup) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Calculate rotation based on mouse position
            // Center is 0, limits are -15deg to 15deg
            const rotateX = (0.5 - y) * 20;
            const rotateY = (x - 0.5) * 20;
            
            mockup.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset when mouse leaves
        document.addEventListener('mouseleave', () => {
            mockup.style.transform = 'rotateY(-15deg) rotateX(5deg)';
        });
    }
});
