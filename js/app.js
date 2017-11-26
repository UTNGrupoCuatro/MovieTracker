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

$(window).on("load", (function() {
    $(".loader").delay(1500).fadeOut(),
    $(".mask").delay(1500).fadeOut()
}));

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// mapa
var map = L.map('map', {
    center: [-34.6080293, -58.4841172],
    zoom: 10
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFydGlubWFzaWduYW5vIiwiYSI6ImNqYThuZnF3aTA4djUycXIyaHdpeXB4eHoifQ.ZeztbBlCa1luuPeNAfjkRQ'
}).addTo(map);
