<script setup lang="ts">
import { useContent } from "../composables/useContent";
import XpItem from "./XpItem.vue";

const content = useContent(s => s.body?.experience);
</script>

<template>
    <div class="section section--main">
        <h2 class="section__title">{{ content.title }}</h2>
        <div class="xp-items">
            <XpItem v-bind="item" v-for="item in content.items" />
        </div>
    </div>
</template>

<style module lang="stylus">
div {
    
}
</style>