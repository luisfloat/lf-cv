<script lang="tsx" setup>
import { useCssModule } from 'vue';
import { useContent } from '../composables/useContent';

const classes = useCssModule();
const content = useContent();

function render() {
    const { title, description } = content.value.body?.header;

    return (
        <div class="section section--header">
            <h1 class="section__title section__title--header">{ title }</h1>
            <div class={classes.description}>{ description }</div>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.description {
    font-weight: 400;
    font-size: 10pt;
    color: color-gray-4;

    margin-top: 2pt !important;
    margin-bottom: 10pt !important;
}
</style>