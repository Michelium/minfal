<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light custom_navbar custom-navbar-light mx-0 px-0 pt-2 pb-0 mb-2 mb-sm-5 navbar-fixed-top" id="custom-navbar">
            <div class="container-fluid">
                <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row navbar-row mt-1">
                    <div class="col-12 col-xl-5 offset-xl-5">
                        <div class="collapse navbar-collapse me-auto" id="navbarTogglerDemo01">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a @click="scrollTo('#hero')" class="nav-link">Home</a></li>
                                <li class="nav-item"><a @click="scrollTo('#innovation', -160)" class="nav-link">MINFAL</a></li>
                                <li class="nav-item"><a @click="scrollTo('#process', -150)" class="nav-link">Onze werkwijze</a></li>
                                <li class="nav-item"><a @click="scrollTo('#projects', -160)" class="nav-link">Projecten</a></li>
                                <li class="nav-item"><a @click="scrollTo('#contact', -190)" class="nav-link">Contact/informatie</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="d-none">
            <span>popcorn</span>
            <span>hergebruik</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        scrollTo(selector, yOffset = 0) {
            const el = document.querySelector(selector);
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    },
}

import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

$(window).on('scroll', function () {
    var navbar = $('.navbar');

    var scroll_position = $(window).scrollTop();

    if (scroll_position > 0) {
        $(navbar).addClass('scrolled');
    } else if (scroll_position == 0) {
        $(navbar).removeClass('scrolled');
    }
});

</script>

<style scoped lang="scss">
nav .navbar-brand img {
    max-height: 70px !important;
    display: block;
}

.custom-navbar-light {
    background: transparent !important;
    left: 0;
    right: 0;
    z-index: 15;
    position: fixed;
}

.scrolled {
    background: rgb(0, 0, 0) !important;
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 212, 255, 0) 100%) !important;
}

.row {
    flex-grow: 1;
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link {
    font-size: 15px;
    padding-top: .9rem;
    padding-bottom: .9rem;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 1px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 1 !important;
    white-space: nowrap;
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    color: $green;
    cursor: pointer;
}
@media (max-width: 991.98px) {
    .row {
        width: 102% !important;
    }
    .custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
        color: $gray-700;
    }
    .custom-navbar-light {
        background: $green !important;
        top: 0;
        padding-bottom: 14px !important;
    }

    .custom-navbar-light .row:first-of-type {
        background: $green !important;
    }
    .custom-navbar-light .navbar-nav {
        padding-bottom: 10px;
    }
    .custom-navbar-light .navbar-nav > .nav-item > .nav-link {
        padding: .5em .9em;
        text-align: start;
    }
}

@media (max-width: 766px) {

    .col-12 {
        text-align: center;
    }

    .navbar-nav {
        float: none !important;
        justify-content: center;
    }
}

@media (max-width: 455px) {
    a.nav-link {
        padding: .5em .5em;
    }
}
</style>
