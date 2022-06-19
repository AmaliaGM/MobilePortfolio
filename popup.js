const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectAll(".nav-link").forEach(n => m.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    menu.classList.remove("active")
})) 