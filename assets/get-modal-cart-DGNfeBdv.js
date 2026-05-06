import{H as e,_ as t,h as n}from"./index.esm-Bwpb2Ko_.js";import{t as r}from"./product-counter-Bjyyv2KE.js";import{t as i}from"./empty-cart-DOQhLD2Y.js";function a(e,t,n,i,a){return`
  <div class="modal-cart-product" data-id="${e}">

    <div class="modal-cart-product__title-block">
      <img class="modal-cart-product__img" src="${n}" alt="cart product image" />
      <h4 class="modal-cart-product__name">${t}</h4>
    </div>

    <div class="modal-cart-product__counter">
        ${r(i)}
    </div>

    <div class="modal-cart-product__bottom">
      <span class="modal-cart-product__pack">
        1 pack
      </span>
      <span class="modal-cart-product__price">
        $${a/100}
      </span>
    </div>

  </div>
  `}async function o(r){let o=document.querySelector(`.modal-cart__products`);o&&n(t(e(r,`cart`)),e=>{let t=``;e.forEach(e=>{t+=a(e.id,e.data().name,e.data().imageUrl,e.data().quantity,e.data().price)}),o.innerHTML=t,o.innerHTML===``&&(o.innerHTML=i())})}export{o as t};