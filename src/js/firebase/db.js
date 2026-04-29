import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getCategories } from "./services/get-categories";
import {
	getProductStaticCards,
	getProductStaticCardsOnePage,
	getProductSliderCards,
} from "./services/get-products-main";
import { getProducts } from "./services/products/get-products";
import { productFiltration } from "./services/products/product-filtration";
import { productFiltrationMob } from "./services/products/product-filtration-mob";

import { getProductImage } from "./services/one-product/get-product-img";
import { getProductTitle } from "./services/one-product/get-product-title";
import { getProductCategory } from "./services/one-product/get-product-category";
import { getProductQuantity } from "./services/one-product/get-product-quantity";
import { initCounterBlock } from "./services/one-product/counter-block";
import { getProductPacks } from "./services/one-product/get-one-product-packs";
import { checkedPack } from "./services/one-product/checked-pack";
import { addOneToCart } from "./services/one-product/add-one-to-cart";

import { getBlogStaticCards, getBlogSliderCards } from "./services/get-blogs";
import { getFilterBlogs } from "./services/get-filter-blogs";
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

import { getCheckout } from "./services/checkout/get-checkout";
import { getPayment } from "./services/payment/get-payment";

import { openModalCategory } from "../modals/open-modal-category";

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
	getProductStaticCardsOnePage(db);
	getProductSliderCards(db);
	getProducts(db);
	productFiltration(db);
	productFiltrationMob(db);

	getProductImage(db);
	getProductTitle(db);
	getProductCategory(db);
	getProductQuantity(db);
	initCounterBlock(db);
	getProductPacks(db);
	checkedPack(db);
	addOneToCart(db);

	getBlogStaticCards(db);
	getBlogSliderCards(db);
	getFilterBlogs(db);
	getReviewCards(db);
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

	getCheckout(db);
	getPayment(db);

	openModalCategory(db);
}
