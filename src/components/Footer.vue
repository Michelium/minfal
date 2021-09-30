<template>
    <section id="footer">
        <div class="row mx-auto bg-light pb-5 pt-md-5">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div class="row">
                    <div class="col-12 col-xl-6 mb-5 mb-xl-0 bg-dark pb-3" id="first">
                        <div class="row">
                            <div class="col-12 px-md-5">
                                <h2 class="text-primary fw-bolder mt-3">Contact</h2>
                                <div class="row mt-2 mt-md-4">
                                    <div class="col-12 col-md-6">
                                        <p class="text-primary"><i class="bi bi-envelope icon"></i> <a href="mailto:info@minfal.nl" class="text-white text-decoration-none link">info@minfal.nl</a></p>
                                        <p class="text-primary"><i class="bi bi-telephone icon"></i> <a href="tel:0702042640" class="text-white text-decoration-none link">070-2042640</a></p>
                                        <p class="text-primary"><i class="bi bi-pin-map icon"></i> <a href="https://www.google.nl/maps/place/Turfschipper+62,+2292+JB+Wateringen" target="_blank" class="text-white text-decoration-none link">Turfschipper 62, 2292 JB, Wateringen</a></p>

                                    </div>
                                    <div class="col-12 col-md-6">
                                        <img src="@/assets/images/office_outside.jpg" alt="Office" class="w-100">
                                        <p class="text-muted mt-2">Bezoek op afspraak</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p>KVK nr. 83173862</p>
                                        <a href="documents/Algemene_voorwaarden.pdf" target="_blank" class="text-primary text-decoration-none">Algemene voorwaarden</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6"></div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4 offset-xl-1 mb-5 mb-xl-0 d-none d-md-inline-block">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="text-primary fw-bolder mt-2">Duurzaamheid</h2>
                                <p>Minfal draagt met het bedrijf en haar producten bij aan het behalen van de werelddoelen voor duurzame ontwikkeling. De producten van Minfal dienen als stimuleringsmaatregel in het kader van duurzame innovatie.</p>
                                <img src="@/assets/images/devices.png" alt="Devices" class="w-100 devices">
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

img.devices {
    margin-top: 45px;
}

.btn-label img {
    width: 35px;
}

.icon {
    font-size: 25px
}

.link {
    position: relative;
    top: -5px;
    margin-left: 10px;
}

.copyright {
    position: relative;
    top: 50%;
}
</style>
