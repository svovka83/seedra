import{t as e}from"./title-DQiau4so.js";function t(e){let t=`/seedra/`;return`
    <div class="ranking">
      <svg class="ranking__icon-star ${e}">
        <use xlink:href="${t}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${e}">
        <use xlink:href="${t}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${e}">
        <use xlink:href="${t}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${e}">
        <use xlink:href="${t}images/sprites.svg#star-full-icon"></use>
      </svg>
      <svg class="ranking__icon-star ${e}">
        <use xlink:href="${t}images/sprites.svg#star-half-icon"></use>
      </svg>
    </div>
  `}function n(e,t,n){return`
  <button class="btn ${e} ${n&&`btn_icon-active`}">
    <svg class="btn__icon">
      <use href="/seedra/images/sprites.svg#${n?`checked-icon`:`cart-icon`}"></use>
    </svg>
    <span class="btn__title">
      ${t}
    </span>
  </button>
  `}function r(r,i,a,o,s,c,l,u){let d=`/seedra/`;return`
  <div class="product-card ${l}" id="${r}">
    <a class="product-card__link" href="${d}src/pages/one-product/index.html?id=${r}"></a>

    <img class="product-card__img" src="${s}" alt="product card image" />

    <div class="product-card__content">
      <div class="product-card__top">
        ${t(`ranking__icon-star_product`)}
        <span class="product-card__quantity">(123)</span>
      </div>

      <div class="product-card__title">
        ${e(`h4`,a,`title_card`)}
      </div>

      <div class="product-card__bottom">
        <svg class="${c?`product-card__icon`:`product-card__no-fire`}">
          <use xlink:href="${d}images/sprites.svg#fire-icon"></use>
        </svg>

        <span class="product-card__price">$${o/100}</span>

        <span class="${c?`product-card__old-price`:`product-card__no-fire`}" >$15.56</span>

        <div class="product-card__button">
          ${n(`btn_icon`,``,i)}
        </div>
      </div>
    </div>

    <div class="product-card__yellow-heart ${u}">
      <svg class="product-card__icon-heart">
        <use xlink:href="${d}images/sprites.svg#heart-icon"></use>
      </svg>
    </div>

  </div>
  `}export{t as n,r as t};