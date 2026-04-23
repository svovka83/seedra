import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { checkoutCart } from "../../../components/checkout/checkout-cart";

export async function getCheckout(db) {
	const cartList = document.querySelector(".checkout-carts__products");
	const checkoutAmount = document.getElementById("cart-summary__amount");
	if (!cartList) return;
	if (!checkoutAmount) return;

	const ref = doc(db, "total", "14");
	console.log(checkoutAmount, ref);
	const total = await getDoc(ref);
	checkoutAmount.innerHTML = total.data().amount / 100;

	const carts = await getDocs(collection(db, "cart"));

	let html = "";

	carts.forEach((cart) => {
		html += checkoutCart(cart.id, cart.data().name, cart.data().total);
	});

	cartList.innerHTML = html;
}
