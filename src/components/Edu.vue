<script lang="tsx" setup>
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";

const classes = useCssModule();
const content = useContent();

function render() {
    const { title, items, footerText } = content.value.body?.edu;
    
    return (
        <div class="section section--main">
            <h2 class="section__title">{ title }</h2>
            { items.map((item: any) => <p class={classes.item}>{ item }</p>) }
            <p class={classes.footerText}>{ footerText }</p>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.item {
    font-size: 9pt;
    color: color-gray-3;   

    margin-top: 2pt;
}

.footerText {
    font-size: 9pt;
    color: color-gray-2;   

    margin-top: 6pt; 
}
</style>