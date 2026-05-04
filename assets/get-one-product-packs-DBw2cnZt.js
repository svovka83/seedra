import{W as e,f as t}from"./index.esm-Bwpb2Ko_.js";function n(e,t){return`
    <label class="pack" for="radio${e}">
      <input class="pack__input" type="radio" name="pack" id="radio${e}" />
      <span class="pack__quantity">${e}</span>
      <span class="pack__pack"> pack</span>
      <span class="pack__start">start from</span>
      <span class="pack__price">$${t/100}</span>
    </label>
  `}var r=new URLSearchParams(window.location.search).get(`id`);async function i(i){let a=document.querySelector(`.one-product-top-content__packs`);if(!a)return;let o=await t(e(i,`products`,r)),s=``;for(let e=1;e<=5;e++)s+=n(e,o.data().price*e);a.innerHTML=s}export{i as getProductPacks};