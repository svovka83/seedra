import { collection, query, onSnapshot, getDocs, where } from "firebase/firestore";

export function getBurgerMenuSearchProducts(db) {
	const inputBurgerSearch = document.getElementById("search-burger-menu");
	if (!inputBurgerSearch) return;

	inputBurgerSearch.addEventListener("input", (e) => {
		const search = e.target.value.toLowerCase().trim();
		getBurgerMenuSearch(db, search);
	});
}

export async function getBurgerMenuSearch(db, search) {
	const base = import.meta.env.BASE_URL;

	const productList = document.querySelector(".modal-burger-search");
	if (!productList) return;

	if (search === "") {
		let productsString = "";
		productsString = `<p class="modal-burger-search__product-none">Name of product not written</p>`;
		productList.innerHTML = productsString;
	} else {
		const q = query(
			collection(db, "products"),
			where("nameSearch", ">=", search),
			where("nameSearch", "<=", search + "\uf8ff")
		);

		const snapshot = await getDocs(q);

		if (snapshot.docChanges().length === 0) {
			let productsString = "";
			productsString = `<p class="modal-burger-search__product-none">Product not found</p>`;
			productList.innerHTML = productsString;
		} else {
			onSnapshot(q, (snapshot) => {
				let productsString = "";

				snapshot.forEach((product) => {
					productsString += `<a href="${base}src/pages/one-product/index.html?id=${
						product.id
					}" class="modal-burger-search__product">${product.data().name}</a>`;
				});

				productList.innerHTML = productsString;
			});
		}
	}
}
