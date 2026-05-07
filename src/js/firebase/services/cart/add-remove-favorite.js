import { getDoc, doc, updateDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function addRemoveFavorite(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".product-card__yellow-heart");
		if (!btn) return;

		const product = btn.closest(".product-card");
		const productId = product.id;

		try {
			const refProduct = doc(db, "products", productId);
			const snapshotProduct = await getDoc(refProduct);
			const favorite = snapshotProduct.data().favorite;

			if (!favorite) {
				await updateDoc(doc(db, "products", productId), {
					favorite: true,
				});

				Toastify({
					text: `Product ${snapshotProduct.data().name.slice(0, 24)} added to favorite.`,
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#359740",
				}).showToast();
			} else {
				await updateDoc(doc(db, "products", productId), {
					favorite: false,
				});

				Toastify({
					text: `Product ${snapshotProduct.data().name.slice(0, 24)} removed from favorite.`,
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#ffcf55",
				}).showToast();
			}
		} catch (e) {
			Toastify({
				text: "It was an error while adding the product.",
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#e55c5c",
			}).showToast();
			console.error("Error adding:", e);
		}
	});
}
