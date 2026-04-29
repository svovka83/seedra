import { collection, getDocs } from "firebase/firestore";
import { burgerMenuDropdown } from "./burger-menu-dropdown";

export async function getBurgerMenuDropdowns(db) {
	const dropdowns = document.querySelector(".burger-menu__dropdowns");
	if (!dropdowns) return;

	const categories = await getDocs(collection(db, "categories"));
	const products = await getDocs(collection(db, "products"));

	let html = "";

	categories.forEach((category) => {
		html += burgerMenuDropdown(category.id, category.data().name, products);
	});

	dropdowns.innerHTML = html;
}
