import { filters } from "../../url-filter-params/state-filters";
import { getProducts } from "./get-products";
import { orderBy } from "firebase/firestore";

export function searchFilterControl(db) {
	const searchInput = document.getElementById("search-banner-product");
	if (!searchInput) return;

	const searchClose = searchInput.nextElementSibling;
	if (!searchClose) return;

	if (searchInput.value.trim().length > 0) {
		searchClose.classList.add("search__close_show");
	}

	searchInput.addEventListener("input", (e) => {
		const text = e.target.value.trim();
		if (text.length > 0) {
			searchClose.classList.add("search__close_show");
		}

		if (text.length === 0) {
			searchClose.classList.remove("search__close_show");
		}
	});

	searchClose.addEventListener("click", () => {
		searchInput.value = "";
		filters.search = "";
		searchClose.classList.remove("search__close_show");
		getProducts(
			db,
			orderBy("price", "desc"),
			searchInput.value,
			filters.minPrice,
			filters.maxPrice,
			filters.types,
			filters.featured,
			filters.growing,
			filters.use,
			filters.additional
		);
	});
}
