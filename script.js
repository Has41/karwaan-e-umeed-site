const menuBtn = document.getElementById("menu-btn")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full")
  mobileMenu.classList.add("translate-x-0")
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full")
  mobileMenu.classList.remove("translate-x-0")
})

document.getElementById("current-year").textContent = new Date().getFullYear()
