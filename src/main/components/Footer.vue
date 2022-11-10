<script lang="tsx" setup>
import { useContent } from "../composables/useContent";
import FooterLink from "./FooterLink.vue";

const content = useContent();

function render() {
    const body = content.value.body;
    const { poweredBy, links } = body?.footer;

    const linkAttrs = (k: string) => ({ label: k, obj: links[k] });

    return (
        <div class="section section--footer">
            <div class="footer-links">
                {Object.keys(links).map((k: string) => <FooterLink {...linkAttrs(k)}/>)}
            </div>
            <div class="footer-logo">
                <img class="footer-logo__image" src="assets/img/lf-logo.png" alt="Logo" />
            </div>
            <div class="footer-powered-by">
                <div class="footer-powered-by__text" data-content={ poweredBy }></div>
            </div>
        </div>
    );
}
</script>

<template><render/></template>