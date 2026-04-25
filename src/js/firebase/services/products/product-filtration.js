import { orderBy } from "firebase/firestore";
import { getProducts } from "./get-products";

export function productFiltration(db) {
	// sort by order inputs
	const optionList = document.getElementById("filter-sort-list");
	if (!optionList) return;

	let currentSortOrder;

	// sort by type inputs
	const checkboxHybrid = document.getElementById("hybrid");
	const checkboxPollinated = document.getElementById("pollinated");
	const checkboxOrganic = document.getElementById("organic");
	const checkboxPelleted = document.getElementById("pelleted");
	if (!checkboxHybrid) return;
	if (!checkboxPollinated) return;
	if (!checkboxOrganic) return;
	if (!checkboxPelleted) return;

	const selectedTypes = [];

	// sort by use inputs
	const checkboxAtHome = document.getElementById("at-home");
	const checkboxInGarder = document.getElementById("in-garden");

	const selectedUses = [];

	// sort by order listener

	optionList.addEventListener("click", (e) => {
		const typeOptions = e.target.closest(".dropdown__option");
		const typeOption = typeOptions.querySelector(".dropdown__value");
		if (!typeOption) return;

		const typeSortOrder = typeOption.textContent;

		if (typeSortOrder === "Most expensive") currentSortOrder = orderBy("price", "desc");
		if (typeSortOrder === "The cheapest") currentSortOrder = orderBy("price", "asc");
		if (typeSortOrder === "Newly") currentSortOrder = orderBy("createdAt", "desc");
		if (typeSortOrder === "Old") currentSortOrder = orderBy("createdAt", "asc");

		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	// sort by type listener

	checkboxHybrid.addEventListener("click", () => {
		console.log(checkboxHybrid.value);
		if (checkboxHybrid.checked) {
			selectedTypes.push(checkboxHybrid.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxHybrid.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	checkboxPollinated.addEventListener("click", () => {
		if (checkboxPollinated.checked) {
			selectedTypes.push(checkboxPollinated.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPollinated.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	checkboxOrganic.addEventListener("click", () => {
		if (checkboxOrganic.checked) {
			selectedTypes.push(checkboxOrganic.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxOrganic.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	checkboxPelleted.addEventListener("click", () => {
		if (checkboxPelleted.checked) {
			selectedTypes.push(checkboxPelleted.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPelleted.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	// sort by uses listener

	checkboxAtHome.addEventListener("click", () => {
		if (checkboxAtHome.checked) {
			selectedUses.push(checkboxAtHome.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxAtHome.value);
			selectedUses.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});

	checkboxInGarder.addEventListener("click", () => {
		if (checkboxInGarder.checked) {
			selectedUses.push(checkboxInGarder.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxInGarder.value);
			selectedUses.splice(currentIndex, 1);
		}
		getProducts(db, currentSortOrder, selectedTypes, selectedUses);
	});
}
