if (document.querySelector(".blogs-page")) {
	const { getFirebase } = await import("../../firebase.js");
	const { orderBy } = await import("firebase/firestore");

	const { getBlogs } = await import("./get-blogs.js");
	const { blogFiltration } = await import("./blog-filtration.js");
	const { initDropdownList } = await import("../../common/dropdown.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	// params blogs after reload
	getBlogs(db, orderBy("createdAt", "desc"));
	blogFiltration(db);

	initDropdownList();

	await initGeneral(db);
}
