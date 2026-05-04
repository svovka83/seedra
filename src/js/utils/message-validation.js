export const displayError = (element, message) => {
	const imputControl = element.parentElement;
	const errorDisplay = imputControl.querySelector(".validation");
	errorDisplay.innerText = message;
	errorDisplay.classList.add("validation_error");
	element.classList.add("input_error");
};
export const setSuccess = (element, message) => {
	const imputControl = element.parentElement;
	const errorDisplay = imputControl.querySelector(".validation");
	errorDisplay.innerText = message;
	errorDisplay.classList.remove("validation_error");
	element.classList.remove("input_error");
};
export const clearErrorText = (element) => {
	element.value = "";
};
