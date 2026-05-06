import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { orderBy } from "firebase/firestore";

import { getCategories } from "./services/get-categories";
import { getModalHeaderProducts } from "./services/modals/get-modal-header-search";

import { getBurgerMenuSearchProducts } from "../burger-menu/get-burger-menu-search-modal";
import { getBurgerMenuDropdowns } from "../burger-menu/get-burger-menu-dropdowns";
import { burgerMenuSearchControl } from "../burger-menu/burger-menu-search-control.js";

import { getProductStaticCards, getProductSliderCards } from "./services/get-products-main";

import { getBlogStaticCards, getBlogSliderCards } from "./services/get-blogs-main.js";
import { getBlogs } from "./services/blogs/get-blogs.js";
import { blogFiltration } from "./services/blogs/blog-filtration";
import { getReviewCards } from "./services/get-reviews";
import { oneBlogTop } from "../pages/one-blog";

import { getCart } from "./services/cart/get-cart";
import { getModalCart } from "./services/cart/get-modal-cart";
import { addRemoveProduct } from "./services/cart/add-remove-product";
import { deleteFromCart } from "./services/cart/remove-from-cart";
import { addQuantity } from "./services/cart/add-quantity";
import { addModalQuantity } from "./services/cart/add-modal-quantity";
import { subtractQuantity } from "./services/cart/subtract-quantity";
import { subtractModalQuantity } from "./services/cart/subtract-modal-quantity";
import { itemsQuantity } from "../components/cart/items-quantity";
import { totalPrice } from "../components/cart/total-price";
import { addShipping } from "../components/cart/add-shipping";
import { promocode } from "../components/cart/promocode";
import { clearAllCart } from "./services/cart/clear-all-cart";

import { openModalCart } from "../modals/open-modal-cart.js";

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

	getBurgerMenuDropdowns(db);
	getModalHeaderProducts(db);
	getBurgerMenuSearchProducts(db);
	burgerMenuSearchControl(db);

	// main page
	getProductStaticCards(db);
	// main page and one product
	getProductSliderCards(db);

	// main blog
	getBlogStaticCards(db);
	getBlogSliderCards(db);

	getReviewCards(db);

	// params blogs after reload
	getBlogs(db, orderBy("createdAt", "desc"));
	blogFiltration(db);

	oneBlogTop(db);

	getCart(db);
	getModalCart(db);
	addRemoveProduct(db);
	deleteFromCart(db);
	addQuantity(db);
	addModalQuantity(db);
	subtractQuantity(db);
	subtractModalQuantity(db);
	itemsQuantity(db);
	totalPrice(db);
	addShipping(db);
	promocode(db);
	clearAllCart(db);

	openModalCart(db);
}
