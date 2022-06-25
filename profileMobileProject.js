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
const storageName = document.getElementById('name');
const storageMail = document.getElementById('email');
const storageMsg = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('input', () => {
  localStorage.setItem('Name', storageName);
  localStorage.setItem('Email', storageMail);
  localStorage.setItem('Message', storageMsg);
});

storageName.value = localStorage.getItem('Name');
storageMail.value = localStorage.getItem('Email');
storageMsg.value = localStorage.getItem('Message');

// form validation
function sendForm() {
  const mail = document.getElementById('email').value;
  if (mail === mail.toLowerCase()) {
    return true;
  }
  alert('Please type only lowercase letters');
  return false;
}
sendForm();
const mail = document.getElementById('email').value;
mail.addEventListener('focus', sendForm());
