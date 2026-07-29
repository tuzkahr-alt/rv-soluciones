/**
 * RV Soluciones — Renderizado dinámico desde RV_CONFIG / localStorage
 */
(function() {
  function getActiveConfig() {
    try {
      const saved = localStorage.getItem('rv_cms_config');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return typeof RV_CONFIG !== 'undefined' ? RV_CONFIG : null;
  }

  const cfg = getActiveConfig();
  if (!cfg) return;

  function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── 1. SEO & META ─────────────────────────────────────────────
  if (cfg.meta) {
    if (cfg.meta.title) document.title = cfg.meta.title;
    if (cfg.meta.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', cfg.meta.description);
    }
  }

  // ── 2. NAVBAR ──────────────────────────────────────────────────
  if (cfg.navbar) {
    const n = cfg.navbar;
    const brandEl = document.querySelector('.nav-brand');
    if (brandEl) {
      const parts = (n.brand || 'RV Soluciones').split(' ');
      if (parts.length > 1) {
        brandEl.innerHTML = esc(parts[0]) + ' <span>' + esc(parts.slice(1).join(' ')) + '</span>';
      } else {
        brandEl.textContent = n.brand;
      }
    }
    const logoImg = document.querySelector('.nav-logo-img');
    if (logoImg && n.logo) logoImg.src = n.logo;

    const navLinksList = document.getElementById('navLinks');
    if (navLinksList && n.links) {
      const closeBtn = document.getElementById('navCloseMobile');
      let linksHtml = '';
      n.links.forEach(l => {
        linksHtml += `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`;
      });
      linksHtml += `<li><a href="${esc(n.ctaHref || '#contacto')}" class="nav-cta" id="navCtaBtn">${esc(n.ctaLabel || 'Contáctame')}</a></li>`;
      if (closeBtn) {
        linksHtml += closeBtn.outerHTML;
      }
      navLinksList.innerHTML = linksHtml;
    }
  }

  // ── 3. HERO ────────────────────────────────────────────────────
  if (cfg.hero) {
    const h = cfg.hero;
    const badge = document.querySelector('#hero .hero-badge');
    if (badge) badge.textContent = h.badge || '';

    const title = document.querySelector('#hero .hero-title');
    if (title) {
      title.innerHTML = `${esc(h.titleLine1 || '')} <span class="line-gold">${esc(h.titleGold || '')}</span> ${esc(h.titleLine2 || '')}`;
    }

    const desc = document.querySelector('#hero .hero-description');
    if (desc) desc.textContent = h.description || '';

    const btn1 = document.getElementById('heroPortfolioBtn');
    if (btn1) {
      btn1.href = h.btn1Href || '#portafolio';
      btn1.innerHTML = `<span>${esc(h.btn1Label || 'Ver mis proyectos')}</span><span>↓</span>`;
    }

    const btn2 = document.getElementById('heroContactBtn');
    if (btn2) {
      btn2.href = h.btn2Href || '#contacto';
      btn2.innerHTML = `<span>💬</span><span>${esc(h.btn2Label || 'Hablemos')}</span>`;
    }

    const statsWrap = document.querySelector('#hero .hero-stats');
    if (statsWrap && h.stats) {
      statsWrap.innerHTML = h.stats.map(s => `
        <div class="stat-item">
          <span class="stat-number" data-count="${s.number}">${s.number}</span>
          <span class="stat-label">${esc(s.suffix || '')} ${esc(s.label || '')}</span>
        </div>
      `).join('');
    }
  }

  // ── 4. SERVICES ────────────────────────────────────────────────
  if (cfg.services) {
    const s = cfg.services;
    const header = document.querySelector('#servicios .services-header');
    if (header) {
      const label = header.querySelector('.section-label');
      const title = header.querySelector('.section-title');
      const subtitle = header.querySelector('.section-subtitle');
      if (label) label.textContent = s.label || '';
      if (title) title.innerHTML = esc(s.title || '');
      if (subtitle) subtitle.textContent = s.subtitle || '';
    }

    const grid = document.querySelector('#servicios .services-grid');
    if (grid && s.items) {
      grid.innerHTML = s.items.map((item, idx) => `
        <article class="service-card reveal ${idx > 0 ? 'reveal-delay-' + idx : ''}" id="${esc(item.id || 'svc' + idx)}">
          <div class="service-icon">${esc(item.icon || '✨')}</div>
          <h3 class="service-title">${esc(item.title || '')}</h3>
          <p class="service-desc">${esc(item.desc || '')}</p>
          <ul class="service-features" role="list">
            ${(item.features || []).map(f => `<li class="service-feature">${esc(f)}</li>`).join('')}
          </ul>
        </article>
      `).join('');
    }
  }

  // ── 5. PORTFOLIO ───────────────────────────────────────────────
  if (cfg.portfolio) {
    const p = cfg.portfolio;
    const header = document.querySelector('#portafolio .portfolio-header');
    if (header) {
      const label = header.querySelector('.section-label');
      const title = header.querySelector('.section-title');
      const subtitle = header.querySelector('.section-subtitle');
      if (label) label.textContent = p.label || '';
      if (title) title.innerHTML = esc(p.title || '');
      if (subtitle) subtitle.textContent = p.subtitle || '';
    }

    const grid = document.querySelector('#portafolio .portfolio-grid');
    if (grid && p.projects) {
      grid.innerHTML = p.projects.map((proj, idx) => {
        const isYoutube = proj.link && (proj.link.includes('youtu.be') || proj.link.includes('youtube.com'));
        const isInternal = proj.link && proj.link.startsWith('#');
        const targetAttr = isInternal ? '' : 'target="_blank" rel="noopener noreferrer"';
        const overlayText = isYoutube ? '▶ Ver Demo en Video' : (isInternal ? 'Cotizar Producto' : 'Ver proyecto ↗');
        const btnLabel = isYoutube ? 'Ver Demostración en YouTube' : (isInternal ? 'Cotizar / Solicitar Demo' : 'Ver Sitio Web');
        const btnIcon = isYoutube ? '🎬' : (isInternal ? '💬' : '🔗');

        return `
        <article class="portfolio-card reveal ${idx > 0 ? 'reveal-delay-' + (idx % 4) : ''}" id="${esc(proj.id || 'proj' + idx)}">
          <div class="portfolio-img-wrap">
            <img
              src="${esc(proj.image || 'assets/portfolio-ferreteria.png')}"
              alt="${esc(proj.alt || proj.title || '')}"
              loading="lazy"
            />
            <div class="portfolio-overlay">
              ${proj.link ? `<a href="${esc(proj.link)}" ${targetAttr} class="portfolio-view-btn">${overlayText}</a>` : `<span class="portfolio-view-btn">Ver detalle</span>`}
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-tag">${esc(proj.tag || '')}</span>
            <h3 class="portfolio-title">${esc(proj.title || '')}</h3>
            <p class="portfolio-desc">${esc(proj.desc || '')}</p>
            <div class="portfolio-tech" role="list" aria-label="Tecnologías usadas">
              ${(proj.tech || []).map(t => `<span class="tech-tag">${esc(t)}</span>`).join('')}
            </div>
            ${proj.link ? `
              <div style="margin-top:14px">
                <a href="${esc(proj.link)}" ${targetAttr} class="btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;font-size:0.85rem;border-radius:6px">
                  <span>${btnIcon}</span>
                  <span>${btnLabel}</span>
                </a>
              </div>
            ` : ''}
          </div>
        </article>
      `}).join('');
    }
  }

  // ── 6. WHY / NOSOTROS ──────────────────────────────────────────
  if (cfg.why) {
    const w = cfg.why;
    const sec = document.getElementById('diferenciadores');
    if (sec) {
      const label = sec.querySelector('.why-content .section-label');
      const title = sec.querySelector('.why-content .section-title');
      const subtitle = sec.querySelector('.why-content .section-subtitle');
      if (label) label.textContent = w.label || '';
      if (title) title.innerHTML = esc(w.title || '');
      if (subtitle) subtitle.textContent = w.subtitle || '';

      const pointsWrap = sec.querySelector('.why-points');
      if (pointsWrap && w.points) {
        pointsWrap.innerHTML = w.points.map((pt, idx) => `
          <div class="why-point reveal ${idx > 0 ? 'reveal-delay-' + idx : ''}">
            <div class="why-icon">${esc(pt.icon || '🎯')}</div>
            <div class="why-text">
              <h4>${esc(pt.title || '')}</h4>
              <p>${esc(pt.desc || '')}</p>
            </div>
          </div>
        `).join('');
      }

      const cardsWrap = sec.querySelector('.why-cards');
      if (cardsWrap && w.cards) {
        cardsWrap.innerHTML = w.cards.map((card, idx) => `
          <div class="why-card reveal ${idx > 0 ? 'reveal-delay-' + idx : ''}">
            <div class="why-card-number">${esc(card.value || '0')}</div>
            <div class="why-card-label">${esc(card.label || '')}</div>
          </div>
        `).join('');
      }
    }
  }

  // ── 7. CONTACT ─────────────────────────────────────────────────
  if (cfg.contact) {
    const c = cfg.contact;
    const left = document.querySelector('#contacto .contact-left');
    if (left) {
      const label = left.querySelector('.section-label');
      const title = left.querySelector('.section-title');
      const subtitle = left.querySelector('.section-subtitle');
      if (label) label.textContent = c.label || '';
      if (title) title.innerHTML = esc(c.title || '');
      if (subtitle) subtitle.textContent = c.subtitle || '';

      const waBtn = document.getElementById('whatsappContactBtn');
      if (waBtn && c.whatsapp) {
        waBtn.href = c.whatsapp;
        const sub = waBtn.querySelector('p');
        if (sub) sub.textContent = c.whatsappLabel || 'Respuesta rápida disponible';
      }

      const emailBtn = document.getElementById('emailContactBtn');
      if (emailBtn && c.email) {
        emailBtn.href = 'mailto:' + c.email;
        const p = emailBtn.querySelector('p');
        if (p) p.textContent = c.emailLabel || c.email;
      }

      const loc = document.getElementById('locationMethod');
      if (loc && c.location) {
        const p = loc.querySelector('p');
        if (p) p.textContent = c.location;
      }
    }

    const formWrap = document.querySelector('#contacto .contact-form');
    if (formWrap) {
      const formH3 = formWrap.querySelector('h3');
      if (formH3 && c.formTitle) formH3.textContent = c.formTitle;
      const submitBtn = document.getElementById('submitFormBtn');
      if (submitBtn && c.formBtn) submitBtn.textContent = c.formBtn;
    }

    const floatWa = document.getElementById('whatsappFloat');
    if (floatWa && c.whatsapp) {
      floatWa.href = c.whatsapp;
    }
  }

  // ── 8. FOOTER ──────────────────────────────────────────────────
  if (cfg.footer) {
    const f = cfg.footer;
    const brand = document.querySelector('footer .footer-brand');
    if (brand && f.brand) {
      const parts = f.brand.split(' ');
      if (parts.length > 1) {
        brand.innerHTML = esc(parts[0]) + ' <span>' + esc(parts.slice(1).join(' ')) + '</span>';
      } else {
        brand.textContent = f.brand;
      }
    }

    const copy = document.querySelector('footer .footer-copy');
    if (copy && f.copyright) copy.textContent = f.copyright;

    const nav = document.querySelector('footer .footer-links');
    if (nav && cfg.navbar && cfg.navbar.links) {
      nav.innerHTML = cfg.navbar.links.map(l => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('') + `<a href="${esc(cfg.navbar.ctaHref || '#contacto')}">${esc(cfg.navbar.ctaLabel || 'Contacto')}</a>`;
    }
  }
})();
