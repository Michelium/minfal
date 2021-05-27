<template>
    <section>
        <div class="row mx-0">
            <div class="col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2">
                <div class="row">
                    <div class="col-12 col-md-6 innovation" id="innovation-1"></div>
                    <div class="col-12 col-md-6 innovation" id="innovation-2"></div>
                    <div class="col-12 col-md-6 innovation" id="innovation-3"></div>
                    <div class="col-12 col-md-6 innovation" id="innovation-4"></div>
                </div>
            </div>
            <div class="col-12 col-md-5 col-lg-4">
                <h3>Innovatie is onze kracht</h3>
                <p class="mt-3">Wij verzorgen het totale plaatje, van idee tot realisatie. Wij helpen u in het reduceren van restafval door het ontwikkelen van herbruikbare verpakkingen. Wij zorgen dat dure wegwerpverpakkingen tot de verleden tijd behoren. Zo
                    heeft uw bedrijf geen last van het toekomstige verbod op wegwerpverpakkingen en wordt uw duurzaamheidsimago verhoogd.</p>
                <a class="btn btn-outline-primary mt-md-3" href="#contact">ONZE WERKWIJZE</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Innovation"
}
</script>

<style scoped>
section {
    margin: 170px 0 100px 0;
}

.innovation {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
}

#innovation-1 {background-image: url("~@/assets/images/innovation1.jpg");}
#innovation-2 {background-image: url("~@/assets/images/innovation2.jpg");}
#innovation-3 {background-image: url("~@/assets/images/innovation3.jpg");}
#innovation-4 {background-image: url("~@/assets/images/innovation4.jpg");}
</style>
