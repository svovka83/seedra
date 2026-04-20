import { initDropdownList } from "./common/dropdown.js";
import { showFilterSidebar } from "./common/show-filter-sidebar.js";
import { filterDropdown } from "./common/filter-dropdown.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/product-slider.js";
import { blogSlider } from "./sliders/blog-slider.js";
import { reviewSlider } from "./sliders/review-slider.js";
import { updateProgress } from "./common/price-range.js";

// firebase

initFirebase();

// range

updateProgress();

// sliders

productSlider();
blogSlider();
reviewSlider();

// common

initDropdownList();
showFilterSidebar();
filterDropdown();
