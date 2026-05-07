import{H as e,W as t,_ as n,b as r,f as i,p as a}from"./index.esm-Bwpb2Ko_.js";function o(e,t,n){return`
    <section class="modal-category">
      <h3 class="modal-category__title">${t}</h3>
      
      <div class="modal-category__list">
        ${n.docs.map(e=>`<hr class="modal-category__hr-mobile"/><span class="modal-category__item" id="${e.id}">${e.data().name.slice(0,24)}</span>`).join(``)}
      </div>

      <hr class="${t===`all`?`modal-category__hr_none`:`modal-category__hr`}" />

      <button class="${t===`all`?`modal-category__view-all_none`:`modal-category__view-all`}">
        <span>View all</span>
        <span class="modal-category__view-all-text" id="${e}">${t}</span> 
      </button>
    </section>
  `}async function s(s,c){let l=document.querySelector(`.products-content__modal`);if(!l)return;let u=await i(t(s,`categories`,c)),d=u.data().name,f;f=d===`all`?n(e(s,`products`)):n(e(s,`products`),r(`categoryId`,`==`,c));let p=await a(f);l.innerHTML=``,l.innerHTML=`<span class="products-content__modal-triangle-pointer"></span>`,l.innerHTML=o(u.id,u.data().name,p)}function c(e){let t;document.addEventListener(`click`,async n=>{let r=n.target.closest(`.btn.btn_icon-text`);if(!r)return;let i=r.id,a=document.getElementById(`modal-category-list`);a&&(a.classList.contains(`products-content__modal_open`)?t===i?t===i&&a.classList.remove(`products-content__modal_open`):(t=i,await s(e,i)):(t=i,await s(e,i),a.classList.add(`products-content__modal_open`)),document.addEventListener(`click`,e=>{e.target.closest(`.btn.btn_icon-text`)||a.classList.remove(`products-content__modal_open`)}),window.addEventListener(`resize`,()=>{a.classList.contains(`products-content__modal_open`)&&a.classList.remove(`products-content__modal_open`)}))})}export{c as openModalCategory};