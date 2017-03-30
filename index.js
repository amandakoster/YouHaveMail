'use stict';

var resButtonCont = document.getElementById('res-button-cont');
var resButtonDiv = document.getElementById('res-button-div');
var resButton = document.getElementById('res-button');
var mmButtonCont = document.getElementById('mm-button-cont');
var mmButtonDiv = document.getElementById('mm-button-div');
var mmButton = document.getElementById('mm-button');
// var form = document.createElement('form');
// var ls = JSON.parse(localStorage.newUserArray);

resButton.addEventListener('click', function(event){
  event.preventDefault();
  window.location.replace('registration.html');
  // while (mmButtonDiv.style.display === 'none') {
  //   var rmForm1 = document.getElementById('mm-form');
  //   rmForm1.remove();
  //   mmButtonDiv.style.display = 'inline-block';
  // }
  // resButtonDiv.style.display = 'none';
  // var form = document.createElement('form');
  // form.setAttribute('id','res-form');
  // resButtonCont.appendChild(form);
  // var inputEmail = document.createElement('input');
  // inputEmail.setAttribute('id','input-email');
  // inputEmail.setAttribute('autofocus','true');
  // inputEmail.style.borderRadius = '3px';
  // inputEmail.setAttribute('type', 'email');
  // inputEmail.setAttribute('placeholder','E-mail');
  // form.appendChild(inputEmail);
  // /*var inputPassword = document.createElement('input');
  // inputPassword.setAttribute('id','input-password');
  // inputPassword.style.borderRadius = '3px';
  // inputPassword.setAttribute('type','password');
  // inputPassword.setAttribute('placeholder','Password');*/
  // inputEmail.setAttribute('name','email');
  // form.appendChild(inputEmail);
  // // form.appendChild(inputPassword);
  // var submitButton = document.createElement('button');
  // submitButton.setAttribute('id','res-submit-button');
  // submitButton.setAttribute('type','submit');
  // submitButton.innerText = 'Submit';
  // form.appendChild(submitButton);
  // submitButton.addEventListener('click',function(event) {
  //   event.preventDefault();
  //   if (inputEmail.value === 'test@admin.com' /*&& inputPassword.value === 'password'*/) {
  //     alert('You have already registered with us.');
  //     form.reset();
  //     form.remove();
  //     resButtonCont.appendChild(resButton);
  //   } else {
  //     alert('You have not registered with us. We are redirecting you to our registration page.');
  //     window.location.replace('registration.html');
  //   }
  // });
});

mmButton.addEventListener('click', function(event) {
  event.preventDefault();
  while (resButtonDiv.style.display === 'none') {
    var rmForm2 = document.getElementById('res-form');
    rmForm2.remove();
    resButtonDiv.style.display = 'inline-block';
  }
  mmButtonDiv.style.display = 'none';
  var form = document.createElement('form');
  form.setAttribute('id','mm-form');
  mmButtonCont.appendChild(form);
  var inputID = document.createElement('input');
  inputID.setAttribute('display','inherit');
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
      form.reset();
    }
  });
});
