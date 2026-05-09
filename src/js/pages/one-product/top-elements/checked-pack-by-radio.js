import { doc, updateDoc } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export function checkedPackByRadio(db) {
	document.addEventListener("click", async (e) => {
		const pack = e.target.closest(".pack");
		const radios = document.querySelectorAll(".pack__input");
		if (!pack) return;
		if (!radios) return;

		radios.forEach((radio) => {
			if (radio.checked) {
				radio.parentElement.classList.add("pack_checked");
			} else {
				radio.parentElement.classList.remove("pack_checked");
			}
		});

		try {
			const quantity = pack.querySelector(".pack__quantity").textContent;
			const quantityNumber = Number(quantity);

			await updateDoc(doc(db, "products", productId), {
				quantity: quantityNumber,
			});
		} catch (e) {
			console.log(e);
		}
	});
}
