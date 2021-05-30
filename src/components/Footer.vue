<template>
    <section>
        <div class="row mx-auto bg-light py-5">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div class="row">
                    <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                        <img class="mt-2 w-50" src="@/assets/images/logo.jpg" alt="MINFAL">
                        <div class="row">
                            <div class="col-6">
                                <h2 class="text-primary fw-bolder mt-3">Contact</h2>
                                <p>U kunt contact met ons opnemen via: <a href="mailto:info@minfal.nl" class="text-primary text-decoration-none">info@minfal.nl</a></p>
                                <p class="mt-5">B.V. in oprichting</p>
                                <p class="terms">
                                    <a href="documents/Algemene_voorwaarden.pdf" target="_blank" class="text-primary text-decoration-none">Algemene voorwaarden</a>
                                </p>
                            </div>
                            <div class="col-6">
<!--                                <h4 class="text-primary fw-bolder mt-3">Gegevens</h4>-->
<!--                                <p>-->
<!--                                    Kvk nummer <br>-->
<!--                                    BTW nummer <br>-->
<!--                                    Bank <br>-->
<!--                                    B.V. in oprichting-->
<!--                                </p>-->

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                        <h2 class="text-primary fw-bolder">Duurzaamheid</h2>
                        <p>
                            Minfal draagt met het bedrijf en haar producten bij aan het behalen van de werelddoelen voor duurzame ontwikkeling. <br>
                            Het gaat om de zogeheten 'Sustainable Development Goals' van de Verenigde Naties.
                        </p>
                    </div>
                    <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                        <a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" target="_blank">
                            <img class="mt-2 w-100" src="@/assets/images/goals.png" alt="Sustainable Development Goals">
                        </a>
                        <div class="row mb-2 mt-4 icons">
                            <div class="col-3 col-xl-4">
                                <img src="@/assets/images/goals-12.png" alt="goals-12" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9 col-xl-8">
                                <p>Afvalproductie verminderen door herbruikbare producten, en bedrijven aanmoedigen bij het doorvoeren van een duurzame oplossingen</p>
                            </div>
                        </div>
                        <div class="row mb-2 icons">
                            <div class="col-3 col-xl-4">
                                <img src="@/assets/images/goals-13.png" alt="goals-13" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9 col-xl-8">
                                <p>Klimaatverandering tegengaan door reduceren broeikasgassen en stimuleren bewustzijn bij de mensen</p>
                            </div>
                        </div>
                        <div class="row mb-2 icons">
                            <div class="col-3 col-xl-4">
                                <img src="@/assets/images/goals-14.png" alt="goals-14" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9 col-xl-8">
                                <p>Minder milieuvervuiling door inperken single-use items in de natuur en daarmee in zee</p>
                            </div>
                        </div>
                        <div class="row mb-2 icons">
                            <div class="col-3 col-xl-4">
                                <img src="@/assets/images/goals-15.png" alt="goals-15" class="goals w-50 float-start float-xl-end">
                            </div>
                            <div class="col-9 col-xl-8">
                                <p>Reduceren van het aantal gekapte bomen in de wereld door kartonnen wegwerpverpakkingen te vervangen voor herbruikbare verpakkingen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 offset-lg-5">
                <p class="copyright align-text-bottom text-center text-lg-start">Copyright © 2021 <a class="text-primary text-decoration-none" href="www.minfal.nl">www.minfal.nl</a>. All right reserved.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .terms {
        padding-top: 40px;
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
            /*min-height: 115px;*/
            /*min-width: 115px;*/
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
