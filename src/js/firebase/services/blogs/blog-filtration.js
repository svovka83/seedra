import { orderBy } from "firebase/firestore";
import { getBlogs } from "./get-blogs";
import { debounce } from "../../../utils/debounce";

export function blogFiltration(db) {
	// sort by order inputs
	const optionList = document.getElementById("blog-sort-list");
	if (!optionList) return;

	let currentSortOrder;

	// sort by name inputs
	const inputBannerSearch = document.getElementById("search-banner-blog");

	let search;

	// debouncedGetBlogs() - needs to figure out with this function

	const debouncedGetBlogs = debounce(() => {
		getBlogs(db, currentSortOrder, search);
	}, 1000);

	// sort by order listener

	optionList.addEventListener("click", (e) => {
		const typeOptions = e.target.closest(".dropdown__option");
		const typeOption = typeOptions.querySelector(".dropdown__value");
		if (!typeOption) return;

		const typeSortOrder = typeOption.textContent;

		if (typeSortOrder === "Recently") currentSortOrder = orderBy("createdAt", "desc");
		if (typeSortOrder === "Older") currentSortOrder = orderBy("createdAt", "asc");

		debouncedGetBlogs();
	});

	// sort by name ( input search ) listener

	inputBannerSearch.addEventListener("input", (e) => {
		search = e.target.value.toLowerCase().trim();
		debouncedGetBlogs();
	});
}
