<script setup lang="ts">
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";

const classes = useCssModule();
const education = useContent(s => s.body.edu);
</script>

<template>
    <section class="section section--main">
        <h2 class="section__title">{{ education.title }}</h2>
        <ul :class="classes.items">
            <li :class="classes.item" v-for="item in education.items">
                - <span :class="classes.title">{{ item.title }}</span>
                · <span :class="classes.org">{{ item.org }}</span>
                <span :class="classes.time">({{ item.startTime }} - {{ item.endTime }})</span>
            </li>
        </ul>
        <p :class="classes.footerText" v-if="education.footerText">{{ education.footerText }}</p>
    </section>
</template>

<style module lang="stylus">
.items {
    padding: 0;
    margin: 0;
    list-style: none;
}

.item {
    font-size: 9pt;
    color: color-gray-4;
    display: flex;
    gap: 2pt;

    margin-top: 2pt;

    .title {
        color: color-gray-3;
    }

    .org {
        color: color-gray-4;
    }

    .time {
        color: color-gray-4;
    }
}

.footerText {
    font-size: 9pt;
    color: color-gray-2;   

    margin-top: 6pt; 
}
</style>