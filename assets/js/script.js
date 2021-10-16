$(".services-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$(".our-clients-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".app-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: -200,
  center: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      margin: -50,
    },
    600: {
      items: 2,
      margin: -150,
    },
    1000: {
      items: 3,
    },
  },
});
