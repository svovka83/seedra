import { isEmpty, isEmail } from "validator";
import { displayError, setSuccess, clearErrorText } from "../../utils/message-validation";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function contactsValidation() {
	const form = document.getElementById("contacts-form");
	if (!form) return;

	const nameInput = form.querySelector("#contacts-name");
	const emailInput = form.querySelector("#contacts-email");
	const commentInput = form.querySelector("#contacts-comment");
	const submitBtn = form.querySelector(".btn.btn_text");

	nameInput.addEventListener("input", () => {
		const isEmptyName = !isEmpty(nameInput.value.trim());

		if (!isEmptyName) {
			displayError(nameInput, "field can NOT be empty.");
		} else {
			setSuccess(nameInput, "");
		}
	});

	emailInput.addEventListener("input", () => {
		const isValidEmail = isEmail(emailInput.value);

		if (!isValidEmail) {
			displayError(emailInput, "email is NOT valid.");
		} else {
			setSuccess(emailInput, "");
		}
	});

	form.addEventListener("input", () => {
		const isEmptyName = !isEmpty(nameInput.value.trim());
		const isValidEmail = isEmail(emailInput.value);

		if (isEmptyName && isValidEmail) {
			submitBtn.classList.remove("btn_disabled");
		} else {
			submitBtn.classList.add("btn_disabled");
		}
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const userName = nameInput.value;

		clearErrorText(nameInput);
		clearErrorText(emailInput);
		clearErrorText(commentInput);

		submitBtn.classList.add("btn_disabled");

		Toastify({
			text: `${userName} has sent the message successfully`,
			duration: 4000,
			gravity: "top",
			position: "center",
			backgroundColor: "#359740",
		}).showToast();
	});
}
