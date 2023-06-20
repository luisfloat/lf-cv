<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
    items: Array<Object>,
    sep: string,
    type: string,
}>();
const { items, type, sep } = toRefs(props);
</script>

<template>
    <p class="p">
        <template v-for="(item, i) in items">
            <span class="vbar-list__item" :class="{ 'vbar-list__item--primary': type === 'primary' }">{{ item }}</span>
            <span class="vbar-list__sep" v-if="i !== items.length - 1">{{ sep }}</span>
        </template>
    </p>
</template>