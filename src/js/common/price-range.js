// range slider for reuse
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export function priceRange() {
	const priceRangeSlider = document.querySelector(".price-range-slider");
	if (!priceRangeSlider) return;

	noUiSlider.create(priceRangeSlider, {
		start: [10, 1000],
		connect: true,
		step: 1,
		range: {
			min: [10],
			max: [1000],
		},
	});

	const input0 = document.getElementById("min-range");
	const input1 = document.getElementById("max-range");
	const inputs = [input0, input1];

	priceRangeSlider.noUiSlider.on("update", function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		priceRangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener("change", (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}
