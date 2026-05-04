import { doc, getDoc } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductCategory(db) {
	const base = import.meta.env.BASE_URL;

	const productContentCategory = document.querySelector(".one-product-top-header__category");
	const productNavCategory = document.querySelector(
		".one-product-breadcrumbs__item.one-product-breadcrumbs__category"
	);
	if (!productContentCategory) return;
	if (!productNavCategory) return;

	const docRefProduct = doc(db, "products", productId);
	const productData = await getDoc(docRefProduct);

	const docRefCategory = doc(db, "categories", productData.data().categoryId);
	const categoryData = await getDoc(docRefCategory);

	productContentCategory.innerHTML = `
    <svg class="one-product-top-header__category-icon">
      <use href="${base}images/sprites.svg#${categoryData.data().iconId}"></use>
    </svg>
    <span class="one-product-top-header__category-text">${categoryData.data().name}</span>
  `;

	productNavCategory.innerHTML = `<a class="one-product-breadcrumbs__link" href="#!">${categoryData.data().name}</a>
  `;
}
