import{W as e,f as t}from"./index.esm-Bwpb2Ko_.js";var n=new URLSearchParams(window.location.search).get(`id`);async function r(r){let i=document.querySelector(`.one-product-top-header__category`),a=document.querySelector(`.one-product-breadcrumbs__item.one-product-breadcrumbs__category`);if(!i||!a)return;let o=await t(e(r,`categories`,(await t(e(r,`products`,n))).data().categoryId));i.innerHTML=`
    <svg class="one-product-top-header__category-icon">
      <use href="/seedra/images/sprites.svg#${o.data().iconId}"></use>
    </svg>
    <span class="one-product-top-header__category-text">${o.data().name}</span>
  `,a.innerHTML=`<a class="one-product-breadcrumbs__link" href="#!">${o.data().name}</a>
  `}export{r as getProductCategory};