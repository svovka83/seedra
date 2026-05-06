// range slider for reuse
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { orderBy } from "firebase/firestore";
import { filters } from "../url-filter-params/state-filters";
import { getProducts } from "../pages/products/get-products";
import { debounce } from "../utils/debounce";

export function priceRange(db) {
	const priceRangeSlider = document.querySelector("#price-range-slider");
	if (!priceRangeSlider) return;

	noUiSlider.create(priceRangeSlider, {
		start: [filters.minPrice, filters.maxPrice],
		connect: true,
		step: 1,
		range: {
			min: [0],
			max: [1000],
		},
	});

	const input0 = document.getElementById("min-range");
	const input1 = document.getElementById("max-range");
	const inputs = [input0, input1];

	const debouncedGetPrice = debounce(() => {
		getProducts(
			db,
			orderBy("price", "desc"),
			filters.search,
			inputs[0].value,
			inputs[1].value,
			filters.types,
			filters.featured,
			filters.growing,
			filters.use,
			filters.additional
		);
	}, 2000);

	priceRangeSlider.noUiSlider.on("update", function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
		filters.minPrice = inputs[0].value;
		filters.maxPrice = inputs[1].value;
		debouncedGetPrice();
	});

	input0.addEventListener("input", () => {
		priceRangeSlider.noUiSlider.set([input0.value, null]);
		filters.minPrice = inputs[0].value;
		filters.maxPrice = inputs[1].value;
	});

	input1.addEventListener("input", () => {
		priceRangeSlider.noUiSlider.set([null, input1.value]);
		filters.minPrice = inputs[0].value;
		filters.maxPrice = inputs[1].value;
	});
}
