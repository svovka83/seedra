if (document.querySelector(".payment-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getPayment } = await import("./get-payment.js");
	const { paymentValidation } = await import("./payment-validation");

	// genaral
	const { getBurgerMenuDropdowns } = await import("../../burger-menu/get-burger-menu-dropdowns.js");
	const { getModalHeaderProducts } = await import("../../firebase/services/modals/get-modal-header-search.js");
	const { getBurgerMenuSearchProducts } = await import("../../burger-menu/get-burger-menu-search-modal.js");
	const { burgerMenuSearchControl } = await import("../../burger-menu/burger-menu-search-control.js");
	const { addQuantity } = await import("../../firebase/services/cart/add-quantity.js");
	const { subtractQuantity } = await import("../../firebase/services/cart/subtract-quantity.js");
	const { getModalCart } = await import("../../firebase/services/cart/get-modal-cart.js");
	const { clearAllCart } = await import("../../firebase/services/cart/clear-all-cart.js");
	const { openModalCart } = await import("../../modals/open-modal-cart.js");

	const { db } = getFirebase();

	getPayment(db);

	paymentValidation();

	// genaral
	getBurgerMenuDropdowns(db);
	getModalHeaderProducts(db);
	getBurgerMenuSearchProducts(db);
	burgerMenuSearchControl(db);
	addQuantity(db);
	subtractQuantity(db);
	getModalCart(db);
	clearAllCart(db);
	openModalCart(db);
}
