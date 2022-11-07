<script lang="tsx" setup>
import { useContent } from '../composables/useContent';

const content = useContent();

function render() {
    const { title, description } = content.value.body?.header;

    return (
        <div class="section section--header">
            <h1 class="section__title section__title--header">{ title }</h1>
            <div class="header__description">{ description }</div>
        </div>
    );
}
</script>

<template><render/></template>