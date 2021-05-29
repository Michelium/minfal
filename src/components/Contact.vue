<template>
    <section>
        <div class="row mx-auto">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-3 offset-xl-2">
                <h3>Neem contact op</h3>
                <form class="mt-4" action="">
                    <div class="form-group mb-3">
                        <input class="form-control bg-light py-2" type="text" name="company_name" id="company_name" placeholder="Bedrijfsnaam" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control bg-light py-2" type="text" name="email" id="email" placeholder="E-mail" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control bg-light py-2" type="text" name="phone" id="phone" placeholder="Telefoonnummer" autocomplete="off">
                    </div>
                    <div class="form-group mb-3">
                        <textarea class="form-control bg-light py-2" name="message" id="message" placeholder="Bericht" autocomplete="off" required rows="7"></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">VERSTUUR</button>
                </form>
            </div>
            <div class="col-12 col-md-5 col-lg-10 offset-lg-1 col-xl-4 mt-5 mt-lg-0">
                <h2 class="text-white mb-4 fw-bolder">Missie en visie</h2>
                <h3 class="fw-bolder">De missie</h3>
                <p class="mb-5">Minfal heeft één groot doel: het reduceren van afval om zo de natuur en het milieu te beschermen. Minfal wil met het ontwerpen en aanbieden van luxe herbruikbare verpakkingen het gebruik van wegwerpverpakkingen
                    inperken. Wij nemen het voortouw in het realiseren van circulaire verpakkingssystemen, waardoor er 0% afval zal zijn op het gebied van verpakkingsmaterialen bij Minfal-klanten.</p>
                <h3 class="fw-bolder mt-4">De visie</h3>
                <p>Wij willen dat wegwerpverpakkingen tot de verleden tijd behoren, met het gebruik van circulaire verpakkingssystemen. Onze wens is een schonere toekomst waarin wij hoofdrolspeler zijn voor het compleet maken van de
                    grondstofkringloop en afvalreductie.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
section {
    margin-bottom: 70px;
}

h2 {
    font-size: 62px;
}
</style>
