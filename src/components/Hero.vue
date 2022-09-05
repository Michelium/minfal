<template>
    <section id="hero">
        <div class="row mx-0 align-items-center vh-100">
            <div class="col-12 col-md-5 offset-md-1 offset-lg-1 col-xl-4 offset-xl-2 text-section text-center text-md-start">
                <h2 class="fw-bolder">Omzetverhoging met<br> afvalreductie.</h2>
                <!-- <h2 class="text-primary fw-bolder mt-5">Special voor bioscopen</h2> -->
                <a class="btn btn-outline-primary discover-button mt-4" @click="scrollTo('#innovation', -160)">ONTDEK</a>
                <a href="https://www.linkedin.com/company/minfal-b-v" target="_blank" type="button" class="linkedin">
                    <img src="@/assets/images/linkedin-app.svg" alt="LinkedIn">
                </a>
            </div>
            <div class="d-none d-md-flex flex-column col-md-5">
                <img class="right-image" src="@/assets/images/header.png" alt="">
                <h2 class="text-primary fw-bolder mt-3">19 september 2022</h2>
                <h3 class="">Nieuwe website,</h3>
                <h2 class="fw-bolder">Gericht op Bioscopen.</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    min-height: 100vh;
}
@media (max-width: 767px) {
    h2 {
        margin-top: 20%;
    }
}

div {
    line-height: 0.8;
    position: relative;
}

h2 {
    font-size: 34px!important;
    color: #212529;;
}
h2 span {
    font-size: 42px!important;
}

img {
    margin-top: 120px;
    width: 95%;
}

.right-image {
    width: 80%;
    margin-top: 0;
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
    z-index: 1000;
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

    h2 {
        font-size: 34px!important;
    }
}

@media (max-width: 767px) {

    img {
        position: relative;
        display: block;
        width: 70%;
        margin: 40px auto 0 auto;
    }
}

@media (min-width: 991px) {

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
