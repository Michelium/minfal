<template>
    <div class="container-fluid home px-0">
        <Header/>
        <Hero/>
        <Innovation/>
        <!-- <Roadmap/> -->
        <Process/>
        <Projects/>
        <Contact/>
        <Footer/>
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
import Footer from "../components/Footer";

export default {
    name: 'Home',
    components: {
        Footer,
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
