const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper3 = new Swiper(".mySwiper2", {
  grabCursor: true,
  spaceBetween: 40,
  // slidesPerView: 3,
  navigation: {
    nextEl: "#next.swiper-button-next",
    prevEl: "#prev.swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  spaceBetween: 20,
  // slidesPerView: 3.6,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 20,
    },
  },
});
const play = document.querySelector(".video-play-icon");
const video = document.querySelector(".video");
const videoCustom = document.querySelector(".video-custom-play");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    videoCustom.classList.add("hide");
  } else {
    video.pause();
    videoCustom.classList.remove("hide");
  }
});
video.addEventListener("ended", () => {
  videoCustom.classList.remove("hide");
});
var acc = document.getElementsByClassName("faqs-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
const menuBtn = document.querySelector(".menu-burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  menuBtn.classList.toggle("open");
  body.classList.toggle("fixed-body");
});
