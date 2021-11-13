<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light custom_navbar custom-navbar-light mx-0 px-0 pt-2 pb-0 mb-2 mb-sm-5 navbar-fixed-top scrolled" id="custom-navbar">
            <div class="container-fluid">
                <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row navbar-row mt-1">
                    <div class="col-12 col-xl-5 offset-xl-5">
                        <div class="collapse navbar-collapse me-auto" id="navbarTogglerDemo01">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a @click="scrollTo('#hero')" class="nav-link">Home</a></li>
                                <li class="nav-item d-none d-lg-block"><a @click="scrollTo('#innovation', -160)" class="nav-link">MINFAL</a></li>
                                <li class="nav-item d-none d-lg-block"><a @click="scrollTo('#process', -150)" class="nav-link">Onze werkwijze</a></li>
                                <li class="nav-item"><a @click="scrollTo('#projects', -160)" class="nav-link">Projecten</a></li>
                                <li class="nav-item d-none d-lg-block"><a @click="scrollTo('#contact', -170)" class="nav-link">De missie</a></li>
                                <li class="nav-item"><a @click="scrollTo('#footer', -190)" class="nav-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
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
</script>

<style scoped>
nav .navbar-brand img {
    max-height: 70px !important;
    display: block;
}

.custom-navbar-light {
    background: transparent !important;
    left: 0;
    right: 0;
    z-index: 1050;
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
    padding: .9rem 20px;
    letter-spacing: 1px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 1 !important;
    white-space: nowrap;
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    color: var(--green);
    cursor: pointer;
}

@media (max-width: 991.98px) {
    .row {
        width: 102% !important;
    }

    .custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
        color: var(--gray-700);
    }

    .custom-navbar-light {
        background: var(--green) !important;
        top: 0;
        padding-bottom: 14px !important;
    }

    .custom-navbar-light .row:first-of-type {
        background: var(--green) !important;
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
