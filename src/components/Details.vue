<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import DetailsItem from "./DetailsItem.vue";

const classes = useCssModule();
const details = useContent(s => s.body.details);
</script>

<template>
    <div class="section section--aside">
        <h2 class="section__title">{{ details.title }}</h2>
        <nav>
            <ul :class="classes.items">
                <DetailsItem v-for="link in details.links" v-bind="link" />
            </ul>
        </nav>
    </div>
</template>

<style module lang="stylus">
.items {
    li {
        line-height: 1.1;
    }    
}
</style>