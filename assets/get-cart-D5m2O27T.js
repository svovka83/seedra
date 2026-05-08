import{H as e,_ as t,h as n,p as r}from"./index.esm-DIgIDhqE.js";import{t as i}from"./product-counter-Bvu0In2i.js";import{t as a}from"./empty-cart-B5_PuG5j.js";function o(e,t,n,r,a,o){return`
  <div class="cart-product" data-id="${e}">
    <div class="cart-product__title-block">
      <img class="cart-product__img" src="${n}" alt="cart product image" />
      <h4 class="cart-product__name">${t}</h4>
    </div>

    <div class="cart-product__counter">
      <span class="cart-product__heading">
        AMOUNT
      </span>
      <span>
        ${i(r)}
      </span>
    </div>

    <div class="cart-product__price">
      <span class="cart-product__heading">
        PRICE
      </span>
      <span>
        $${a/100}
      </span>
    </div>

    <div class="cart-product__total">
      <span class="cart-product__heading">
        TOTAL
      </span>
      <span>
        $${o/100}
      </span>
    </div>

    <button class="cart-product__delete">
      <svg class="cart-product__delete-icon">
        <use href="/seedra/images/sprites.svg#close-icon"></use>
      </svg>
    </button>
  </div>
  `}async function s(i){let s=document.querySelector(`.cart-products__products`);if(s){if((await r(e(i,`cart`))).empty){s.innerHTML=a(`cart`,`cart-icon`);return}n(t(e(i,`cart`)),e=>{let t=``;e.forEach(e=>{t+=o(e.id,e.data().name,e.data().imageUrl,e.data().quantity,e.data().price,e.data().total)}),s.innerHTML=t,s.innerHTML===``&&(s.innerHTML=a(`cart`,`cart-icon`))})}}export{s as getCart};