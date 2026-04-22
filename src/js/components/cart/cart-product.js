import { productCounter } from "./product-counter";

export function cartProduct(id, name, imageUrl, quantity, price, total) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="cart-product" id="${id}">
    <img class="cart-product__img" src="${imageUrl}" alt="cart product image" />
    
    <h4 class="cart-product__name">${name}</h4>

    ${productCounter(quantity)}

    <span class="cart-product__price">$${price / 100}</span>
    <span class="cart-product__total">$${total / 100}</span>

    <button class="cart-product__delete">
      <svg class="cart-product__delete-icon">
        <use href="${base}images/sprites.svg#close-icon"></use>
      </svg>
    </button>
  </div>
  `;
}
