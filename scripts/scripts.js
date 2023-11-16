/* hamburger menu */

const button = document.getElementById("hamburger-button");
const hamburgerMenu = document.getElementById("hamburger");

function showHamburgerMenu() {
    hamburgerMenu.classList.toggle("active");
}

button.addEventListener("click",showHamburgerMenu);