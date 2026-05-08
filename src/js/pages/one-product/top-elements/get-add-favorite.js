import { doc, onSnapshot } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getAddFavorite(db) {
	const base = import.meta.env.BASE_URL;

	const addBtn = document.querySelector(".one-product-top-content__bottom-heart");
	if (!addBtn) return;

	const productRef = doc(db, "products", productId);

	onSnapshot(productRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const favorite = snapshot.data().favorite;

		addBtn.innerHTML = `<use href="${base}images/sprites.svg#${
			favorite ? "heart-checked-icon" : "heart-icon"
		}"></use>`;
	});
}
