import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    css: {
        preprocessorOptions: {
            stylus: {
                additionalData: `@import "lfds-tokens/dist/lfds-tokens.styl";`,
            },
        },
    },
    build: {
        outDir: "./dist/",
        emptyOutDir: true,
    },
    plugins: [
        react(),
    ],
});