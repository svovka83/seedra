import { getDoc, doc, updateDoc } from "firebase/firestore";

export function addShipping(db) {
	document.addEventListener("click", async (e) => {
		const option = e.target.closest(".dropdown__option");
		if (!option) return;

		const typeOption = option.querySelector(".dropdown__value");
		const typeShipping = typeOption.textContent;

		try {
			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			let shipping;

			if (typeShipping === "On foot") {
				shipping = 2000;
			} else if (typeShipping === "By car") {
				shipping = 5000;
			} else if (typeShipping === "By plane") {
				shipping = 10000;
			} else shipping = 0;

			const newAmount = (snapshotTotal.data().price + shipping) * snapshotTotal.data().discount;

			await updateDoc(doc(db, "total", "14"), {
				shippingName: typeShipping,
				shippingPrice: shipping,
				amount: newAmount,
			});
		} catch (e) {
			console.log(e);
		}
	});
}
