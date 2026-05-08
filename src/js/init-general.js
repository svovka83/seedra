export async function initGeneral(db) {
	const { getBurgerMenuDropdowns } = await import("./burger-menu/get-burger-menu-dropdowns.js");
	const { getModalHeaderProducts } = await import("./firebase/services/modals/get-modal-header-search.js");
	const { getBurgerMenuSearchProducts } = await import("./burger-menu/get-burger-menu-search-modal.js");
	const { burgerMenuSearchControl } = await import("./burger-menu/burger-menu-search-control.js");
	const { addQuantity } = await import("./firebase/services/cart/add-quantity.js");
	const { subtractQuantity } = await import("./firebase/services/cart/subtract-quantity.js");
	const { clearAllCart } = await import("./firebase/services/cart/clear-all-cart.js");
	const { removeOneFavorite } = await import("./firebase/services/cart/remove-one-favorite.js");
	const { clearAllFavorite } = await import("./firebase/services/cart/clear-all-favorite.js");
	const { openModalCart } = await import("./modals/open-modal-cart.js");
	const { openModalFavorite } = await import("./modals/open-modal-favorite.js");
	const { getModalCart } = await import("./firebase/services/cart/get-modal-cart.js");
	const { getModalFavorite } = await import("./firebase/services/cart/get-modal-favorite.js");

	getBurgerMenuDropdowns(db);
	getModalHeaderProducts(db);
	getBurgerMenuSearchProducts(db);
	burgerMenuSearchControl(db);
	addQuantity(db);
	subtractQuantity(db);
	clearAllCart(db);
	removeOneFavorite(db);
	clearAllFavorite(db);
	openModalCart(db);
	openModalFavorite(db);
	getModalCart(db);
	getModalFavorite(db);
}
