import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function reviewSlider() {
	new Swiper(".main-reviews__slider", {
		modules: [Pagination],
		centeredSlides: true,
		initialSlide: 1,
		spaceBetween: 30,
		speed: 800,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			541: { slidesPerView: 1 },
			471: { slidesPerView: 1.5, centeredSlides: false, spaceBetween: 10 },
			391: { slidesPerView: 1.25 },
			321: { slidesPerView: 1.08 },
		},
	});
}
