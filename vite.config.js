import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default {
    root: "src/",
    publicDir: "assets/",
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
        vue(),
        vueJsx(),
    ],
};