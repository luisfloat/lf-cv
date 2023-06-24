<script setup lang="ts">
import { toRefs, useCssModule } from 'vue';

const classes = useCssModule();

const props = defineProps<{
    items: Array<Object>,
    sep: string,
    type: string,
}>();
const { items, type, sep } = toRefs(props);
</script>

<template>
    <ul :class="classes.list">
        <li v-for="(item, i) in items">
            <span :class="{ [classes.item]: true, [classes.isPrimary]: type === 'primary' }">{{ item }}</span>
            <span :class="classes.sep" v-if="i !== items.length - 1">{{ sep }}</span>
        </li>
    </ul>
</template>

<style module lang="stylus">
.list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
        display: flex;
        align-items: center;
        line-height: 1;
    }
}

.item {
    color: color-gray-3;
    font-weight: 400;
    font-size: 9pt;
}

.isPrimary {
    color: color-azure-4;
}

.sep {
    font-weight: 400;
    color: color-gray-5;
    margin-inline: 2pt;
}
</style>