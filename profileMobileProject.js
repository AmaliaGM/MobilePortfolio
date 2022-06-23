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
/*const project = document.querySelectorAll(".projects.button");
const popUpMenu = document.querySelector(".popup1");

// project.addEventListener("click", () => {
    project.classList.toggle("active");
    popUpMenu.classList.toggle("active");
    
});*/


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