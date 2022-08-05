import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function () {
	const burger = document?.querySelector('[data-burger]');
	const menu = document?.querySelector('[data-menu]');
	const menuItems = document?.querySelectorAll('[data-menu-item]');
	const overlay = document?.querySelector('[data-menu-overlay]');

	burger?.addEventListener('click', (e) => {
		burger?.classList.toggle('burger--active');
		menu?.classList.toggle('menu--active');

		if (menu?.classList.contains('menu--active')) {
			burger?.setAttribute('aria-expanded', 'true');
			burger?.setAttribute('aria-label', 'Close menu');
			disableScroll();
		} else {
			burger?.setAttribute('aria-expanded', 'false');
			burger?.setAttribute('aria-label', 'Open menu');
			enableScroll();
		}
	});

	overlay?.addEventListener('click', () => {
		burger?.setAttribute('aria-expanded', 'false');
		burger?.setAttribute('aria-label', 'Open menu');
		burger.classList.remove('burger--active');
		menu.classList.remove('menu--active');
		enableScroll();
	});

	menuItems?.forEach(el => {
		el.addEventListener('click', () => {
			burger?.setAttribute('aria-expanded', 'false');
			burger?.setAttribute('aria-label', 'Open menu');
			burger.classList.remove('burger--active');
			menu.classList.remove('menu--active');
			enableScroll();
		});
	});
})();
