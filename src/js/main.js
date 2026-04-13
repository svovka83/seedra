import { initDropdownList } from "./common/dropdown.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/products.js";

// common

initDropdownList();

// firebase

initFirebase();

// sliders

productSlider();
