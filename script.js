const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navLinks');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Typewriter role rotator: types one role, pauses, clears, then shows the next.
const roleElement = document.querySelector('#rotatingRole');
if (roleElement) {
  const roles = [
    'Software Developer',
    'AI Enthusiast',
    'Python Developer',
    'Machine Learning Enthusiast',
    'Full-Stack Developer'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {
    const current = roles[roleIndex];
    roleElement.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeRole, 95);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeRole, 1450);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typeRole, 42);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 280);
    }
  }
  typeRole();
}
