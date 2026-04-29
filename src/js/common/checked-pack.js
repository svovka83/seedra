export function checkedPack() {
	document.addEventListener("click", (e) => {
		const pack = e.target.closest(".pack");
		// const radio = pack.querySelector(".pack__input");
		// const radios = pack.querySelectorAll(".pack__input");
		// if (!pack) return;

		// const current = radio.checked;

		// if (current) {
		// 	pack.classList.add("pack_checked");
		// }

		// radios
		// 	.filter((radio) => !radio.checked)
		// 	.forEach((radio) => {
		// 		const radio = pack.querySelector(".pack__input");
		// 		radio.checked = false;
		// 		pack.classList.remove("pack_checked");
		// 	});
	});
}
