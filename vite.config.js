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
			},
		},
	},
	base: "/seedra/",
});

// const base = import.meta.env.BASE_URL;
