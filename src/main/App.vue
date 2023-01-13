<script lang="tsx" setup>
import { useCssModule } from "vue";
import { useRouter } from "vue-router";
import { useContent } from "./composables/useContent";
import globalStyle from "./style/index.styl?inline";

const content = useContent();
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
                <button class={classes.print} onClick={() => print()}>
                    {content.value.body.nav.print}
                </button>
                {routes.map((o: any) => routerLink(o))}
            </div>
            <router-view />
        </>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.print {
    margin-right: 8px;

    padding: 4px 8px;
    background: color-azure-4;
    color: color-white;
    transition: background .25s ease-out,color .25s ease-out;
    border: 1px solid color-azure-4;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        background: color-azure-3;
    }

    &:focus {
        outline: 4px solid alpha(color-azure-4, 0.1);
    }

    &:active {
        outline: none;
    }
}

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