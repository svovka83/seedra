import { orderBy } from "firebase/firestore";
import { getProducts } from "./get-products";
import { filters } from "../../../url-filter-params/state-filters";
import { debounce } from "../../../utils/debounce";

export function productFiltration(db) {
	// sort by order inputs
	const optionList = document.getElementById("filter-sort-list");
	if (!optionList) return;

	let currentSortOrder;

	// sort by name inputs
	const inputBannerSearch = document.getElementById("search-banner-product");

	let search;

	// sort by price inputs
	const minPrice = document.getElementById("min-range");
	const maxPrice = document.getElementById("max-range");

	let minValue = 10;
	let maxValue = 1000;

	// sort by type inputs
	const checkboxHybrid = document.getElementById("hybrid");
	const checkboxPollinated = document.getElementById("pollinated");
	const checkboxOrganic = document.getElementById("organic");
	const checkboxPelleted = document.getElementById("pelleted");

	const selectedTypes = filters.types;

	// sort by featured inputs

	const checkboxPack = document.getElementById("pack");
	const checkboxBag = document.getElementById("bag");
	const checkboxSack = document.getElementById("sack");
	const checkboxBarrel = document.getElementById("barrel");

	const selectedFeatured = filters.featured;

	// sort by growing inputs

	const checkboxSlow = document.getElementById("slow");
	const checkboxNormal = document.getElementById("normal");
	const checkboxFast = document.getElementById("fast");

	const selectedGrowing = filters.growing;

	// sort by use inputs
	const checkboxAtHome = document.getElementById("at-home");
	const checkboxInGarden = document.getElementById("in-garden");

	const selectedUses = filters.use;

	// sort by additional inputs

	const checkboxSweet = document.getElementById("sweet");
	const checkboxSour = document.getElementById("sour");
	const checkboxBitter = document.getElementById("bitter");

	const selectedAdditional = filters.additional;

	// debouncedGetProducts() - needs to figure out with this function

	const debouncedGetProducts = debounce(() => {
		getProducts(
			db,
			currentSortOrder,
			search,
			minValue,
			maxValue,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	}, 1000);

	// ADD sort by modal one product id inputs and sort by modal all products inputs

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

		debouncedGetProducts();
	});

	// sort by name ( input search ) listener

	inputBannerSearch.addEventListener("input", (e) => {
		search = e.target.value.toLowerCase().trim();
		debouncedGetProducts();
	});

	// sort by price listener - with debounce, but without react on scroll!
	minPrice.addEventListener("input", () => {
		minValue = Number(minPrice.value);
		maxValue = Number(maxPrice.value);
		debouncedGetProducts();
	});
	maxPrice.addEventListener("input", () => {
		minValue = Number(minPrice.value);
		maxValue = Number(maxPrice.value);
		debouncedGetProducts();
	});

	// sort by type listener

	checkboxHybrid.addEventListener("click", () => {
		if (checkboxHybrid.checked) {
			selectedTypes.push(checkboxHybrid.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxHybrid.value);
			selectedTypes.splice(currentIndex, 1);
		}
		filters.types = selectedTypes;
		debouncedGetProducts();
	});
	checkboxPollinated.addEventListener("click", () => {
		if (checkboxPollinated.checked) {
			selectedTypes.push(checkboxPollinated.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPollinated.value);
			selectedTypes.splice(currentIndex, 1);
		}
		filters.types = selectedTypes;
		debouncedGetProducts();
	});
	checkboxOrganic.addEventListener("click", () => {
		if (checkboxOrganic.checked) {
			selectedTypes.push(checkboxOrganic.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxOrganic.value);
			selectedTypes.splice(currentIndex, 1);
		}
		filters.types = selectedTypes;
		debouncedGetProducts();
	});
	checkboxPelleted.addEventListener("click", () => {
		if (checkboxPelleted.checked) {
			selectedTypes.push(checkboxPelleted.value);
		} else {
			const currentIndex = selectedTypes.indexOf(checkboxPelleted.value);
			selectedTypes.splice(currentIndex, 1);
		}
		filters.types = selectedTypes;
		debouncedGetProducts();
	});

	// sort by featured listener

	checkboxPack.addEventListener("click", () => {
		if (checkboxPack.checked) {
			selectedFeatured.push(checkboxPack.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxPack.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		filters.featured = selectedFeatured;
		debouncedGetProducts();
	});
	checkboxBag.addEventListener("click", () => {
		if (checkboxBag.checked) {
			selectedFeatured.push(checkboxBag.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBag.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		filters.featured = selectedFeatured;
		debouncedGetProducts();
	});
	checkboxSack.addEventListener("click", () => {
		if (checkboxSack.checked) {
			selectedFeatured.push(checkboxSack.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSack.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		filters.featured = selectedFeatured;
		debouncedGetProducts();
	});
	checkboxBarrel.addEventListener("click", () => {
		if (checkboxBarrel.checked) {
			selectedFeatured.push(checkboxBarrel.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBarrel.value);
			selectedFeatured.splice(currentIndex, 1);
		}
		filters.featured = selectedFeatured;
		debouncedGetProducts();
	});

	// sort by growing listener

	checkboxSlow.addEventListener("click", () => {
		if (checkboxSlow.checked) {
			selectedGrowing.push(checkboxSlow.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSlow.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		filters.growing = selectedGrowing;
		debouncedGetProducts();
	});
	checkboxNormal.addEventListener("click", () => {
		if (checkboxNormal.checked) {
			selectedGrowing.push(checkboxNormal.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxNormal.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		filters.growing = selectedGrowing;
		debouncedGetProducts();
	});
	checkboxFast.addEventListener("click", () => {
		if (checkboxFast.checked) {
			selectedGrowing.push(checkboxFast.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxFast.value);
			selectedGrowing.splice(currentIndex, 1);
		}
		filters.growing = selectedGrowing;
		debouncedGetProducts();
	});

	// sort by uses listener

	checkboxAtHome.addEventListener("click", () => {
		if (checkboxAtHome.checked) {
			selectedUses.push(checkboxAtHome.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxAtHome.value);
			selectedUses.splice(currentIndex, 1);
		}
		filters.use = selectedUses;
		debouncedGetProducts();
	});
	checkboxInGarden.addEventListener("click", () => {
		if (checkboxInGarden.checked) {
			selectedUses.push(checkboxInGarden.value);
		} else {
			const currentIndex = selectedUses.indexOf(checkboxInGarden.value);
			selectedUses.splice(currentIndex, 1);
		}
		filters.use = selectedUses;
		debouncedGetProducts();
	});

	// sort by additional listener

	checkboxSweet.addEventListener("click", () => {
		if (checkboxSweet.checked) {
			selectedAdditional.push(checkboxSweet.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSweet.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		filters.additional = selectedAdditional;
		debouncedGetProducts();
	});
	checkboxSour.addEventListener("click", () => {
		if (checkboxSour.checked) {
			selectedAdditional.push(checkboxSour.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxSour.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		filters.additional = selectedAdditional;
		debouncedGetProducts();
	});
	checkboxBitter.addEventListener("click", () => {
		if (checkboxBitter.checked) {
			selectedAdditional.push(checkboxBitter.value);
		} else {
			const currentIndex = selectedFeatured.indexOf(checkboxBitter.value);
			selectedAdditional.splice(currentIndex, 1);
		}
		filters.additional = selectedAdditional;
		debouncedGetProducts();
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
			minValue,
			maxValue,
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
			minValue,
			maxValue,
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
