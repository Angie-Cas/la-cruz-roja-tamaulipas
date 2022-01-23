// NAV BAR SHOW

const hamburger = document.getElementsByClassName("menu-hamburger")[0];
const nav = document.getElementsByClassName("nav")[0];

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-show");
})