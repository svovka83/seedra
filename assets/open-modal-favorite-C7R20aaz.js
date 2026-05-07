import{H as e,_ as t,b as n,h as r}from"./index.esm-Bwpb2Ko_.js";import{t as i}from"./empty-cart-DNpHJ6rn.js";import{t as a}from"./close-modals-O_pi3bJ6.js";function o(e,t,n,r){let i=`/seedra/`;return`
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
  `}async function s(a){let s=document.querySelector(`.modal-favorite__products`);s&&r(t(e(a,`products`),n(`favorite`,`==`,!0)),e=>{let t=``;e.forEach(e=>{t+=o(e.id,e.data().name,e.data().imageUrl,e.data().price)}),s.innerHTML=t,s.innerHTML===``&&(s.innerHTML=i())})}function c(e){let t=document.getElementById(`open-modal-favorite`),n=document.getElementById(`close-modal-favorite`),r=document.getElementById(`modal-favorite`);t&&n&&r&&(t.addEventListener(`click`,t=>{t.stopPropagation(),r.classList.contains(`modal-favorite_open`)?r.classList.remove(`modal-favorite_open`):(a(),r.classList.add(`modal-favorite_open`),s(e))}),n.addEventListener(`click`,()=>{r.classList.remove(`modal-favorite_open`)}),document.addEventListener(`click`,e=>{!r.contains(e.target)&&!e.target.closest(`.product-card__button, .product-card__yellow-heart`)&&r.classList.remove(`modal-favorite_open`)}),window.addEventListener(`resize`,()=>{r.classList.contains(`modal-favorite_open`)&&r.classList.remove(`modal-favorite_open`)}))}export{c as openModalFavorite};