(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
    }));
  }

  // Click-to-enlarge image viewer. Uses the original local image, not a thumbnail.
  const dialog = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeButton = document.querySelector('.lightbox-close');
  document.addEventListener('click', event => {
    const button = event.target.closest('.gallery-open');
    if (!button || !dialog || !lightboxImage) return;
    const src = button.dataset.full || button.querySelector('img')?.src;
    const img = button.querySelector('img');
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = img?.alt || '';
    if (lightboxCaption) lightboxCaption.textContent = button.dataset.caption || button.closest('figure')?.querySelector('figcaption')?.textContent || '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });
  const closeLightbox = () => {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
    if (lightboxImage) lightboxImage.removeAttribute('src');
  };
  closeButton?.addEventListener('click', closeLightbox);
  dialog?.addEventListener('click', event => { if (event.target === dialog) closeLightbox(); });
  dialog?.addEventListener('close', () => { if (lightboxImage) lightboxImage.removeAttribute('src'); });

  // Search / domain filters narrow the five-project directory without hiding project evidence.
  const filterButtons = [...document.querySelectorAll('.filter-chip')];
  const projectTiles = [...document.querySelectorAll('.project-index-grid a')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter || 'all';
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    projectTiles.forEach(tile => {
      const category = tile.dataset.indexCategory;
      tile.hidden = filter !== 'all' && category !== filter && !(filter === 'edge' && category === 'protection');
    });
  }));

  // Active section navigation and reading progress.
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const setActive = id => navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-22% 0px -65% 0px', threshold: [0, .1, .25, .45] });
    sections.forEach(section => observer.observe(section));
  }
  const progress = document.getElementById('reading-progress-bar');
  const backTop = document.getElementById('back-to-top');
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.max(0, Math.min(100, window.scrollY / max * 100)) : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (backTop) backTop.classList.toggle('is-visible', window.scrollY > 700);
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));

  // Subtle entrance reveals that respect users' reduced-motion setting.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: .08 });
    document.querySelectorAll('.gallery-item, .project-index-grid a, .fact-card, .experience-block, .award-highlight, .publication-list article').forEach(node => revealObserver.observe(node));
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  // If the owner later adds the VibeGuard recording, it can be activated by adding
  // an <video data-vibeguard-video="assets/media/vibeguard-demo.mp4"> in the demo stage.
  const video = document.querySelector('[data-vibeguard-video]');
  if (video && video.dataset.vibeguardVideo) {
    video.src = video.dataset.vibeguardVideo;
    video.hidden = false;
  }
})();
