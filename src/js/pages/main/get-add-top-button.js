import { doc, onSnapshot } from "firebase/firestore";
import { buttonAdd } from "../../components/button-add";

export async function getAddTopButton(db) {
	const addBtn = document.querySelector(".main-top__buttons-add");
	if (!addBtn) return;

	const productRef = doc(db, "products", "1");

	onSnapshot(productRef, (snapshot) => {
		if (!snapshot.exists()) return;

		const checked = snapshot.data().checked;

		addBtn.innerHTML = buttonAdd("btn_text btn_adaptive", checked, "", "main-top-add-btn");
	});
}
