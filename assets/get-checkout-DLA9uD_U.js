import{H as e,W as t,f as n,p as r}from"./index.esm-DIgIDhqE.js";function i(e,t,n){return`
  <div class="checkout-cart" id="${e}">
    <h4 class="checkout-cart__name">${t}</h4>

    <span class="checkout-cart__total">$${n/100}</span>

    <hr class="checkout-cart__hr" />
  </div>
  `}async function a(a){let o=document.querySelector(`.checkout-carts__products`),s=document.getElementById(`cart-summary__amount`);if(!o||!s)return;s.innerHTML=(await n(t(a,`total`,`14`))).data().amount/100;let c=await r(e(a,`cart`)),l=``;c.forEach(e=>{l+=i(e.id,e.data().name,e.data().total)}),o.innerHTML=l}export{a as getCheckout};