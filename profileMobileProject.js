const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('#nav-menu');
const welcome = document.querySelector('.welcome');
const body = document.querySelector('body');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
  welcome.classList.toggle('inactive');
});

hamburguer.addEventListener('click', () => {
  body.classList.toggle('stopscroll');
});

// form validation
/* function mailValidation(email) {
  email = Document.getElementById('#email');
  let letters = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9])+$/;
        if (!letters.test(email)) {
  alert('error: dir de correo' + email + 'es incorrecta.');
}
} */