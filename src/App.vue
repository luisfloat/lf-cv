<script setup lang="ts">
import { useCssModule } from "vue";
import { useRouter } from "vue-router";
import { useContent } from "./composables/useContent";
import "./styles/index.styl";

const content = useContent();
const classes = useCssModule();

const routes = [
    { to: "en-us", label: "en-us" },
    { to: "pt-br", label: "pt-br" },
];

const router = useRouter();

const isActiveRoute = (routeName: string) => router.currentRoute.value.params.lang === routeName;
const print = () => window.print;
</script>

<template>
    <div :class="classes.nav">
        <button :class="classes.print" @click="print">
            {{ content.body.nav.print }}
        </button>
        <template v-for="route in routes">
            <RouterLink :to="route.to" :class="{ [classes.nav__link]: true, [classes.isActive]: isActiveRoute(route.to) }">
                {{ route.label }}
            </RouterLink>
        </template>
    </div>
    <RouterView />
</template>

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