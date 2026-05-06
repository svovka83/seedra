import { orderBy } from "firebase/firestore";
import { getProducts } from "./get-products";
import { filters } from "../../url-filter-params/state-filters";
import { debounce } from "../../utils/debounce";

export function productFiltrationMob(db) {
	// sort by order inputs without listener
	const currentSortOrder = orderBy("price", "desc");

	// sort by name inputs
	const inputBannerSearch = document.getElementById("search-banner-product");

	let inputSearch = filters.search;

	// sort by type inputs
	const checkboxHybrid = document.getElementById("hybrid-mob");
	const checkboxPollinated = document.getElementById("pollinated-mob");
	const checkboxOrganic = document.getElementById("organic-mob");
	const checkboxPelleted = document.getElementById("pelleted-mob");
	if (!checkboxHybrid) return;

	const selectedTypes = filters.types;

	// sort by featured inputs

	const checkboxPack = document.getElementById("pack-mob");
	const checkboxBag = document.getElementById("bag-mob");
	const checkboxSack = document.getElementById("sack-mob");
	const checkboxBarrel = document.getElementById("barrel-mob");

	const selectedFeatured = filters.featured;

	// sort by growing inputs

	const checkboxSlow = document.getElementById("slow-mob");
	const checkboxNormal = document.getElementById("normal-mob");
	const checkboxFast = document.getElementById("fast-mob");

	const selectedGrowing = filters.growing;

	// sort by use inputs
	const checkboxAtHome = document.getElementById("at-home-mob");
	const checkboxInGarden = document.getElementById("in-garden-mob");

	const selectedUses = filters.use;

	// sort by additional inputs

	const checkboxSweet = document.getElementById("sweet-mob");
	const checkboxSour = document.getElementById("sour-mob");
	const checkboxBitter = document.getElementById("bitter-mob");

	const selectedAdditional = filters.additional;

	// debouncedGetProducts() - needs to figure out with this function

	const debouncedGetProducts = debounce(() => {
		getProducts(
			db,
			currentSortOrder,
			inputSearch,
			filters.minPrice,
			filters.maxPrice,
			selectedTypes,
			selectedFeatured,
			selectedGrowing,
			selectedUses,
			selectedAdditional
		);
	}, 1000);

	// sort by name ( input search ) listener

	inputBannerSearch.addEventListener("input", (e) => {
		inputSearch = e.target.value.toLowerCase().trim();
		filters.search = inputSearch;
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
}
