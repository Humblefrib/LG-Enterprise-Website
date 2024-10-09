let hamburgerMenu = document.querySelector(".hamburgerMenu");
let body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
    body.classList.toggle("showCart");
});