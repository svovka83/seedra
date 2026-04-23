import { getDoc, doc } from "firebase/firestore";

export async function getPayment(db) {
	const paymentAmount = document.getElementById("cart-summary__amount");
	if (!paymentAmount) return;

	const ref = doc(db, "total", "14");
	const total = await getDoc(ref);

	paymentAmount.innerHTML = total.data().amount / 100;
}
