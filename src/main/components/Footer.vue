<script lang="tsx" setup>
import { useContent } from "../composables/useContent";
import { formatPhone } from "../helpers/formatPhone";
import FooterLink from "./FooterLink.vue";

const content = useContent();

function render() {
    const { email, github, phone } = content.value.body?.contact;

    const links: any = [
        { name: "Email", protoc: "mailto", value: email },
        { name: "GitHub", protoc: "https", value: github },
        { name: "WhatsApp", protoc: "tel", domain: phone, value: formatPhone(phone) },
    ];

    return (
        <div class="section section--footer">
            <div class="footer-links">
                {links.map((o: any) => <FooterLink {...o}/>)}
            </div>
            <div class="footer-logo">
                <img class="footer-logo__image" src="assets/img/lf-logo.png" alt="Logo" />
            </div>
        </div>
    );
}
</script>

<template><render/></template>