import { collection, getDocs, query, orderBy, where, limit, onSnapshot, addDoc } from "firebase/firestore";
import { productCard } from "../../../components/product/product-card";

export async function getProducts(
	db,
	currentSortOrder = orderBy("price", "desc"),
	selectedTypes = [],
	selectedUses = [],
	oneProductId = "",
	categoryId = ""
) {
	const productList = document.querySelector(".products-content__products");
	if (!productList) return;

	const constraints = [];

	// sort by order
	constraints.push(currentSortOrder);

	// sort by type
	if (selectedTypes.length) {
		constraints.push(where("type", "in", selectedTypes));
	}

	// sort by use
	if (selectedUses.length) {
		constraints.push(where("use", "in", selectedUses));
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
