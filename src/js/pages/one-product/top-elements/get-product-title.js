import { doc, getDoc } from "firebase/firestore";

import { title } from "../../../components/title";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductTitle(db) {
	const productContentTitle = document.querySelector(".one-product-top-header__title");
	const productNavTitle = document.querySelector(".one-product-breadcrumbs__item.one-product-breadcrumbs__current");
	if (!productContentTitle) return;
	if (!productNavTitle) return;

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	productContentTitle.innerHTML = title("h3", productData.data().name, "title_h3");
	productNavTitle.innerHTML = `<span>${productData.data().name}</span>`;
}
