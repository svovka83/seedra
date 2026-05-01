import { doc, onSnapshot } from "firebase/firestore";

import { productCounter } from "../../../components/cart/product-counter";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function initCounterBlock(db) {
	const productQuantity = document.querySelector(".one-product-top-content__top-counter");
	if (!productQuantity) return;

	const docRef = doc(db, "products", productId);

	onSnapshot(docRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const data = snapshot.data();

		productQuantity.innerHTML = productCounter(data.quantity);
	});
}
