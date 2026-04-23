import { getDoc, doc } from "firebase/firestore";

export async function getPayment(db) {
	const paymentAmount1 = document.getElementById("cart-summary__amount1");
	const paymentAmount2 = document.getElementById("cart-summary__amount2");
	if (!paymentAmount1) return;
	if (!paymentAmount2) return;

	const ref = doc(db, "total", "14");
	const total = await getDoc(ref);

	paymentAmount1.innerHTML = total.data().amount / 100;
	paymentAmount2.innerHTML = total.data().amount / 100;
}
