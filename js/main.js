document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    autoHeight: true,
    autoplay    : true,
    rewind      : true,
    pauseOnHover: true,
    pauseOnFocus: false,
    speed:2000,
    interval: 6000,
  });
  splide.mount();
});