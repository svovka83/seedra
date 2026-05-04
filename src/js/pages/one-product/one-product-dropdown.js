export function oneProductDropdown() {
	document.addEventListener("click", (e) => {
		const btn = e.target.closest(".one-product-dropdown__btn");
		if (!btn) return;

		const dropdown = btn.closest(".one-product-dropdown");
		const icon1 = dropdown.querySelector(".one-product-dropdown__icon1");
		const icon2 = dropdown.querySelector(".one-product-dropdown__icon2");
		const icon3 = dropdown.querySelector(".one-product-dropdown__icon3");
		const icon4 = dropdown.querySelector(".one-product-dropdown__icon4");

		dropdown.classList.toggle("open");
		icon1?.classList.toggle("one-product-dropdown__icon1_open");
		icon2?.classList.toggle("one-product-dropdown__icon2_open");
		icon3?.classList.toggle("one-product-dropdown__icon3_open");
		icon4?.classList.toggle("one-product-dropdown__icon4_open");
	});
}
