import { filters } from "./state-filters";

export function applyFiltersToUI() {
	const currentOrder = document.getElementById("filter-sort");
	if (!currentOrder) return;

	// show text in input search
	const inputBannerSearch = document.getElementById("search-banner-product");
	if (!inputBannerSearch) return;

	inputBannerSearch.value = filters.search;

	// show prices in input fields
	const minPriceDesktop = document.getElementById("min-range");
	const maxPriceDesktop = document.getElementById("max-range");
	minPriceDesktop.value = filters.minPrice;
	maxPriceDesktop.value = filters.maxPrice;
	const minPriceMobile = document.getElementById("min-range-mob");
	const maxPriceMobile = document.getElementById("max-range-mob");
	minPriceMobile.value = filters.minPrice;
	maxPriceMobile.value = filters.maxPrice;

	// range slide

	// show checkboxes
	filters.types.forEach((type) => {
		const elems = document.querySelectorAll(`input[value="${type}"]`);
		if (elems) {
			elems.forEach((el) => (el.checked = true));
		}
	});
	filters.featured.forEach((type) => {
		const elems = document.querySelectorAll(`input[value="${type}"]`);
		if (elems) {
			elems.forEach((el) => (el.checked = true));
		}
	});
	filters.growing.forEach((type) => {
		const elems = document.querySelectorAll(`input[value="${type}"]`);
		if (elems) {
			elems.forEach((el) => (el.checked = true));
		}
	});
	filters.use.forEach((type) => {
		const elems = document.querySelectorAll(`input[value="${type}"]`);
		if (elems) {
			elems.forEach((el) => (el.checked = true));
		}
	});
	filters.additional.forEach((type) => {
		const elems = document.querySelectorAll(`input[value="${type}"]`);
		if (elems) {
			elems.forEach((el) => (el.checked = true));
		}
	});
}
