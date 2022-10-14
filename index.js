const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".nav__item");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
