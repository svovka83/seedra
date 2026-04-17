export function button(classBtn, titleBtn, iconId) {
	const base = import.meta.env.BASE_URL;

	return `
  <button class="btn ${classBtn}">
    <svg class="btn__icon">
    <use href="${base}images/sprites.svg#${iconId}"></use>
    </svg>
    <span class="btn__title">
      ${titleBtn}
    </span>
  </button>
  `;
}
