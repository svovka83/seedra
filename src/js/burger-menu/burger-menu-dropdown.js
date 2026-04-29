export function burgerMenuDropdown(categoryId, categoryName, products) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="burger-menu-dropdown">
    <button class="burger-menu-dropdown__btn">
      <span class="burger-menu-dropdown__title">${categoryName}</span>
      <svg class="burger-menu-dropdown__icon">
        <use href="${base}images/sprites.svg#chevron-icon"></use>
      </svg>
    </button>

    <div class="burger-menu-dropdown__content">
      <div class="burger-menu-dropdown__inner">
        ${products.docs
			.filter((product) => (categoryId === "111" ? product : product.data().categoryId === categoryId))
			.map(
				(product) =>
					`<a class="burger-menu-dropdown__inner-burger" href="${base}src/pages/one-product/index.html?id=${
						product.id
					}">${product.data().name}</a>`
			)
			.join("")}
      </div>
    </div>
  </div>
  `;
}
