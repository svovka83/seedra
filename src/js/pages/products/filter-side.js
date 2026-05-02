import { filterDropdown } from "../../components/products/filter-dropdown";

export function filterSide() {
	const dropdowns = document.querySelector(".products-content__filters-dropdown");
	if (!dropdowns) return;

	let html = "";
	html += filterDropdown(
		"Seed type",
		"",
		"",
		"",
		"",
		"",
		"",
		"Hybrid",
		"hybrid",
		"hybrid",
		"Open Pollinated",
		"pollinated",
		"pollinated",
		"Organic Seeds, Plants, and Supplies",
		"organic",
		"organic",
		"Pelleted See",
		"pelleted",
		"pelleted"
	);
	dropdowns.innerHTML = html;
}
