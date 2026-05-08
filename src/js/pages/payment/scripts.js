if (document.querySelector(".payment-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getPayment } = await import("./get-payment.js");
	const { paymentValidation } = await import("./payment-validation");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	getPayment(db);
	paymentValidation();

	await initGeneral(db);
}
