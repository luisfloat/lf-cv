import { createRouter, createWebHistory } from "vue-router";
import MainView from "./views/MainView.vue";

const routes = [
    { path: "/", name: "en-us", component: MainView },
    { path: "/:lang", name: "App", component: MainView, props: true },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});