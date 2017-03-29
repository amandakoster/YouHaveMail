'use stict';

var resButton = document.getElementById('res-button');
var mmButton = document.getElementById('mm-button');
var resButtonCont = document.getElementById('res-button-cont');
var mmButtonCont = document.getElementById('mm-button-cont');
// var ls = JSON.parse(localStorage.userArray);

resButton.addEventListener('click', function(event){
  event.preventDefault();
  resButton.remove();
  var form = document.createElement('form');
  form.setAttribute('id','res-form');
  resButtonCont.appendChild(form);
  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('autofocus','true');
  inputEmail.style.borderRadius = '3px';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder','E-mail');
  form.appendChild(inputEmail);
  var inputPassword = document.createElement('input');
  inputPassword.style.borderRadius = '3px';
  inputPassword.setAttribute('type','password');
  inputPassword.setAttribute('placeholder','Password');
  inputEmail.setAttribute('name','email');
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('id','res-submit-button');
  submitButton.setAttribute('type','submit');
  submitButton.innerText = 'Submit';
  form.appendChild(submitButton);
  submitButton.addEventListener('click',function(event) {
    event.preventDefault();
    if (inputEmail.value === 'mdm_8@hotmail.com' && inputPassword.value === '123') {
      alert('You have already registered with us.');
      inputEmail.reset();
      inputPassword.reset();
    } else {
      window.location.replace('registration.html');
    }
  });
});

mmButton.addEventListener('click', function(event) {
  event.preventDefault();
  mmButton.remove();
  var form = document.createElement('form');
  form.setAttribute('id','mm-form');
  mmButtonCont.appendChild(form);
  var inputID = document.createElement('input');
  inputID.setAttribute('autofocus','true');
  inputID.style.borderRadius = '3px';
  inputID.setAttribute('type','password');
  inputID.setAttribute('id','input-id');
  inputID.setAttribute('placeholder','Carrier ID');
  form.appendChild(inputID);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('id','mm-submit-button');
  submitButton.setAttribute('type','submit');
  submitButton.innerText = 'Submit';
  form.appendChild(submitButton);
  var testing = document.getElementById('mm-submit-button');
  testing.addEventListener('click',function(event) {
    event.preventDefault();
    if (inputID.value === '12345') {
      window.location.replace('map.html');
    } else {
      alert('The ID provided does not match any entry in our database. Please try again.');
      window.location.reload();
    }
  });
});
