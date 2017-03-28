'use stict';

var resButton = document.getElementById('res-button');
var mmButton = document.getElementById('mm-button');
var resButtonCont = document.getElementById('res-button-cont');

resButton.addEventListener('click', function(){
  resButton.remove();
  var form = document.createElement('form');
  resButtonCont.appendChild(form);
  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');

  form.appendChild(inputEmail);
  var inputPassword = document.createElement('input');
  inputPassword.setAttribute('type','password');
  inputEmail.setAttribute('name','email');
  var emailLabel = document.createElement('label');
  emailLabel.setAttribute('id','email-field');
  emailLabel.innerText = 'E-mail: ';
  emailLabel.setAttribute('for','email');
  form.appendChild(emailLabel);
  form.appendChild(inputEmail);
  var inputPassword = document.createElement('input');
  inputPassword.setAttribute('type','password');
  inputPassword.setAttribute('name','password');
  var passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('id','pass-field');
  passwordLabel.innerText = 'Password: ';
  passwordLabel.setAttribute('for','password');
  form.appendChild(passwordLabel);
  form.appendChild(inputPassword);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('id','submitButton');
  submitButton.setAttribute('type','submit');
  submitButton.innerText = 'Submit';
  form.appendChild(submitButton);
});
