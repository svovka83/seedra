import { getFilterProducts } from "../get-products-filter";

export function attachFilterListeners(db, checkboxes) {
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", () => {
			getFilterProducts(db);
		});
	});
}
