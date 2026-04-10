export function initDropdownList() {
	const dropdown = document.querySelectorAll(".dropdown");

	dropdown.forEach((drop) => {
		const control = drop.querySelector(".dropdown__control");
		const initial = drop.querySelector(".dropdown__initial");
		const icon = drop.querySelector(".dropdown__icon");
		const list = drop.querySelector(".dropdown__list");
		const option_block = drop.querySelectorAll(".dropdown__option");

		control.addEventListener("click", () => {
			if (!control.classList.contains("dropdown__control_open")) {
				control.classList.add("dropdown__control_open");
				icon.classList.add("dropdown__icon_open");
				list.classList.add("dropdown__list_open");
			} else {
				control.classList.remove("dropdown__control_open");
				icon.classList.remove("dropdown__icon_open");
				list.classList.remove("dropdown__list_open");
			}
		});

		option_block.forEach((option) => {
			option.addEventListener("click", () => {
				initial.textContent = option.querySelector(".dropdown__value").textContent;
				control.classList.remove("dropdown__control_open");
				icon.classList.remove("dropdown__icon_open");
				list.classList.remove("dropdown__list_open");
			});
		});
	});
}
