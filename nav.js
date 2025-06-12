document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.nav-toggle');
  const list   = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => list.classList.toggle('show-nav'));
  }

  // Highlight the active nav link
  const links = document.querySelectorAll('.nav-list a');
  const path  = window.location.pathname;

  links.forEach(link => {
    // Match full path or root (`/`) for home
    if (link.getAttribute('href') === path || (path === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
});
