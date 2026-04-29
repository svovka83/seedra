import { collection, doc, getDoc, query, limit } from "firebase/firestore";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

export async function getProductImage(db) {
	const productImg = document.querySelector(".one-product-top-images__product");

	const docRef = doc(db, "products", productId);
	const productData = await getDoc(docRef);

	productImg.innerHTML = `
    <img
      class="one-product-top-images__product-img"
      src="${productData.data().imageUrl}"
      alt="current product image"
    />
  `;
}
