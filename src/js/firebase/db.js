import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

import { button } from "./components/button";

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

	const categoryList = document.querySelector(".our-products__categories");

	const categories = await getDocs(collection(db, "categories"));

	categories.forEach((category) => {
		categoryList.innerHTML += button("btn_icon-text", category.data().name, category.data().iconId);
	});
}
