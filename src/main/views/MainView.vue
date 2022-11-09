<script lang="tsx" setup>
import { provide, computed } from "vue";
import About from "../components/About.vue";
import Details from "../components/Details.vue";
import Edu from "../components/Edu.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Hobby from "../components/Hobby.vue";
import Skills from "../components/Skills.vue";
import Xp from "../components/Xp.vue";

import { content as langs } from "../content/index";

const props = defineProps<{
    lang: string,
}>();

const content = computed(() => langs[props.lang] || langs["en-us"]);
provide("content", content);

function render() {
    document.head.getElementsByTagName("title")[0].innerHTML = content.value.head.title;

    return (
        <>
            <div class="body">
                <div class="body__sidebar">
                    <Header/>
                    <About/>
                    <Details/>
                    <Skills/>
                    <Hobby/>
                </div>
                <div class="body__main">
                    <Xp/>
                    <Edu/>
                </div>
            </div>

            <div class="footer">
                <Footer/>
            </div>
        </>
    );
};
</script>

<template><render/></template>