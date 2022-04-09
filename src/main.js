import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

window.$ = window.jQuery = require('jquery');

import 'slick-carousel'

$(document).ready(function () {
    init();
});

function init() {
    initSlickCarousel();
}

function initSlickCarousel() {
    $('.slick-carousel').slick({
        // edgeFriction: 0,
        initialSlide: 2,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.slick-previous-arrow',
        nextArrow: '.slick-next-arrow',
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1069,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}
