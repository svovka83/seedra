export function oneProductDropdown() {
	document.addEventListener("click", (e) => {
		const btn = e.target.closest(".one-product-dropdown__btn");
		if (!btn) return;

		const dropdown = btn.closest(".one-product-dropdown");
		const icon = dropdown.querySelector(".one-product-dropdown__icon");

		dropdown.classList.toggle("open");
		icon?.classList.toggle("one-product-dropdown__icon_open");
	});
}
