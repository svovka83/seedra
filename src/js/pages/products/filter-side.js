import { filterDropdown } from "../../components/products/filter-dropdown";

export function filterSide() {
	const dropdownType = document.querySelector(".products-content__filters-dropdown-type");
	const dropdownFeatured = document.querySelector(".products-content__filters-dropdown-featured");
	const dropdownGrowing = document.querySelector(".products-content__filters-dropdown-growing");
	const dropdownUse = document.querySelector(".products-content__filters-dropdown-use");
	const dropdownAdditional = document.querySelector(".products-content__filters-dropdown-additional");
	if (!dropdownType) return;
	if (!dropdownFeatured) return;
	if (!dropdownGrowing) return;
	if (!dropdownUse) return;
	if (!dropdownAdditional) return;

	dropdownType.innerHTML = filterDropdown(
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
	dropdownFeatured.innerHTML = filterDropdown(
		"Featured",
		"",
		"",
		"",
		"",
		"",
		"",
		"Pack",
		"pack",
		"pack",
		"Bag",
		"bag",
		"bag",
		"Sack",
		"sack",
		"sack",
		"Barrel",
		"barrel",
		"barrel"
	);
	dropdownGrowing.innerHTML = filterDropdown(
		"Growing Conditions",
		"",
		"",
		"",
		"",
		"",
		"checkbox_none",
		"Slow",
		"slow",
		"slow",
		"Normal",
		"normal",
		"normal",
		"Fast",
		"fast",
		"fast"
	);
	dropdownUse.innerHTML = filterDropdown(
		"Use",
		"",
		"",
		"",
		"",
		"checkbox_none",
		"checkbox_none",
		"At home",
		"at-home",
		"at-home",
		"In garder",
		"in-garden",
		"in-garden"
	);
	dropdownAdditional.innerHTML = filterDropdown(
		"Additional Characteristic",
		"",
		"",
		"",
		"",
		"",
		"checkbox_none",
		"Sweet",
		"sweet",
		"sweet",
		"Sour",
		"sour",
		"sour",
		"Bitter",
		"bitter",
		"bitter"
	);
}
