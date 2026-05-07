import { collection, onSnapshot, query, where } from "firebase/firestore";
import { modalFavoriteProduct } from "../../../components/cart/modal-favorite-product";
import { emptyCart } from "../../../utils/empty-cart";

export async function getModalFavorite(db) {
	const cartList = document.querySelector(".modal-favorite__products");
	if (!cartList) return;

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

		cartList.innerHTML = html;

		if (cartList.innerHTML === "") cartList.innerHTML = emptyCart("favorite", "heart-icon");
	});
}
