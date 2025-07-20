const menuBtn = document.getElementById("menu-btn")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full")
  mobileMenu.classList.add("translate-x-0")
  document.body.classList.add("overflow-hidden")
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full")
  mobileMenu.classList.remove("translate-x-0")
  document.body.classList.remove("overflow-hidden")
})

document.getElementById("current-year").textContent = new Date().getFullYear()

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 20,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
})
