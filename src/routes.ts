import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "./views/MainView.vue";

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Home", redirect: "/en-us" },
    { path: "/:lang", name: "App", component: MainView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});