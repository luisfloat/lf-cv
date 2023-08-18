import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    //root: "src/",
    //publicDir: "assets/",
    css: {
        preprocessorOptions: {
            stylus: {
                additionalData: `@import "lfds-tokens/dist/lfds-tokens.styl";`,
            },
        },
    },
    build: {
        outDir: "../dist/web/",
        emptyOutDir: true,
    },
    plugins: [
        react(),
    ],
});