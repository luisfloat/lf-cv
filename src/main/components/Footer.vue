<script lang="tsx" setup>
import { useCssModule } from "vue";
import { useContent } from "../composables/useContent";
import FooterLink from "./FooterLink.vue";

const classes = useCssModule();
const content = useContent();

function render() {
    const body = content.value.body;
    const { poweredBy, links } = body?.footer;

    const linkAttrs = (k: string) => ({ label: k, obj: links[k] });

    return (
        <div class="section section--footer">
            <div class={classes.links}>
                {Object.keys(links).map((k: string) => <FooterLink {...linkAttrs(k)}/>)}
            </div>
            <div class={classes.logo}>
                <img class={classes.logo__image} src="assets/img/lf-logo.png" alt="Logo" />
            </div>
            <div class={classes.poweredBy}>
                <div class={classes.poweredBy__text} data-content={ poweredBy }></div>
            </div>
        </div>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.links {
    width: 100%;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;

    &__image {
        width: 1.38cm;
        height: 1.38cm;
    }
}

.poweredBy {
    position: absolute;
    
    &__text::after {
        position: relative;
        content: attr(data-content);
        width: 100%;
        height: 100%;
        z-index: 200;
        bottom: -60px;
        left: 0;
        font-size: 9pt;
        color: color-gray-6;
    }
}
</style>