<template>
    <section id="roadmap">
        <div class="row mx-0">
            <div class="col-6 offset-3 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 col-xxl-2 offset-xxl-5 triangle">
                <div class="title-box bg-light text-center">
                    <h2 class="text-primary fw-bolder title">Roadmap</h2>
                    <h3 class="fw-bolder sub-title">De toekomst met Minfal</h3>
                </div>
            </div>
        </div>
        <div class="row mx-0 bg-light py-5">
            <div class="col-12">
                <div class="hexagon-row">
                    <div class="row slick-carousel">
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Q1 2021</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/1.png" alt="">
                                    <p>Oprichting Minfal <br>met één missie: <br>reduceren van <br>verpakkingsafval</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Q2 2021</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/2.png" alt="">
                                    <p>Eerste product: <br>herbruikbare popcornbak. <br>Gesprekken met potentiële <br>klanten</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Q3 2021</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/3.png" alt="">
                                    <p>Amusementssector <br>aangeboord. <br>Productoptimalisatie en <br>realiseren productie</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Q4 2021</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/4.png" alt="">
                                    <p>Realisatie circulaire <br>systemen bij <br>amusementssector. <br>Ontwikkeling nieuwe <br>producten</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Toekomst</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/5.png" alt="">
                                    <p>Nieuwe producten <br>realiseren en uitbreiding <br>naar nieuwe sectoren</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Toekomst</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/6.png" alt="">
                                    <p>Ontwikkeling circulaire <br>systemen in diverse <br>sectoren. Verder verhogen <br>afvalreductie</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Toekomst</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/7.png" alt="">
                                    <p>Internationale <br>markt betreden en voorzien van <br>herbruikbare producten en <br>circulaire systemen</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto slider-slide">
                            <div class="hexagon">
                                <div class="inside">
                                    <h4>Toekomst</h4>
                                    <hr>
                                    <img src="@/assets/images/roadmap/8.png" alt="">
                                    <p>Einde wegwerpverpakkingen, <br>ondersteund door wet- en <br>regelgevingen. <br>Doorontwikkeling Minfal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="arrows">
                    <div class="slick-previous-arrow slick-arrow float-start"></div>
                    <div class="slick-next-arrow slick-arrow float-end"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Roadmap"
}
</script>

<style scoped lang="scss">
.triangle {
    max-width: 100vw;
}
.title-box {
    position: relative;
    padding: 22px 0;
    height: 120px;
}

.title-box:before {
    content: " ";
    display: block;

    position: absolute;
    bottom: 0;
    left: -120px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 120px 120px;
    border-color: transparent transparent $light transparent;
}

.title-box:after {
    content: " ";
    display: block;

    position: absolute;
    bottom: 0;
    right: -120px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 120px 0 0 120px;
    border-color: transparent transparent transparent $light;
}

@media (max-width: 433px) {
    .title-box:before {
        border-width: 0 0 120px 80px;
        left: -80px;
    }
    .title-box:after {
        border-width: 120px 0 0 80px;
        right: -80px;
    }
}

@media (min-width: 328px) and (max-width: 433px) {
    .title {
        font-size: 30px!important;
    }
}
@media (min-width: 250px) and (max-width: 327px) {
    .title {
        font-size: 26px!important;
    }
}


.hexagon-row {
    width: 85vw;
    margin: 0 auto;
}

.hexagon {
    position: relative;
    min-width: 300px;
    right: -4%;
    min-height: 260px;
    width: 20vw;
    height: calc(20vw * 0.86);
    margin-bottom: 30px;

    background: $primary;

    -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.hexagon .inside {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: $black;
    -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

.hexagon .inside h4 {
    position: relative;
    width: 70%;
    top: 9%;
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
}

.hexagon .inside hr {
    position: relative;
    top: 13%;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    color: $secondary;
    border: 2px solid #bfd9a8 !important;
}

.hexagon .inside img {
    position: relative;
    display: block;
    width: 35%;
    height: auto;
    margin: 0 auto;
    text-align: center;
    top: 17%;
}

.hexagon .inside p {
    position: relative;
    text-align: center;
    margin: 0 auto;
    top: 19%;
}

@media (min-width: 1648px) and (max-width: 2016px) {
    .hexagon .inside p {
        font-size: 13px;
    }
}
@media (min-width: 0px) and (max-width: 1647px) {
    .hexagon .inside p {
        font-size: 11px;
    }
}

.arrows {
    position: relative;
    top: -53%;
}
@media (min-width: 731px) and (max-width: 1443px) {
    .arrows {
        top: -55%;
    }
}
@media (min-width: 401px) and (max-width: 730px) {
    .arrows {
        top: -51%;
    }
}
@media (min-width: 0px) and (max-width: 400px) {
    .arrows {
        top: 0;
    }
}

.slick-arrow{
    width: 46px;
    height: 46px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}
.slick-arrow:hover{
    opacity: 0.6;
}

.slick-arrow.slick-previous-arrow{
    background-image: url('~@/assets/images/left-arrow.png');
}
.slick-arrow.slick-next-arrow{
    background-image: url('~@/assets/images/right-arrow.png');
}

@media (min-width: 0px) and (max-width: 730px) {
    .hexagon {
        margin: 0 auto;
        right: unset;
    }
}

</style>
