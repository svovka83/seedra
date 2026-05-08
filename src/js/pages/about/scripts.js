if (document.querySelector(".about-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	await initGeneral(db);
}
