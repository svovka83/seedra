import Swiper from "swiper";
import "swiper/css";

export function blogSlider() {
	new Swiper(".blog-slider", {
		slidesPerView: 1.08,
		spaceBetween: 11,
		speed: 500,
		breakpoints: {
			621: { slidesPerView: 2 },
			561: { slidesPerView: 1.75 },
			471: { slidesPerView: 1.5 },
			391: { slidesPerView: 1.25 },
		},
	});
}
