export function priceIntupsRange(minId, maxId, rangeId) {
	return `
    <div class="price-range">
      <div class="price-range-inputs">
        <div class="price-range-inputs__field">
          <span class="price-range-inputs__label">From</span>
          <label for="${minId}">
            <span class="price-range-inputs__dollar">$</span>
            <input
              class="price-range-inputs__input"
              id="${minId}"
              type="number"
              placeholder="0" />
          </label>
        </div>

        <span class="price-range-inputs__separator"></span>

        <div class="price-range-inputs__field">
          <span class="price-range-inputs__label">To</span>
          <label for="${maxId}">
            <span class="price-range-inputs__dollar">$</span>
            <input
              class="price-range-inputs__input"
              id="${maxId}"
              type="number"
              placeholder="1000" />
          </label>
        </div>
      </div>

      <div class="price-range-slider" id="${rangeId}"></div>
    </div>
  `;
}
