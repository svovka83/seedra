import { doc, getDoc } from "firebase/firestore";

import { productCounter } from "../../../components/cart/product-counter";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function initCounterBlock(db) {
	const productQuantity = document.querySelector(".one-product-top-content__top-counter");

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	productQuantity.innerHTML = productCounter(productData.data().quantity);
}
