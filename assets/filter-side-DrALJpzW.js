function e(e,t,n,r){return`
  <label class="checkbox ${r}">
    <input type="checkbox" class="checkbox__input" id="${t}" value="${n}" />
    <div class="checkbox__box">
      <svg class="checkbox__icon">
        <use href="/seedra/images/sprites.svg#checker-icon"></use>
      </svg>
    </div>
    <span class="checkbox__text">${e}</span>
  </label>
  `}function t(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){return`
  <div class="filter-dropdown">

    <button class="filter-dropdown__btn ${n}">
      <span class="filter-dropdown__title">${t}</span>
      <svg class="filter-dropdown__icon">
        <use href="/seedra/images/sprites.svg#chevron-icon"></use>
      </svg>
    </button>

    <div class="filter-dropdown__content ${r}">
      <div class="filter-dropdown__inner">

        <div class="filter-dropdown__option">
          ${e(c,l,u,i)}
        </div>

        <div class="filter-dropdown__option">
          ${e(d,f,p,a)}
        </div>

        <div class="filter-dropdown__option">
          ${e(m,h,g,o)}
        </div>

        <div class="filter-dropdown__option">
          ${e(_,v,y,s)}
        </div>
      </div>
    </div>

  </div>
  `}function n(e,t,n){return`
    <div class="price-range">
      <div class="price-range-inputs">
        <div class="price-range-inputs__field">
          <span class="price-range-inputs__label">From</span>
          <label for="${e}">
            <span class="price-range-inputs__dollar">$</span>
            <input
              class="price-range-inputs__input"
              id="${e}"
              type="number"
              placeholder="0" />
          </label>
        </div>

        <span class="price-range-inputs__separator"></span>

        <div class="price-range-inputs__field">
          <span class="price-range-inputs__label">To</span>
          <label for="${t}">
            <span class="price-range-inputs__dollar">$</span>
            <input
              class="price-range-inputs__input"
              id="${t}"
              type="number"
              placeholder="1000" />
          </label>
        </div>
      </div>

      <div class="price-range-slider" id="${n}"></div>
    </div>
  `}function r(e,t,r,i,a,o){return`
  <div class="filter-dropdown">

    <button class="filter-dropdown__btn ${t}">
      <span class="filter-dropdown__title">${e}</span>
      <svg class="filter-dropdown__icon">
        <use href="/seedra/images/sprites.svg#chevron-icon"></use>
      </svg>
    </button>

    <div class="filter-dropdown__content ${r}">
      <div class="filter-dropdown__inner">

        ${n(i,a,o)}

      </div>
    </div>

  </div>
  `}function i(){let e=document.querySelector(`.products-content__filters-dropdown-type`),n=document.querySelector(`.products-content__filters-dropdown-type-mob`),i=document.querySelector(`.products-content__filters-dropdown-featured`),a=document.querySelector(`.products-content__filters-dropdown-featured-mob`),o=document.querySelector(`.products-content__filters-dropdown-growing`),s=document.querySelector(`.products-content__filters-dropdown-growing-mob`),c=document.querySelector(`.products-content__filters-dropdown-range`),l=document.querySelector(`.products-content__filters-dropdown-range-mob`),u=document.querySelector(`.products-content__filters-dropdown-use`),d=document.querySelector(`.products-content__filters-dropdown-use-mob`),f=document.querySelector(`.products-content__filters-dropdown-additional`),p=document.querySelector(`.products-content__filters-dropdown-additional-mob`);e&&n&&i&&a&&o&&s&&c&&l&&u&&d&&f&&p&&(e.innerHTML=t(`Seed type`,``,``,``,``,``,``,`Hybrid`,`hybrid`,`hybrid`,`Open Pollinated`,`pollinated`,`pollinated`,`Organic Seeds, Plants, and Supplies`,`organic`,`organic`,`Pelleted See`,`pelleted`,`pelleted`),n.innerHTML=t(`Seed type`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,``,``,``,``,`Hybrid`,`hybrid-mob`,`hybrid`,`Open Pollinated`,`pollinated-mob`,`pollinated`,`Organic Seeds, Plants, and Supplies`,`organic-mob`,`organic`,`Pelleted See`,`pelleted-mob`,`pelleted`),i.innerHTML=t(`Featured`,``,``,``,``,``,``,`Pack`,`pack`,`pack`,`Bag`,`bag`,`bag`,`Sack`,`sack`,`sack`,`Barrel`,`barrel`,`barrel`),a.innerHTML=t(`Featured`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,``,``,``,``,`Pack`,`pack-mob`,`pack`,`Bag`,`bag-mob`,`bag`,`Sack`,`sack-mob`,`sack`,`Barrel`,`barrel-mob`,`barrel`),o.innerHTML=t(`Growing Conditions`,``,``,``,``,``,`checkbox_none`,`Slow`,`slow`,`slow`,`Normal`,`normal`,`normal`,`Fast`,`fast`,`fast`),s.innerHTML=t(`Growing Conditions`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,``,``,``,`checkbox_none`,`Slow`,`slow-mob`,`slow`,`Normal`,`normal-mob`,`normal`,`Fast`,`fast-mob`,`fast`),c.innerHTML=r(`Price`,``,``,`min-range`,`max-range`,`price-range-slider`),l.innerHTML=r(`Price`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,`min-range-mob`,`max-range-mob`,`price-range-slider-mob`),u.innerHTML=t(`Use`,``,``,``,``,`checkbox_none`,`checkbox_none`,`At home`,`at-home`,`at-home`,`In garder`,`in-garden`,`in-garden`),d.innerHTML=t(`Use`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,``,``,`checkbox_none`,`checkbox_none`,`At home`,`at-home-mob`,`at-home`,`In garder`,`in-garden-mob`,`in-garden`),f.innerHTML=t(`Additional Characteristic`,``,``,``,``,``,`checkbox_none`,`Sweet`,`sweet`,`sweet`,`Sour`,`sour`,`sour`,`Bitter`,`bitter`,`bitter`),p.innerHTML=t(`Additional Characteristic`,`filter-dropdown__btn_mobile`,`filter-dropdown__content_mobile`,``,``,``,`checkbox_none`,`Sweet`,`sweet-mob`,`sweet`,`Sour`,`sour-mob`,`sour`,`Bitter`,`bitter-mob`,`bitter`))}export{i as filterSide};