<template>
    <section>
        <div class="row mx-auto">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-3 offset-xl-2">
                <h3>Neem contact op</h3>
                <form class="mt-4" action="" @submit.prevent="sendEmail">
                    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
                        <p>Uw bericht is verstuurd!</p>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="name" class="form-control bg-light py-2" type="text" name="name" id="name" placeholder="Bedrijfsnaam" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="email" class="form-control bg-light py-2" type="text" name="email" id="email" placeholder="E-mail" autocomplete="off" required>
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="phone" class="form-control bg-light py-2" type="text" name="phone" id="phone" placeholder="Telefoonnummer" autocomplete="off">
                    </div>
                    <div class="form-group mb-3">
                        <textarea v-model="message" class="form-control bg-light py-2" name="message" id="message" placeholder="Bericht" autocomplete="off" required rows="7"></textarea>
                    </div>
                    <button :disabled="!loaded"  type="submit" class="btn btn-outline-primary">VERSTUUR</button>
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
const querystring = require("querystring");
import axios from 'axios'

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
                axios
                    .post('/mail.php', querystring.stringify(this.form))
                    .then(response => {
                        this.loaded = true;
                        this.success = true;
                    })
            }
        }
    }
}
</script>

<style scoped>
section {
    margin-bottom: 70px;
}

h2 {
    font-size: 62px;
}

input, textarea {
    color: white!important;
}
</style>
