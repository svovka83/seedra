function e(e,t,n,r){return`
  <button class="btn ${e}" id="${r}">
    <svg class="btn__icon">
      <use href="/seedra/images/sprites.svg#${n}"></use>
    </svg>
    <span class="btn__title">
      ${t?`Remove from cart`:`Add to card`}
    </span>
  </button>
  `}export{e as t};