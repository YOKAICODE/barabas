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
  // autoHeight: true,
  loop: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});
