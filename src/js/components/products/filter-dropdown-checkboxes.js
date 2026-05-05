import { checkbox } from "../checkbox";

export function filterDropdownCheckboxes(
	title,
	classBtn,
	classContent,
	appearance1,
	appearance2,
	appearance3,
	appearance4,
	option1,
	id1,
	value1,
	option2,
	id2,
	value2,
	option3,
	id3,
	value3,
	option4,
	id4,
	value4
) {
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

        <div class="filter-dropdown__option">
          ${checkbox(option1, id1, value1, appearance1)}
        </div>

        <div class="filter-dropdown__option">
          ${checkbox(option2, id2, value2, appearance2)}
        </div>

        <div class="filter-dropdown__option">
          ${checkbox(option3, id3, value3, appearance3)}
        </div>

        <div class="filter-dropdown__option">
          ${checkbox(option4, id4, value4, appearance4)}
        </div>
      </div>
    </div>

  </div>
  `;
}
