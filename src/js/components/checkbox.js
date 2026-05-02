export function checkbox(title, checkboxId, value, appearance) {
	const base = import.meta.env.BASE_URL;

	return `
  <label class="checkbox ${appearance}">
    <input type="checkbox" class="checkbox__input" id="${checkboxId}" value="${value}" />
    <div class="checkbox__box">
      <svg class="checkbox__icon">
        <use href="${base}images/sprites.svg#checker-icon"></use>
      </svg>
    </div>
    <span class="checkbox__text">${title}</span>
  </label>
  `;
}
