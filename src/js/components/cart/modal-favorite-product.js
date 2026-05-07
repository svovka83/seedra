export function modalFavoriteProduct(id, name, imageUrl, price) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="modal-favorite-product" data-id="${id}">

    <a class="modal-favorite-product__title-block" href="${base}src/pages/one-product/index.html?id=${id}">
      <img class="modal-favorite-product__img" src="${imageUrl}" alt="cart product image" />
      <h4 class="modal-favorite-product__name">${name}</h4>
    </a>

    <div class="modal-favorite-product__remove">
      <button class="modal-favorite-product__remove-btn">
        <svg class="modal-favorite-product__remove-icon">
          <use href="${base}images/sprites.svg#close-icon"></use>
        </svg>
      </button>
    </div>

    <div class="modal-favorite-product__bottom">
      <span class="modal-favorite-product__pack">
        1 pack
      </span>
      <span class="modal-favorite-product__price">
        $${price / 100}
      </span>
    </div>

  </div>
  `;
}
