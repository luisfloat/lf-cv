<script lang="tsx" setup>
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import DetailsItem from "./DetailsItem.vue";

const classes = useCssModule();
const content = useContent();

function render() {
    const { title, links } = content.value.body.details;

    return (
        <div class="section section--aside">
            <h2 class="section__title">{ title }</h2>
            <nav>
                <ul class={classes.items}>
                    { links.map((o) => <DetailsItem {...o}/>) }
                </ul>
            </nav>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.items {
    li {
        line-height: 1.1;
    }    
}
</style>