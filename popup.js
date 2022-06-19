const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector("#nav-menu");
const welcome = document.querySelector(".welcome")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
    welcome.classList.toggle("inactive");
})

document.querySelectAll(".nav-link").forEach(n => m.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    menu.classList.remove("active")
})) 