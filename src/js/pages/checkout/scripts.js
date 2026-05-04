if (document.querySelector(".checkout-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { getCheckout } = await import("./get-checkout.js");
	const { checkoutValidation } = await import("./checkout-validation");

	const { db } = getFirebase();

	getCheckout(db);

	checkoutValidation();
}
