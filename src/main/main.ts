import { createApp as createDomApp } from "vue";
import App from "./App.vue";
import { router } from "./routes.ts";

const app = createDomApp(App);
app.use(router);
app.mount("#app");