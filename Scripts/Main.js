// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    // spaceBetween: 30,
    breakpoints: {
        // when window width is <= 499px
        
        320: {
          slidesPerView: 2,
          
          spaceBetween: 10,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });