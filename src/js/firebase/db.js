import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getCategories } from "./services/get-categories";
import { getProductStaticCards, getProductSliderCards } from "./services/get-products-main";
import { getFilterProducts } from "./services/get-products-filter";
import { getBlogStaticCards, getBlogSliderCards } from "./services/get-blogs";
import { getFilterBlogs } from "./services/get-filter-blogs";
import { getReviewCards } from "./services/get-reviews";

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
}
