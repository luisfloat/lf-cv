
<script setup lang="ts">
import { computed, toRefs } from 'vue';

type DetailsItem = {
    type: "website" | "phone" | "email" | "data",
    label?: string,
    domain?: string,
};
const props = defineProps<DetailsItem>();
const { type, domain, label } = toRefs(props);

const types = {
    website: ["https", "ex"],
    phone: ["tel", "in"],
    email: ["mailto", "in"],
    data: [undefined, "none"],
};

const linkAttrs = computed(() => {
    const [protocol, className] = types[type.value];
    const href = protocol ? `${protocol}:${domain.value}` : undefined;
    const target = type.value === "website" ? "_blank" : undefined;

    return {
        class: `link--${className}`,
        href,
        target,
    };
});
</script>

<template>
    <div><a v-bind="linkAttrs">{{ label }}</a></div>
</template>