<template>
    <section>
        <div class="row mx-auto bg-light py-5">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 offset-xl-2">
                <h2 class="text-white mb-4 fw-bolder">Huidige projecten</h2>
                <h3 class="fw-bolder">Duurnaam en chique</h3>
                <p class="mb-5">Minfal focust zich momenteel op het introduceren van herbruikbare verpakkingen in de amusementssector. Minfal heeft een circulair verpakkingssysteem ontworpen voor bioscopen. Het eerste product van Minfal is de
                    herbruikbare
                    popcornbak. In het filmpje hiernaast is de werking van het circulaire systeem gevisualiseerd.</p>
                <h3 class="text-white fw-bolder mt-4">Waar staan wij voor open?</h3>
                <p>Mocht u zich afvragen: Wat kan Minfal voor mijn bedrijf betekenen? We zijn gemotiveerd om u te helpen en mee te denken. We bekijken snel de mogelijkheden en kunnen meteen aan de slag! Aarzel niet en neem vrijblijvend contact met
                    ons op!</p>
            </div>
            <div class="col-12 col-md-5 col-lg-10 offset-lg-1 col-xl-3">
                <img src="@/assets/images/thumbnail.jpeg" alt="Filmpje">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projects"
}
</script>

<style scoped lang="scss">
section {
    margin-bottom: 160px;
}

h2 {
    font-size: 62px;
}

img {
    margin-top: 60px;
    position: relative;
    width: 100%;
}
</style>
