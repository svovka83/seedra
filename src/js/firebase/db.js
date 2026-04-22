import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getCategories } from "./services/get-categories";
import { getProductStaticCards, getProductSliderCards } from "./services/get-products-main";
import { getFilterProducts } from "./services/get-products-filter";
import { getBlogStaticCards, getBlogSliderCards } from "./services/get-blogs";
import { getFilterBlogs } from "./services/get-filter-blogs";
import { getReviewCards } from "./services/get-reviews";
import { oneBlogTop } from "../pages/one-blog";
import { getCart } from "./services/cart/get-cart";
import { addRemoveProduct } from "./services/cart/add-remove-product";
import { deleteFromCart } from "./services/cart/remove-from-cart";
import { addQuantity } from "./services/cart/add-quantity";
import { subtractQuantity } from "./services/cart/subtract-quantity";
import { itemsQuantity } from "../components/cart/items-quantity";
import { totalPrice } from "../components/cart/total-price";
import { addShipping } from "../components/cart/add-shipping";
import { promocode } from "../components/cart/promocode";

export async function initFirebase() {
	const firebaseConfig = {
		apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
		authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_FIREBASE_APP_ID,
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	getCategories(db);
	getProductStaticCards(db);
	getProductSliderCards(db);
	getFilterProducts(db);
	getBlogStaticCards(db);
	getBlogSliderCards(db);
	getFilterBlogs(db);
	getReviewCards(db);
	oneBlogTop(db);
	getCart(db);
	addRemoveProduct(db);
	deleteFromCart(db);
	addQuantity(db);
	subtractQuantity(db);
	itemsQuantity(db);
	totalPrice(db);
	addShipping(db);
	promocode(db);
}
