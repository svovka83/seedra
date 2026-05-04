export function filterDropdownControl() {
	const dropdowns = document.querySelectorAll(".filter-dropdown");

	dropdowns.forEach((dropdown) => {
		dropdown.querySelector(".filter-dropdown__btn").addEventListener("click", () => {
			dropdown.classList.toggle("open");
			dropdown.querySelector(".filter-dropdown__icon").classList.toggle("filter-dropdown__icon_open");
		});
	});
}
