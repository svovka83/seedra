import { onSnapshot, collection, query, limit } from "firebase/firestore";
import { productCard } from "../../components/product-card";

export async function getProductStaticCards(db) {
	const productList = document.querySelector(".our-products__product-cards-static");
	if (!productList) return;

	const q = query(collection(db, "products"), limit(6));

	onSnapshot(q, (snapshot) => {
		let html = "";

		snapshot.forEach((product) => {
			html += productCard(
				product.id,
				product.data().checked,
				product.data().name,
				product.data().price,
				product.data().imageUrl,
				product.data().isFire
			);
		});

		productList.innerHTML = html;
	});
}

export async function getProductSliderCards(db) {
	const productList = document.querySelector(".swiper-wrapper.our-products__wrapper");
	if (!productList) return;

	const q = query(collection(db, "products"));

	onSnapshot(q, (snapshot) => {
		let html = "";

		snapshot.forEach((product) => {
			html += `<div class="swiper-slide">${productCard(
				product.id,
				product.data().checked,
				product.data().name,
				product.data().price,
				product.data().imageUrl,
				product.data().isFire,
				"product-card_slider",
				"product-card__yellow-heart_slider"
			)}</div>`;
		});

		productList.innerHTML = html;
	});
}
