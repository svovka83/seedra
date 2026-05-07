export function heartCard(favorite, classHeart) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="product-card__yellow-heart ${classHeart} ${favorite && "product-card__yellow-heart-active"}">
    <svg class="product-card__icon-heart">
      <use xlink:href="${base}images/sprites.svg#${favorite ? "heart-checked-icon" : "heart-icon"}"></use>
    </svg>
  </div>
  `;
}
