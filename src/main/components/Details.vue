<script lang="tsx" setup>
import { formatPhone } from "../helpers/formatPhone";
import DetailsItem from "./DetailsItem.vue";
import { useContent } from "../composables/useContent";

const content = useContent();

function render() {
    const body = content.value.body;
    const { details } = body;
    const { address, name, phone, email, github, linkedin } = body?.contact;

    const items: Array<any> = [
        { type: "data", label: address },
        { type: "data", label: name },
        { type: "phone", domain: phone, label: formatPhone(phone) },
        { type: "email", domain: email, label: email },
        { type: "website", domain: github, label: github },
        { type: "website", domain: linkedin, label: linkedin },
    ];

    return (
        <div class="section section--aside">
            <h2 class="section__title">{ details }</h2>
            <nav>
                <ul class="details__items">
                    { items.map((o) => <DetailsItem {...o}/>) }
                </ul>
            </nav>
        </div>
    );
}
</script>

<template><render/></template>