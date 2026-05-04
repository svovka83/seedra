if (document.querySelector(".payment-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getPayment } = await import("./get-payment.js");
	const { paymentValidation } = await import("./payment-validation");

	const { db } = getFirebase();

	getPayment(db);

	paymentValidation();
}
