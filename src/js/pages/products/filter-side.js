import { filterDropdown } from "../../components/products/filter-dropdown";
// filterDropdown( title, classBtn, classContent, appearance1, appearance2, appearance3, appearance4,
//  option1, id1, value1, option2, id2, value2, option3, id3, value3, option4, id4, value4 )

export function filterSide() {
	const dropdownType = document.querySelector(".products-content__filters-dropdown-type");
	const dropdownTypeMob = document.querySelector(".products-content__filters-dropdown-type-mob");
	const dropdownFeatured = document.querySelector(".products-content__filters-dropdown-featured");
	const dropdownFeaturedMob = document.querySelector(".products-content__filters-dropdown-featured-mob");
	const dropdownGrowing = document.querySelector(".products-content__filters-dropdown-growing");
	const dropdownGrowingMob = document.querySelector(".products-content__filters-dropdown-growing-mob");
	const dropdownUse = document.querySelector(".products-content__filters-dropdown-use");
	const dropdownUseMob = document.querySelector(".products-content__filters-dropdown-use-mob");
	const dropdownAdditional = document.querySelector(".products-content__filters-dropdown-additional");
	const dropdownAdditionalMob = document.querySelector(".products-content__filters-dropdown-additional-mob");

	if (!dropdownType) return;
	if (!dropdownTypeMob) return;
	if (!dropdownFeatured) return;
	if (!dropdownFeaturedMob) return;
	if (!dropdownGrowing) return;
	if (!dropdownGrowingMob) return;
	if (!dropdownUse) return;
	if (!dropdownUseMob) return;
	if (!dropdownAdditional) return;
	if (!dropdownAdditionalMob) return;

	// console.log("connect");

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
	dropdownTypeMob.innerHTML = filterDropdown(
		"Seed type",
		"filter-dropdown__btn_mobile",
		"filter-dropdown__content_mobile",
		"",
		"",
		"",
		"",
		"Hybrid",
		"hybrid-mob",
		"hybrid",
		"Open Pollinated",
		"pollinated-mob",
		"pollinated",
		"Organic Seeds, Plants, and Supplies",
		"organic-mob",
		"organic",
		"Pelleted See",
		"pelleted-mob",
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
	dropdownFeaturedMob.innerHTML = filterDropdown(
		"Featured",
		"filter-dropdown__btn_mobile",
		"filter-dropdown__content_mobile",
		"",
		"",
		"",
		"",
		"Pack",
		"pack-mob",
		"pack",
		"Bag",
		"bag-mob",
		"bag",
		"Sack",
		"sack-mob",
		"sack",
		"Barrel",
		"barrel-mob",
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
	dropdownGrowingMob.innerHTML = filterDropdown(
		"Growing Conditions",
		"filter-dropdown__btn_mobile",
		"filter-dropdown__content_mobile",
		"",
		"",
		"",
		"checkbox_none",
		"Slow",
		"slow-mob",
		"slow",
		"Normal",
		"normal-mob",
		"normal",
		"Fast",
		"fast-mob",
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
	dropdownUseMob.innerHTML = filterDropdown(
		"Use",
		"filter-dropdown__btn_mobile",
		"filter-dropdown__content_mobile",
		"",
		"",
		"checkbox_none",
		"checkbox_none",
		"At home",
		"at-home-mob",
		"at-home",
		"In garder",
		"in-garden-mob",
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
	dropdownAdditionalMob.innerHTML = filterDropdown(
		"Additional Characteristic",
		"filter-dropdown__btn_mobile",
		"filter-dropdown__content_mobile",
		"",
		"",
		"",
		"checkbox_none",
		"Sweet",
		"sweet-mob",
		"sweet",
		"Sour",
		"sour-mob",
		"sour",
		"Bitter",
		"bitter-mob",
		"bitter"
	);
}
