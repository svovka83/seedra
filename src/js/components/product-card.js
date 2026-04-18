import { title } from "./title";
import { button } from "./button";
import { ranking } from "./ranking";

export function productCard(id, name, price, imageUrl, isFire, classCard, classHeart) {
	const base = import.meta.env.BASE_URL;

	return `
  <div class="product-card ${classCard}" id="${id}">
    <img class="product-card__img" src="${imageUrl}" alt="product card image" />

    <div class="product-card__content">
      <div class="product-card__top">
        ${ranking("ranking__icon-star_product")}
        <span class="product-card__quantity">(123)</span>
      </div>

      <div class="product-card__title">
        ${title("h4", name, "title_card")}
      </div>

      <div class="product-card__bottom">
        <svg class="${isFire ? "product-card__icon" : "product-card__no-fire"}">
          <use xlink:href="${base}images/sprites.svg#fire-icon"></use>
        </svg>

        <span class="product-card__price">$${price / 100}</span>

        <span class="${isFire ? "product-card__old-price" : "product-card__no-fire"}" >$15.56</span>

        <div class="product-card__button">
          ${button("btn_icon", "", "cart-icon")}
        </div>
      </div>
    </div>

    <div class="product-card__yellow-heart ${classHeart}">
      <svg class="product-card__icon-heart">
        <use xlink:href="${base}images/sprites.svg#heart-icon"></use>
      </svg>
    </div>

  </div>
  `;
}
