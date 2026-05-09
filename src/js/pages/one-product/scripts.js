if (document.querySelector(".one-product-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getProductImage } = await import("./top-elements/get-product-img.js");
	const { getProductTitle } = await import("./top-elements/get-product-title.js");
	const { getProductCategory } = await import("./top-elements/get-product-category.js");
	const { getProductQuantity } = await import("./top-elements/get-product-quantity.js");
	const { initCounterBlock } = await import("./top-elements/counter-block.js");
	const { getProductPacks } = await import("./top-elements/get-product-packs.js");
	const { getAddButton } = await import("./top-elements/get-add-button.js");
	const { getAddFavorite } = await import("./top-elements/get-add-favorite.js");
	const { checkedPackByRadio } = await import("./top-elements/checked-pack-by-radio.js");
	const { addOneToCart } = await import("./top-elements/add-one-to-cart.js");
	const { addOneToFavorite } = await import("./top-elements/add-one-to-favorite.js");
	const { getDiscountBlock } = await import("./top-elements/get-discount-block.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { addRemoveFavorite } = await import("../../firebase/services/cart/add-remove-favorite.js");
	const { productSlider } = await import("../../sliders/product-slider.js");
	const { getProductSliderCards, getProductStaticCardsOnePage } = await import(
		"../../firebase/services/get-products-main.js"
	);
	const { initGeneral } = await import("../../init-general.js");

	const { oneProductDropdown } = await import("./one-product-dropdown");

	const { db } = getFirebase();

	getProductImage(db);
	getProductTitle(db);
	getProductCategory(db);
	getProductQuantity(db);
	initCounterBlock(db);
	getProductPacks(db);
	getAddButton(db);
	getAddFavorite(db);
	checkedPackByRadio(db);
	addOneToCart(db);
	addOneToFavorite(db);
	getDiscountBlock(db);

	getProductStaticCardsOnePage(db);
	getProductSliderCards(db);

	addRemoveProduct(db);
	addRemoveFavorite(db);

	productSlider();

	oneProductDropdown();

	await initGeneral(db);
}
