<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light custom_navbar custom-navbar-light mx-0 px-0 pt-2 pb-0 mb-2 mb-sm-5 navbar-fixed-top" id="custom-navbar">
            <div class="container-fluid">
                <div class="row mx-0 pt-3 pt-lg-0">
                    <div class="col-12 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-xl-4 offset-xl-2">
                        <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <img class="mt-2" src="@/assets/images/logo.jpg" alt="MINFAL">
                        </a>
                    </div>
                    <div class="col-12 col-md-5 col-xl-5 collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mx-auto mx-lg-0 float-none float-lg-end">
                            <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="#home" class="nav-link">MINFAL</a></li>
                            <li class="nav-item"><a href="#home" class="nav-link">Onze werkwijze</a></li>
                            <li class="nav-item"><a href="#home" class="nav-link">Projecten</a></li>
                            <li class="nav-item"><a href="#home" class="nav-link">Contact/informatie</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    </section>
</template>

<script>
export default {
    name: 'Header',
}

// import jQuery from "jquery";
//
// const $ = jQuery;
// window.$ = $;

// $(window).on('scroll', function () {
//     var custom_navbar = $('.custom_navbar');
//
//     var scroll_position = $(window).scrollTop();
//
//     if (scroll_position > 0) {
//         $(custom_navbar).addClass('bg-white');
//     } else if (scroll_position == 0) {
//         $(custom_navbar).removeClass('bg-white');
//     }
// });
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
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    color: $green;
}


@media (max-width: 991.98px) {
    nav .navbar-brand img {
        /*max-width: 70%;*/
    }

    .custom-navbar-light {
        background: $green !important;
        top: 0;
    }

    .custom-navbar-light .row:first-of-type {
        background: $green !important;
    }
}

@media (max-width: 766px) {
    .row {
        width: 102% !important;
    }

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

@media (max-width: 991.98px) {
    .custom-navbar-light .navbar-nav {
        padding-bottom: 10px;
        flex-direction: row;
    }
}

@media (max-width: 991.98px) {
    .custom-navbar-light .navbar-nav > .nav-item > .nav-link {
        padding: .5em .9em;
    }
}
</style>
