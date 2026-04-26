import { isEmpty, isLength } from "validator";
import IMask from "imask";
import { displayError, setSuccess, clearErrorText } from "./message-validation";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function paymentValidation() {
	const form = document.getElementById("payment-form");
	if (!form) return;

	const cardInput = form.querySelector("#payment-card");
	const dateInput = form.querySelector("#payment-date");
	const ccvInput = form.querySelector("#payment-ccv");
	const submitBtn = form.querySelector(".payment-info__button");

	IMask(cardInput, {
		mask: "0000 0000 0000 0000",
	});
	IMask(dateInput, {
		mask: "00/00",
	});

	cardInput.addEventListener("input", () => {
		const isEmptyCard = !isEmpty(cardInput.value.trim());

		if (!isEmptyCard) {
			displayError(cardInput, "field can NOT be empty.");
		} else {
			setSuccess(cardInput, "");
		}
	});

	dateInput.addEventListener("input", () => {
		const isEmptyDate = !isEmpty(dateInput.value.trim());

		if (!isEmptyDate) {
			displayError(dateInput, "field can NOT be empty.");
		} else {
			setSuccess(dateInput, "");
		}
	});

	ccvInput.addEventListener("input", () => {
		const isEmptyCCV = !isEmpty(ccvInput.value.trim());
		const isLengthCCV = isLength(ccvInput.value.trim(), { max: 3 });

		if (!isEmptyCCV) {
			displayError(ccvInput, "field can NOT be empty.");
		} else if (!isLengthCCV) {
			displayError(ccvInput, "field should have MAX 3 symbols");
		} else {
			setSuccess(ccvInput, "");
		}
	});

	form.addEventListener("input", () => {
		const isEmptyCard = !isEmpty(cardInput.value.trim());
		const isEmptyDate = !isEmpty(dateInput.value.trim());
		const isEmptyCCV = !isEmpty(ccvInput.value.trim());
		const isLengthCCV = isLength(ccvInput.value.trim(), { max: 3 });

		console.log(isEmptyCard, isEmptyDate, isEmptyCCV, isLengthCCV);

		if (isEmptyCard && isEmptyDate && isEmptyCCV && isLengthCCV) {
			submitBtn.classList.remove("payment-info__button_disabled");
		} else {
			submitBtn.classList.add("payment-info__button_disabled");
		}
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		clearErrorText(cardInput, "");
		clearErrorText(dateInput, "");
		clearErrorText(ccvInput, "");

		submitBtn.classList.add("payment-info__button_disabled");

		Toastify({
			text: `Payment has been sent successfully`,
			duration: 4000,
			gravity: "top",
			position: "center",
			backgroundColor: "#359740",
		}).showToast();
	});
}
