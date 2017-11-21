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

// mapa
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 1
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFydGlubWFzaWduYW5vIiwiYSI6ImNqYThuZnF3aTA4djUycXIyaHdpeXB4eHoifQ.ZeztbBlCa1luuPeNAfjkRQ'
}).addTo(map);
