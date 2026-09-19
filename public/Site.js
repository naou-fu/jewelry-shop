const filterMenu = document.querySelector('#filter-menu');
const filterButton = document.querySelector('#filter-button');

if (filterMenu && !filterMenu.querySelector('fieldset')) {
  filterMenu.innerHTML = `<fieldset><legend>Jewelry</legend><label><input type="checkbox" value="Necklaces"> Necklaces</label><label><input type="checkbox" value="Earrings"> Earrings</label><label><input type="checkbox" value="Rings"> Rings</label><label><input type="checkbox" value="Bracelets"> Bracelets</label><label><input type="checkbox" value="Anklets"> Anklets</label><label><input type="checkbox" value="Brooches"> Brooches</label></fieldset><fieldset><legend>Material</legend><label><input type="checkbox" value="Gold"> Gold</label><label><input type="checkbox" value="Platinum"> Platinum</label><label><input type="checkbox" value="Diamond"> Diamond</label><label><input type="checkbox" value="Emerald"> Emerald</label><label><input type="checkbox" value="Pearl"> Pearl</label><label><input type="checkbox" value="Silver"> Silver</label></fieldset>`;
  filterButton?.addEventListener('click', () => {
    const isOpen = filterButton.getAttribute('aria-expanded') === 'true';
    filterButton.setAttribute('aria-expanded', String(!isOpen));
    filterMenu.hidden = isOpen;
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-wrap')) {
      filterButton?.setAttribute('aria-expanded', 'false');
      filterMenu.hidden = true;
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      filterButton?.setAttribute('aria-expanded', 'false');
      filterMenu.hidden = true;
    }
  });
}

const revealItems = document.querySelectorAll('.reveal-on-scroll');
if (revealItems.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
}

const authWheel = document.querySelector('.auth-wheel');
const authInputs = document.querySelectorAll('.auth-card input');
const authButton = document.querySelector('.auth-card .solid-button');

if (authWheel) {
  const setReactive = () => {
    authWheel.classList.add('is-reactive');
    window.clearTimeout(authWheel.reactiveTimer);
    authWheel.reactiveTimer = window.setTimeout(() => authWheel.classList.remove('is-reactive'), 900);
  };

  authInputs.forEach((input) => {
    input.addEventListener('focus', setReactive);
    input.addEventListener('input', setReactive);
  });
  authButton?.addEventListener('mouseenter', setReactive);
  authButton?.addEventListener('focus', setReactive);
}
