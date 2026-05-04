if (document.querySelector(".products-page")) {
	const { getFirebase } = await import("../../firebase.js");
	const { orderBy } = await import("firebase/firestore");

	const { filters } = await import("../../url-filter-params/state-filters.js");
	const { initFromUrl } = await import("../../url-filter-params/init-from-url.js");
	const { applyFiltersToUI } = await import("../../url-filter-params/apply-filters-to-ui.js");
	const { getProducts } = await import("./get-products.js");
	const { productFiltration } = await import("./product-filtration.js");
	const { productFiltrationMob } = await import("./product-filtration-mob.js");
	const { filterSide } = await import("./filter-side.js");
	const { priceRange } = await import("../../common/price-range.js");
	const { filterDropdownControl } = await import("./filter-dropdown-control.js");
	const { openMobileFilter } = await import("./open-mobile-filter.js");

	const { db } = getFirebase();

	filterSide();

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
	productFiltrationMob(db);

	priceRange();

	filterDropdownControl();
	openMobileFilter();
}
