import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { modalCategory } from "../../../components/modals/modal-category";

export async function getModalCategoryList(db, categoryId) {
	const modalCategoryList = document.querySelector(".products-content__modal");
	if (!modalCategoryList) return;

	const refCategory = doc(db, "categories", categoryId);
	const category = await getDoc(refCategory);
	const categoryName = category.data().name;

	let q;

	if (categoryName === "all") {
		q = query(collection(db, "products"));
	} else {
		q = query(collection(db, "products"), where("categoryId", "==", categoryId));
	}

	const products = await getDocs(q);

	modalCategoryList.innerHTML = "";

	modalCategoryList.innerHTML = `<span class="products-content__modal-triangle-pointer"></span>`;
	modalCategoryList.innerHTML = modalCategory(category.id, category.data().name, products);
}
