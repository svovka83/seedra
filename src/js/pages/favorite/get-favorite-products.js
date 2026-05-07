import { collection, query, onSnapshot, where } from "firebase/firestore";
import { productCard } from "../../components/product/product-card";

export async function getFavoriteProducts(db) {
	const productsList = document.querySelector(".favorite-products");
	if (!productsList) return;

	const q = query(collection(db, "products"), where("favorite", "==", true));

	onSnapshot(q, (snapshot) => {
		let favoriteProducts = "";

		snapshot.forEach((product) => {
			favoriteProducts += productCard(
				product.id,
				product.data().checked,
				product.data().favorite,
				product.data().name,
				product.data().price,
				product.data().imageUrl,
				product.data().isFire,
				"",
				""
			);
		});

		productsList.innerHTML = favoriteProducts;

		if (productsList.innerHTML === "")
			productsList.innerHTML = `<p class="favorite-products__not-found">No favorite products</p>`;
	});
}
