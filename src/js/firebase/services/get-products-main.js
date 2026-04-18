import { collection, getDocs, query, limit } from "firebase/firestore";

import { productCard } from "../../components/product-card";

export async function getProductStaticCards(db) {
	const productList = document.querySelector(".our-products__product-cards-static");
	if (!productList) return;

	const q = query(collection(db, "products"), limit(6));
	const products = await getDocs(q);

	products.forEach((product) => {
		productList.innerHTML += productCard(
			product.id,
			product.data().name,
			product.data().price,
			product.data().imageUrl,
			product.data().isFire
		);
	});
}

export async function getProductSliderCards(db) {
	const productList = document.querySelector(".swiper-wrapper.our-products__wrapper");
	if (!productList) return;

	const products = await getDocs(collection(db, "products"));

	products.forEach((product) => {
		productList.innerHTML += `<div class="swiper-slide">${productCard(
			product.data().name,
			product.data().price,
			product.data().imageUrl,
			product.data().isFire,
			"product-card_slider",
			"product-card__yellow-heart_slider"
		)}</div>`;
	});
}
