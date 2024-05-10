const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-links");

humburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
}