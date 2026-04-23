export function checkoutCart(id, name, total) {
	return `
  <div class="checkout-cart" id="${id}">
    <h4 class="checkout-cart__name">${name}</h4>

    <span class="checkout-cart__total">$${total / 100}</span>

    <hr class="checkout-cart__hr" />
  </div>
  `;
}
