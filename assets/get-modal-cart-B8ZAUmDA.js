import{H as e,_ as t,h as n}from"./index.esm-DIgIDhqE.js";import{t as r}from"./product-counter-CypSgduo.js";import{t as i}from"./empty-cart-CJa4tPAu.js";function a(e,t,n,i,a){return`
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
  `}async function o(r){let o=`/seedra/`,s=document.querySelector(`.modal-cart__products`),c=document.getElementById(`open-modal-cart`);s&&c&&n(t(e(r,`cart`)),e=>{let t=``;e.forEach(e=>{t+=a(e.id,e.data().name,e.data().imageUrl,e.data().quantity,e.data().price)}),s.innerHTML=t,s.innerHTML===``?(s.innerHTML=i(`cart`,`cart-icon`),c.innerHTML=`
			<svg class="header__cart-block-icon">
				<use href="${o}images/sprites.svg#cart-icon"></use>
			</svg>
		`):c.innerHTML=`
			<svg class="header__cart-block-icon">
				<use href="${o}images/sprites.svg#cart-icon"></use>
			</svg>
			<span class="header__cart-block-circle"></span>
		`})}export{o as t};