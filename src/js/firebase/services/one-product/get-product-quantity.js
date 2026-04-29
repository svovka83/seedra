import { doc, getDoc } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductQuantity(db) {
	const productQuantity = document.querySelector(".one-product-top-content__top-quantity");

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	productQuantity.innerHTML = productData.data().quantity;
}
