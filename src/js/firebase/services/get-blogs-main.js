import { collection, getDocs, query, limit } from "firebase/firestore";
import { blogCard } from "../../components/blog-card";
import { getDate } from "../../common/get-date";

export async function getBlogStaticCards(db) {
	const blogStaticList = document.querySelector(".our-blogs__content-static");
	if (!blogStaticList) return;

	const q = query(collection(db, "blogs"), limit(4));
	const blogs = await getDocs(q);
	const blogsArr = blogs.docs;

	blogsArr.forEach((blog, index) => {
		let size;

		switch (index + 1) {
			case 1: {
				size = "_long";
				break;
			}
			case 2: {
				size = "_tall";
				break;
			}
			default:
				size = "_normal";
		}

		blogStaticList.innerHTML += blogCard(
			blog.id,
			blog.data().title,
			blog.data().text,
			blog.data().imageUrl,
			getDate(blog.data().date),
			size
		);
	});
}

export async function getBlogSliderCards(db) {
	const blogSliderList = document.querySelector(".swiper-wrapper.blogs-slider__wrapper");
	if (!blogSliderList) return;

	const q = query(collection(db, "blogs"), limit(8));
	const blogs = await getDocs(q);

	blogs.forEach((blog) => {
		blogSliderList.innerHTML += `<div class="swiper-slide">${blogCard(
			blog.id,
			blog.data().title,
			blog.data().text,
			blog.data().imageUrl,
			getDate(blog.data().date),
			"_slider",
			blog.data().imageUrlMobile
		)}</div>`;
	});
}
