import { getDoc, doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export function addOneToCart(db) {
	document.addEventListener("click", async (e) => {
		const addBtn = e.target.closest("#one-product-add-btn");
		if (!addBtn) return;

		try {
			const radios = document.querySelectorAll(".pack__input");
			if (!radios) return;

			const refProduct = doc(db, "products", productId);
			const snapshotProduct = await getDoc(refProduct);
			const productName = snapshotProduct.data().name;
			const checker = snapshotProduct.data().checked;
			const productPrice = snapshotProduct.data().price;
			const productQuantity = snapshotProduct.data().quantity;

			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			// remove all checkers
			radios.forEach((radio) => {
				if (radio.checked) {
					radio.parentElement.classList.remove("pack_checked");
					radio.checked = false;
				}
			});

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
					text: `Product ${productName.slice(0, 24)} added to cart. 🛒`,
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
					text: `Product ${productName.slice(0, 24)} has been removed! 🛒`,
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
