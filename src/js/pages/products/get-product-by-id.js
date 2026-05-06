import { collection, query, onSnapshot, where, getDocs } from "firebase/firestore";
import { productCard } from "../../components/product/product-card";

export async function getProductById(db, oneProductId) {
	const productList = document.querySelector(".products-content__products");
	if (!productList) return;

	const constraints = [];

	// sort by one product id
	if (oneProductId) {
		constraints.push(where("__name__", "==", oneProductId));
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
