<script lang="tsx" setup>
import { useContent } from "../composables/useContent";

const content = useContent();

function render() {
    const { title, items, footerText } = content.value.body?.edu;
    
    return (
        <div class="section section--main">
            <h2 class="section__title">{ title }</h2>
            { items.map((item: any) => <p class="edu__item">{ item }</p>) }
            <p class="edu__footer-text">{ footerText }</p>
        </div>
    );
}
</script>

<template><render/></template>