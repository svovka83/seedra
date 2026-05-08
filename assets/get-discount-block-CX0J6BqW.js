import{W as e,h as t}from"./index.esm-DIgIDhqE.js";var n=new URLSearchParams(window.location.search).get(`id`);async function r(r){let i=document.querySelector(`.one-product-top-content__bottom-discount-block`);i&&t(e(r,`products`,n),e=>{if(!e.exists())return;let t=e.data().price;e.data().isFire?i.innerHTML=`
        <p class="one-product-top-content__bottom-discount">$${t/100*1.2}</p>
        <p class="one-product-top-content__bottom-price">$${t/100}</p>
      `:i.innerHTML=`
        <p class="one-product-top-content__bottom-price">$${t/100}</p>
      `})}export{r as getDiscountBlock};