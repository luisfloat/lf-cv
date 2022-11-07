import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default {
    root: "src/main/",
    build: {
        outDir: "../../dist/web/",
        emptyOutDir: true,
    },
    plugins: [
        vue(),
        vueJsx(),
    ],
};