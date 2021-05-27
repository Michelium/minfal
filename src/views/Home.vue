<template>
    <div class="container-fluid home">
        <Header/>
        <Hero/>
        <Innovation/>
        <Roadmap/>
        <Process/>
        <Projects/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Innovation from '../components/Innovation.vue'
import Roadmap from "../components/Roadmap";
import Process from "../components/Process";
import Projects from "../components/Projects";

export default {
    name: 'Home',
    components: {
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
