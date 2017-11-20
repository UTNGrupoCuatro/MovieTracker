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
    zoom: 13
});
