import{H as e,p as t}from"./index.esm-DIgIDhqE.js";function n(e,t,n){let r=`/seedra/`;return`
  <div class="burger-menu-dropdown">
    <button class="burger-menu-dropdown__btn">
      <span class="burger-menu-dropdown__title">${t}</span>
      <svg class="burger-menu-dropdown__icon">
        <use href="${r}images/sprites.svg#chevron-icon"></use>
      </svg>
    </button>

    <div class="burger-menu-dropdown__content">
      <div class="burger-menu-dropdown__inner">
        ${n.docs.filter(t=>e===`111`?t:t.data().categoryId===e).map(e=>`<a class="burger-menu-dropdown__inner-burger" href="${r}src/pages/one-product/index.html?id=${e.id}">${e.data().name}</a>`).join(``)}
      </div>
    </div>
  </div>
  `}async function r(r){let i=document.querySelector(`.burger-menu__dropdowns`);if(!i)return;let a=await t(e(r,`categories`)),o=await t(e(r,`products`)),s=``;a.forEach(e=>{s+=n(e.id,e.data().name,o)}),i.innerHTML=s}export{r as getBurgerMenuDropdowns};