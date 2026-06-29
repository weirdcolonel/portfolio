// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
}

// Apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'dark' : 'light');
  });
}

// Scroll progress rail
const railFill = document.getElementById('railFill');
function updateRail() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (railFill) railFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateRail, { passive: true });
updateRail();

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}