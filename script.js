/* =============================================
   STARLING WOODWORKING — script.js
   ============================================= */

/* --- All images per style, used for hover cycling and lightbox --- */
const styleImages = {
  farmhouse: [
    'images/UpdatedPhotos/Farmhouse/FH1.webp',
    'images/UpdatedPhotos/Farmhouse/FH2.webp',
    'images/UpdatedPhotos/Farmhouse/FH3.webp',
    'images/UpdatedPhotos/Farmhouse/FH4.webp',
    'images/UpdatedPhotos/Farmhouse/FH5.webp',
    'images/UpdatedPhotos/Farmhouse/FH6.webp',
    'images/UpdatedPhotos/Farmhouse/FH7.webp',
    'images/UpdatedPhotos/Farmhouse/FH8.webp',
  ],
  classic: [
    'images/UpdatedPhotos/Classic/CL1.webp',
    'images/UpdatedPhotos/Classic/CL2.webp',
    'images/UpdatedPhotos/Classic/CL3.webp',
    'images/UpdatedPhotos/Classic/CL4.webp',
    'images/UpdatedPhotos/Classic/CL5.webp',
    'images/UpdatedPhotos/Classic/CL6.webp',
    'images/UpdatedPhotos/Classic/CL7.webp',
    'images/UpdatedPhotos/Classic/CL8.webp',
    'images/UpdatedPhotos/Classic/CL9.webp',
    'images/UpdatedPhotos/Classic/CL10.webp',
    'images/UpdatedPhotos/Classic/CL11.webp',
    'images/UpdatedPhotos/Classic/CL12.webp',
    'images/UpdatedPhotos/Classic/CL13.webp',
    'images/UpdatedPhotos/Classic/CL14.webp',
    'images/UpdatedPhotos/Classic/CL15.webp',
    'images/UpdatedPhotos/Classic/CL16.webp',
    'images/UpdatedPhotos/Classic/CL17.webp',
    'images/UpdatedPhotos/Classic/CL18.webp',
    'images/UpdatedPhotos/Classic/CL19.webp',
    'images/UpdatedPhotos/Classic/CL20.webp',
  ],
  waverly: [
    'images/UpdatedPhotos/Waverly/W1.webp',
    'images/UpdatedPhotos/Waverly/W2.webp',
    'images/UpdatedPhotos/Waverly/W3.webp',
    'images/UpdatedPhotos/Waverly/W4.webp',
    'images/UpdatedPhotos/Waverly/W5.webp',
    'images/UpdatedPhotos/Waverly/W6.webp',
    'images/UpdatedPhotos/Waverly/W7.webp',
    'images/UpdatedPhotos/Waverly/W8.webp',
    'images/UpdatedPhotos/Waverly/W9.webp',
    'images/UpdatedPhotos/Waverly/W10.webp',
    'images/UpdatedPhotos/Waverly/W11.webp',
    'images/UpdatedPhotos/Waverly/W12.webp',
    'images/UpdatedPhotos/Waverly/W13.webp',
    'images/UpdatedPhotos/Waverly/W14.webp',
    'images/UpdatedPhotos/Waverly/W15.webp',
    'images/UpdatedPhotos/Waverly/W16.webp',
    'images/UpdatedPhotos/Waverly/W17.webp',
    'images/UpdatedPhotos/Waverly/W18.webp',
  ],
  custom: [
    'images/UpdatedPhotos/Custom/CST1.webp',
    'images/UpdatedPhotos/Custom/CST2.webp',
    'images/UpdatedPhotos/Custom/CST3.webp',
    'images/UpdatedPhotos/Custom/CST4.webp',
    'images/UpdatedPhotos/Custom/CST5.webp',
    'images/UpdatedPhotos/Custom/CST6.webp',
    'images/UpdatedPhotos/Custom/CST7.webp',
    'images/UpdatedPhotos/Custom/CST8.webp',
    'images/UpdatedPhotos/Custom/CST9.webp',
    'images/UpdatedPhotos/Custom/CST10.webp',
    'images/UpdatedPhotos/Custom/CST11.webp',
    'images/UpdatedPhotos/Custom/CST12.webp',
    'images/UpdatedPhotos/Custom/CST13.webp',
    'images/UpdatedPhotos/Custom/CST14.webp',
    'images/UpdatedPhotos/Custom/CST15.webp',
    'images/UpdatedPhotos/Custom/CST16.webp',
    'images/UpdatedPhotos/Custom/CSt17.webp',
    'images/UpdatedPhotos/Custom/CST18.webp',
    'images/UpdatedPhotos/Custom/CST19.webp',
    'images/UpdatedPhotos/Custom/CST20.webp',
  ],
  decor: [
    'images/UpdatedPhotos/Home Decor/HD1.webp',
    'images/UpdatedPhotos/Home Decor/HD2.webp',
    'images/UpdatedPhotos/Home Decor/HD3.webp',
    'images/UpdatedPhotos/Home Decor/HD4.webp',
    'images/UpdatedPhotos/Home Decor/HD5.webp',
    'images/UpdatedPhotos/Home Decor/HD6.webp',
    'images/UpdatedPhotos/Home Decor/HD7.webp',
    'images/UpdatedPhotos/Home Decor/HD8.webp',
    'images/UpdatedPhotos/Home Decor/HD9.webp',
    'images/UpdatedPhotos/Home Decor/HD10.webp',
    'images/UpdatedPhotos/Home Decor/HD11.webp',
    'images/UpdatedPhotos/Home Decor/HD12.webp',
    'images/UpdatedPhotos/Home Decor/HD13.webp',
    'images/UpdatedPhotos/Home Decor/HD14.webp',
    'images/UpdatedPhotos/Home Decor/HD15.webp',
    'images/UpdatedPhotos/Home Decor/HD16.webp',
    'images/UpdatedPhotos/Home Decor/HD17.webp',
    'images/UpdatedPhotos/Home Decor/HD18.webp',
    'images/UpdatedPhotos/Home Decor/HD19.webp',
  ],
};

const styleLabels = {
  farmhouse: 'Farmhouse',
  classic:   'Classic',
  waverly:   'Waverly',
  custom:    'Custom Projects',
  decor:     'Home Décor',
};

/* --- Nav: scroll state --- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* --- Nav: mobile drawer --- */
const navBurger  = document.getElementById('navBurger');
const navLinks   = document.getElementById('navLinks');
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

/* --- Hero: slow bg zoom --- */
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  const img = new Image();
  img.onload = () => heroBg.classList.add('loaded');
  img.src = 'images/hero.webp';
  if (img.complete) heroBg.classList.add('loaded');
}

/* --- Smooth scroll (offset for fixed nav) --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
});

/* =============================================
   STYLE CARDS — hover cycling + lightbox open
   ============================================= */
document.querySelectorAll('.style-card').forEach(card => {
  const style = card.dataset.style;
  const images = styleImages[style];
  if (!images) return;

  const imgA = card.querySelector('.style-card__img--a');
  const imgB = card.querySelector('.style-card__img--b');
  let useA = true;   // which layer is currently visible
  let idx   = 0;
  let timer = null;

  /* Preload first few images for instant cycling */
  images.slice(0, 4).forEach(src => { new Image().src = src; });

  function cycleImage() {
    idx = (idx + 1) % images.length;
    const next = useA ? imgB : imgA;
    const curr = useA ? imgA : imgB;
    next.src = images[idx];
    /* Small delay so browser has a chance to start loading before fade */
    next.onload = () => {
      next.classList.add('active');
      curr.classList.remove('active');
      useA = !useA;
    };
    /* Fallback if already cached (onload won't fire) */
    if (next.complete) {
      next.classList.add('active');
      curr.classList.remove('active');
      useA = !useA;
    }
  }

  card.addEventListener('mouseenter', () => {
    timer = setInterval(cycleImage, 2200);
  });

  card.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = null;
    /* Reset to first image */
    const curr = useA ? imgA : imgB;
    const other = useA ? imgB : imgA;
    imgA.src = images[0];
    imgA.classList.add('active');
    other.classList.remove('active');
    useA = true;
    idx = 0;
  });

  /* Open lightbox at current cycling index */
  card.addEventListener('click', () => openLightbox(style, idx));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(style, idx); }
  });
});

/* =============================================
   LIGHTBOX
   ============================================= */
const lightbox          = document.getElementById('lightbox');
const lightboxImg       = document.getElementById('lightboxImg');
const lightboxCaption   = document.getElementById('lightboxCaption');
const lightboxClose     = document.getElementById('lightboxClose');
const lightboxPrev      = document.getElementById('lightboxPrev');
const lightboxNext      = document.getElementById('lightboxNext');
const lightboxDots      = document.getElementById('lightboxDots');
const lightboxSwipeHint = document.getElementById('lightboxSwipeHint');

let currentStyle    = null;
let currentIdx      = 0;
let swipeHintShown  = false;

function openLightbox(style, startIdx = 0) {
  currentStyle = style;
  currentIdx   = startIdx;
  renderLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();

  if (!swipeHintShown && window.matchMedia('(max-width: 768px)').matches) {
    swipeHintShown = true;
    lightboxSwipeHint.classList.remove('show');
    void lightboxSwipeHint.offsetWidth;
    lightboxSwipeHint.classList.add('show');
  }
}

function renderLightbox() {
  const images = styleImages[currentStyle];
  lightboxImg.src = images[currentIdx];
  lightboxImg.alt = `${styleLabels[currentStyle]} — photo ${currentIdx + 1}`;
  lightboxCaption.textContent = `${styleLabels[currentStyle]}  ·  ${currentIdx + 1} / ${images.length}`;
  lightboxPrev.style.visibility = currentIdx > 0 ? 'visible' : 'hidden';
  lightboxNext.style.visibility = currentIdx < images.length - 1 ? 'visible' : 'hidden';

  lightboxDots.innerHTML = '';
  if (images.length > 1) {
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'lightbox__dot' + (i === currentIdx ? ' active' : '');
      dot.addEventListener('click', () => { currentIdx = i; renderLightbox(); });
      lightboxDots.appendChild(dot);
    });
  }
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 350);
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lightboxPrev.addEventListener('click', () => {
  if (currentIdx > 0) { currentIdx--; renderLightbox(); }
});
lightboxNext.addEventListener('click', () => {
  if (currentIdx < styleImages[currentStyle].length - 1) { currentIdx++; renderLightbox(); }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    /* Close inquiry first if open, otherwise close lightbox */
    if (inquiry.classList.contains('active')) { closeInquiry(); return; }
    if (lightbox.classList.contains('active')) closeLightbox();
  }
  if (!lightbox.classList.contains('active') || inquiry.classList.contains('active')) return;
  if (e.key === 'ArrowLeft'  && currentIdx > 0) { currentIdx--; renderLightbox(); }
  if (e.key === 'ArrowRight' && currentIdx < styleImages[currentStyle].length - 1) { currentIdx++; renderLightbox(); }
});

/* Touch swipe in lightbox */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  if (inquiry.classList.contains('active')) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) < 40) return;
  const images = styleImages[currentStyle];
  if (dx < 0 && currentIdx < images.length - 1) { currentIdx++; renderLightbox(); }
  if (dx > 0 && currentIdx > 0)                 { currentIdx--; renderLightbox(); }
});

/* =============================================
   INQUIRY POPUP
   ============================================= */
const inquiry      = document.getElementById('inquiry');
const inquiryClose = document.getElementById('inquiryClose');
const inquiryThumb = document.getElementById('inquiryThumb');
const inquiryEmail = document.getElementById('inquiryEmail');

/* Clicking the lightbox image opens the inquiry */
lightboxImg.addEventListener('click', () => {
  if (lightboxImg.src) openInquiry(lightboxImg.src);
});

function openInquiry(imgSrc) {
  inquiryThumb.src = imgSrc;

  /* Build a public URL for the image to include in the email.
     On S3/CloudFront this will be a real https:// URL.
     On local file:// it falls back to just the filename. */
  let imgUrl;
  const origin = window.location.origin;
  if (origin && origin !== 'null' && !origin.startsWith('file:')) {
    const imgPath = imgSrc.includes('/images/')
      ? imgSrc.substring(imgSrc.indexOf('/images/') + 1)
      : imgSrc;
    imgUrl = `${origin}/${imgPath}`;
  } else {
    imgUrl = imgSrc.split('/').pop();
  }

  const subject = encodeURIComponent('Inquiry from Starling Woodworking website');
  const body = encodeURIComponent(
    `Hi,\n\nI came across one of your pieces on your website and I'm interested in having something similar made:\n\n${imgUrl}\n\nPlease reach out at your convenience — I'd love to discuss the details.\n\nThank you!`
  );
  inquiryEmail.href = `mailto:info@starlingwoodworking.com?subject=${subject}&body=${body}`;

  inquiry.classList.add('active');
}

function closeInquiry() {
  inquiry.classList.remove('active');
}

inquiryClose.addEventListener('click', closeInquiry);
inquiry.addEventListener('click', e => { if (e.target === inquiry) closeInquiry(); });

/* --- Process strip: drag to scroll + progress + edge fade --- */
const strip            = document.getElementById('processStrip');
const progressFill     = document.getElementById('processProgressFill');
const edgeFade         = document.getElementById('processEdgeFade');

if (strip) {
  /* Drag-to-scroll */
  let isDown = false, startX, scrollLeft;
  strip.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - strip.offsetLeft; scrollLeft = strip.scrollLeft; });
  strip.addEventListener('mouseleave', () => { isDown = false; });
  strip.addEventListener('mouseup',    () => { isDown = false; });
  strip.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    strip.scrollLeft = scrollLeft - (e.pageX - strip.offsetLeft - startX);
  });

  /* Progress bar + edge fade on scroll */
  function updateProcessUI() {
    const max = strip.scrollWidth - strip.clientWidth;
    if (max <= 0) return;
    const pct = strip.scrollLeft / max;
    if (progressFill) progressFill.style.width = `${pct * 100}%`;
    if (edgeFade)     edgeFade.style.opacity   = pct >= 0.97 ? '0' : '1';
  }
  strip.addEventListener('scroll', updateProcessUI, { passive: true });
  updateProcessUI();

  /* One-time auto-nudge when section first enters viewport */
  const processSection = document.querySelector('.process');
  let nudged = false;
  const nudgeObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !nudged) {
      nudged = true;
      nudgeObserver.disconnect();
      setTimeout(() => {
        strip.scrollTo({ left: 160, behavior: 'smooth' });
        setTimeout(() => strip.scrollTo({ left: 0, behavior: 'smooth' }), 750);
      }, 500);
    }
  }, { threshold: 0.5 });
  if (processSection) nudgeObserver.observe(processSection);
}

/* --- Scroll reveal --- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
