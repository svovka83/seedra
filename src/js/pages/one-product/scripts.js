if (document.querySelector(".one-product-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getProductImage } = await import("./top-elements/get-product-img.js");
	const { getProductTitle } = await import("./top-elements/get-product-title.js");
	const { getProductCategory } = await import("./top-elements/get-product-category.js");
	const { getProductQuantity } = await import("./top-elements/get-product-quantity.js");
	const { initCounterBlock } = await import("./top-elements/counter-block.js");
	const { getProductPacks } = await import("./top-elements/get-one-product-packs.js");
	const { getAddButton } = await import("./top-elements/get-add-button.js");
	const { getAddFavorite } = await import("./top-elements/get-add-favorite.js");
	const { checkedPack } = await import("./top-elements/checked-pack.js");
	const { addOneToCart } = await import("./top-elements/add-one-to-cart.js");
	const { addOneToFavorite } = await import("./top-elements/add-one-to-favorite.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { addRemoveFavorite } = await import("../../firebase/services/cart/add-remove-favorite.js");
	const { productSlider } = await import("../../sliders/product-slider.js");

	const { getProductSliderCards, getProductStaticCardsOnePage } = await import(
		"../../firebase/services/get-products-main.js"
	);

	const { oneProductDropdown } = await import("./one-product-dropdown");

	// genaral
	const { getBurgerMenuDropdowns } = await import("../../burger-menu/get-burger-menu-dropdowns.js");
	const { getModalHeaderProducts } = await import("../../firebase/services/modals/get-modal-header-search.js");
	const { getBurgerMenuSearchProducts } = await import("../../burger-menu/get-burger-menu-search-modal.js");
	const { burgerMenuSearchControl } = await import("../../burger-menu/burger-menu-search-control.js");
	const { addQuantity } = await import("../../firebase/services/cart/add-quantity.js");
	const { subtractQuantity } = await import("../../firebase/services/cart/subtract-quantity.js");
	const { clearAllCart } = await import("../../firebase/services/cart/clear-all-cart.js");
	const { removeOneFavorite } = await import("../../firebase/services/cart/remove-one-favorite.js");
	const { clearAllFavorite } = await import("../../firebase/services/cart/clear-all-favorite.js");
	const { openModalCart } = await import("../../modals/open-modal-cart.js");
	const { openModalFavorite } = await import("../../modals/open-modal-favorite.js");

	const { getModalCart } = await import("../../firebase/services/cart/get-modal-cart.js");
	const { getModalFavorite } = await import("../../firebase/services/cart/get-modal-favorite.js");

	const { db } = getFirebase();

	getProductImage(db);
	getProductTitle(db);
	getProductCategory(db);
	getProductQuantity(db);
	initCounterBlock(db);
	getProductPacks(db);
	getAddButton(db);
	getAddFavorite(db);
	checkedPack(db);
	addOneToCart(db);
	addOneToFavorite(db);

	getProductStaticCardsOnePage(db);
	getProductSliderCards(db);

	addRemoveProduct(db);
	addRemoveFavorite(db);

	productSlider();

	oneProductDropdown();

	// genaral
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
