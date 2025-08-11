var typed = new Typed(".text", {
  strings: ["3D Modeler", "3D Renderer" ,"Professional in art and craft"],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 40,
  loop: true,
});

const swiper = new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    736: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});


