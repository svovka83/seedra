import { getBurgerMenuSearch } from "./get-burger-menu-search-modal";

export function burgerMenuSearchControl(db) {
	const searchInput = document.getElementById("search-burger-menu");
	const modalBurger = document.getElementById("modal-burger-search");
	if (!searchInput) return;
	if (!modalBurger) return;

	const closeBtn = searchInput.nextElementSibling;
	const searchIcon = closeBtn.nextElementSibling;

	searchInput.addEventListener("focus", () => {
		if (!modalBurger.classList.contains("modal-burger-search_open")) {
			modalBurger.classList.add("modal-burger-search_open");
			getBurgerMenuSearch(db, "");
		}
	});

	document.addEventListener("click", (e) => {
		if (
			!modalBurger.contains(e.target) &&
			!searchInput.contains(e.target) &&
			!closeBtn.contains(e.target) &&
			!searchIcon.contains(e.target) // this is "kostyl"
		) {
			modalBurger.classList.remove("modal-burger-search_open");
			searchInput.value = "";
		}
	});

	searchInput.addEventListener("input", (e) => {
		if (e.target.value.trim().length > 0) {
			closeBtn.classList.add("search__close_show");
		}
	});

	closeBtn.addEventListener("click", () => {
		searchInput.value = "";
		closeBtn.classList.remove("search__close_show");
		getBurgerMenuSearch(db, "");
	});

	window.addEventListener("resize", () => {
		if (modalBurger.classList.contains("modal-burger-search_open")) {
			modalBurger.classList.remove("modal-burger-search_open");
		}
	});
}
