'use strict';
//
// var x = document.getElementById('smsChecked');
// var y = document.getElementById('emailChecked');
//
// //when smsSelect is ckecked, sent that boolan value to local storage.
//
// if checekd, then save to loacal ssttage as [variable]
//
// set variable fo rbollian value, have htat value set to local storage.

document.getElementById('messageCheckbox').checked;

var smsChecked = document.getElementById('cboxSms');
var emailChecked = document.getElementById('cboxEmail');

while (smsChecked == true) {
  localStorage.setItem('cboxSms', cboxSms);
// localStorage.setItem('cboxSms', JSON.stringify(cboxSms);
}

while (emailChecked == true) {
  localStorage.setItem('cboxEmail', cboxEmail);
// localStorage.setItem('cboxEmail', JSON.stringify(cboxEmail);
}

var newUserArray = [];
var test = document.getElementById('submitButton').addEventListener('click', storedUser);

function storedUser(event) {
  event.preventDefault();
  console.log('inside storatge user function');
  var lsName = document.getElementById('fullName').value;
  var lsUserName = document.getElementById('userName').value;
  var lsMailAddress = document.getElementById('mailAddress').value;
  var lsEmailAddress = document.getElementById('emailAddress').value;
  var lsSMS = document.getElementById('sms').value;
  var user = {} ;
  user['fullName'] = lsName;
  user['userName'] = lsUserName;
  user['mailAddress'] = lsMailAddress;
  user['emailAddress'] = lsEmailAddress;
  user['sms'] = lsSMS;
  console.log(user);
  newUserArray.push(user);
  persistedUsers.push(user);
};

// var persistedUsers = [];
if (localStorage.newUserArray) {
  var persistedUsers = JSON.parse(localStorage.newUserArray);
} // if array is not in localStorage already

localStorage.newUserArray = JSON.stringify(persistedUsers);
