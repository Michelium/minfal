<template>
    <section class="d-none d-md-block"  id="contact">
        <div class="row mx-auto">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-3 offset-xl-2">
                <h2 class="text-primary fw-bolder">Neem contact op</h2>
                <form class="mt-4" action="" @submit.prevent="sendEmail">
                    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
                        <p class="text-dark">Uw bericht is verstuurd! We komen zo spoedig mogelijk bij u terug!</p>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="name" class="form-control bg-light py-2" type="text" name="name" id="name" placeholder="Bedrijfsnaam*" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="email" class="form-control bg-light py-2" type="email" name="email" id="email" placeholder="E-mail*" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="phone" class="form-control bg-light py-2" type="text" name="phone" id="phone" placeholder="Telefoonnummer*" autocomplete="off">
                    </div>
                    <div class="form-group mb-3">
                        <textarea v-model="message" class="form-control bg-light py-2" name="message" id="message" placeholder="Bericht" autocomplete="off" required rows="7"></textarea>
                    </div>
                    <button :disabled="!loaded"  type="submit" class="btn btn-outline-primary">VERSTUUR</button>
                </form>
            </div>
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 mt-5 mt-lg-0">
                <h2 class="text-primary mb-4 fw-bolder">Missie en visie</h2>
                <h3 class="fw-bolder">Onze missie</h3>
                <p class="mb-5">Minfal heeft één groot doel: het reduceren van afval om zo de natuur en het milieu te beschermen. Minfal wil met het ontwerpen en aanbieden van luxe herbruikbare verpakkingen het gebruik van wegwerpverpakkingen
                    inperken. Wij nemen het voortouw in het realiseren van circulaire verpakkingssystemen, waardoor er uiteindelijk 0% afval zal zijn op het gebied van verpakkingsmaterialen bij Minfal-klanten.</p>
                <h3 class="fw-bolder mt-4">Onze visie</h3>
                <p>Wij willen dat wegwerpverpakkingen tot de verleden tijd behoren, met het gebruik van circulaire verpakkingssystemen. Onze wens is een schonere toekomst waarin wij hoofdrolspeler zijn voor het compleet maken van de
                    grondstofkringloop en afvalreductie.</p>
            </div>
        </div>
        <div class="d-none">
            <span>popcorn</span>
            <span>hergebruik</span>
            <span>Herbruikbare popcornbak, popcornbak, popcornbeker, herbruikbare popcornbeker, pathe popcorn, pathé, popcornbak pathé, pathé popcornbak, pathé herbruikbare popcornbak, popcornverpakking, herbruikbare popcornverpakking, herbruikbaar, herbruikbaar popcornbak, reuasable popcorn bucket, popcorn refill, refill popcornbak, merchandise popcornbak, all-stars, all-stars popcornbak, all-stars herbruikbaar, rCup, pathe unlimited, pathe unlimited popcornbak, pathe unlimited Gold popcornbak, popcornbeker korting, popcornbak duurzaam, duurzame popcornbak, pathe duurzaam, pathe duurzame popcornbak, duurzame herbruikbare popcornbak, kunststof popcornbak, minval, minval popcorn, minfall, minval popcornbak, minval herbruikbaar, minval herbruikbare popcornbak, meerval, meerval popcorn, meerval popcornbak, innovatieve popcornbak, innovatie, innovatief, minfal popcornbak, minfal herbruikbaar, minfal pathe, pathe minfal, dopper, popcornbak speciaal, speciale popcornbak, popcornbak bedrukt, bedrukte popcornbak, popcornbeker duurzaam, duurzaam, hergebruik, popcorn, nieuwe popcornbak, popcorn pas, popcorn korting, refill korting, minfal korting, minfal popcorn, circulair, circulaire, circulaire popcornbak, circulaire popcornbeker, popcorn 2022, 2021, kinepolis popcorn, vué popcornbak, popcorn disney, disney merchandise, popcornbak frozen, </span>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: "Contact",
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            errors: {},
            success: false,
            loaded: true,
        }
    },
    methods: {
        sendEmail(e) {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                emailjs.sendForm('service_jgsniw7', 'template_bjcrtfm', e.target, 'user_UDbcG4RfnxXHwOYkfG6t6')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.loaded = true;
                        this.success = true;
                    }, (error) => {
                        this.loaded = true;
                        this.success = false;
                        console.log('FAILED...', error);
                    });
            }

        }
    }
}
</script>

<style scoped>
section {
    margin-bottom: 160px;
}

input:hover, textarea:hover {
    border-color: #acbaac;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(88 116 88 / 25%);
}

h2 {
    font-size: 36px;
}

@media (max-width: 578px) {
    h2 {
        font-size: 33px;
    }
}

input, textarea {
    color: white!important;
}
</style>
