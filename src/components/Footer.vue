<script setup lang="ts">
import { useCssModule, computed } from "vue";
import { useContent } from "../composables/useContent";
import FooterLink from "./FooterLink.vue";
import moment from "moment";

const classes = useCssModule();
const content = useContent(s => s.body.footer);

const linkAttrs = (k: string) => ({ label: k, obj: content.value.links[k] });

const generatedTime = computed(() => {
    moment.locale(content.value.generation.locale);
    return moment().format(content.value.generation.timeFormat);
});
</script>

<template>
    <footer class="section section--footer">
        <ul :class="classes.links">
            <li v-for="k in Object.keys(content.links)">
                <FooterLink v-bind="linkAttrs(k)" />
            </li>
        </ul>
        <div :class="classes.logo">
            <img :class="classes.logo__image" src="img/logo.png" alt="Logo" />
        </div>
        <div :class="classes.generation">
            <div :class="classes.generation__text" :data-content="content.generation.text + generatedTime" />
        </div>
    </footer>
</template>

<style module lang="stylus">
.links {
    width: 100%;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;

    &__image {
        width: 1.38cm;
        height: 1.38cm;
    }
}

.generation {
    display: none;
    position: absolute;
    
    @media print {
        display: block;
    }

    &__text::after {
        position: relative;
        content: attr(data-content);
        width: 100%;
        height: 100%;
        z-index: 200;
        bottom: -60px;
        left: 0;
        font-size: 9pt;
        color: color-gray-6;
    }
}
</style>