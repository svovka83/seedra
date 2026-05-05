import { priceIntupsRange } from "../price-inputs-range";

export function filterDropdownRange(title, classBtn, classContent, minId, maxId, rangeId) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="filter-dropdown">

    <button class="filter-dropdown__btn ${classBtn}">
      <span class="filter-dropdown__title">${title}</span>
      <svg class="filter-dropdown__icon">
        <use href="${base}images/sprites.svg#chevron-icon"></use>
      </svg>
    </button>

    <div class="filter-dropdown__content ${classContent}">
      <div class="filter-dropdown__inner">

        ${priceIntupsRange(minId, maxId, rangeId)}

      </div>
    </div>

  </div>
  `;
}
