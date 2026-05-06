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
			const refProduct = doc(db, "products", productId);
			const snapshotProduct = await getDoc(refProduct);
			const checker = snapshotProduct.data().checked;
			const productPrice = snapshotProduct.data().price;

			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			if (!checker) {
				await setDoc(doc(db, "cart", productId), {
					name: snapshotProduct.data().name,
					price: snapshotProduct.data().price,
					total: snapshotProduct.data().price,
					imageUrl: product.querySelector(".product-card__img").src,
					quantity: 1,
					createdAt: Date.now(),
				});
				await updateDoc(doc(db, "products", productId), {
					checked: true,
				});

				const newPrice = snapshotTotal.data().price + productPrice;
				const newAmount = snapshotTotal.data().amount + productPrice;

				await updateDoc(doc(db, "total", "14"), {
					price: newPrice,
					amount: newAmount,
				});
				Toastify({
					text: `Product ${snapshotProduct.data().name.slice(0, 24)} added to cart. 🛒`,
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#359740",
				}).showToast();
			} else {
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
					text: `Product ${snapshotProduct.data().name.slice(0, 24)} removed from cart. 🛒`,
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
