const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector("#nav-menu");
const welcome = document.querySelector(".welcome");
const body = document.body;

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
    welcome.classList.toggle("inactive");
    body.classList.toggle("stopscroll");
})

document.querySelectAll(".nav-link").forEach(n => m.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("stopscroll");
})) 