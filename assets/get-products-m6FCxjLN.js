import{H as e,_ as t,b as n,g as r,h as i,p as a}from"./index.esm-Bwpb2Ko_.js";import{t as o}from"./title-DQiau4so.js";import{t as s}from"./state-filters-YwoS1PV_.js";function c(e){let t=`/seedra/`;return`
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
  `}function l(e,t,n){return`
  <button class="btn ${e} ${n&&`btn_icon-active`}">
    <svg class="btn__icon">
      <use href="/seedra/images/sprites.svg#${n?`checked-icon`:`cart-icon`}"></use>
    </svg>
    <span class="btn__title">
      ${t}
    </span>
  </button>
  `}function u(e,t,n,r,i,a,s,u){let d=`/seedra/`;return`
  <div class="product-card ${s}" id="${e}">
    <a class="product-card__link" href="${d}src/pages/one-product/index.html?id=${e}"></a>

    <img class="product-card__img" src="${i}" alt="product card image" />

    <div class="product-card__content">
      <div class="product-card__top">
        ${c(`ranking__icon-star_product`)}
        <span class="product-card__quantity">(123)</span>
      </div>

      <div class="product-card__title">
        ${o(`h4`,n,`title_card`)}
      </div>

      <div class="product-card__bottom">
        <svg class="${a?`product-card__icon`:`product-card__no-fire`}">
          <use xlink:href="${d}images/sprites.svg#fire-icon"></use>
        </svg>

        <span class="product-card__price">$${r/100}</span>

        <span class="${a?`product-card__old-price`:`product-card__no-fire`}" >$15.56</span>

        <div class="product-card__button">
          ${l(`btn_icon`,``,t)}
        </div>
      </div>
    </div>

    <div class="product-card__yellow-heart ${u}">
      <svg class="product-card__icon-heart">
        <use xlink:href="${d}images/sprites.svg#heart-icon"></use>
      </svg>
    </div>

  </div>
  `}function d(e){let t=new URLSearchParams;e.types?.length&&t.set(`types`,e.types.join(`,`)),e.featured?.length&&t.set(`featured`,e.featured.join(`,`)),e.growing?.length&&t.set(`growing`,e.growing.join(`,`)),e.use?.length&&t.set(`use`,e.use.join(`,`)),e.additional?.length&&t.set(`additional`,e.additional.join(`,`));let n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},``,n)}async function f(o,c=r(`price`,`desc`),l=``,f=10,p=1e3,m,h,g,_,v,y=``,b=``){d(s);let x=document.querySelector(`.products-content__products`);if(!x)return;let S=[];S.push(c),l!==``&&S.push(n(`nameSearch`,`>=`,l),n(`nameSearch`,`<=`,l+``)),S.push(n(`price`,`>=`,f*100),n(`price`,`<=`,p*100)),m.length&&S.push(n(`type`,`in`,m)),h.length&&S.push(n(`featured`,`in`,h)),g.length&&S.push(n(`growing`,`in`,g)),_.length&&S.push(n(`use`,`in`,_)),v.length&&S.push(n(`additional`,`in`,v)),y&&S.push(n(`__name__`,`==`,y)),b&&S.push(n(`categoryId`,`==`,b));let C=t(e(o,`products`),...S);if((await a(C)).docChanges().length===0){let e=``;return e=`<p class="products-content__not-found">Product not found</p>`,x.innerHTML=e}i(C,e=>{let t=``;e.forEach(e=>{t+=u(e.id,e.data().checked,e.data().name,e.data().price,e.data().imageUrl,e.data().isFire,`product-card_mobile`)}),x.innerHTML=t})}export{u as n,c as r,f as t};