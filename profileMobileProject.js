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




// form validation

function allLetter(inputtxt)
  {
    let letters = document.getElementsByClassName(".email")

    letters = [a-z];
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Uuups.. try again!");
     return false;
     }
  }