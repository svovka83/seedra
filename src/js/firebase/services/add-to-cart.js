import { collection, addDoc } from "firebase/firestore";

export function addToCart(db) {
	document.addEventListener("click", async (e) => {
		const btn = e.target.closest(".product-card__button");

		if (!btn) return;

		const product = btn.closest(".product-card");

		await addDoc(collection(db, "cart"), {
			name: product.querySelector(".product-card__title").textContent,
			price: product.querySelector(".product-card__price").textContent,
			imageUrl: product.querySelector(".product-card__img").src,
			createdAt: Date.now(),
		});
	});
}
