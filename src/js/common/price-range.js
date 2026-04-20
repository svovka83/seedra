const container = document.querySelector(".price-range");

const minInput = container.querySelector(".price-range__input--min");
const maxInput = container.querySelector(".price-range__input--max");

const minRange = container.querySelector(".price-range__range--min");
const maxRange = container.querySelector(".price-range__range--max");

const progress = container.querySelector(".price-range__progress");

console.log(minInput.value, maxInput.value, minRange.value, maxRange.value);

const min = +container.dataset.min;
const max = +container.dataset.max;

minRange.min = maxRange.min = min;
minRange.max = maxRange.max = max;

minInput.value = min;
maxInput.value = max;

minRange.value = min;
maxRange.value = max;

export function updateProgress() {
	const minVal = +minRange.value;
	const maxVal = +maxRange.value;

	const left = (minVal / max) * 100;
	const right = (maxVal / max) * 100;

	progress.style.left = left + "%";
	progress.style.width = right - left + "%";

	minInput.value = minVal;
	maxInput.value = maxVal;
}

minRange.addEventListener("input", () => {
	if (+minRange.value > +maxRange.value - 1) {
		minRange.value = maxRange.value - 1;
	}
	updateProgress();
});

maxRange.addEventListener("input", () => {
	if (+maxRange.value < +minRange.value + 1) {
		maxRange.value = +minRange.value + 1;
	}
	updateProgress();
});
