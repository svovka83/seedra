import { initDropdownList } from "./common/dropdown.js";
import { showFilterSidebar } from "./common/show-filter-sidebar.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/product-slider.js";
import { blogSlider } from "./sliders/blog-slider.js";
import { reviewSlider } from "./sliders/review-slider.js";
import { openModalHeaderSearch } from "./modals/open-modal-header-search.js";
import { openBurgerMenu } from "./burger-menu/open-burger-menu.js";
import { openBurgerMenuDropdown } from "./burger-menu/open-burger-menu-dropdown.js";

// firebase
initFirebase();

// burger-menu
openBurgerMenu();
openBurgerMenuDropdown();
openModalHeaderSearch();

// sliders
productSlider();
blogSlider();
reviewSlider();

// common
initDropdownList();
showFilterSidebar();
