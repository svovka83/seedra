import { collection, getDocs, addDoc } from "firebase/firestore";

import { getDate } from "../../common/get-date";

import { reviewCard } from "../../components/review-card";

export async function getReviewCards(db) {
	const reviewList = document.querySelector(".swiper-wrapper.main-reviews__wrapper");

	const reviews = await getDocs(collection(db, "reviews"));

	reviews.forEach((review) => {
		reviewList.innerHTML += `
    <div class="swiper-slide">
      ${reviewCard(review.data().avatarUrl, review.data().name, getDate(review.data().date), review.data().content)}
    </div>`;
	});
}

// avatarUrl, name, date, content
