/**
 * Saurav Bhandary - Portfolio Script
 */

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

function toggleMenu(forceOpen) {
  const isCurrentlyOpen = menuButton.getAttribute('aria-expanded') === 'true';
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isCurrentlyOpen;

  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  navigation.classList.toggle('is-open', shouldOpen);

  // Prevent scroll when mobile drawer is open
  if (window.innerWidth <= 720) {
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }
}

// Toggle drawer
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close when clicking any nav link
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu(false);
  });
});

// Close on escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navigation.classList.contains('is-open')) {
    toggleMenu(false);
  }
});

// Close when clicking outside of the open nav
document.addEventListener('click', (e) => {
  if (
    navigation.classList.contains('is-open') &&
    !navigation.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    toggleMenu(false);
  }
});

// Set current copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback for older browsers
  revealElements.forEach((el) => el.classList.add('is-visible'));
}