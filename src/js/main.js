import { initDropdownList } from "./common/dropdown.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/products.js";
import { blogSlider } from "./sliders/blogs.js";

// common

initDropdownList();

// firebase

initFirebase();

// sliders

productSlider();
blogSlider();
