export function productCounter(quantity) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="product-counter">
    <button class="${quantity === 1 ? "product-counter__minus-disabled" : "product-counter__minus"}">
      <svg class="${quantity === 1 ? "product-counter__icon-disabled" : "product-counter__icon"}">
        <use href="${base}images/sprites.svg#minus-icon"></use>
      </svg>
    </button>

    <button class="product-counter__quantity">${quantity}</button>

    <button class="product-counter__plus">
      <svg class="product-counter__icon">
        <use href="${base}images/sprites.svg#plus-icon"></use>
      </svg>
    </button>
  </div>
  `;
}
