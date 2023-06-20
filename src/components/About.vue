<script setup lang="ts">
import { useContent } from "../composables/useContent";

const about = useContent(s => s.body.about);
</script>

<template>
    <div class="section section--aside">
        <h2 class="section__title">{{ about.title }}</h2>
        <p class="section__text">{{ about.text }}</p>
    </div>
</template>