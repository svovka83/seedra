export function productCounter() {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="product-counter">
    <button class="product-counter__minus">
      <svg class="product-counter__icon">
        <use href="${base}images/sprites.svg#minus-icon"></use>
      </svg>
    </button>

    <button class="product-counter__quantity">1</button>

    <button class="product-counter__plus">
      <svg class="product-counter__icon">
        <use href="${base}images/sprites.svg#plus-icon"></use>
      </svg>
    </button>
</div>
  `;
}
