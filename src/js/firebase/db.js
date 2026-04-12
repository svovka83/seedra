import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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

	// await addDoc(collection(db, "products"), {
	// 	name: "Apple",
	// 	price: 50,
	// 	category: "fruits",
	// });

	const categories = document.querySelector(".our-products__categories");

	const collections = await getDocs(collection(db, "collections"));

	collections.forEach((collection) => (categories.innerHTML += `<p>${collection.data().name}</p>`));
}
