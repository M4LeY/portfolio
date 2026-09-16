document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.bar nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const dot = document.getElementById('cursorDot');
if (dot && matchMedia('(hover: hover)').matches) {
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, .row').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('grow'));
    el.addEventListener('mouseleave', () => dot.classList.remove('grow'));
  });
}
