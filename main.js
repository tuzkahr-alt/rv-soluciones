/* ============================================================
   RV Soluciones — Premium Minimalist JS Interaction
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navigation & Mobile Menu ---
  const navbar = document.getElementById('navbar');
  const navHamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const navCloseMobile = document.getElementById('navCloseMobile');

  const toggleMobileMenu = () => {
    const isOpen = navLinks.classList.toggle('open');
    navHamburger.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      navCloseMobile.style.display = 'block';
    } else {
      navCloseMobile.style.display = 'none';
    }
  };

  navHamburger.addEventListener('click', toggleMobileMenu);
  navCloseMobile.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking on a link
  const menuLinks = navLinks.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Scroll effect for navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initial state

  // --- Scroll Reveal Animation ---
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    reveals.forEach(reveal => {
      const revealTop = reveal.getBoundingClientRect().top;
      if (revealTop < triggerBottom) {
        reveal.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger initial state

  // --- Counter Stats Animation ---
  const stats = document.querySelectorAll('.stat-number, .why-card-number');
  const countSpeed = 200; // The lower, the faster

  const startCounting = (element) => {
    const target = parseInt(element.getAttribute('data-count'), 10);
    if (isNaN(target)) return; // Skip non-number stats (like "✓")

    let count = 0;
    const updateCount = () => {
      const increment = target / countSpeed;
      if (count < target) {
        count += Math.ceil(increment);
        if (count > target) count = target;
        
        // Retain specific symbols if needed
        if (element.classList.contains('why-card-number')) {
          if (target === 100) {
            element.innerText = count + '%';
          } else if (target === 0) {
            element.innerText = '$' + count;
          } else {
            element.innerText = count;
          }
        } else {
          // Stat items in Hero
          if (element.nextElementSibling && element.nextElementSibling.innerText.includes('%')) {
            element.innerText = count;
          } else {
            element.innerText = count;
          }
        }
        setTimeout(updateCount, 1);
      } else {
        if (element.classList.contains('why-card-number')) {
          if (target === 100) element.innerText = '100%';
          else if (target === 0) element.innerText = '$0';
          else element.innerText = target;
        } else {
          element.innerText = target;
        }
      }
    };
    updateCount();
  };

  // Intersection Observer for counting stats when they enter viewport
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => {
    if (stat.getAttribute('data-count') !== null) {
      statsObserver.observe(stat);
    }
  });

  // --- Contact Form Submission & Toast ---
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  const showToast = (message, isSuccess = true) => {
    toast.innerText = message;
    toast.style.borderLeftColor = isSuccess ? 'var(--gold)' : '#EF4444';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Simple validation check
      const nombre = document.getElementById('formNombre').value.trim();
      const empresa = document.getElementById('formEmpresa').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const servicio = document.getElementById('formServicio').value;
      const mensaje = document.getElementById('formMensaje').value.trim();

      if (!nombre || !email || !servicio || !mensaje) {
        showToast('Por favor, completa todos los campos requeridos.', false);
        return;
      }

      const targetEmail = (typeof RV_CONFIG !== 'undefined' && RV_CONFIG.contact && RV_CONFIG.contact.email) ? RV_CONFIG.contact.email : 'zuprims@gmail.com';

      const submitBtn = document.getElementById('submitFormBtn');
      submitBtn.innerText = 'Enviando...';
      submitBtn.disabled = true;

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nombre: nombre,
            empresa: empresa || 'No especificada',
            email: email,
            servicio: servicio,
            mensaje: mensaje,
            _subject: `📩 Nuevo mensaje de ${nombre} — RV Soluciones`
          })
        });

        if (response.ok) {
          showToast(`¡Gracias ${nombre}! Tu mensaje ha sido enviado a ${targetEmail}. Te responderemos pronto.`);
          contactForm.reset();
        } else {
          showToast('No se pudo enviar el mensaje. Por favor intenta por WhatsApp o Email.', false);
        }
      } catch (err) {
        console.error('Error al enviar formulario:', err);
        showToast('Error de conexión. Inténtalo de nuevo o contáctanos por WhatsApp.', false);
      } finally {
        submitBtn.innerText = 'Enviar mensaje →';
        submitBtn.disabled = false;
      }
    });
  }
});
