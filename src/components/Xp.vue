<script lang="tsx" setup>
import { useContent } from "../composables/useContent";
import XpItem from "./XpItem.vue";

const content = useContent();

function render() {
    const { title, items } = content.value.body?.experience;

    return (
        <div class="section section--main">
            <h2 class="section__title">{ title }</h2>
            <div class="xp-items">
                { items.map((item: any) => <XpItem {...item}/>) }
            </div>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
div {
    
}
</style>