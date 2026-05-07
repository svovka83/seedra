export function buttonAdd(classBtn, checked, iconId, btnId) {
	const base = import.meta.env.BASE_URL;

	return `
  <button class="btn ${classBtn}" id="${btnId}">
    <svg class="btn__icon">
      <use href="${base}images/sprites.svg#${iconId}"></use>
    </svg>
    <span class="btn__title">
      ${checked ? "Remove from cart" : "Add to card"}
    </span>
  </button>
  `;
}
