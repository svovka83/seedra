import { collection, onSnapshot, query, where } from "firebase/firestore";
import { modalFavoriteProduct } from "../../../components/cart/modal-favorite-product";
import { emptyCart } from "../../../utils/empty-cart";

export async function getModalFavorite(db) {
	const base = import.meta.env.BASE_URL;

	const favoriteList = document.querySelector(".modal-favorite__products");
	const favoriteHeaderIcon = document.getElementById("open-modal-favorite");
	if (!favoriteList) return;
	if (!favoriteHeaderIcon) return;

	const q = query(collection(db, "products"), where("favorite", "==", true));

	onSnapshot(q, (snapshot) => {
		let html = "";

		snapshot.forEach((product) => {
			html += modalFavoriteProduct(
				product.id,
				product.data().name,
				product.data().imageUrl,
				product.data().price
			);
		});

		favoriteList.innerHTML = html;

		// if is empty favorite - shows in header
		if (favoriteList.innerHTML === "") {
			favoriteList.innerHTML = emptyCart("favorite", "heart-icon");
			favoriteHeaderIcon.innerHTML = `
			<svg class="header__cart-block-icon">
				<use href="${base}images/sprites.svg#heart-icon"></use>
			</svg>
		`;
		} else {
			favoriteHeaderIcon.innerHTML = `
			<svg class="header__cart-block-icon">
				<use href="${base}images/sprites.svg#heart-checked-icon"></use>
			</svg>
		`;
		}
	});
}
