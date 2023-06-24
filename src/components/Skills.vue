<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import VBarList from "./VBarList.vue";

const classes = useCssModule();
const content = useContent(s => s.body.skills);
</script>

<template>
    <section class="section section--aside">
        <h2 class="section__title">{{ content.title }}</h2>
        <div :class="classes.skills">
            <VBarList :items="content.hard1" :sep="content.sep" type="primary" />
            <VBarList :items="content.hard2" :sep="content.sep" type="normal" />
            <VBarList :items="content.soft1" :sep="content.sep" type="normal" />
            <VBarList :items="content.soft2" :sep="content.sep" type="primary" />
        </div>
    </section>
</template>

<style module lang="stylus">
.skills {
    display: flex;
    flex-direction: column;
    gap: 6pt;
}
</style>