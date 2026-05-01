import { getModalCart } from "../firebase/services/cart/get-modal-cart";

export function openModalCart(db) {
	const openBtn = document.getElementById("open-modal-cart");
	const closeBtn = document.getElementById("close-modal-cart");
	const modalCart = document.getElementById("modal-cart");
	if (!openBtn) return;
	if (!closeBtn) return;
	if (!modalCart) return;

	openBtn.addEventListener("click", () => {
		if (!modalCart.classList.contains("modal-cart_open")) {
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
