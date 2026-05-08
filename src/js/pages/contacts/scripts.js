if (document.querySelector(".contacts-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { contactsValidation } = await import("./contacts-validation");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	contactsValidation();

	await initGeneral(db);
}
