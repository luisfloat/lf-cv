
<script lang="tsx" setup>
const props = defineProps<{
    type: "website" | "phone" | "email" | "data",
    label?: string,
    domain?: string,
}>();

function render() {
    const { type, domain, label } = props;

    const types = {
        website: [ "https", "ex" ],
        phone: [ "tel", "in" ],
        email: [ "mailto", "in" ],
        data: [ undefined, "none" ],
    };

    const cur = types[type];
    const linkAttrs: any = {
        class: "link--" + cur[1],
        href: cur[0] ? `${cur[0]}:${domain}` : undefined,
        target: type == "website" ? "_blank" : undefined,
    };

    return (
        <li><a {...linkAttrs}>{ label }</a></li>
    );
}
</script>

<template><render/></template>