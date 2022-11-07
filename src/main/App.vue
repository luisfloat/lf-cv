<script lang="tsx" setup>
import { useRouter } from "vue-router";
import globalStyle from "./style/index.styl?inline";

function render() {
    const router = useRouter();
    const route = router.currentRoute;
    const routes = [
        { to: "en-us", label: "en-us" },
        { to: "pt-br", label: "pt-br" },
    ];
    
    const activeRoute = (routeName) => route.value.params.lang === routeName ? "is-active" : "";

    const routerLink = (route: any) => (
        <router-link to={route.to} class={`nav__link ${activeRoute(route.to)}`}>{ route.label }</router-link>
    );

    return (
        <>
            <style>{ globalStyle }</style>
            <div class="nav">
                {routes.map((o: any) => routerLink(o))}
            </div>
            <router-view />
        </>
    );
}
</script>

<template><render/></template>