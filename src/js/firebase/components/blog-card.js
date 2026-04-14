import { title } from "./title";
import { text } from "./text";
import { discover } from "./discover";

export function blogCard(name, content, imageUrl, size, imageUrlMobile) {
	return `
    <div class="blog-card blog-card${size}">
      <div class="blog-card__content">

        <div class="blog-card__date">
          <svg class="blog-card__date-icon">
            <use xlink:href="./images/sprites.svg#clock-icon"></use>
          </svg>
          <span class="blog-card__date-time">12.09.2021</span>
        </div>

        <div class="blog-card__title">
          ${title("h3", name, "title_h3 title_h3-mobile")}
        </div>

        <div class="blog-card__text">
          ${text(content, "text_regular-14")}
        </div>

        <div class="blog-card__button">
          ${discover("", "Read", "#!")}
        </div>
      </div>

      <picture class="blog-card__picture">
        <source srcset="${imageUrlMobile}" media="(max-width: 690px)" />
        <img class="blog-card__img" src="${imageUrl}" alt="blogcard image" />
      </picture>
    </div>
  `;
}
