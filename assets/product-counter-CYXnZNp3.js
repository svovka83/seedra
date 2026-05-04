function e(e){let t=`/seedra/`;return`
  <div class="product-counter">
    <button class="${e===1?`product-counter__minus-disabled`:`product-counter__minus`}">
      <svg class="${e===1?`product-counter__icon-disabled`:`product-counter__icon`}">
        <use href="${t}images/sprites.svg#minus-icon"></use>
      </svg>
    </button>

    <button class="product-counter__quantity">${e}</button>

    <button class="product-counter__plus">
      <svg class="product-counter__icon">
        <use href="${t}images/sprites.svg#plus-icon"></use>
      </svg>
    </button>
  </div>
  `}export{e as t};