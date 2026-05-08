import{t as e}from"./title-CtmXbZWf.js";import{t}from"./text-BSG0owf8.js";function n(e,t,n){return`
  <a class="discover ${e}" href="${n}">
    ${t}
  </a>
  `}function r(r,i,a,o,s,c,l){let u=`/seedra/`;return`
    <div class="blog-card blog-card${c}">
      <div class="blog-card__content">

        <div class="blog-card__date">
          <svg class="blog-card__date-icon">
            <use xlink:href="${u}images/sprites.svg#clock-icon"></use>
          </svg>
          <span class="blog-card__date-time">${s}</span>
        </div>

        <div class="blog-card__title">
          ${e(`h3`,i,`title_h3 title_h3-mobile`)}
        </div>

        <div class="blog-card__text">
          ${t(a,`text_regular-14`)}
        </div>

        <div class="blog-card__button">
          ${n(``,`Read`,`${u}src/pages/one-blog/index.html?id=${r}`)}
        </div>
      </div>

      <picture class="blog-card__picture">
        <source srcset="${l}" media="(max-width: 690px)" />
        <img class="blog-card__img" src="${o}" alt="blogcard image" />
      </picture>
    </div>
  `}export{r as t};