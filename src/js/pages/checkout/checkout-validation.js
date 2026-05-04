import { isEmpty, isLength } from "validator";
import { isValidPhoneNumber, AsYouType } from "libphonenumber-js";
import { displayError, setSuccess, clearErrorText } from "../../utils/message-validation";

export function checkoutValidation() {
	const form = document.getElementById("checkout-form");
	if (!form) return;

	const nameInput = form.querySelector("#checkout-name");
	const phoneInput = form.querySelector("#checkout-phone");
	const stateInput = form.querySelector("#checkout-state");
	const cityInput = form.querySelector("#checkout-city");
	const addressInput = form.querySelector("#checkout-address");
	const zipCodeInput = form.querySelector("#checkout-zip-code");
	const submitBtn = form.querySelector(".discover_continue");

	nameInput.addEventListener("input", () => {
		const isEmptyName = !isEmpty(nameInput.value.trim());

		if (!isEmptyName) {
			displayError(nameInput, "field can NOT be empty.");
		} else {
			setSuccess(nameInput, "");
		}
	});

	let formatter = new AsYouType();

	phoneInput.addEventListener("input", (e) => {
		if (!phoneInput.value.startsWith("+")) {
			phoneInput.value = "+" + phoneInput.value.replace(/\+/g, "");
		}

		const raw = e.target.value;

		formatter.reset();
		const formatted = formatter.input(raw);

		e.target.value = formatted;

		const isValidPhone = isValidPhoneNumber(phoneInput.value);

		if (!isValidPhone) {
			displayError(phoneInput, "phone number is NOT valid.");
		} else {
			setSuccess(phoneInput, "");
		}
	});
	stateInput.addEventListener("input", () => {
		const isEmptyState = !isEmpty(stateInput.value.trim());

		if (!isEmptyState) {
			displayError(stateInput, "field can NOT be empty.");
		} else {
			setSuccess(stateInput, "");
		}
	});
	cityInput.addEventListener("input", () => {
		const isEmptyCity = !isEmpty(cityInput.value.trim());

		if (!isEmptyCity) {
			displayError(cityInput, "field can NOT be empty.");
		} else {
			setSuccess(cityInput, "");
		}
	});
	addressInput.addEventListener("input", () => {
		const isEmptyAddress = !isEmpty(addressInput.value.trim());

		if (!isEmptyAddress) {
			displayError(addressInput, "field can NOT be empty.");
		} else {
			setSuccess(addressInput, "");
		}
	});
	zipCodeInput.addEventListener("input", () => {
		const isEmptyZip = !isEmpty(zipCodeInput.value.trim());
		const isLengthZip = isLength(zipCodeInput.value.trim(), { max: 5 });

		if (!isEmptyZip) {
			displayError(zipCodeInput, "field can NOT be empty.");
		} else if (!isLengthZip) {
			displayError(zipCodeInput, "field should have MAX 5 symbols.");
		} else {
			setSuccess(zipCodeInput, "");
		}
	});

	form.addEventListener("input", () => {
		const isEmptyName = !isEmpty(nameInput.value.trim());
		const isValidPhone = isValidPhoneNumber(phoneInput.value);
		const isEmptyState = !isEmpty(stateInput.value.trim());
		const isEmptyCity = !isEmpty(cityInput.value.trim());
		const isEmptyAddress = !isEmpty(addressInput.value.trim());
		const isEmptyZip = !isEmpty(zipCodeInput.value.trim());
		const isLengthZip = isLength(zipCodeInput.value.trim(), { max: 5 });

		if (isEmptyName && isValidPhone && isEmptyState && isEmptyCity && isEmptyAddress && isEmptyZip && isLengthZip) {
			submitBtn.classList.remove("discover_disabled");
		} else {
			submitBtn.classList.add("discover_disabled");
		}
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		clearErrorText(nameInput, "");
		clearErrorText(phoneInput, "");
		clearErrorText(stateInput, "");
		clearErrorText(cityInput, "");
		clearErrorText(addressInput, "");
		clearErrorText(zipCodeInput, "");

		submitBtn.classList.add("discover_disabled");
	});
}
