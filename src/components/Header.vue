<script setup lang="ts">
import { useCssModule } from 'vue';
import { useContent } from '../composables/useContent';

const classes = useCssModule();
const content = useContent(s => s.body.header);
</script>

<template>
    <header class="section section--header">
        <h1 class="section__title section__title--header">{{ content.title }}</h1>
        <div :class="classes.description">{{ content.description }}</div>
    </header>
</template>

<style module lang="stylus">
.description {
    font-weight: 400;
    font-size: 10pt;
    color: color-gray-4;

    margin-top: 2pt !important;
    margin-bottom: 10pt !important;
}
</style>