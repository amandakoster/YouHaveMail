'use strict';

var form = document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();
  var lsName = document.getElementById('fullName').value;
  var lsUserName = document.getElementById('userName').value;
  var lsMailAddress = document.getElementById('mailAddress').value;
  var lsEmailAddress = document.getElementById('emailAddress').value;
  var user = new NewUser(lsName,lsUserName, lsMailAddress, lsEmailAddress, false, false);
  var test = JSON.stringify(users);
  localStorage.setItem('newUserArray', test);
});
var users = [];

function NewUser(fullName,userName, mailAddress, emailAddress,cboxSms,cboxEmail) {
  this.fullName = fullName;
  this.userName = userName;
  this.mailAddress = mailAddress;
  this.emailAddress = emailAddress;
  this.cboxSms = cboxSms;
  this.cboxEmail = cboxEmail;
  users.push(this);
};

console.log(users, 'users');
console.log(localStorage.newUserArray, 'newUserArray');
