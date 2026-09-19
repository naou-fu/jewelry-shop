const filterButton = document.querySelector('#filter-button');
const filterMenu = document.querySelector('#filter-menu');

filterButton?.addEventListener('click', () => {
	const isOpen = filterButton.getAttribute('aria-expanded') === 'true';
	filterButton.setAttribute('aria-expanded', String(!isOpen));
	filterMenu.hidden = isOpen;
});

document.addEventListener('click', (event) => {
	if (!event.target.closest('.filter-wrap')) {
		filterButton?.setAttribute('aria-expanded', 'false');
		if (filterMenu) filterMenu.hidden = true;
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		filterButton?.setAttribute('aria-expanded', 'false');
		if (filterMenu) filterMenu.hidden = true;
	}
});
