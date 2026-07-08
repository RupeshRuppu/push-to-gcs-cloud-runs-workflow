import { defineConfig } from "vite";

/* webhook test - added comment*/
export default defineConfig({
	build: {
		outDir: "public",
		assetsInlineLimit: 0,
		rollupOptions: {
			output: {
				entryFileNames: "apps/[name].js",
				chunkFileNames: "apps/[name].js",
				assetFileNames: assetInfo => {
					const name = assetInfo.name ?? "";
					const ext = name.split(".").pop()?.toLowerCase();
					if (ext === "css") {
						return "apps/[name][extname]";
					}
					return "fonts/[name][extname]";
				},
			},
		},
	},
});
