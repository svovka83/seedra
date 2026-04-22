import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function deleteFromCart(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".cart-product__delete");

		if (!btn) return;

		const productId = btn.parentElement.id;

		try {
			const refCart = doc(db, "cart", productId);
			const snapshotCart = await getDoc(refCart);
			const cartTotal = snapshotCart.data().total;

			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			await deleteDoc(doc(db, "cart", productId));
			await updateDoc(doc(db, "products", productId), {
				checked: false,
			});

			const newPrice = snapshotTotal.data().price - cartTotal;
			const newAmount = snapshotTotal.data().amount - cartTotal;

			await updateDoc(doc(db, "total", "14"), {
				price: newPrice,
				amount: newAmount,
			});
			Toastify({
				text: `Product ${productId} removed from cart. 🛒`,
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#ffcf55",
			}).showToast();
		} catch (e) {
			Toastify({
				text: "It was an error while removing the product. 🛒",
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#e55c5c",
			}).showToast();
			console.error("Error deleting:", e);
		}
	});
}
