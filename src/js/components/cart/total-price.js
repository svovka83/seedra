import { doc, onSnapshot } from "firebase/firestore";

export async function totalPrice(db) {
	const summaryPrice = document.getElementById("cart-summary__price");
	const summaryAmount = document.getElementById("cart-summary__amount");
	const currentShipping = document.getElementById("add-shipping");
	if (!summaryPrice) return;
	if (!summaryAmount) return;
	if (!currentShipping) return;

	const ref = doc(db, "total", "14");

	onSnapshot(ref, (snapshot) => {
		summaryPrice.innerHTML = snapshot.data().price / 100;
		summaryAmount.innerHTML = snapshot.data().amount / 100;
		currentShipping.innerHTML = snapshot.data().shippingName;
	});
}
