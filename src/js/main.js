import { initDropdownList } from "./common/dropdown.js";
import { showFilterSidebar } from "./common/show-filter-sidebar.js";
import { filterDropdown } from "./common/filter-dropdown.js";
import { oneProductDropdown } from "./components/one-product/one-product-dropdown.js";
import { checkedPack } from "./common/checked-pack.js";
import { initFirebase } from "./firebase/db.js";
import { productSlider } from "./sliders/product-slider.js";
import { blogSlider } from "./sliders/blog-slider.js";
import { reviewSlider } from "./sliders/review-slider.js";
import { priceRange } from "./common/price-range.js";
import { openMobileFilter } from "./modals/open-mobile-filter.js";
import { openModalCart } from "./modals/open-modal-cart.js";
import { contactsValidation } from "./validation/contacts-validation.js";
import { checkoutValidation } from "./validation/checkout-validation.js";
import { paymentValidation } from "./validation/payment-validation.js";

// firebase
initFirebase();

// range
priceRange();

// modals
openMobileFilter();
openModalCart();

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
filterDropdown();
checkedPack();
