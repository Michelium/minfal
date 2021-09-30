<template>
    <section id="hero">
        <div class="row mx-0">
            <div class="col-12 col-md-5 offset-md-1 offset-lg-1 col-xl-5 offset-xl-2 text-section">
                <h2 class="text-white fw-bolder">Omzetverhoging met <br>Afvalreductie</h2>
                <a class="btn btn-outline-primary mt-3 mt-md-5 discover-button" @click="scrollTo('#innovation', -160)">ONTDEK</a>
                <a href="https://www.linkedin.com/company/minfal-b-v" target="_blank" type="button" class="linkedin">
                    <img src="@/assets/images/linkedin-app.svg" alt="LinkedIn">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url("~@/assets/images/hero_1920x.jpg");
    background-size: cover;
    background-position: bottom right;
    background-repeat: no-repeat;
    min-height: 100vh;
}
@media (max-width: 767px) {
    section {
        background-image: url("~@/assets/images/hero_mobile.jpg");
    }
}

div {
    line-height: 0.8;
    position: relative;
}

h2 {
    font-size: 48px!important;
}

img {
    margin-top: 120px;
    width: 95%;
}

.discover-button {
    border: 3px solid #587458;
}

@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .linkedin {
            display: none!important;
        }
    }
}

.linkedin img {
    position: fixed;
    width: 45px;
    right: 30px;
    bottom: 30px;
}

@media (max-width: 500px) {
    h1 {
        font-size: 45px;
    }

    h2 {
        font-size: 28px!important;
    }
}

@media (min-width: 500px) and (max-width: 767px) {
    h2 {
        font-size: 37px!important;
    }
}

@media (min-width: 768px) and (max-width: 990px) {
    .text-section {
        margin-top: 150px;
    }

    h2 {
        font-size: 34px!important;
    }
}

@media (max-width: 767px) {
    .text-section {
        margin-top: 170px;
        text-align: center;
    }

    img {
        position: relative;
        display: block;
        width: 70%;
        margin: 40px auto 0 auto;
    }
}

@media (min-width: 991px) {
    .text-section {
        margin-top: 250px;
    }
}
</style>

<script>
export default {
    name: 'Hero',
    methods: {
        scrollTo(selector, yOffset = 0) {
            const el = document.querySelector(selector);
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    },
}
</script>
