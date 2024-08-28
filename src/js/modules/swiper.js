import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// Swiper.js
var swiperNews = new Swiper(".swiper-cosmetics", {
  modules: [Navigation, Pagination, Scrollbar],
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,  
  spaceBetween: 30,
  speed: 500,
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

// Swiper.js
// const swiperCosmetik = new Swiper(".swiper-cosmetics", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   allowTouchMove: true,
//   speed: 2000,
//   parallax: true,
//   loop: true,
//   autoplay: {
//     delay: 10000,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//   },
// });

// var swiperFranchiseCosmetik = new Swiper(".swiper-franchise-cosmetics", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   allowTouchMove: false,
//   speed: 2000,
//   parallax: true,
//   loop: true,
//   slidesPerView: 1,
//   autoplay: {
//     delay: 10000,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//   },
// });
