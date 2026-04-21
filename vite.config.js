import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { resolve } from "path";

export default defineConfig({
	plugins: [nunjucks()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				components: resolve(__dirname, "src/pages/components/index.html"),
				products: resolve(__dirname, "src/pages/products/index.html"),
				oneProduct: resolve(__dirname, "src/pages/one-product/index.html"),
				cart: resolve(__dirname, "src/pages/cart/index.html"),
				// blogs: resolve(__dirname, "src/pages/blogs/index.html"),
				// oneBlog: resolve(__dirname, "src/pages/one-blog/index.html"),
				// about: resolve(__dirname, "src/pages/about/index.html"),
				// contact: resolve(__dirname, "src/pages/contact/index.html"),
			},
		},
	},
	base: "/seedra/",
});

// const base = import.meta.env.BASE_URL;
