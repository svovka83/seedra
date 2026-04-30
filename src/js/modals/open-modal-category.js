import { getModalCategoryList } from "../firebase/services/modals/get-modal-category-list";

export function openModalCategory(db) {
	let currentId;

	document.addEventListener("click", async (e) => {
		const category = e.target.closest(".btn.btn_icon-text");
		if (!category) return;

		const categoryId = category.id;

		const modalWindow = document.getElementById("modal-category-list");
		if (!modalWindow) return;

		if (!modalWindow.classList.contains("products-content__modal_open")) {
			currentId = categoryId;
			await getModalCategoryList(db, categoryId);
			modalWindow.classList.add("products-content__modal_open");
		} else if (currentId !== categoryId) {
			currentId = categoryId;
			await getModalCategoryList(db, categoryId);
		} else if (currentId === categoryId) {
			modalWindow.classList.remove("products-content__modal_open");
		}

		document.addEventListener("click", (e) => {
			if (!e.target.closest(".btn.btn_icon-text")) {
				modalWindow.classList.remove("products-content__modal_open");
			}
		});

		window.addEventListener("resize", () => {
			if (modalWindow.classList.contains("products-content__modal_open")) {
				modalWindow.classList.remove("products-content__modal_open");
			}
		});
	});
}
