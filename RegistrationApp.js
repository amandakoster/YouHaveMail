'use strict';

// get all input from in the form
var newUserArray = [];
function storeUser() {
  debugger;
  var lsName = document.getElementById('fullName').value;
  localStorage.setItem('fullName',lsName);
  var lsUserName = document.getElementById('userName').value;
  localStorage.setItem('userName',lsUserName);
  var lsMailAddress = document.getElementById('mailAddress').value;
  localStorage.setItem('mailAddress', lsMailAddress);
  var lsEmailAddress = document.getElementById('emailAddress').value;
  localStorage.setItem('emailAddress', lsEmailAddress);
  var lsSMS = document.getElementById('sms').value;
  localStorage.setItem('sms', lsSMS);
  newUserArray.push(lsName, lsUserName, lsMailAddress, lsEmailAddress, lsSMS);
};

function processRegistration (event) {
  event.preventDefault();
  event.target.elements.username.value; // gets value of username field
  document.getElementById('username').value;
}

var userArray = [];

function newUser(resName,userName, mailAddress,emailAddress,smsNumber) {
  this.resName = resName;
  this.userName = userName;
  this.mailAddress = mailAddress;
  this.emailAddress = emailAddress;
  this.smsNumber = smsNumber;
  userArray.push(this);
}

// harvest form data - doc.getElementById('id')
// make user const function
//harverst data to make/for new user
//check local storage if empty, if not emoty then... (JSON)

// var inputName = document.getElementById('name').value;
// localStorage.setItem('inputName', name);
//
// var submitButton = document.getElementById('submitButton');
// submitButton.addEventListener('click', newUser);
// submitButton.addEventListener('signUp');
// alert('Thanks for signing up!');

// // Create object constructor for new users
// var userArray = [];
//

//
// newUser();
//
// Create form
// var event = newUser;
//
// }

//
// event.preventDefault();
// var resName = event.target.elements.resName;
// var resUserName = event.target.elements.resUserName;
// var mailAddress = event.target.elements.mailAddress;
// var emailAddress = event.target.elements.emailAddress;
// var smsNumber = event.target.elements.smsNumber;
// form.reset();
//
// var form = document.getElementById('res-form');
//
// // For getting the text back:
// document.getElementById('res-form').value = localStorage.getItem('server');
//
// // The localStorage object has a setItem method which is used to store an item. It takes 2 arguments - a key by which you can refer to the item, and a value:
// var input = document.getElementById('saveServer');
// localStorage.setItem('server', input.value);
// // The above code first gets a reference to the input element, and then stores an item ("server") in local storage with the value of the value of that input element.
//
// // You can retrieve the value by calling getItem:
// var storedValue = localStorage.getItem('server');
//
// // Store form input into local storage
// function saveData(){
//   localStorage.saveServer;
// }
// if (localStorage.whatever) {
//   var storageArray = JSON.parse(localStorage.whatever);
//   for (var i = 0; i < storageArray.length; i++) {
//     productArray[i].itemClick += storageArray[i].itemClick;
//     productArray[i].imageShown += storageArray[i].imageShown ;
//   }
//   var localstorage = document.getElementById().valye;
// }
//
// // mailMan script accesing new user array, promptin an alert to user
