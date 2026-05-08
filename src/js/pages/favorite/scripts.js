if (document.querySelector(".favorite-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getFavoriteProducts } = await import("./get-favorite-products.js");
	const { addRemoveProduct } = await import("../../firebase/services/cart/add-remove-product.js");
	const { addRemoveFavorite } = await import("../../firebase/services/cart/add-remove-favorite.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	getFavoriteProducts(db);
	addRemoveProduct(db);
	addRemoveFavorite(db);

	await initGeneral(db);
}
