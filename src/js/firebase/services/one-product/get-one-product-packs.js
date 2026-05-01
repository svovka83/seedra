import { doc, getDoc } from "firebase/firestore";

import { oneProductPack } from "../../../components/one-product/one-product-pack.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductPacks(db) {
	const productPacks = document.querySelector(".one-product-top-content__packs");
	if (!productPacks) return;

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	let html = "";

	for (let i = 1; i <= 5; i++) {
		html += oneProductPack(i, productData.data().price * i);
	}

	productPacks.innerHTML = html;
}
