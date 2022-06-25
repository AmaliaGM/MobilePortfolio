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

let storageName = document.getElementById('name');
let storageMail = doncument.getElementById('email');
let storageMsg = document.getElementById('message')
const buttonS = document.getElementById('touch');
const form = document.getElementById('form');

form.addEventListener('input', () => {
  localStorage.setItem('Name', '${storageName}');
  localStorage.setItem('Email', '${storageMail}');
  localStorage.setItem('Message', '${storageMsg}');
})

storageName.value = localStorage.getItem('Name');
storageMail.value = localStorage.getItem('Email');
storageMsg.value = localStorage.getItem('Message');

/*const saveToLocal = () => {
  localStorage.setItem('textInput', text.textContent)
}
buttonS.addEventListener('click', saveToLocal)

const storedInput = localStorage.getItem('textInput')
  if (storageInput) {
    text.textContent = storedInput;
  } */

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