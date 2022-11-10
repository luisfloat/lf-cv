<script lang="tsx" setup>
import { formatPhone } from "../helpers/formatPhone";

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
        class: `footer-link__a link--${anchorType}`,
    };

    return (
        <div class="footer-link">
            <div class="footer-link__label">{ label }</div>
            <a {...linkAttrs}>{ value }</a>
        </div>
    );
}
</script>

<template><render/></template>