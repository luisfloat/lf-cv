<script setup lang="ts">
import { watch } from "vue";
import About from "../components/About.vue";
import Details from "../components/Details.vue";
import Edu from "../components/Edu.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Hobby from "../components/Hobby.vue";
import Skills from "../components/Skills.vue";
import Xp from "../components/Xp.vue";
import { useContent } from "../composables/useContent";

const content = useContent();

watch(content, () => {
    document.head.getElementsByTagName("title")[0].innerHTML = content.value.head.title;
});
</script>

<template>
    <div class="body">
        <div class="body__sidebar">
            <Header />
            <About />
            <Details />
            <Skills />
            <Hobby />
        </div>
        <div class="body__main">
            <Xp />
            <Edu />
        </div>
    </div>

    <div class="footer">
        <Footer />
    </div>
</template>