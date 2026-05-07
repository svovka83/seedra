import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

export function closeModals() {
	const modalCart = document.getElementById("modal-cart");
	const modalFavorite = document.getElementById("modal-favorite");
	const inputHeaderSearch = document.getElementById("search-header-product");
	const modalHeaderSearch = document.getElementById("modal-header-search");
	const burgerBtn = document.getElementById("header__burger-menu");
	const burgerMenu = document.getElementById("burger-menu");
	const burgerBgBlur = document.getElementById("modal-blur");
	const open = burgerBtn.querySelector(".header__burger-menu-icon");
	const close = burgerBtn.querySelector(".header__burger-menu-icon-close");

	if (modalCart.classList.contains("modal-cart_open")) {
		modalCart.classList.remove("modal-cart_open");
	}
	if (modalFavorite.classList.contains("modal-favorite_open")) {
		modalFavorite.classList.remove("modal-favorite_open");
	}
	if (modalHeaderSearch.classList.contains("modal-header-search_open")) {
		inputHeaderSearch.value = "";
		modalHeaderSearch.classList.remove("modal-header-search_open");
		enablePageScroll();
	}
	if (burgerMenu.classList.contains("burger-menu_open")) {
		burgerMenu.classList.remove("burger-menu_open");
		burgerBgBlur.classList.remove("modal-blur_open");
		close.style.display = "none";
		open.style.display = "block";
		enablePageScroll();
	}
}
