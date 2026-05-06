import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { resolve } from "path";

export default defineConfig({
	plugins: [nunjucks()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				products: resolve(__dirname, "src/pages/products/index.html"),
				oneProduct: resolve(__dirname, "src/pages/one-product/index.html"),
				cart: resolve(__dirname, "src/pages/cart/index.html"),
				checkout: resolve(__dirname, "src/pages/checkout/index.html"),
				payment: resolve(__dirname, "src/pages/payment/index.html"),
				blogs: resolve(__dirname, "src/pages/blogs/index.html"),
				oneBlog: resolve(__dirname, "src/pages/one-blog/index.html"),
				about: resolve(__dirname, "src/pages/about/index.html"),
				contacts: resolve(__dirname, "src/pages/contacts/index.html"),
			},
		},
	},
	base: "/seedra/",
});

// const base = import.meta.env.BASE_URL;
