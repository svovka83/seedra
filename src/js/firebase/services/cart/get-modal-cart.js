import { collection, onSnapshot, query } from "firebase/firestore";
import { modalCartProduct } from "../../../components/cart/modal-cart-product";
import { emptyCart } from "../../../utils/empty-cart";

export async function getModalCart(db) {
	const base = import.meta.env.BASE_URL;

	const cartList = document.querySelector(".modal-cart__products");
	const cartHeaderIcon = document.getElementById("open-modal-cart");
	if (!cartList) return;
	if (!cartHeaderIcon) return;

	const q = query(collection(db, "cart"));

	onSnapshot(q, (snapshot) => {
		let html = "";

		snapshot.forEach((product) => {
			html += modalCartProduct(
				product.id,
				product.data().name,
				product.data().imageUrl,
				product.data().quantity,
				product.data().price
			);
		});

		cartList.innerHTML = html;

		// if is empty cart - shows in header
		if (cartList.innerHTML === "") {
			cartList.innerHTML = emptyCart("cart", "cart-icon");
			cartHeaderIcon.innerHTML = `
			<svg class="header__cart-block-icon">
				<use href="${base}images/sprites.svg#cart-icon"></use>
			</svg>
		`;
		} else {
			cartHeaderIcon.innerHTML = `
			<svg class="header__cart-block-icon">
				<use href="${base}images/sprites.svg#cart-icon"></use>
			</svg>
			<span class="header__cart-block-circle"></span>
		`;
		}
	});
}
