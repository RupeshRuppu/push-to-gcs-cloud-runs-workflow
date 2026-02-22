import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "public",
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
