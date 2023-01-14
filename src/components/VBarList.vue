<script lang="tsx" setup>
const props = defineProps<{
    items: Array<Object>,
    sep: string,
    type: string,
}>();

function render() {
    const { items, type, sep } = props;

    return (
        <p class="p">
            { items.map(
                (item, i) => <>
                    { type == "primary" ?
                        <span class="vbar-list__item vbar-list__item--primary">{ item }</span> :
                        <span class="vbar-list__item">{ item }</span>
                    }
                    { i !== items.length - 1 ? <span class="vbar-list__sep">{ sep }</span> : "" }
                </>
            )}
        </p>
    );
}
</script>

<template><render/></template>