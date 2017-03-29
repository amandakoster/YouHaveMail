'use strict';

var form = document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();
  var lsName = document.getElementById('fullName').value;
  var lsUserName = document.getElementById('userName').value;
  var lsMailAddress = document.getElementById('mailAddress').value;
  var lsEmailAddress = document.getElementById('emailAddress').value;
  var user = new NewUser(lsName,lsUserName, lsMailAddress, lsEmailAddress, false, false);
  var test = JSON.stringify(users);
  debugger;
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

// var newUserArray = users;

console.log(localStorage.newUserArray, 'newUserArray');

// if (localStorage.newUserArray) {
// var persistedUsers = JSON.parse(localStorage.newUserArray);
// } if array is not in localStorage already

// set variable fo rbollian value, have htat value set to local storage.

// function smsCheckbox(){
//   var cboxInput = document.getElementById('cboxSms');
//   console.log(checkbox.checked.value);
//   if(document.getElementById('cboxSms').value) {
//     localStorage.setItem('cboxSms', true);
//   }
// };
//
// var newUserArray = [];
// var test = document.getElementById('submitButton').addEventListener('click', storedUser);
//
// function storedUser(event) {
//   event.preventDefault();
//   var lsName = document.getElementById('fullName').value;
//   var lsUserName = document.getElementById('userName').value;
//   var lsMailAddress = document.getElementById('mailAddress').value;
//   var lsEmailAddress = document.getElementById('emailAddress').value;
//   var lsSMS = document.getElementById('sms').value;
//   };
//
//   function NewUser (){
//   user['fullName'] = lsName;
//   user['userName'] = lsUserName;
//   user['mailAddress'] = lsMailAddress;
//   user['emailAddress'] = lsEmailAddress;
//   user['sms'] = lsSMS;
//   newUserArray.push(user);
//   console.log(newUserArray, 'hello newUserArray');
//   };
//
//
// var persistedUsers = [];
// persistedUsers.push(user);
// console.log(persistedUsers, 'persistedUsers');
// localStorage.newUserArray = JSON.stringify(persistedUsers);
//
// if (localStorage.newUserArray) {
//   var persistedUsers = JSON.parse(localStorage.newUserArray);
// } // if array is not in localStorage already
