'use stict';
var resButtonCont = document.getElementById('res-button-cont');
var resButtonDiv = document.getElementById('res-button-div');
var resButton = document.getElementById('res-button');
var mmButtonCont = document.getElementById('mm-button-cont');
var mmButtonDiv = document.getElementById('mm-button-div');
var mmButton = document.getElementById('mm-button');

resButton.addEventListener('click', function(event){
  event.preventDefault();
  window.location.replace('registration.html');
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
