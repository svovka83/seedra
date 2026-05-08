import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { getModalFavorite } from "../firebase/services/cart/get-modal-favorite";
import { closeModals } from "../utils/close-modals";

export function openModalFavorite(db) {
	const openBtn = document.getElementById("open-modal-favorite");
	const closeBtn = document.getElementById("close-modal-favorite");
	const modalFavorite = document.getElementById("modal-favorite");
	if (!openBtn) return;
	if (!closeBtn) return;
	if (!modalFavorite) return;

	openBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		if (!modalFavorite.classList.contains("modal-favorite_open")) {
			closeModals();
			modalFavorite.classList.add("modal-favorite_open");
			getModalFavorite(db);
		} else {
			modalFavorite.classList.remove("modal-favorite_open");
		}
	});

	closeBtn.addEventListener("click", () => {
		modalFavorite.classList.remove("modal-favorite_open");
	});

	document.addEventListener("click", (e) => {
		if (
			!modalFavorite.contains(e.target) &&
			!e.target.closest(
				".product-card__button, .product-card__yellow-heart, .one-product-top-content__bottom-heart"
			)
		) {
			modalFavorite.classList.remove("modal-favorite_open");
		}
	});

	window.addEventListener("resize", () => {
		if (modalFavorite.classList.contains("modal-favorite_open")) {
			modalFavorite.classList.remove("modal-favorite_open");
		}
	});
}
