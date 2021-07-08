<template>
    <section id="projects">
        <div class="row mx-auto bg-light py-5">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-4 offset-xl-2">
                <h2 class="text-primary mb-2 fw-bolder">Huidige projecten</h2>
                <h3 class="fw-bolder text-white">Duurzaam en chique</h3>
                <p class="mb-5 mt-3">Minfal focust zich momenteel op het introduceren van herbruikbare verpakkingen in de amusementssector. Minfal heeft een circulair verpakkingssysteem ontworpen voor bioscopen. Het eerste product van Minfal is de
                    herbruikbare popcornbak, in een nieuwe chique uitstraling. In de video hiernaast is de werking van het circulaire verpakkingssysteem visueel te aanschouwen.
                </p>
                <h3 class="text-white fw-bolder mt-4">Waar staan wij voor open?</h3>
                <p>Mocht u zich afvragen: Wat kan Minfal voor mijn bedrijf betekenen? We zijn gemotiveerd om u te helpen en mee te denken. We bekijken snel de mogelijkheden en kunnen meteen aan de slag! <br><br>
                    Aarzel niet en neem vrijblijvend contact met ons op!</p>
            </div>
            <div class="col-12 col-md-5 col-lg-10 offset-lg-1 col-xl-3 my-auto">
                <div id="video-box w-100">
                    <div id="video-button" @click="toggleOverlay">
                        <img src="@/assets/images/information.svg" alt="Info">
                    </div>
                    <div id="video-overlay">
                        <div class="row">
                            <div class="col-6 text-center">
                                <img src="@/assets/images/video.svg" alt="Video">
                                <h4 class="mt-3">Wilt u een ook een geanimeerde promotiefilm voor uw product?</h4>
                            </div>
                            <div class="col-6 text-center">
                                <img class="logo" src="@/assets/images/logo.jpg" alt="Minfal">
                                <h4 class="mt-3">Neem dan contact op via info@minfal.nl</h4>
                            </div>
                        </div>
                    </div>
                    <video controls>
                        <source src="video/promotionvideo.mp4#t=0.001" type="video/mp4">
                        Uw browser kan onze promotievideo helaas niet laden.
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projects",
    methods: {
        toggleOverlay() {
            var x = document.getElementById("video-overlay");
            if (x.style.opacity == 0) {
                setTimeout(() => {
                    x.style.transition = "opacity 0.5s linear 0s";
                    x.style.opacity = 1;
                }, this.animationDelay + 20);
            } else {
                x.style.transition = "opacity 0.5s linear 0s";
                x.style.opacity = 0;
            }
        }
    }
}
</script>

<style scoped>
section {
    margin-bottom: 160px;
}

@media (max-width: 1200px) {
    section {
        margin-bottom: 80px;
    }
}

h2 {
    font-size: 36px;
}

@media (max-width: 578px) {
    h2 {
        font-size: 33px;
    }
}

video {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

#video-overlay {
    position: absolute;
    z-index: 500;
    min-height: 305px;
    width: 545px;
    background-color: #98B386;
    opacity: 0;
    pointer-events: none;
}
#video-overlay img {
    margin-top: 60px;
    position: relative;
    width: 100%;
}
#video-overlay img:first-of-type {
    width: 100px;
}
#video-overlay img.logo {
    width: 230px;
}
#video-overlay h4 {
    color: var(--dark);
    font-weight: bolder;
    padding: 0 10px;
}

#video-button {
    position: absolute;
    z-index: 1000;
    width: 45px;
    height: 50px;
}
#video-button:hover {
    cursor: pointer;
}
#video-button img {
    width: 45px;
    height: 50px;
    padding: 5px;
}

@media (max-width: 575px) {
    #video-overlay {
        width: 281px;
        height: 200px;
        min-height: unset;
    }
    #video-overlay img:first-of-type {
        width: 45px;
    }
    #video-overlay img.logo {
        width: 106px;
    }
    #video-overlay h4 {
        font-size: 12px;
    }
}
</style>
