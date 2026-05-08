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
	const { priceRangeMob } = await import("../../common/price-range-mob.js");
	const { filterDropdownControl } = await import("./filter-dropdown-control.js");
	const { openModalCategory } = await import("./open-modal-category.js");
	const { openMobileFilter } = await import("./open-mobile-filter.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { addRemoveFavorite } = await import("../../firebase/services/cart/add-remove-favorite.js");
	const { searchFilterControl } = await import("./search-filter-control.js");
	const { getCategories } = await import("../../firebase/services/get-categories.js");
	const { initDropdownList } = await import("../../common/dropdown.js");
	const { showFilterSidebar } = await import("../../common/show-filter-sidebar.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	filterSide();

	priceRange(db);
	priceRangeMob(db);

	// params products after reload
	initFromUrl();
	applyFiltersToUI(db);
	getProducts(
		db,
		orderBy("price", "desc"),
		filters.search,
		filters.minPrice,
		filters.maxPrice,
		filters.types,
		filters.featured,
		filters.growing,
		filters.use,
		filters.additional
	);

	productFiltration(db);
	productFiltrationMob(db);

	getCategories(db);

	addRemoveProduct(db);
	addRemoveFavorite(db);

	searchFilterControl(db);
	filterDropdownControl();
	openModalCategory(db);
	openMobileFilter();
	initDropdownList();
	showFilterSidebar();

	await initGeneral(db);
}
