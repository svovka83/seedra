import { getDoc, doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function subtractQuantity(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".product-counter__minus");

		if (!btn) return;

		const product = btn.closest(".cart-product");
		const productId = product.id;

		try {
			const refCart = doc(db, "cart", productId);
			const snapshotCart = await getDoc(refCart);

			const productPrice = snapshotCart.data().price;
			const newQuantity = snapshotCart.data().quantity - 1;
			const newTotal = snapshotCart.data().total - productPrice;

			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			const newPrice = snapshotTotal.data().price - productPrice;
			const newAmount = snapshotTotal.data().amount - productPrice;

			await updateDoc(doc(db, "cart", productId), {
				quantity: newQuantity,
				total: newTotal,
			});
			await updateDoc(doc(db, "total", "14"), {
				price: newPrice,
				amount: newAmount,
			});
		} catch (e) {
			Toastify({
				text: "Something happened with updateDoc 🛒",
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#e55c5c",
			}).showToast();
			console.error("Error adding:", e);
		}
	});
}
