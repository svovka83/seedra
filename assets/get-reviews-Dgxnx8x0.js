import{H as e,p as t}from"./index.esm-DIgIDhqE.js";import{t as n}from"./ranking-BcRO3uvN.js";import{t as r}from"./text-BSG0owf8.js";import{t as i}from"./get-date-4O-JeIBG.js";function a(e,t,i,a){return`
    <div class="review-card">
      <div class="review-card__top">
        <img
          class="review-card__img"
          src="${e}"
          alt="avatar" />
        <div class="review-card__name-date">
          <div class="review-card__name">
            ${r(t,`text_medium-18`)}
          </div>
          <div class="review-card__date">
            ${r(i,`text_regular-14`)}
          </div>
        </div>
      </div>
      <div class="review-card__ranking">
        ${n(`ranking__icon-star_review`)}
      </div>
      <div class="review-card__text">
        ${r(a,`text_light`)}
      </div>
    </div>
  `}async function o(n){let r=document.querySelector(`.swiper-wrapper.main-reviews__wrapper`);r&&(await t(e(n,`reviews`))).forEach(e=>{r.innerHTML+=`
    <div class="swiper-slide">
      ${a(e.data().avatarUrl,e.data().name,i(e.data().date),e.data().content)}
    </div>`})}export{o as getReviewCards};