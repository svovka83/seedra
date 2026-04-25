import { collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function clearAllCart(db) {
	const clearBtn = document.getElementById("modal-cart__clear");
	if (!clearBtn) return;

	clearBtn.addEventListener("click", async () => {
		try {
			const snapshot = await getDocs(collection(db, "cart"));

			const promisesUpdate = snapshot.docs.map((d) =>
				updateDoc(doc(db, "products", d.id), {
					checked: false,
				})
			);
			const promisesDelete = snapshot.docs.map((d) => deleteDoc(doc(db, "cart", d.id)));

			await Promise.all(promisesUpdate);
			await Promise.all(promisesDelete);

			await updateDoc(doc(db, "total", "14"), {
				amount: 0,
				discount: 1,
				price: 0,
				promocode: "",
				shippingName: "Shipping",
				shippingPrice: 0,
			});
			Toastify({
				text: `All products have been removed. 🛒`,
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
