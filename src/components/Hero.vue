<template>
    <section>
        <div class="row mx-0">
            <div class="col-12 col-md-5 offset-md-1 offset-lg-2 text-section">
                <h1 class="text-primary">MINFAL</h1>
                <h2 class="text-white">Omzetverhoging met <br>Afvalreductie</h2>
                <a class="btn btn-outline-primary mt-md-3" href="#contact">ONTDEK</a>
            </div>
            <div class="col-md-5">
                <!--                <img src="@/assets/images/hero.png" alt="Hero truck">-->
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    background-image: url("~@/assets/images/hero.jpg");
    background-size: cover;
    background-position: bottom right;
    background-repeat: no-repeat;
    min-height: 100vh;
}

div {
    line-height: 0.8;
    position: relative;
}

h3 {
    color: #B43C39;
    font-weight: lighter;
}

img {
    margin-top: 120px;
    width: 95%;
}

@media (max-width: 500px) {
    h1 {
        font-size: 45px;
    }
}

@media (min-width: 768px) and (max-width: 990px) {
    .text-section {
        margin-top: 150px;
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
    name: 'Hero'
}
</script>
