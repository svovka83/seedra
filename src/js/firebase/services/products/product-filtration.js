import { orderBy } from "firebase/firestore";
import { getProducts } from "./get-products";

export function productFiltration(db) {
	// sort by order inputs
	const optionList = document.getElementById("filter-sort-list");
	if (!optionList) return;

	let currentSortOrder;

	// sort by name inputs

	const inputBannerSearch = document.getElementById("search-banner-product");

	let search;

	// sort by type inputs
	const checkboxHybrid = document.getElementById("hybrid");
	const checkboxPollinated = document.getElementById("pollinated");
	const checkboxOrganic = document.getElementById("organic");
	const checkboxPelleted = document.getElementById("pelleted");

	const selectedTypes = [];

	// sort by featured inputs

	const checkboxPack = document.getElementById("pack");
	const checkboxBag = document.getElementById("bag");
	const checkboxSack = document.getElementById("sack");
	const checkboxBarrel = document.getElementById("barrel");

	const selectedFeatured = [];

	// sort by growing inputs

	const checkboxSlow = document.getElementById("slow");
	const checkboxNormal = document.getElementById("normal");
	const checkboxFast = document.getElementById("fast");

	const selectedGrowing = [];

	// sort by use inputs
	const checkboxAtHome = document.getElementById("at-home");
	const checkboxInGarder = document.getElementById("in-garden");

	const selectedUses = [];

	// sort by additional inputs

	const checkboxSweet = document.getElementById("sweet");
	const checkboxSour = document.getElementById("sour");
	const checkboxBitter = document.getElementById("bitter");

	const selectedAdditional = [];

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

		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by name ( input search ) listener

	inputBannerSearch.addEventListener("input", (e) => {
		search = e.target.value.toLowerCase().trim();
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by type listener

	checkboxHybrid.addEventListener("click", () => {
		if (checkboxHybrid.checked) {
			selectedTypes.push(checkboxHybrid.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxHybrid.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxPollinated.addEventListener("click", () => {
		if (checkboxPollinated.checked) {
			selectedTypes.push(checkboxPollinated.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPollinated.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxOrganic.addEventListener("click", () => {
		if (checkboxOrganic.checked) {
			selectedTypes.push(checkboxOrganic.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxOrganic.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxPelleted.addEventListener("click", () => {
		if (checkboxPelleted.checked) {
			selectedTypes.push(checkboxPelleted.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPelleted.value);
			selectedTypes.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by featured listener

	checkboxPack.addEventListener("click", () => {
		if (checkboxPack.checked) {
			selectedFeatured.push(checkboxPack.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxPack.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxBag.addEventListener("click", () => {
		if (checkboxBag.checked) {
			selectedFeatured.push(checkboxBag.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBag.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxSack.addEventListener("click", () => {
		if (checkboxSack.checked) {
			selectedFeatured.push(checkboxSack.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSack.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxBarrel.addEventListener("click", () => {
		if (checkboxBarrel.checked) {
			selectedFeatured.push(checkboxBarrel.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBarrel.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by growing listener

	checkboxSlow.addEventListener("click", () => {
		if (checkboxSlow.checked) {
			selectedGrowing.push(checkboxSlow.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSlow.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxNormal.addEventListener("click", () => {
		if (checkboxNormal.checked) {
			selectedGrowing.push(checkboxNormal.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxNormal.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxFast.addEventListener("click", () => {
		if (checkboxFast.checked) {
			selectedGrowing.push(checkboxFast.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxFast.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by uses listener

	checkboxAtHome.addEventListener("click", () => {
		if (checkboxAtHome.checked) {
			selectedUses.push(checkboxAtHome.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxAtHome.value);
			selectedUses.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxInGarder.addEventListener("click", () => {
		if (checkboxInGarder.checked) {
			selectedUses.push(checkboxInGarder.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxInGarder.value);
			selectedUses.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by additional listener

	checkboxSweet.addEventListener("click", () => {
		if (checkboxSweet.checked) {
			selectedAdditional.push(checkboxSweet.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSweet.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxSour.addEventListener("click", () => {
		if (checkboxSour.checked) {
			selectedAdditional.push(checkboxSour.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSour.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});
	checkboxBitter.addEventListener("click", () => {
		if (checkboxBitter.checked) {
			selectedAdditional.push(checkboxBitter.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBitter.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	});

	// sort by modal one product id listener

	document.addEventListener("click", async (e) => {
		const oneProduct = e.target.closest(".modal-category__item");
		if (!oneProduct) return;

		const oneProductId = oneProduct.id;

		const modalWindow = document.getElementById("modal-category-list");
		if (!modalWindow) return;

		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional,
			oneProductId
		);
		modalWindow.classList.remove("products-content__modal_open");
	});

	// sort by modal all products listener

	document.addEventListener("click", async (e) => {
		const allProducts = e.target.closest(".modal-category__view-all");
		if (!allProducts) return;

		const categoryId = allProducts.querySelector(".modal-category__view-all-text").id;
		console.log(categoryId);

		const modalWindow = document.getElementById("modal-category-list");
		if (!modalWindow) return;

		getProducts(
			db,
			currentSortOrder,
			search,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional,
			"",
			categoryId
		);
		modalWindow.classList.remove("products-content__modal_open");
	});
}
