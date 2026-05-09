import { doc, onSnapshot } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getDiscountBlock(db) {
	const base = import.meta.env.BASE_URL;

	const discountBlock = document.querySelector(".one-product-top-content__bottom-discount-block");
	if (!discountBlock) return;

	const productRef = doc(db, "products", productId);

	onSnapshot(productRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const price = snapshot.data().price;
		const isFire = snapshot.data().isFire;

		if (isFire) {
			discountBlock.innerHTML = `
        <p class="one-product-top-content__bottom-discount">$${((price / 100) * 1.2).toFixed(2)}</p>
        <p class="one-product-top-content__bottom-price">$${price / 100}</p>
      `;
		} else {
			discountBlock.innerHTML = `
        <p class="one-product-top-content__bottom-price">$${price / 100}</p>
      `;
		}
	});
}
