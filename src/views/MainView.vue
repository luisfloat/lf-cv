<script setup lang="ts">
import { useCssModule, watch } from "vue";
import About from "../components/About.vue";
import Details from "../components/Details.vue";
import Edu from "../components/Edu.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Hobby from "../components/Hobby.vue";
import Skills from "../components/Skills.vue";
import Xp from "../components/Xp.vue";
import { useContent } from "../composables/useContent";

const classes = useCssModule();
const content = useContent();

watch(content, () => {
    document.head.getElementsByTagName("title")[0].innerHTML = content.value.head.title;
});
</script>

<template>
    <div :class="classes.container">
        <aside :class="classes.sidebar">
            <Header />
            <About />
            <Details />
            <Skills />
            <Hobby />
        </aside>
        <main :class="classes.main">
            <Xp />
            <Edu />
        </main>
    </div>
    <Footer />
</template>

<style module lang="stylus">
.container {
    display: flex;
}

.sidebar {
    width: 35%;
    padding-right: 8px;
}

.main {
    width: 65%;
    padding-left: 8px;
}
</style>