import { filters } from "./state-filters";

export function applyFiltersToUI() {
	const currentOrder = document.getElementById("filter-sort");
	if (!currentOrder) return;

	// inputBannerSearch.value = filters.search;
	// minPrice.value = filters.min;
	// maxPrice.value = filters.max;

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
