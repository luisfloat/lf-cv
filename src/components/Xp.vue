<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import XpItem from "./XpItem.vue";

const classes = useCssModule();
const content = useContent(s => s.body?.experience);
</script>

<template>
    <section class="section section--main">
        <h2 class="section__title">{{ content.title }}</h2>
        <ul :class="classes.xpItems">
            <li v-for="item in content.items">
                <XpItem v-bind="item" />
            </li>
        </ul>
    </section>
</template>

<style module lang="stylus">
.xpItems {
    display: flex;
    flex-direction: column;
    gap: 4pt;
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>