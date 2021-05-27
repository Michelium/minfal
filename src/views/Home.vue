<template>
    <div class="container-fluid home">
        <Header/>
        <Hero/>
        <Innovation/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Innovation from '@/components/Innovation.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Hero,
        Innovation
    }
}
</script>

<style scoped lang="scss">

</style>
