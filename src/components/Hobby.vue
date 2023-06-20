<script setup lang="ts">
import { computed } from "vue";
import { useContent } from "../composables/useContent";
import VBarList from "./VBarList.vue";

const bodyContent = useContent(s => s.body);
const content = computed(() => bodyContent.value.hobby);
</script>

<template>
    <div class="section section--aside">
        <h2 class="section__title">{{ content.title }}</h2>
        <VBarList :items="content.headline" :sep="bodyContent?.skills?.sep" type="normal" />
    </div>
</template>