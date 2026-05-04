export function openMobileFilter() {
	const openBtn = document.getElementById("open-mobile-filter");
	const modalWindow = document.getElementById("mobile-filter");
	if (!openBtn) return;
	if (!modalWindow) return;

	openBtn.addEventListener("click", () => {
		if (!modalWindow.classList.contains("mobile-filter_open")) {
			modalWindow.classList.add("mobile-filter_open");
		} else {
			modalWindow.classList.remove("mobile-filter_open");
		}
	});

	window.addEventListener("resize", () => {
		if (modalWindow.classList.contains("mobile-filter_open")) {
			modalWindow.classList.remove("mobile-filter_open");
		}
	});
}
