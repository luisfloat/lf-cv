<script lang="tsx" setup>
import { useContent } from "../composables/useContent";

const content = useContent();

function render() {
    const { title, text } = content.value.body?.about;

    return (
        <div class="section section--aside">
            <h2 class="section__title">{ title }</h2>
            <p class="section__text">{ text }</p>
        </div>
    );
}
</script>

<template><render/></template>