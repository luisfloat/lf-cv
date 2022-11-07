<script lang="tsx" setup>
const props = defineProps<{
    name: string,
    protoc: string,
    domain?: string,
    value: string,
}>();

function render() {
    const { name, protoc, domain, value } = props;

    const anchorTypes = {
        mailto: "in",
        https: "ex",
        tel: "in",
    };
    const anchorType = anchorTypes[protoc] || "none";

    const linkAttrs = {
        href: `${protoc}:${domain || value}`,
        target: "_blank",
        class: `footer-link__a link--${anchorType}`,
    };

    return (
        <div class="footer-link">
            <div class="footer-link__label">{ name }</div>
            <a {...linkAttrs}>{ value }</a>
        </div>
    );
}
</script>

<template><render/></template>