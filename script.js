/* =============================================
   STARLING WOODWORKING — script.js
   ============================================= */

/* --- Nav: scroll state --- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* --- Nav: mobile drawer --- */
const navBurger = document.getElementById('navBurger');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

navBurger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navBurger.classList.toggle('open', open);
  navOverlay.classList.toggle('active', open);
  navBurger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

[navOverlay, ...navLinks.querySelectorAll('.nav__link')].forEach(el =>
  el.addEventListener('click', closeMenu)
);

function closeMenu() {
  navLinks.classList.remove('open');
  navBurger.classList.remove('open');
  navOverlay.classList.remove('active');
  navBurger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* --- Hero: slow bg zoom on load --- */
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  const heroImg = new Image();
  heroImg.onload = () => heroBg.classList.add('loaded');
  heroImg.src = 'images/hero.webp';
  if (heroImg.complete) heroBg.classList.add('loaded');
}

/* --- Smooth scroll (offset for fixed nav) --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* --- Gallery filter --- */
const filterBtns   = document.querySelectorAll('.filter-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});

/* --- Lightbox --- */
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxPrev    = document.getElementById('lightboxPrev');
const lightboxNext    = document.getElementById('lightboxNext');

let currentIndex = 0;

function visibleItems() {
  return galleryItems.filter(i => !i.classList.contains('hidden'));
}

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function renderLightbox() {
  const items = visibleItems();
  const item  = items[currentIndex];
  const img   = item.querySelector('img');
  const cap   = item.querySelector('figcaption');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = cap ? cap.textContent : '';
  lightboxPrev.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
  lightboxNext.style.visibility = currentIndex < items.length - 1 ? 'visible' : 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const idx = visibleItems().indexOf(item);
    if (idx !== -1) openLightbox(idx);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lightboxPrev.addEventListener('click', () => {
  if (currentIndex > 0) { currentIndex--; renderLightbox(); }
});
lightboxNext.addEventListener('click', () => {
  if (currentIndex < visibleItems().length - 1) { currentIndex++; renderLightbox(); }
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft'  && currentIndex > 0) { currentIndex--; renderLightbox(); }
  if (e.key === 'ArrowRight' && currentIndex < visibleItems().length - 1) { currentIndex++; renderLightbox(); }
});

/* Touch swipe in lightbox */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) < 40) return;
  if (dx < 0 && currentIndex < visibleItems().length - 1) { currentIndex++; renderLightbox(); }
  if (dx > 0 && currentIndex > 0) { currentIndex--; renderLightbox(); }
});

/* --- Process strip: drag to scroll --- */
const strip = document.getElementById('processStrip');
if (strip) {
  let isDown = false, startX, scrollLeft;
  strip.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });
  strip.addEventListener('mouseleave', () => { isDown = false; });
  strip.addEventListener('mouseup',    () => { isDown = false; });
  strip.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    strip.scrollLeft = scrollLeft - (e.pageX - strip.offsetLeft - startX);
  });
}

/* --- Scroll reveal (Intersection Observer) --- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
