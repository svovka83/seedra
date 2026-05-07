import { doc, getDoc } from "firebase/firestore";
import { getDate } from "../../common/get-date";

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

export async function oneBlogTop(db) {
	const base = import.meta.env.BASE_URL;

	const topOneBlog = document.querySelector(".one-blog-top__inner");
	const timeOneBlog = document.querySelector(".one-blog-timeline__inner");
	if (!topOneBlog) return;

	const docRef = doc(db, "blogs", blogId);
	const blog = await getDoc(docRef);

	topOneBlog.innerHTML = `
    <h1 class="one-blog-top__title">${blog.data().title}</h1>
    <img class="one-blog-top__img" src="${blog.data().imageUrl}" alt="one blog image" />
    <img
      class="one-blog-top__leaves one-blog-top__leaves_leaf-1"
      src="${base}/images/top/leaf_1.png"
      alt="top background"
    />
    <img
      class="one-blog-top__leaves one-blog-top__leaves_leaf-3"
      src="${base}/images/top/leaf_3.png"
      alt="top background"
    />
  `;

	timeOneBlog.innerHTML = `
    <svg class="one-blog-timeline__icon">
      <use xlink:href="${base}images/sprites.svg#clock-icon"></use>
    </svg>
    <span class="one-blog-timeline__date">${getDate(blog.data().createdAt)}</span>
    <hr class="one-blog-timeline__hr" />
  `;
}
