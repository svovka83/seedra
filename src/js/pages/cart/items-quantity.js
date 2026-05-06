import { collection, getDocs, onSnapshot } from "firebase/firestore";

export async function itemsQuantity(db) {
	const quantityFieldContent = document.querySelector(".cart-products__quantity");
	const quantityFieldSummary = document.querySelector(".cart-summary__quantity");
	if (!quantityFieldContent) return;
	if (!quantityFieldSummary) return;

	await getDocs(collection(db, "cart"));

	onSnapshot(collection(db, "cart"), (snapshot) => {
		quantityFieldContent.innerHTML = snapshot.size;
		quantityFieldSummary.innerHTML = snapshot.size;
	});
}
