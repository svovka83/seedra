export function emptyCart(title, iconId) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="empty-cart">
    <h3 class="empty-cart__title">No products in the ${title} for now.</h3>
    <svg class="empty-cart__icon">
      <use href="${base}images/sprites.svg#${iconId}"></use>
    </svg>
  </div>
`;
}
