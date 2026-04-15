export function button(classBtn, titleBtn, iconId) {
	return `
  <button class="btn ${classBtn}">
    <svg class="btn__icon">
      <use xlink:href="./images/sprites.svg#${iconId}"></use>
    </svg>
    <span class="btn__title">
      ${titleBtn}
    </span>
  </button>
  `;
}
