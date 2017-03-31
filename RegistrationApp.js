'use strict';

var form = document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var lsName = document.getElementById('fullName').value;
  var lsUserName = document.getElementById('userName').value;
  var lsMailAddress = document.getElementById('mailAddress').value;
  var lsEmailAddress = document.getElementById('emailAddress').value;
  var lsSms = document.getElementById('sms-input').vaue;
  var lsHidden = document.getElementsByClassName('hidden').value;
  var user = new NewUser(lsName, lsUserName, lsMailAddress, lsEmailAddress, lsSms, false, false);
  var test = JSON.stringify(users);
  localStorage.setItem('newUserArray', test);
});
var users = [];

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
addEventListener('click', function() {
  if (!smsCbox.checked === true) {
    smsInput.setAttribute('class', 'hidden');
  } else {
    smsInput.removeAttribute('class', 'hidden');
  }
});

var submitAlert = document.getElementById('submitButton');
submitAlert.addEventListener('click', function() {
  alert('Thanks for signing up!');
});

// //set a variable to refer to a specific ID
// var submitAlert = document.getElementById('submitButton');
// //initiate this function when the user clicks the ID
// specialSection.onclick = function() {
//   alert('Thanks for signing up!');
// };
