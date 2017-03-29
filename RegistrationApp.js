'use strict';

var newUserArray = [];
var clickButton = document.getElementById('submitButton').addEventListener('click', storedUser);

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
