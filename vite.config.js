import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/ape-nft-test-project/",
	plugins: [
		react(),
		svgr(),
		ViteImageOptimizer({
			png: {
				quality: 86,
			},
			jpeg: {
				quality: 86,
			},
			jpg: {
				quality: 86,
			},
		}),
		{
			...imagemin(["./src/images/**/*.{jpg,png,jpeg}"], {
				destination: "./src/images/webp",
				plugins: [imageminWebp({ quality: 86 })],
			}),
			apply: "serve",
		},
	],
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			src: "/src",
			styles: "/src/styles",
			components: "/src/components",
			layout: "/src/layout",
		},
	},
});
