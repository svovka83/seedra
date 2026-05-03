import { collection, query, onSnapshot, orderBy, where, getDocs } from "firebase/firestore";
import { blogCard } from "../../../components/blog-card";
import { getDate } from "../../../common/get-date";

export async function getBlogs(db, currentSortOrder = orderBy("createdAt", "desc"), search = "") {
	const blogList = document.querySelector(".blogs-content");
	if (!blogList) return;

	const constraints = [];

	// sort by order
	constraints.push(currentSortOrder);

	// sort by name ( input search )
	if (search !== "") {
		constraints.push(where("nameSearch", ">=", search), where("nameSearch", "<=", search + "\uf8ff"));
	}

	const q = query(collection(db, "blogs"), ...constraints);
	const snap = await getDocs(q);

	if (snap.docChanges().length === 0) {
		let blogsString = "";
		blogsString = `<p class="blogs-content__not-found">Blog not found</p>`;
		return (blogList.innerHTML = blogsString);
	}

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

			blogsString += blogCard(
				blog.id,
				blog.data().title,
				blog.data().text,
				blog.data().imageUrl,
				getDate(blog.data().createdAt),
				size,
				blog.data().imageUrlMobile
			);
		});

		blogList.innerHTML = blogsString;
	});
}
