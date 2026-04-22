import { getDoc, doc, updateDoc } from "firebase/firestore";

export function promocode(db) {
	const promocode = document.getElementById("promocode");
	if (!promocode) return;

	promocode.addEventListener("input", async (e) => {
		const inputPromocode = e.target.value;

		try {
			const refTotal = doc(db, "total", "14");
			const snapshotTotal = await getDoc(refTotal);

			let discount;

			if (inputPromocode === "avada media") {
				discount = 0.5;
			} else {
				discount = 1;
			}

			const newAmount = (snapshotTotal.data().price + snapshotTotal.data().shipping) * discount;

			await updateDoc(doc(db, "total", "14"), {
				amount: newAmount,
			});
		} catch (e) {
			console.log(e);
		}
	});
}
