import{W as e,f as t}from"./index.esm-DIgIDhqE.js";import{t as n}from"./get-date-4O-JeIBG.js";var r=new URLSearchParams(window.location.search).get(`id`);async function i(i){let a=`/seedra/`,o=document.querySelector(`.one-blog-top__inner`),s=document.querySelector(`.one-blog-timeline__inner`);if(!o)return;let c=await t(e(i,`blogs`,r));o.innerHTML=`
    <h1 class="one-blog-top__title">${c.data().title}</h1>
    <img class="one-blog-top__img" src="${c.data().imageUrl}" alt="one blog image" />
    <img
      class="one-blog-top__leaves one-blog-top__leaves_leaf-1"
      src="${a}/images/top/leaf_1.png"
      alt="top background"
    />
    <img
      class="one-blog-top__leaves one-blog-top__leaves_leaf-3"
      src="${a}/images/top/leaf_3.png"
      alt="top background"
    />
  `,s.innerHTML=`
    <svg class="one-blog-timeline__icon">
      <use xlink:href="${a}images/sprites.svg#clock-icon"></use>
    </svg>
    <span class="one-blog-timeline__date">${n(c.data().createdAt)}</span>
    <hr class="one-blog-timeline__hr" />
  `}export{i as oneBlogTop};