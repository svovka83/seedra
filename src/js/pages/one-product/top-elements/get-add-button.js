import { doc, onSnapshot } from "firebase/firestore";
import { buttonAdd } from "../../../components/button-add";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getAddButton(db) {
	const addBtn = document.querySelector(".one-product-top-content__bottom-button-add");
	if (!addBtn) return;

	const productRef = doc(db, "products", productId);

	onSnapshot(productRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const checked = snapshot.data().checked;

		addBtn.innerHTML = buttonAdd("btn_text", checked, "", "one-product-add-btn");
	});
}
