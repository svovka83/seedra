export function ranking(classIcon) {
	const base = import.meta.env.BASE_URL;

	return `
    <div class="ranking">
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="${base}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="${base}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="${base}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="${base}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${classIcon}">
        <use xlink:href="${base}images/sprites.svg#star-half-icon"></use>
      </svg>
    </div>
  `;
}
