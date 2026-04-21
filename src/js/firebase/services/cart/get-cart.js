import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { cartProduct } from "../../../components/cart-product";
import { emptyCart } from "../../../utils/empty-cart";

export async function getCart(db) {
	const cartList = document.querySelector(".cart-products__products");
	if (!cartList) return;

	const cart = await getDocs(collection(db, "cart"));

	if (cart.empty) {
		cartList.innerHTML = emptyCart();
		return;
	}

	const q = query(collection(db, "cart"));

	onSnapshot(q, (snapshot) => {
		let html = "";

		snapshot.forEach((product) => {
			html += cartProduct(product.id, product.data().name, product.data().imageUrl, product.data().price);
		});

		cartList.innerHTML = html;

		if (cartList.innerHTML === "") cartList.innerHTML = emptyCart();
	});
}
