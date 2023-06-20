<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";

const classes = useCssModule();
const education = useContent(s => s.body.edu);
</script>

<template>
    <div class="section section--main">
        <h2 class="section__title">{{ education.title }}</h2>
        <p :class="classes.item" v-for="item in education.items">{{ item }}</p>
        <p :class="classes.footerText">{{ education.footerText }}</p>
    </div>
</template>

<style module lang="stylus">
.item {
    font-size: 9pt;
    color: color-gray-3;   

    margin-top: 2pt;
}

.footerText {
    font-size: 9pt;
    color: color-gray-2;   

    margin-top: 6pt; 
}
</style>