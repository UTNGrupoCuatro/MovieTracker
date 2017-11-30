$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 3,
        stagePadding: 15,
        loop: false,
        nav: false,
        dots: false
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// mapa
// var map = L.map('map', {
//     center: [-34.6080293, -58.4841172],
//     zoom: 10
// });
