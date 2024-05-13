import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      660: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1285: {
        slidesPerView: 4,
      },
    },
  });
});
