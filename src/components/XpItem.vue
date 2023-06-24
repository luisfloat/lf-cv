<script setup lang="ts">
import { toRefs, useCssModule } from 'vue';
import VBarList from './VBarList.vue';

const classes = useCssModule();

const props = defineProps<{
    role: string,
    link: string,
    date: string,
    employmentType: string,
    company: string,
    description: string,
    skills: string,
}>();
const { role, link, company, employmentType, date, description, skills } = toRefs(props);
</script>

<template>
    <div>
        <h3 :class="classes.role">{{ role }}</h3>
        <h4 :class="classes.headline">
            <a :href="link" target="_blank" :class="classes.headline__company">{{ company }}</a>
            ·
            <span :class="classes.headline__employmentType">{{ employmentType }}</span>
            <span :class="classes.date">({{ date }})</span>
        </h4>
        <p :class="classes.description" v-if="description">{{ description }}</p>
        <p :class="classes.skills">
            {{ skills }}
        </p>
    </div>
</template>

<style module lang="stylus">
.role {
    font-size: 10pt;
    color: color-azure-4;
    text-decoration: none;
}

.date {
    font-weight: 400;
    font-size: 9pt;
    color: color-gray-4;
}

.headline {
    color: color-gray-4;
    font-size: 11pt;
    display: flex;
    gap: 2pt;
    align-items: center;

    &__company {
        color: color-gray-3;
        font-weight: 400;
        font-size: 9pt;
        text-decoration: underline;
    }

    &__employmentType {
        font-weight: 400;
        font-size: 9pt;
        color: color-gray-3;
        position: relative;
    }
}

.description {
    color: color-gray-4;
    font-weight: 400;
    font-size: 9pt;

    margin-top: 6pt;
    margin-bottom: 10pt;
}

.skills {
    color: color-gray-4;
    font-size: 9pt;
}
</style>