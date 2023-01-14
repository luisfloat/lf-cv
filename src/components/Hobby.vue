<script lang="tsx" setup>
import { useContent } from "../composables/useContent";
import VBarList from "./VBarList.vue";

const content = useContent();

function render() {
    const body = content.value.body;
    const { title, headline } = body?.hobby;

    return (
        <div class="section section--aside">
            <h2 class="section__title">{ title }</h2>
            <VBarList items={headline} sep={body?.skills?.sep} type="normal"/>
        </div>
    );
}
</script>

<template><render/></template>