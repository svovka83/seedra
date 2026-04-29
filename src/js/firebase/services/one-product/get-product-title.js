import { doc, getDoc } from "firebase/firestore";

import { title } from "../../../components/title";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductTitle(db) {
	// const base = import.meta.env.BASE_URL;

	const productTitle = document.querySelector(".one-product-top-header__title");

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	productTitle.innerHTML = title("h3", productData.data().name, "title_h3");
}
