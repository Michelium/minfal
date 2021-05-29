<template>
    <div class="container-fluid home">
        <Header/>
        <Hero/>
        <Innovation/>
        <Roadmap/>
        <Process/>
        <Projects/>
        <Contact/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Innovation from '../components/Innovation.vue'
import Roadmap from "../components/Roadmap";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default {
    name: 'Home',
    components: {
        Contact,
        Projects,
        Process,
        Roadmap,
        Header,
        Hero,
        Innovation
    }
}
</script>

<style scoped lang="scss">

</style>
