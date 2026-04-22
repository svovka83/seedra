export function buttonCard(classBtn, titleBtn, checked) {
	const base = import.meta.env.BASE_URL;

	return `
  <button class="btn ${classBtn} ${checked && "btn_icon-active"}">
    <svg class="btn__icon">
      <use href="${base}images/sprites.svg#${checked ? "checked-icon" : "cart-icon"}"></use>
    </svg>
    <span class="btn__title">
      ${titleBtn}
    </span>
  </button>
  `;
}
