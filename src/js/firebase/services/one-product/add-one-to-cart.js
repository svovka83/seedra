import { getDoc, doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export function addOneToCart(db) {
	const addBtn = document.querySelector(".one-product-top-content__bottom-button-add");
	if (!addBtn) return;

	addBtn.addEventListener("click", async () => {
		try {
			const refProduct = doc(db, "products", productId);
			const snapshotProduct = await getDoc(refProduct);
			const checker = snapshotProduct.data().checked;
			const productPrice = snapshotProduct.data().price;
			const productQuantity = snapshotProduct.data().quantity;

			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			if (!checker) {
				await setDoc(doc(db, "cart", productId), {
					name: snapshotProduct.data().name,
					price: snapshotProduct.data().price,
					total: snapshotProduct.data().price * productQuantity,
					imageUrl: snapshotProduct.data().imageUrl,
					quantity: productQuantity,
					createdAt: Date.now(),
				});
				await updateDoc(doc(db, "products", productId), {
					checked: true,
					quantity: 1,
				});

				const newPrice = snapshotTotal.data().price + productPrice * productQuantity;
				const newAmount = snapshotTotal.data().amount + productPrice * productQuantity;

				await updateDoc(doc(db, "total", "14"), {
					price: newPrice,
					amount: newAmount,
				});
				Toastify({
					text: `Product ${productId} added to cart. 🛒`,
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#359740",
				}).showToast();
			} else {
				Toastify({
					text: "Product has been added! 🛒",
					duration: 4000,
					gravity: "bottom",
					position: "right",
					backgroundColor: "#e55c5c",
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
