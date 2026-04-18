import { collection, getDocs, query, where, limit, onSnapshot, addDoc } from "firebase/firestore";
import { productCard } from "../../components/product-card";
import { attachFilterListeners } from "./filters/attach-filter-listeners";

let unsubscribe = null;

export async function getFilterProducts(db) {
	const productList = document.querySelector(".products-content__products");
	const checkboxHybrid = document.getElementById("hybrid");
	const checkboxPollinated = document.getElementById("pollinated");
	const checkboxOrganic = document.getElementById("organic");
	const checkboxPelleted = document.getElementById("pelleted");

	if (!productList) return;

	if (unsubscribe) unsubscribe();

	const selectedTypes = [];

	if (checkboxHybrid.checked) selectedTypes.push(checkboxHybrid.value);
	if (checkboxPollinated.checked) selectedTypes.push(checkboxPollinated.value);
	if (checkboxOrganic.checked) selectedTypes.push(checkboxOrganic.value);
	if (checkboxPelleted.checked) selectedTypes.push(checkboxPelleted.value);

	const constraints = [limit(9)];

	if (selectedTypes.length) {
		constraints.push(where("type", "in", selectedTypes));
	}

	const q = query(collection(db, "products"), ...constraints);

	unsubscribe = onSnapshot(q, (snapshot) => {
		let productsString = "";

		snapshot.forEach((product) => {
			productsString += productCard(
				product.id,
				product.data().name,
				product.data().price,
				product.data().imageUrl,
				product.data().isFire,
				"product-card_mobile"
			);
		});

		productList.innerHTML = productsString;
	});

	const checkboxes = [checkboxHybrid, checkboxPollinated, checkboxOrganic, checkboxPelleted];
	attachFilterListeners(db, checkboxes);
}

// if (hybrid.checked) constraints.push(where("type", "==", "hybrid"));
// if (sale.checked) constraints.push(where("isSale", "==", true));
// ВАЖЛИВО про "in" максимум 10 значень
