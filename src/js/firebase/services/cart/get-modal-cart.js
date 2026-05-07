import { collection, onSnapshot, query } from "firebase/firestore";
import { modalCartProduct } from "../../../components/cart/modal-cart-product";
import { emptyCart } from "../../../utils/empty-cart";

export async function getModalCart(db) {
	const cartList = document.querySelector(".modal-cart__products");
	if (!cartList) return;

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

		if (cartList.innerHTML === "") cartList.innerHTML = emptyCart();
	});
}
