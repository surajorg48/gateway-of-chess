/**
 * GatewayOfChess — Main Client Script
 * Handles navigation, accessible mobile drawer, hero carousel, tabs, filters, and form interactions.
 */

function initAll() {
  initStickyHeader();
  initMobileNav();
  initHeroCarousel();
  initEventFilters();
  initLoginTabs();
  initDemoForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* --------------------------------------------------
   1. STICKY HEADER SCROLL EFFECT
-------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------
   2. ACCESSIBLE MOBILE NAVIGATION DRAWER
-------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------
   3. HOMEPAGE 3-BANNER HERO CAROUSEL
-------------------------------------------------- */
function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel-section');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');
  const dots = carousel.querySelectorAll('.carousel-dots .dot');

  if (slides.length <= 1) return;

  let currentIndex = 0;
  let timer = null;
  const slideInterval = 7500;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      const isActive = i === index;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', !isActive);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    currentIndex = index;
  }

  function startTimer() {
    if (prefersReducedMotion) return;
    stopTimer();
    timer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, slideInterval);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
      startTimer();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startTimer();
    });
  });

  // Pause on hover or focus
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', startTimer);

  // Keyboard navigation
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showSlide(currentIndex - 1);
      startTimer();
    } else if (e.key === 'ArrowRight') {
      showSlide(currentIndex + 1);
      startTimer();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        showSlide(currentIndex - 1);
      } else {
        showSlide(currentIndex + 1);
      }
      startTimer();
    }
  }

  // Initial activation
  showSlide(0);
  startTimer();
}

/* --------------------------------------------------
   4. EVENTS FILTERING INTERACTION
-------------------------------------------------- */
function initEventFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-item-card');

  if (!filterBtns.length || !eventCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      eventCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------
   5. LOGIN ROLE TABS
-------------------------------------------------- */
function initLoginTabs() {
  const tabs = document.querySelectorAll('.role-tab-btn');
  const roleTitle = document.querySelector('.login-role-heading');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const role = tab.getAttribute('data-role');
      if (roleTitle) {
        if (role === 'admin') roleTitle.textContent = 'Academy Portal Login';
        else if (role === 'coach') roleTitle.textContent = 'Coach Workspace Login';
        else if (role === 'student') roleTitle.textContent = 'Learner & Parent Login';
      }
    });
  });
}

/* --------------------------------------------------
   6. BOOK A DEMO FORM VALIDATION
-------------------------------------------------- */
function initDemoForm() {
  const form = document.querySelector('#demoBookingForm');
  const successBox = document.querySelector('#formSuccessMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#fullName');
    const email = form.querySelector('#workEmail');
    const phone = form.querySelector('#phone');
    const academy = form.querySelector('#academyName');

    let isValid = true;

    [name, email, phone, academy].forEach(field => {
      if (field && !field.value.trim()) {
        field.style.borderColor = '#DC2626';
        isValid = false;
      } else if (field) {
        field.style.borderColor = 'var(--border-light)';
      }
    });

    if (!isValid) return;

    // Simulate clean submission state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting Request...';

    setTimeout(() => {
      form.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
      }
    }, 800);
  });
}
