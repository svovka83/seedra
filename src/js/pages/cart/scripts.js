if (document.querySelector(".cart-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getCart } = await import("./get-cart.js");
	const { removeFromCart } = await import("./remove-from-cart.js");
	const { itemsQuantity } = await import("./items-quantity.js");
	const { totalPrice } = await import("./total-price.js");
	const { addShipping } = await import("./add-shipping.js");
	const { promocode } = await import("./promocode.js");
	const { initDropdownList } = await import("../../common/dropdown.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	getCart(db);
	removeFromCart(db);
	itemsQuantity(db);
	totalPrice(db);
	addShipping(db);
	promocode(db);

	initDropdownList();

	await initGeneral(db);
}
