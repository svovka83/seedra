export function modalCategory(categoryId, categoryName, products) {
	return `
    <section class="modal-category">
      <h3 class="modal-category__title">${categoryName}</h3>
      
      <div class="modal-category__list">
        ${products.docs
			.map(
				(product) =>
					`<hr class="modal-category__hr-mobile"/><span class="modal-category__item" id="${
						product.id
					}">${product.data().name.slice(0, 24)}</span>`
			)
			.join("")}
      </div>

      <hr class="${categoryName === "all" ? "modal-category__hr_none" : "modal-category__hr"}" />

      <button class="${categoryName === "all" ? "modal-category__view-all_none" : "modal-category__view-all"}">
        <span>View all</span>
        <span class="modal-category__view-all-text" id="${categoryId}">${categoryName}</span> 
      </button>
    </section>
  `;
}
