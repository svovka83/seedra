import { collection, getDocs, addDoc } from "firebase/firestore";

import { blogCard } from "../components/blog-card";

export async function getBlogStaticCards(db) {
	const blogStaticList = document.querySelector(".our-blogs__content-static");

	const blogs = await getDocs(collection(db, "blogs"));
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

		blogStaticList.innerHTML += blogCard(blog.data().title, blog.data().text, blog.data().imageUrl, size);
	});
}

export async function getBlogSliderCards(db) {
	const blogSliderList = document.querySelector(".swiper-wrapper.our-blogs__wrapper");

	const blogs = await getDocs(collection(db, "blogs"));

	blogs.forEach((blog) => {
		blogSliderList.innerHTML += `<div class="swiper-slide">${blogCard(
			blog.data().title,
			blog.data().text,
			blog.data().imageUrl,
			"_slider",
			blog.data().imageUrlMobile
		)}</div>`;
	});
}
