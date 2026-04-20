import { collection, getDocs } from "firebase/firestore";
import { blogCard } from "../../components/blog-card";
import { getDate } from "../../common/get-date";

export async function getFilterBlogs(db) {
	const blogFilterList = document.querySelector(".blogs-content");
	if (!blogFilterList) return;

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
			case 5: {
				size = "_long";
				break;
			}
			case 7: {
				size = "_tall";
				break;
			}
			case 8: {
				size = "_tall";
				break;
			}
			case 9: {
				size = "_tall";
				break;
			}
			default:
				size = "_normal";
		}

		blogFilterList.innerHTML += blogCard(
			blog.id,
			blog.data().title,
			blog.data().text,
			blog.data().imageUrl,
			getDate(blog.data().date),
			size,
			blog.data().imageUrlMobile
		);
	});
}
