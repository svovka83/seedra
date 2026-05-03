import { initDropdownList } from "./common/dropdown.js";
import { showFilterSidebar } from "./common/show-filter-sidebar.js";
import { filterDropdownControl } from "./common/filter-dropdown-control.js";
import { oneProductDropdown } from "./components/one-product/one-product-dropdown.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/product-slider.js";
import { blogSlider } from "./sliders/blog-slider.js";
import { reviewSlider } from "./sliders/review-slider.js";
import { openMobileFilter } from "./modals/open-mobile-filter.js";
import { openModalHeaderSearch } from "./modals/open-modal-header-search.js";
import { contactsValidation } from "./validation/contacts-validation.js";
import { checkoutValidation } from "./validation/checkout-validation.js";
import { paymentValidation } from "./validation/payment-validation.js";
import { openBurgerMenu } from "./burger-menu/open-burger-menu.js";
import { openBurgerMenuDropdown } from "./burger-menu/open-burger-menu-dropdown.js";
import { filterSide } from "./pages/products/filter-side.js";

// products
filterSide();

// firebase
initFirebase();

// burger-menu
openBurgerMenu();
openBurgerMenuDropdown();
openModalHeaderSearch();

// modals
openMobileFilter();

// dropdown
oneProductDropdown();

// validations
contactsValidation();
checkoutValidation();
paymentValidation();

// sliders
productSlider();
blogSlider();
reviewSlider();

// common
initDropdownList();
showFilterSidebar();
filterDropdownControl();
