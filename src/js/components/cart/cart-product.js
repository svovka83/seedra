import { productCounter } from "./product-counter";

export function cartProduct(id, name, imageUrl, quantity, price, total) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="cart-product" data-id="${id}">
    <div class="cart-product__title-block">
      <img class="cart-product__img" src="${imageUrl}" alt="cart product image" />
      <h4 class="cart-product__name">${name}</h4>
    </div>

    <div class="cart-product__counter">
      <span class="cart-product__heading">
        AMOUNT
      </span>
      <span>
        ${productCounter(quantity)}
      </span>
    </div>

    <div class="cart-product__price">
      <span class="cart-product__heading">
        PRICE
      </span>
      <span>
        $${price / 100}
      </span>
    </div>

    <div class="cart-product__total">
      <span class="cart-product__heading">
        TOTAL
      </span>
      <span>
        $${total / 100}
      </span>
    </div>

    <button class="cart-product__delete">
      <svg class="cart-product__delete-icon">
        <use href="${base}images/sprites.svg#close-icon"></use>
      </svg>
    </button>
  </div>
  `;
}
