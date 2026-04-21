import { getDoc, doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function addRemoveProduct(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".product-card__button");

		if (!btn) return;

		const product = btn.closest(".product-card");
		const productId = product.id;

		try {
			const ref = doc(db, "products", productId);
			const snapshot = await getDoc(ref);
			const checker = snapshot.data().checked;

			if (!checker) {
				await setDoc(doc(db, "cart", productId), {
					name: product.querySelector(".product-card__title").textContent,
					price: product.querySelector(".product-card__price").textContent,
					imageUrl: product.querySelector(".product-card__img").src,
					createdAt: Date.now(),
				});
				await updateDoc(doc(db, "products", productId), {
					checked: true,
				});
				Toastify({
					text: `Product ${productId} added to cart. 🛒`,
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#359740",
				}).showToast();
			} else {
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
			}
		} catch (e) {
			Toastify({
				text: "It was an error while adding the product. 🛒",
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#e55c5c",
			}).showToast();
			console.error("Error adding:", e);
		}
	});
}
