import { text } from "./text";
import { ranking } from "./ranking";

export function reviewCard(avatarUrl, name, date, content) {
	return `
    <div class="review-card">
      <div class="review-card__top">
        <img
          class="review-card__img"
          src="${avatarUrl}"
          alt="avatar" />
        <div class="review-card__name-date">
          <div class="review-card__name">
            ${text(name, "text_medium-18")}
          </div>
          <div class="review-card__date">
            ${text(date, "text_regular-14")}
          </div>
        </div>
      </div>
      <div class="review-card__ranking">
        ${ranking("ranking__icon-star_review")}
      </div>
      <div class="review-card__text">
        ${text(content, "text_light")}
      </div>
    </div>
  `;
}
