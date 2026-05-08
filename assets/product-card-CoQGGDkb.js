import{t as e}from"./title-DNGC-3A3.js";import{t}from"./ranking-B1aA4na_.js";function n(e,t,n){return`
  <button class="btn ${e} ${n&&`btn_icon-active`}">
    <svg class="btn__icon">
      <use href="/seedra/images/sprites.svg#${n?`checked-icon`:`cart-icon`}"></use>
    </svg>
    <span class="btn__title">
      ${t}
    </span>
  </button>
  `}function r(e,t){return`
  <div class="product-card__yellow-heart ${t} ${e&&`product-card__yellow-heart-active`}">
    <svg class="product-card__icon-heart">
      <use xlink:href="/seedra/images/sprites.svg#${e?`heart-checked-icon`:`heart-icon`}"></use>
    </svg>
  </div>
  `}function i(i,a,o,s,c,l,u,d,f){let p=`/seedra/`;return`
  <div class="product-card ${d}" id="${i}">
    <a class="product-card__link" href="${p}src/pages/one-product/index.html?id=${i}"></a>

    <img class="product-card__img" src="${l}" alt="product card image" />

    <div class="product-card__content">
      <div class="product-card__top">
        ${t(`ranking__icon-star_product`)}
        <span class="product-card__quantity">(123)</span>
      </div>

      <div class="product-card__title">
        ${e(`h4`,s,`title_card`)}
      </div>

      <div class="product-card__bottom">
        <svg class="${u?`product-card__icon`:`product-card__no-fire`}">
          <use xlink:href="${p}images/sprites.svg#fire-icon"></use>
        </svg>

        <span class="product-card__price">$${c/100}</span>

        <span class="${u?`product-card__old-price`:`product-card__no-fire`}" >$15.56</span>

        <div class="product-card__button">
          ${n(`btn_icon`,``,a)}
        </div>
      </div>
    </div>

    ${r(o,f)}

  </div>
  `}export{i as t};