import { collection, query, onSnapshot, getDocs, where } from "firebase/firestore";

export function getModalHeaderProducts(db) {
	const inputHeaderSearch = document.getElementById("search-header-product");
	if (!inputHeaderSearch) return;

	inputHeaderSearch.addEventListener("input", (e) => {
		const search = e.target.value.toLowerCase().trim();
		getModalHeaderSearch(db, search);
	});
}

export async function getModalHeaderSearch(db, search) {
	const base = import.meta.env.BASE_URL;

	const productList = document.querySelector(".modal-header-search__inner");
	if (!productList) return;

	if (search === "") {
		let productsString = "";
		productsString = `<p class="modal-header-search__product-none">Name of product not written</p>`;
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
			productsString = `<p class="modal-header-search__product-none">Product not found</p>`;
			productList.innerHTML = productsString;
		} else {
			onSnapshot(q, (snapshot) => {
				let productsString = "";

				snapshot.forEach((product) => {
					productsString += `<a href="${base}src/pages/one-product/index.html?id=${
						product.id
					}" class="modal-header-search__product">${product.data().name}</a>`;
				});

				productList.innerHTML = productsString;
			});
		}
	}
}
