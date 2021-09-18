<template>
    <section id="footer">
        <div class="row mx-auto bg-light py-5">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div class="row">
                    <div class="col-12 col-xl-4 mb-5 mb-xl-0 bg-dark pb-3" id="first">
                        <div class="row">
                            <div class="col-12 px-5">
                                <h2 class="text-primary fw-bolder mt-3">Contact</h2>
                                <p>U kunt contact met ons opnemen via: <br><a href="mailto:info@minfal.nl" class="text-primary text-decoration-none">info@minfal.nl</a></p>
                                <p>Telefonisch via <a class="text-primary text-decoration-none" href="tel:0702042640">070-2042640</a><br>op werkdagen van 09:00 - 17:00</p>
                                <p class="mt-4">Adres: <br>Turfschipper 62 <br>2292 JB Wateringen <br>Bezoek op afspraak</p>
                                <p class="mt-5">KVK nr. 83173862</p>
                                <p class="terms mb-5">
                                    <a href="documents/Algemene_voorwaarden.pdf" target="_blank" class="text-primary text-decoration-none">Algemene voorwaarden</a>
                                </p>
                            </div>
                            <div class="col-6"></div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4 mb-5 mb-xl-0 text-center">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="text-primary fw-bolder mt-2">Duurzaamheid</h2>
                                <p>
                                    Minfal draagt met het bedrijf en haar producten bij aan het behalen van de werelddoelen voor duurzame ontwikkeling. <br>
                                    Het gaat om de zogeheten 'Sustainable Development Goals' van de Verenigde Naties.
                                </p>
                                <img src="@/assets/images/devices.png" alt="Devices" class="w-100 devices">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4 mb-5 mb-xl-0">
                        <a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" target="_blank">
                            <img class="mt-2 w-100" src="@/assets/images/goals.png" alt="Sustainable Development Goals">
                        </a>
                        <div class="row mb-4 mt-4 icons">
                            <div class="col-3">
                                <img src="@/assets/images/goals-12.png" alt="goals-12" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9">
                                <p>Afvalproductie verminderen door herbruikbare producten, en bedrijven aanmoedigen bij het doorvoeren van een duurzame oplossingen</p>
                            </div>
                        </div>
                        <div class="row mb-4 icons">
                            <div class="col-3">
                                <img src="@/assets/images/goals-13.png" alt="goals-13" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9">
                                <p>Klimaatverandering tegengaan door reduceren broeikasgassen en stimuleren bewustzijn bij de mensen</p>
                            </div>
                        </div>
                        <div class="row mb-4 icons">
                            <div class="col-3">
                                <img src="@/assets/images/goals-14.png" alt="goals-14" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9">
                                <p>Minder milieuvervuiling door inperken single-use items in de natuur en daarmee in zee</p>
                            </div>
                        </div>
                        <div class="row mb-4 icons">
                            <div class="col-3">
                                <img src="@/assets/images/goals-15.png" alt="goals-15" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9">
                                <p>Reduceren van het aantal gekapte bomen in de wereld door kartonnen wegwerpverpakkingen te vervangen voor herbruikbare verpakkingen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <p class="copyright align-text-bottom text-center">Copyright © 2021 <a class="text-primary text-decoration-none" @click="scrollTo('#hero')">www.minfal.nl</a> All rights reserved.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        scrollTo(selector, yOffset = 0) {
            const el = document.querySelector(selector);
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    },
}
</script>

<style scoped>
    h4 {
        font-size: 18px;
    }
    #first {
        height: 450px;
    }
    img.devices {
        margin-top: 45px;
    }
    .btn-label img {
        width: 35px;
    }

    .terms {
        padding-top: 15px;
    }

    .copyright {
        position: relative;
        top: 50%;
    }

    .icons {
        min-height: 95px;
    }

    @media (max-width: 1200px) {
        .goals {
            width: 100%!important;
        }
    }

    @media (min-width: 1200px) {
        .goals {
            min-height: 75px;
            min-width: 75px;
        }
    }
</style>
