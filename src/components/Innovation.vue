<template>
    <section id="innovation">
        <div class="row mx-0">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 offset-xl-2 col-xxl-3 order-5 order-xl-1">
                <div class="row">
                    <div class="col-6 col-md-5 offset-md-1 offset-lg-0 col-lg-6 mb-4">
                        <img src="@/assets/images/innovation1.jpg" alt="innovation-1" loading="lazy">
                    </div>
                    <div class="col-6 col-md-5 col-lg-6 mb-4">
                        <img src="@/assets/images/innovation2.jpg" alt="innovation-2" loading="lazy">
                    </div>
                    <div class="col-6 col-md-5 offset-md-1 offset-lg-0 col-lg-6">
                        <img src="@/assets/images/innovation3.jpg" alt="innovation-3" loading="lazy">
                    </div>
                    <div class="col-6 col-md-5 col-lg-6">
                        <img src="@/assets/images/innovation4.jpg" alt="innovation-4" loading="lazy">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 offset-xl-0 col-xxl-4 offset-xxl-1 order-1 order-xl-5 mb-4 mb-xl-0 mt-xl-5 ">
                <h2 class="text-primary fw-bolder">Innovatie is onze kracht</h2>
                <p class="mt-3">Wij verzorgen het totale plaatje, van idee tot realisatie. Wij helpen u in het reduceren van restafval door het ontwikkelen van herbruikbare verpakkingen. Wij zorgen dat dure wegwerpverpakkingen tot de verleden tijd behoren. Zo
                    heeft uw bedrijf geen last van het toekomstige verbod op wegwerpverpakkingen en wordt uw duurzaamheidsimago verhoogd.</p>
                <a class="btn btn-outline-primary mt-md-3" @click="scrollTo('process')">ONZE WERKWIJZE</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Innovation",
    methods: {
        scrollTo(elementId) {
            var element = document.getElementById(elementId);
            element.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        },
    },
}
</script>

<style scoped>
section {
    margin: 170px 0 100px 0;
}

img {
    width: 100%;
    height: 100%;
}

img:hover {
    opacity: 0.7;
}

@media (min-width: 768px) and (max-width: 992px) {
   img {
       height: auto;
   }
}
</style>
