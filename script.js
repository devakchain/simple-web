const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("color");
  } else {
    header.classList.remove("color");
  }
});

const icons = document.querySelector(".icons");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  icons.style.display = "block";
  nav.style.display = "block";
  icons.classList.toggle("open");
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});
