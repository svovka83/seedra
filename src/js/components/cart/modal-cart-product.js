import { productCounter } from "./product-counter";

export function modalCartProduct(id, name, imageUrl, quantity, price) {
	return `
  <div class="modal-cart-product" id="${id}">

    <div class="modal-cart-product__title-block">
      <img class="modal-cart-product__img" src="${imageUrl}" alt="cart product image" />
      <h4 class="modal-cart-product__name">${name}</h4>
    </div>

    <div class="modal-cart-product__counter">
        ${productCounter(quantity)}
    </div>

    <div class="modal-cart-product__bottom">
      <span class="modal-cart-product__pack">
        1 pack
      </span>
      <span class="modal-cart-product__price">
        $${price / 100}
      </span>
    </div>

  </div>
  `;
}
