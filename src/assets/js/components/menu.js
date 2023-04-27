export default function clickMenu() {
	const menu = document.querySelector('.header__menu');

	function menuClickHandler() {
		menu.classList.toggle('header__menu_active');
	}

	menu.addEventListener('click', menuClickHandler);

	if (module.hot) {
		module.hot.dispose(() => {
			menu.removeEventListener('click', menuClickHandler);
		});
	}
}
