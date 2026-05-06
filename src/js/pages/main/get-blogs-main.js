import { collection, onSnapshot, getDocs, query, limit } from "firebase/firestore";
import { blogCard } from "../../components/blog-card";
import { getDate } from "../../common/get-date";

export async function getBlogStaticCards(db) {
	const blogStaticList = document.querySelector(".our-blogs__content-static");
	if (!blogStaticList) return;

	const q = query(collection(db, "blogs"), limit(4));

	onSnapshot(q, (snapshot) => {
		let blogsString = "";

		snapshot.docs.forEach((blog, index) => {
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

			blogsString += blogCard(
				blog.id,
				blog.data().title,
				blog.data().text,
				blog.data().imageUrl,
				getDate(blog.data().createdAt),
				size
			);
		});

		blogStaticList.innerHTML = blogsString;
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
			getDate(blog.data().createdAt),
			"_slider",
			blog.data().imageUrlMobile
		)}</div>`;
	});
}
