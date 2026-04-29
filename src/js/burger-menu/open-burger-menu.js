import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

export function openBurgerMenu() {
	const burgerBtn = document.getElementById("header__burger-menu");
	const burgerMenu = document.getElementById("burger-menu");
	const burgerBgBlur = document.getElementById("modal-blur");
	const open = burgerBtn.querySelector(".header__burger-menu-icon");
	const close = burgerBtn.querySelector(".header__burger-menu-icon-close");
	if (!burgerBtn) return;
	if (!burgerMenu) return;
	if (!burgerBgBlur) return;

	burgerBtn.addEventListener("click", () => {
		if (!burgerBgBlur.classList.contains("modal-blur_open")) {
			burgerBgBlur.classList.add("modal-blur_open");
		} else {
			burgerBgBlur.classList.remove("modal-blur_open");
		}

		if (!burgerMenu.classList.contains("burger-menu_open")) {
			burgerMenu.classList.add("burger-menu_open");
			open.style.display = "none";
			close.style.display = "block";
			disablePageScroll();
		} else {
			burgerMenu.classList.remove("burger-menu_open");
			close.style.display = "none";
			open.style.display = "block";
			enablePageScroll();
		}
	});

	window.addEventListener("resize", () => {
		if (burgerBgBlur.classList.contains("modal-blur_open")) {
			burgerBgBlur.classList.remove("modal-blur_open");
		}
		if (burgerMenu.classList.contains("burger-menu_open")) {
			burgerMenu.classList.remove("burger-menu_open");
			close.style.display = "none";
			open.style.display = "block";
			enablePageScroll();
		}
	});
}
