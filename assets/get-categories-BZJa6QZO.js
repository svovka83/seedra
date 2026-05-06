import{H as e,p as t}from"./index.esm-Bwpb2Ko_.js";function n(e,t,n,r){return`
  <button class="btn ${t}" id="${e}">
    <svg class="btn__icon">
      <use href="/seedra/images/sprites.svg#${r}"></use>
    </svg>
    <span class="btn__title">
      ${n}
    </span>
  </button>
  `}async function r(r){let i=document.querySelector(`.categories-tags`);i&&(await t(e(r,`categories`))).forEach(e=>{i.innerHTML+=n(e.id,`btn_icon-text`,e.data().name,e.data().iconId)})}export{r as getCategories};