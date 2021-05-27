<template>
    <div class="container-fluid home">
        <Header/>
        <Hero/>
        <Innovation/>
        <Roadmap/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Innovation from '../components/Innovation.vue'
import Roadmap from "../components/Roadmap";

export default {
    name: 'Home',
    components: {
        Roadmap,
        Header,
        Hero,
        Innovation
    }
}
</script>

<style scoped lang="scss">

</style>
