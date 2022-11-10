<script lang="tsx" setup>
import { useCssModule } from "vue";
import { formatPhone } from "../helpers/formatPhone";

const classes = useCssModule();
const props = defineProps<{
    label: string,
    obj: any,
}>();

function render() {
    const label = props.label;
    let { value, href } = props.obj;

    const protoc = new URL(href).protocol;
    value = protoc === "tel:" ? formatPhone(value) : value;
    
    const anchorTypes = {
        "mailto:": "in",
        "https:": "ex",
        "tel:": "in",
    };
    const anchorType = anchorTypes[protoc] || "none";

    const linkAttrs = {
        href,
        target: "_blank",
        class: `${classes.link__a} link--${anchorType}`,
    };

    return (
        <div class={classes.link}>
            <div class={classes.link__label}>{ label }</div>
            <a {...linkAttrs}>{ value }</a>
        </div>
    );
}
</script>

<template><render/></template>

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