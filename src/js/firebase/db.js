import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

import { button } from "./components/button";

export async function initFirebase() {
	const firebaseConfig = {
		apiKey: "AIzaSyBSgsPaDJeMHySYwrDrOEL0HM3AB_XrSY8",
		authDomain: "avada-media-seedra.firebaseapp.com",
		projectId: "avada-media-seedra",
		storageBucket: "avada-media-seedra.firebasestorage.app",
		messagingSenderId: "83080741512",
		appId: "1:83080741512:web:15c82497323f367e1cd53d",
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	const categoryList = document.querySelector(".our-products__categories");

	const categories = await getDocs(collection(db, "categories"));

	categories.forEach((category) => {
		categoryList.innerHTML += button("btn_icon-text", category.data().name, category.data().iconId);
	});
}
