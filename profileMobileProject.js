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
//localStorage
const storageInput = document.querySelector('name');
const buttonS = document.querySelector('.touch');
storageInput.addEventListener('input', name => {
  storageInput.textContent = name.target.value
})

// form validation


mail.addEventListener('focus',sendForm());
function sendForm() {
 // const letters = /^[a-z0-9]+$/;
  const mail = document.getElementById('email').value;
  if (mail ===mail.toLowerCase()){
    return true;
}  else {
  alert("Please type only lowercase letters");
  return false;
}
}

sendForm();