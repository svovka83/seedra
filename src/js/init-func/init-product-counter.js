export function initProductCounter(container) {
	const minus = container.querySelector(".product-counter__minus");
	const plus = container.querySelector(".product-counter__plus");
	const quantity = container.querySelector(".product-counter__quantity");

	let counter = 1;

	minus.addEventListener("click", () => {
		if (counter > 1) {
			counter--;
			quantity.textContent = counter;
		}
	});

	plus.addEventListener("click", () => {
		counter++;
		quantity.textContent = counter;
	});
}
