export function openBurgerMenuDropdown() {
	document.addEventListener("click", (e) => {
		const dropdownBtn = e.target.closest(".burger-menu-dropdown__btn");
		if (!dropdownBtn) return;

		dropdownBtn.parentElement.classList.toggle("open");
		dropdownBtn.querySelector(".burger-menu-dropdown__icon").classList.toggle("burger-menu-dropdown__icon_open");
	});
}
