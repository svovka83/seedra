if (document.querySelector(".one-blog-page")) {
	const { getFirebase } = await import("../../firebase.js");

	const { oneBlogTop } = await import("./one-blog-top.js");
	const { blogSlider } = await import("../../sliders/blog-slider.js");
	const { initGeneral } = await import("../../init-general.js");

	const { db } = getFirebase();

	oneBlogTop(db);
	blogSlider();

	await initGeneral(db);
}
