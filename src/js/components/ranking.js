export function ranking(classIcon) {
	return `
    <div class="ranking">
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="./images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="./images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="./images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="./images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="./images/sprites.svg#star-half-icon"></use>
      </svg>
    </div>
  `;
}
