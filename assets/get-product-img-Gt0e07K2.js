import{W as e,f as t}from"./index.esm-DIgIDhqE.js";var n=new URLSearchParams(window.location.search).get(`id`);async function r(r){let i=document.querySelector(`.one-product-top-images__product`);i&&(i.innerHTML=`
    <img
      class="one-product-top-images__product-img"
      src="${(await t(e(r,`products`,n))).data().imageUrl}"
      alt="current product image"
    />
  `)}export{r as getProductImage};