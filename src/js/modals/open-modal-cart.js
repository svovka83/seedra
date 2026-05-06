import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { getModalCart } from "../firebase/services/cart/get-modal-cart";

export function openModalCart(db) {
	const openBtn = document.getElementById("open-modal-cart");
	const closeBtn = document.getElementById("close-modal-cart");
	const modalCart = document.getElementById("modal-cart");
	if (!openBtn) return;
	if (!closeBtn) return;
	if (!modalCart) return;

	// close burger menu inputs start
	const burgerMenu = document.getElementById("burger-menu");
	const burgerBtn = document.getElementById("header__burger-menu");
	const burgerBgBlur = document.getElementById("modal-blur");
	if (!burgerMenu) return;
	if (!burgerBtn) return;
	if (!burgerBgBlur) return;

	const open = burgerBtn.querySelector(".header__burger-menu-icon");
	const close = burgerBtn.querySelector(".header__burger-menu-icon-close");
	// close burger menu inputs end

	openBtn.addEventListener("click", () => {
		// close burger menu
		if (burgerMenu.classList.contains("burger-menu_open") && !modalCart.classList.contains("modal-cart_open")) {
			burgerBgBlur.classList.remove("modal-blur_open");
			burgerMenu.classList.remove("burger-menu_open");
			close.style.display = "none";
			open.style.display = "block";
			enablePageScroll();
			modalCart.classList.add("modal-cart_open");
			getModalCart(db);
		} else if (
			burgerMenu.classList.contains("burger-menu_open") &&
			modalCart.classList.contains("modal-cart_open")
		) {
			burgerBgBlur.classList.remove("modal-blur_open");
			burgerMenu.classList.remove("burger-menu_open");
			close.style.display = "none";
			open.style.display = "block";
			enablePageScroll();
		} else if (!modalCart.classList.contains("modal-cart_open")) {
			modalCart.classList.add("modal-cart_open");
			getModalCart(db);
		} else {
			modalCart.classList.remove("modal-cart_open");
		}
	});

	closeBtn.addEventListener("click", () => {
		modalCart.classList.remove("modal-cart_open");
	});

	window.addEventListener("resize", () => {
		if (modalCart.classList.contains("modal-cart_open")) {
			modalCart.classList.remove("modal-cart_open");
		}
	});
}
