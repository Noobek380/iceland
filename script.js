const menuBtn = document.getElementById("hamburgerBtb");
const menu = document.getElementById("mobileMenu");


function toggleMenu () {
    menu.classList.toggle("hide-menu")
}
menuBtn.addEventListener("click", toggleMenu)