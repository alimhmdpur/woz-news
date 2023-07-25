const swiper = new Swiper(".discTeam", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

const swiper2 = new Swiper(".imgTeam", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//  Swipe to next button when  clicking        on next       button on       swiper        button   on swiper button       on swiper button on

const swipe3 = new Swiper(".discSoldier", {
  slidesPerView: 1,
  spaceBetween: 30,
});

const swiper4 = new Swiper(".imgSoldier", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swipe3,
  },
});
