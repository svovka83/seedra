import { collection, getDocs, addDoc } from "firebase/firestore";

import { productCard } from "../../components/product-card";

export async function getProductStaticCards(db) {
	const productList = document.querySelector(".our-products__product-cards-static");

	const products = await getDocs(collection(db, "products"));

	products.forEach((product) => {
		if (product.data().id > 6) return;
		productList.innerHTML += productCard(
			product.data().name,
			product.data().price,
			product.data().imageUrl,
			product.data().isFire
		);
	});
}

export async function getProductSliderCards(db) {
	const productList = document.querySelector(".swiper-wrapper.our-products__wrapper");

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

export async function getAllProducts(db) {
	const productList = document.querySelector(".products-content__products");

	const products = await getDocs(collection(db, "products"));

	products.forEach((product) => {
		productList.innerHTML += productCard(
			product.data().name,
			product.data().price,
			product.data().imageUrl,
			product.data().isFire,
			"product-card_mobile"
		);
	});
}
