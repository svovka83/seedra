import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { getModalHeaderSearch } from "../firebase/services/modals/get-modal-header-search";

export function openModalHeaderSearch() {
	const inputHeaderSearch = document.getElementById("search-header-product");
	const modalHeaderSearch = document.getElementById("modal-header-search");
	if (!inputHeaderSearch) return;
	if (!modalHeaderSearch) return;

	inputHeaderSearch.addEventListener("focus", () => {
		if (!modalHeaderSearch.classList.contains("modal-header-search_open")) {
			modalHeaderSearch.classList.add("modal-header-search_open");
			getModalHeaderSearch("", "");
			disablePageScroll();
		}
	});

	modalHeaderSearch.addEventListener("click", (e) => {
		if (e.target === modalHeaderSearch) {
			inputHeaderSearch.value = "";
			modalHeaderSearch.classList.remove("modal-header-search_open");
			enablePageScroll();
		}
	});

	window.addEventListener("resize", () => {
		if (modalHeaderSearch.classList.contains("modal-header-search_open")) {
			inputHeaderSearch.value = "";
			inputHeaderSearch.blur();
			modalHeaderSearch.classList.remove("modal-header-search_open");
			enablePageScroll();
		}
	});
}
