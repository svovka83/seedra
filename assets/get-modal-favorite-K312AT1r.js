import{H as e,_ as t,b as n,h as r}from"./index.esm-DIgIDhqE.js";import{t as i}from"./empty-cart-CJa4tPAu.js";function a(e,t,n,r){let i=`/seedra/`;return`
  <div class="modal-favorite-product" data-id="${e}">

    <a class="modal-favorite-product__title-block" href="${i}src/pages/one-product/index.html?id=${e}">
      <img class="modal-favorite-product__img" src="${n}" alt="cart product image" />
      <h4 class="modal-favorite-product__name">${t}</h4>
    </a>

    <div class="modal-favorite-product__remove">
      <button class="modal-favorite-product__remove-btn">
        <svg class="modal-favorite-product__remove-icon">
          <use href="${i}images/sprites.svg#close-icon"></use>
        </svg>
      </button>
    </div>

    <div class="modal-favorite-product__bottom">
      <span class="modal-favorite-product__pack">
        1 pack
      </span>
      <span class="modal-favorite-product__price">
        $${r/100}
      </span>
    </div>

  </div>
  `}async function o(o){let s=`/seedra/`,c=document.querySelector(`.modal-favorite__products`),l=document.getElementById(`open-modal-favorite`);c&&l&&r(t(e(o,`products`),n(`favorite`,`==`,!0)),e=>{let t=``;e.forEach(e=>{t+=a(e.id,e.data().name,e.data().imageUrl,e.data().price)}),c.innerHTML=t,c.innerHTML===``?(c.innerHTML=i(`favorite`,`heart-icon`),l.innerHTML=`
			<svg class="header__cart-block-icon">
				<use href="${s}images/sprites.svg#heart-icon"></use>
			</svg>
		`):l.innerHTML=`
			<svg class="header__cart-block-icon">
				<use href="${s}images/sprites.svg#heart-checked-icon"></use>
			</svg>
		`})}export{o as t};