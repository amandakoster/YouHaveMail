'use strict';

var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var lsName = document.getElementById('fullName').value;
  var lsUserName = document.getElementById('userName').value;
  var lsMailAddress = document.getElementById('mailAddress').value;
  var lsEmailAddress = document.getElementById('emailAddress').value;
  var lsSms = document.getElementById('sms-input').vaue;
  var lsHidden = document.getElementsByClassName('hidden').value;
  var user = new NewUser(lsName, lsUserName, lsMailAddress, lsEmailAddress, lsSms, false, false);
  localStorage.setItem('newUserArray', JSON.stringify(users));
  clearForm();
});

var users = [];
if (localStorage.newUserArray) {
  users = JSON.parse(localStorage.newUserArray);
};

function NewUser(fullName, userName, mailAddress, emailAddress, smsCbox, cboxEmail) {
  this.fullName = fullName;
  this.userName = userName;
  this.mailAddress = mailAddress;
  this.emailAddress = emailAddress;
  this.smsCbox = smsCbox;
  this.cboxEmail = cboxEmail;
  users.push(this);
};

var smsInput = document.getElementById('sms-input');
var smsCbox = document.getElementById('sms-cbox');
smsCbox.addEventListener('click', function() {
  if (!smsCbox.checked === true) {
    smsInput.setAttribute('class', 'hidden');
  } else {
    smsInput.removeAttribute('class', 'hidden');
  }
});

var submitButton = document.getElementById('submit-button');
function clearForm() {
  alert('Thanks for signing up!');
  document.getElementById('form').reset();
  window.location.replace('index.html');
};
