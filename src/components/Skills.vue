<script setup lang="ts">
import { useContent } from "../composables/useContent";
import VBarList from "./VBarList.vue";

const content = useContent(s => s.body.skills);
</script>

<template>
    <div class="section section--aside">
        <h2 class="section__title">{{ content.title }}</h2>
        <VBarList :items="content.hard1" :sep="content.sep" type="primary" />
        <VBarList :items="content.hard2" :sep="content.sep" type="normal" />
        <VBarList :items="content.soft1" :sep="content.sep" type="normal" />
        <VBarList :items="content.soft2" :sep="content.sep" type="primary" />
    </div>
</template>

<style module lang="stylus">
.skills {
    &__hard-name {
        color: color-azure-4;
    }
}
</style>