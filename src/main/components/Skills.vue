<script lang="tsx" setup>
import { useContent } from "../composables/useContent";
import VBarList from "./VBarList.vue";

const content = useContent();

function render() {
    const body = content.value.body;
    const { title, hard1, hard2, soft1, soft2 } = body?.skills;
    const sep = body?.skills?.sep;

    return (
        <div class="section section--aside">
            <h2 class="section__title">{ title }</h2>
            <VBarList items={hard1} sep={sep} type="primary"/>
            <VBarList items={hard2} sep={sep} type="normal"/>
            <VBarList items={soft1} sep={sep} type="normal"/>
            <VBarList items={soft2} sep={sep} type="primary"/>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.skills {
    &__hard-name {
        color: color-azure-4;
    }
}
</style>