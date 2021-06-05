<template>
    <section id="process">
        <div class="row mx-auto">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 offset-xl-2">
                <img class=" text-center mx-auto mx-xl-0" src="@/assets/images/process.png" alt="Werkwijze">
            </div>
            <div class="col-12 col-lg-10 offset-lg-1 offset-xl-0 col-xl-4 right">
                <h2 class="text-primary fw-bolder">Oneindig veel opties</h2>
                <h3 class="mb-4 fw-bolder">Minfal biedt keuze</h3>
                <p class="mb-4">
                    We beginnen met een integrale analyse. Zo krijgen wij een helder beeld van de huidige situatie. We brengen de huidige verpakkingen in kaart en zoeken naar de perfecte afval-reducerende oplossing. <br><br>
                    Bij een perfecte oplossing hoort een perfect product. Al onze producten worden in Nederland gefabriceerd, en zijn van hoge Nederlandse Kwaliteit. Bij een product hoort een strategie, die ervoor zorgt dat het product het beste in uw bedrijf past.<br><br>
                    Na de analyse en productontwikkeling is het nu tijd voor de daadwerkelijke realisatie. Minfal beschikt over eigen matrijzen, waardoor u gegarandeerd unieke Minfal-producten ontvangt.
                </p>
                <button class="btn btn-outline-primary" @click="scrollTo('#contact', -70)">CONTACT</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Process",
    methods: {
        scrollTo(selector, yOffset = 0) {
            const el = document.querySelector(selector);
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    },
}
</script>

<style scoped lang="scss">
    .row {
        margin: 150px 0 150px 0;
    }

    .right {
        padding-top: 5%;
    }

    img {
        width: 95%;
        height: auto;
    }

    @media (max-width: 1200px) {
        img {
            width: 100%;
        }
    }
</style>
