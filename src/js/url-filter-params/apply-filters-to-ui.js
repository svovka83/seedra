import { filters } from "./state-filters";
import { searchFilterControl } from "../pages/products/search-filter-control";

export function applyFiltersToUI(db) {
	// show text in input search
	const inputBannerSearch = document.getElementById("search-banner-product");
	if (!inputBannerSearch) return;

	inputBannerSearch.value = filters.search;
	searchFilterControl(db);

	// show prices in inputs
	const minPriceDesktop = document.getElementById("min-range");
	const maxPriceDesktop = document.getElementById("max-range");
	minPriceDesktop.value = filters.minPrice;
	maxPriceDesktop.value = filters.maxPrice;

	const minPriceMobile = document.getElementById("min-range-mob");
	const maxPriceMobile = document.getElementById("max-range-mob");
	minPriceMobile.value = filters.minPrice;
	maxPriceMobile.value = filters.maxPrice;

	// show prices in range slider
	const priceRangeSlider = document.querySelector("#price-range-slider");
	if (priceRangeSlider && priceRangeSlider.noUiSlider) {
		priceRangeSlider.noUiSlider.set([filters.minPrice, filters.maxPrice]);
	}

	const priceRangeSliderMob = document.querySelector("#price-range-slider-mob");
	if (priceRangeSliderMob && priceRangeSliderMob.noUiSlider) {
		priceRangeSliderMob.noUiSlider.set([filters.minPrice, filters.maxPrice]);
	}

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
