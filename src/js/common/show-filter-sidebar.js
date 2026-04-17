export function showFilterSidebar() {
	const openFilterSidebar = document.querySelector(".products-content__open");
	const filters = document.querySelector(".products-content__filters");
	const content = document.querySelector(".products-content__grid");

	openFilterSidebar.addEventListener("click", () => {
		content.classList.toggle("products-content__grid_open");
		filters.classList.toggle("products-content__filters_open");
	});
}
