import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function clearAllFavorite(db) {
	const clearAllFavorite = document.getElementById("modal-favorite__clear");
	if (!clearAllFavorite) return;

	clearAllFavorite.addEventListener("click", async () => {
		try {
			const snapshot = await getDocs(collection(db, "products"));

			const promisesUpdate = snapshot.docs.map((d) =>
				updateDoc(doc(db, "products", d.id), {
					favorite: false,
				})
			);

			await Promise.all(promisesUpdate);

			Toastify({
				text: `All products have been removed from favorite.`,
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#ffcf55",
			}).showToast();
		} catch (e) {
			Toastify({
				text: "It was an error while removing the products.",
				duration: 4000,
				gravity: "bottom",
				position: "right",
				backgroundColor: "#e55c5c",
			}).showToast();
			console.error("Error adding:", e);
		}
	});
}
