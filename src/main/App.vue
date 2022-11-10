<script lang="tsx" setup>
import { useCssModule } from "vue";
import { useRouter } from "vue-router";
import globalStyle from "./style/index.styl?inline";

const classes = useCssModule();

function render() {
    const router = useRouter();
    const route = router.currentRoute;
    const routes = [
        { to: "en-us", label: "en-us" },
        { to: "pt-br", label: "pt-br" },
    ];
    
    const activeRoute = (routeName) => route.value.params.lang === routeName ? classes.isActive : "";

    const routerLink = (route: any) => (
        <router-link to={route.to} class={`${classes.nav__link} ${activeRoute(route.to)}`}>{ route.label }</router-link>
    );

    return (
        <>
            <style>{ globalStyle }</style>
            <div class={classes.nav}>
                {routes.map((o: any) => routerLink(o))}
            </div>
            <router-view />
        </>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.nav {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 8px;
    margin-left: 8px;
    color: color-white;

    @media print {
        display: none;
    }

    &__link {
        color: color-azure-5;
        padding: 4px 8px;
        font-size: 14px;

        &:hover {
            color: color-azure-4;  
        }

        &.isActive {
            color: color-gray-5;

            &:hover {
                color: color-gray-4;  
            }    
        }
    }
}
</style>