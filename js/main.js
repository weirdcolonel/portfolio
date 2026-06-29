// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme){
  if(theme === 'dark'){
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
}

if(themeToggle){
  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });
}

// Scroll progress rail
const railFill = document.getElementById('railFill');
function updateRail(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if(railFill) railFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateRail, { passive:true });
updateRail();

// Reveal entries + strip items on scroll
const revealTargets = document.querySelectorAll('.entry, .strip-item, .stack-col, .about-grid, .fact');
revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));

// Respect reduced motion preference
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  revealTargets.forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
