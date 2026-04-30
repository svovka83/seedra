import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { productCard } from "../../../components/product/product-card";

export async function getProducts(
	db,
	currentSortOrder = orderBy("price", "desc"),
	selectedTypes = [],
	selectedFeatured = [],
	selectedGrowing = [],
	selectedUses = [],
	selectedAdditional = [],
	oneProductId = "",
	categoryId = ""
) {
	const productList = document.querySelector(".products-content__products");
	if (!productList) return;

	console.log(currentSortOrder, selectedTypes, selectedFeatured, selectedGrowing, selectedUses, selectedAdditional);

	const constraints = [];

	// sort by order
	constraints.push(currentSortOrder);

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
	if (selectedUses.length) {
		constraints.push(where("use", "in", selectedUses));
	}

	// sort by additional
	if (selectedAdditional.length) {
		constraints.push(where("additional", "in", selectedAdditional));
	}

	// sort by one product id
	if (oneProductId) {
		constraints.push(where("__name__", "==", oneProductId));
	}

	// sort by view all products
	if (categoryId) {
		constraints.push(where("categoryId", "==", categoryId));
	}

	const q = query(collection(db, "products"), ...constraints);

	onSnapshot(q, (snapshot) => {
		let productsString = "";

		snapshot.forEach((product) => {
			productsString += productCard(
				product.id,
				product.data().checked,
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
