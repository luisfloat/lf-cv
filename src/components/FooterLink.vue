<script setup lang="ts">
import { computed, useCssModule } from "vue";
import { formatPhone } from "../helpers/formatPhone";

const classes = useCssModule();
const props = defineProps<{
    label: string,
    obj: any,
}>();

const anchorTypes = {
    "mailto:": "in",
    "https:": "ex",
    "tel:": "in",
};

const link = computed<any>(() => {
    const { href, value } = props.obj;
    const protocol = new URL(href).protocol;
    const anchorType = anchorTypes[protocol] || "none";

    const attrs = {
        href,
        target: "_blank",
        class: `${classes.link__a} link--${anchorType}`,
    };

    return {
        attrs,
        value: protocol === "tel:" ? formatPhone(value) : value,
    };
});
const linkId = `footer-link-${btoa(props.label)}`;
</script>

<template>
    <div :class="classes.link">
        <label :class="classes.link__label" :for="linkId">{{ props.label }}</label>
        <a v-bind="link.attrs" :id="linkId">{{ link.value }}</a>
    </div>
</template>

<style module lang="stylus">
.link {
    display: flex;

    &__label {
        width: 60pt;
        font-weight: 400;
        color: color-gray-4;
        font-size: 9pt;
    }

    &__a {
        font-size: 9pt;
    }    
}
</style>