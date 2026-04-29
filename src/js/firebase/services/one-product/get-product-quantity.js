import { doc, onSnapshot } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductQuantity(db) {
	const productQuantity = document.querySelector(".one-product-top-content__top-quantity");

	const docRef = doc(db, "products", productId);

	onSnapshot(docRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const data = snapshot.data();

		productQuantity.innerHTML = data.quantity;
	});
}
