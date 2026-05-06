if (document.querySelector(".main-body-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getCategories } = await import("../../firebase/services/get-categories.js");
	const { getProductStaticCards, getProductSliderCards } = await import(
		"../../firebase/services/get-products-main.js"
	);
	const { getBlogStaticCards, getBlogSliderCards } = await import("./get-blogs-main.js");
	const { getReviewCards } = await import("./get-reviews.js");
	const { addProductFromTop } = await import("./add-product-from-top.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { productSlider } = await import("../../sliders/product-slider.js");
	const { blogSlider } = await import("../../sliders/blog-slider.js");
	const { reviewSlider } = await import("../../sliders/review-slider.js");

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

	getCategories(db);
	getProductStaticCards(db);
	getProductSliderCards(db);
	getBlogStaticCards(db);
	getBlogSliderCards(db);
	getReviewCards(db);

	addProductFromTop(db);
	addRemoveProduct(db);

	productSlider();
	blogSlider();
	reviewSlider();

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
