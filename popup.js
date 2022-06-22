const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector("#nav-menu");
const welcome = document.querySelector(".welcome");
const body = document.body;

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
    welcome.classList.toggle("inactive");
});

const navLink = document.querySelector(".nav-item");

hamburguer.addEventListener("click", () => {
    body.classList.toggle("stopscroll");
});

// details pop up

const seeProject = document.querySelectorAll('.projects .popupBtn');
const popup1 = document.querySelector('.popup1')
seeProject.addEventListener("click", () => {
    popup1.classList.add('active');
});






// form validation
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById(".touch").addEventListener('submit', formValidation);

// });
// function formValidation(event) {
//     event.preventDefault();
//     var mail = document.getElementsByClassName('.textarea.email').value;
//     console.log(mail.toLocaleLowerCase());
     
// }