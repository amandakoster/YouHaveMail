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
  form.appendChild(inputPassword);
});
