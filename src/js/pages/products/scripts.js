if (document.querySelector(".products-page")) {
	const { getFirebase } = await import("../../firebase.js");
	const { orderBy } = await import("firebase/firestore");

	const { filters } = await import("../../url-filter-params/state-filters.js");
	const { initFromUrl } = await import("../../url-filter-params/init-from-url.js");
	const { applyFiltersToUI } = await import("../../url-filter-params/apply-filters-to-ui.js");
	const { getProducts } = await import("./get-products.js");
	const { productFiltration } = await import("./product-filtration.js");
	const { priceRange } = await import("../../common/price-range.js");

	const { db } = getFirebase();

	// params products after reload
	initFromUrl();
	applyFiltersToUI();
	getProducts(
		db,
		orderBy("price", "desc"),
		"",
		10,
		1000,
		filters.types,
		filters.featured,
		filters.growing,
		filters.use,
		filters.additional
	);

	productFiltration(db);

	priceRange();
}
