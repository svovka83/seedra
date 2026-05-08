if (document.querySelector(".main-body-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getAddTopButton } = await import("./get-add-top-button.js");
	const { getCategories } = await import("../../firebase/services/get-categories.js");
	const { getProductStaticCards, getProductSliderCards } = await import(
		"../../firebase/services/get-products-main.js"
	);
	const { getBlogStaticCards, getBlogSliderCards } = await import("./get-blogs-main.js");
	const { getReviewCards } = await import("./get-reviews.js");
	const { addProductFromTop } = await import("./add-product-from-top.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { addRemoveFavorite } = await import("../../firebase/services/cart/add-remove-favorite.js");
	const { productSlider } = await import("../../sliders/product-slider.js");
	const { blogSlider } = await import("../../sliders/blog-slider.js");
	const { reviewSlider } = await import("../../sliders/review-slider.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	getAddTopButton(db);
	getCategories(db);
	getProductStaticCards(db);
	getProductSliderCards(db);
	getBlogStaticCards(db);
	getBlogSliderCards(db);
	getReviewCards(db);

	addProductFromTop(db);
	addRemoveProduct(db);
	addRemoveFavorite(db);

	productSlider();
	blogSlider();
	reviewSlider();

	await initGeneral(db);
}
