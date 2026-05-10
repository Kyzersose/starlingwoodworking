/* =============================================
   STARLING WOODWORKING — script.js
   ============================================= */

/* --- All images per style, used for hover cycling and lightbox --- */
const styleImages = {
  farmhouse: [
    'images/FarmhouseStyle/20260212_172822.webp',
    'images/FarmhouseStyle/20260212_172838.webp',
    'images/FarmhouseStyle/20260212_173411.webp',
    'images/FarmhouseStyle/20260324_180454.webp',
    'images/FarmhouseStyle/IMG_20250914_191633046.webp',
    'images/MiscBuilds/FarmhouseTallDeluxeWhite.webp',
  ],
  classic: [
    'images/ClassicStyle/20220917_084303.webp',
    'images/ClassicStyle/20220917_084435.webp',
    'images/ClassicStyle/20220917_085036.webp',
    'images/ClassicStyle/20221105_092737.webp',
    'images/ClassicStyle/20211206_141421.webp',
    'images/ClassicStyle/20220528_113828.webp',
    'images/ClassicStyle/20220929_210701.webp',
    'images/ClassicStyle/4DClassicWhiteDark2.webp',
    'images/ClassicStyle/IMG_20260328_103839944_HDR.webp',
    'images/ClassicStyle/IMG_20260328_104346214.webp',
    'images/ClassicStyle/20260207_151035.webp',
  ],
  craftsman: [
    'images/CraftsmanStyle/IMG_20260420_072607.webp',
    'images/CraftsmanStyle/IMG_20260420_072609.webp',
    'images/CraftsmanStyle/IMG_20260420_072611.webp',
    'images/CraftsmanStyle/IMG_20260420_072615.webp',
    'images/CraftsmanStyle/IMG_20260420_072617.webp',
  ],
  decor: [
    'images/HomeDecor/20210326_170629.webp',
    'images/HomeDecor/20210326_170648.webp',
    'images/HomeDecor/20210326_170652.webp',
    'images/HomeDecor/20210326_170735.webp',
    'images/HomeDecor/20200428_142454.webp',
    'images/HomeDecor/20200428_142556.webp',
    'images/HomeDecor/20220111_155042.webp',
    'images/HomeDecor/20220111_155129.webp',
    'images/HomeDecor/20220207_130825.webp',
    'images/HomeDecor/20220328_151630.webp',
    'images/HomeDecor/20220401_105904.webp',
    'images/MiscBuilds/20220729_133621b.webp',
    'images/MiscBuilds/20230406_193825b.webp',
    'images/MiscBuilds/20230414_122848.webp',
    'images/MiscBuilds/20250215_205626.webp',
    'images/diningtable.webp',
  ],
};

const styleLabels = {
  farmhouse: 'Farmhouse',
  classic:   'Classic',
  craftsman: 'Craftsman',
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
