import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function deleteFromCart(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".cart-product__delete");

		if (!btn) return;

		const productId = btn.parentElement.id;

		try {
			await deleteDoc(doc(db, "cart", productId));
			await updateDoc(doc(db, "products", productId), {
				checked: false,
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
