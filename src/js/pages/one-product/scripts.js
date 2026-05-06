if (document.querySelector(".one-product-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getProductImage } = await import("./top-elements/get-product-img.js");
	const { getProductTitle } = await import("./top-elements/get-product-title.js");
	const { getProductCategory } = await import("./top-elements/get-product-category.js");
	const { getProductQuantity } = await import("./top-elements/get-product-quantity.js");
	const { initCounterBlock } = await import("./top-elements/counter-block.js");
	const { getProductPacks } = await import("./top-elements/get-one-product-packs.js");
	const { checkedPack } = await import("./top-elements/checked-pack.js");
	const { addOneToCart } = await import("./top-elements/add-one-to-cart.js");

	const { getProductStaticCardsOnePage } = await import("../../firebase/services/get-products-main.js");

	const { oneProductDropdown } = await import("./one-product-dropdown");

	const { db } = getFirebase();

	getProductImage(db);
	getProductTitle(db);
	getProductCategory(db);
	getProductQuantity(db);
	initCounterBlock(db);
	getProductPacks(db);
	checkedPack(db);
	addOneToCart(db);

	getProductStaticCardsOnePage(db);

	oneProductDropdown();
}
