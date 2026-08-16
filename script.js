/* =============================================
   STARLING WOODWORKING — script.js
   ============================================= */

/* --- All images per style, used for the lightbox gallery --- */
/* To add images to the lightbox but NOT the hover slideshow, add them here only */
const styleImages = {
  franklin: [
    'images/Franklin/1. 7-Drawer Dresser.webp',
    'images/Franklin/2. 5-Drawer Chest of Drawers.webp',
    'images/Franklin/3. Dovetail Drawers.webp',
    'images/Franklin/4. 3-Drawer Chest of Drawers.webp',
    'images/Franklin/5. 3-Drawer Bedside Tables.webp',
    'images/Franklin/6. 1-Door Bedside Tables.webp',
    'images/Franklin/7. Twin Bed.webp',
  ],
  farmhouse: [
    'images/Farmhouse/01-Bathroom Cabinet.webp',
    'images/Farmhouse/02-Dovetail Drawers.webp',
    'images/Farmhouse/03-Drawer Bedside Table.webp',
    'images/Farmhouse/04-Drawer Bedside Tables.webp',
    'images/Farmhouse/05-Bedside Table Dovetail Drawers.webp',
    'images/Farmhouse/06-3-Drawer Chest.webp',
    'images/Farmhouse/07- 3-Drawer Dovetail Drawers.webp',
    'images/Farmhouse/08-5-Drawer Chest.webp',
    'images/Farmhouse/09-Grey Coffee Bar.webp',
    'images/Farmhouse/10-White Coffee Bar.webp',
  ],
  classic: [
    'images/Classic/CL1-priced.webp',
    'images/Classic/CL2.webp',
    'images/Classic/CL3.webp',
    'images/Classic/CL4.webp',
    'images/Classic/CL5.webp',
    'images/Classic/CL6.webp',
    'images/Classic/CL7.webp',
    'images/Classic/CL8.webp',
    'images/Classic/CL9.webp',
    'images/Classic/CL10.webp',
    'images/Classic/CL11.webp',
    'images/Classic/CL12.webp',
    'images/Classic/CL13.webp',
    'images/Classic/CL14.webp',
    'images/Classic/CL15.webp',
    'images/Classic/CL16.webp',
    'images/Classic/CL17.webp',
    'images/Classic/CL18.webp',
    'images/Classic/CL19.webp',
    'images/Classic/CL20.webp',
  ],
  waverly: [
    'images/Waverly/lightbox/01-Walnut Wavery Set-priced.jpg',
    'images/Waverly/lightbox/02-Walnut 3-Drawer Bedside Table-priced.jpg',
    'images/Waverly/lightbox/03-Walnut 5-Drawer-priced.jpg',
    'images/Waverly/lightbox/04-Knapp-Joint Drawers.jpg',
    'images/Waverly/lightbox/05-Waverly back view.jpg',
    'images/Waverly/lightbox/06-Finished back.jpg',
    'images/Waverly/lightbox/07-Cherry 7-Drawer Dresser-priced.jpg',
    'images/Waverly/lightbox/08-Cherry Set.jpg',
    'images/Waverly/lightbox/09-Cherry Bedside Table-priced.jpg',
    'images/Waverly/lightbox/11-Cherry Knapp-Joints.jpg',
    'images/Waverly/lightbox/12-Knapp-Joint Drawers Dresser.jpg',
    'images/Waverly/lightbox/13-Walnut-Framed Mirror.jpg',
    'images/Waverly/lightbox/14-Waverly Bedside Table Inside.jpg',
    'images/Waverly/lightbox/15-Wooden Hinges.jpg',
  ],
  custom: [
    'images/Custom/CST1.webp',
    'images/Custom/CST2.webp',
    'images/Custom/CST3.webp',
    'images/Custom/CST4.webp',
    'images/Custom/CST5.webp',
    'images/Custom/CST6.webp',
    'images/Custom/CST7.webp',
    'images/Custom/CST8.webp',
    'images/Custom/CST9.webp',
    'images/Custom/CST10.webp',
    'images/Custom/CST11.webp',
    'images/Custom/CST12.webp',
    'images/Custom/CST13.webp',
    'images/Custom/CST14.webp',
    'images/Custom/CST15.webp',
    'images/Custom/CST16.webp',
    'images/Custom/CSt17.webp',
    'images/Custom/CST18.webp',
    'images/Custom/CST19.webp',
    'images/Custom/CST20.webp',
    'images/Custom/WardBuffet.webp',
  ],
  decor: [
    'images/Home Decor/HD1.webp',
    'images/Home Decor/HD2.webp',
    'images/Home Decor/HD3.webp',
    'images/Home Decor/HD4.webp',
    'images/Home Decor/HD5.webp',
    'images/Home Decor/HD6.webp',
    'images/Home Decor/HD7.webp',
    'images/Home Decor/HD8.webp',
    'images/Home Decor/HD9.webp',
    'images/Home Decor/HD10.webp',
    'images/Home Decor/HD11.webp',
    'images/Home Decor/HD12.webp',
    'images/Home Decor/HD13.webp',
    'images/Home Decor/HD14.webp',
    'images/Home Decor/HD15.webp',
    'images/Home Decor/HD16.webp',
    'images/Home Decor/HD17.webp',
    'images/Home Decor/HD18.webp',
    'images/Home Decor/HD19.webp',
  ],
};

/* --- Subset of images shown in the on-hover slideshow on the homepage --- */
/* Add new photos to styleImages above for the lightbox; only list here if you want them in the slideshow too */
const slideshowImages = {
  franklin: [
    'images/Franklin/1. 7-Drawer Dresser.webp',
    'images/Franklin/2. 5-Drawer Chest of Drawers.webp',
    'images/Franklin/3. Dovetail Drawers.webp',
    'images/Franklin/4. 3-Drawer Chest of Drawers.webp',
    'images/Franklin/5. 3-Drawer Bedside Tables.webp',
    'images/Franklin/6. 1-Door Bedside Tables.webp',
    'images/Franklin/7. Twin Bed.webp',
  ],
  farmhouse: [
    'images/Farmhouse/01-Bathroom Cabinet.webp',
    'images/Farmhouse/02-Dovetail Drawers.webp',
    'images/Farmhouse/05-Bedside Table Dovetail Drawers.webp',
    'images/Farmhouse/07- 3-Drawer Dovetail Drawers.webp',
  ],
  classic: [
    'images/Classic/CL1.webp',
    'images/Classic/CL2.webp',
    'images/Classic/CL3.webp',
    'images/Classic/CL4.webp',
    'images/Classic/CL5.webp',
    'images/Classic/CL6.webp',
    'images/Classic/CL7.webp',
    'images/Classic/CL8.webp',
    'images/Classic/CL9.webp',
    'images/Classic/CL10.webp',
    'images/Classic/CL11.webp',
    'images/Classic/CL12.webp',
    'images/Classic/CL13.webp',
    'images/Classic/CL14.webp',
    'images/Classic/CL15.webp',
    'images/Classic/CL16.webp',
    'images/Classic/CL17.webp',
    'images/Classic/CL18.webp',
    'images/Classic/CL19.webp',
    'images/Classic/CL20.webp',
  ],
  waverly: [
    'images/Waverly/W1.webp',
    'images/Waverly/W2.webp',
    'images/Waverly/W3.webp',
    'images/Waverly/W4.webp',
    'images/Waverly/W5.webp',
    'images/Waverly/W6.webp',
    'images/Waverly/W7.webp',
    'images/Waverly/W8.webp',
    'images/Waverly/W9.webp',
    'images/Waverly/W10.webp',
    'images/Waverly/W11.webp',
    'images/Waverly/W12.webp',
    'images/Waverly/W13.webp',
    'images/Waverly/W14.webp',
    'images/Waverly/W15.webp',
    'images/Waverly/W16.webp',
    'images/Waverly/W17.webp',
    'images/Waverly/W18.webp',
  ],
  custom: [
    'images/Custom/CST1.webp',
    'images/Custom/CST2.webp',
    'images/Custom/CST3.webp',
    'images/Custom/CST4.webp',
    'images/Custom/CST5.webp',
    'images/Custom/CST6.webp',
    'images/Custom/CST7.webp',
    'images/Custom/CST8.webp',
    'images/Custom/CST9.webp',
    'images/Custom/CST10.webp',
    'images/Custom/CST11.webp',
    'images/Custom/CST12.webp',
    'images/Custom/CST13.webp',
    'images/Custom/CST14.webp',
    'images/Custom/CST15.webp',
    'images/Custom/CST16.webp',
    'images/Custom/CSt17.webp',
    'images/Custom/CST18.webp',
    'images/Custom/CST19.webp',
    'images/Custom/CST20.webp',
    'images/Custom/WardBuffet.webp',
  ],
  decor: [
    'images/Home Decor/HD1.webp',
    'images/Home Decor/HD2.webp',
    'images/Home Decor/HD3.webp',
    'images/Home Decor/HD4.webp',
    'images/Home Decor/HD5.webp',
    'images/Home Decor/HD6.webp',
    'images/Home Decor/HD7.webp',
    'images/Home Decor/HD8.webp',
    'images/Home Decor/HD9.webp',
    'images/Home Decor/HD10.webp',
    'images/Home Decor/HD11.webp',
    'images/Home Decor/HD12.webp',
    'images/Home Decor/HD13.webp',
    'images/Home Decor/HD14.webp',
    'images/Home Decor/HD15.webp',
    'images/Home Decor/HD16.webp',
    'images/Home Decor/HD17.webp',
    'images/Home Decor/HD18.webp',
    'images/Home Decor/HD19.webp',
  ],
};

const styleLabels = {
  franklin:  'Franklin',
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
  const images = slideshowImages[style];
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
