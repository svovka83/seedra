import { collection, getDocs, addDoc } from "firebase/firestore";

import { button } from "../../components/button";

export async function getCategories(db) {
	const categoryList = document.querySelector(".categories-tags");
	if (!categoryList) return;

	const categories = await getDocs(collection(db, "categories"));

	categories.forEach((category) => {
		categoryList.innerHTML += button("btn_icon-text", category.data().name, category.data().iconId);
	});
}
