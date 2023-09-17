AOS.init({
  once: true,
  disable: 'phone',
  duration: 500,
  easing: 'ease-out-cubic',
});

var swiper = new Swiper('.swiper', {  
  slidesPerView: 15,
  spaceBetween: 16,
  speed: 2000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  }
});
