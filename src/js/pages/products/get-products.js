import { collection, query, onSnapshot, orderBy, where, getDocs } from "firebase/firestore";
import { productCard } from "../../components/product/product-card";
import { filters } from "../../url-filter-params/state-filters";
import { updateFilterUrl } from "../../url-filter-params/update-filter-url";

export async function getProducts(
	db,
	currentSortOrder = orderBy("price", "desc"),
	search,
	minPrice,
	maxPrice,
	selectedTypes,
	selectedFeatured,
	selectedGrowing,
	selectedUse,
	selectedAdditional,
	categoryId = ""
) {
	// update url params
	updateFilterUrl(filters);

	// filter sorting
	const productList = document.querySelector(".products-content__products");
	if (!productList) return;

	const constraints = [];

	// sort by order
	constraints.push(currentSortOrder);

	// sort by name ( input search )
	if (search !== "") {
		constraints.push(where("nameSearch", ">=", search), where("nameSearch", "<=", search + "\uf8ff"));
	}

	// sort by price
	constraints.push(where("price", ">=", minPrice * 100), where("price", "<=", maxPrice * 100));

	// sort by type
	if (selectedTypes.length) {
		constraints.push(where("type", "in", selectedTypes));
	}

	// sort by featured
	if (selectedFeatured.length) {
		constraints.push(where("featured", "in", selectedFeatured));
	}

	// sort by growing
	if (selectedGrowing.length) {
		constraints.push(where("growing", "in", selectedGrowing));
	}

	// sort by use
	if (selectedUse.length) {
		constraints.push(where("use", "in", selectedUse));
	}

	// sort by additional
	if (selectedAdditional.length) {
		constraints.push(where("additional", "in", selectedAdditional));
	}

	// sort by view all products
	if (categoryId) {
		constraints.push(where("categoryId", "==", categoryId));
	}

	const q = query(collection(db, "products"), ...constraints);
	const snap = await getDocs(q);

	if (snap.docChanges().length === 0) {
		let productsString = "";
		productsString = `<p class="products-content__not-found">Product not found</p>`;
		return (productList.innerHTML = productsString);
	}

	onSnapshot(q, (snapshot) => {
		let productsString = "";

		snapshot.forEach((product) => {
			productsString += productCard(
				product.id,
				product.data().checked,
				product.data().favorite,
				product.data().name,
				product.data().price,
				product.data().imageUrl,
				product.data().isFire,
				"product-card_mobile"
			);
		});

		productList.innerHTML = productsString;
	});
}
