export function oneProductPack(packQuantity, packPrice, index) {
	return `
    <label class="pack" for="radio${index}">
      <input class="pack__input" type="radio" name="pack" id="radio${index}" />
      <span class="pack__quantity-pack">${packQuantity} pack</span>
      <span class="pack__start">start from</span>
      <span class="pack__price">$${packPrice / 100}</span>
    </label>
  `;
}
