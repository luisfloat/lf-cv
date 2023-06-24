<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import DetailsItem from "./DetailsItem.vue";

const classes = useCssModule();
const details = useContent(s => s.body.details);
</script>

<template>
    <section class="section section--aside">
        <h2 class="section__title">{{ details.title }}</h2>
        <ul :class="classes.items">
            <li v-for="link in details.links">
                <DetailsItem v-bind="link" />
            </li>
        </ul>
    </section>
</template>

<style module lang="stylus">
.items {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        line-height: 1.1;
    }    
}
</style>