export function openModalCart() {
	const openBtn = document.getElementById("open-modal-cart");
	const closeBtn = document.getElementById("close-modal-cart");
	const modalCart = document.getElementById("modal-cart");
	if (!openBtn) return;
	if (!modalCart) return;

	openBtn.addEventListener("click", () => {
		if (!modalCart.classList.contains("modal-cart_open")) {
			modalCart.classList.add("modal-cart_open");
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
