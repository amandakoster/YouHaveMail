//
// // Create object constructor for new users
// var userArray = [];
//
// function newUser(resName,userName, mailAddress,emailAddress,smsNumber) {
//   this.resName = resName;
//   this.userName = userName;
//   this.mailAddress = mailAddress;
//   this.emailAddress = emailAddress;
//   this.smsNumber = smsNumber;
//   this.userArray = [];
//   userArray.push(this);
// }
//
// newUser();

// Create form
// var event = newUser;
// document.getElementById('submit').addEventListener('click',   function userSubmit(){
//   alert('Thanks for registering!');
// }
document.getElementById('userSubmitButton').addEventListener('click', userSubmit);
function userSubmit() {
  var userInput = document.getElementById('userInput').value;
  localStorage.setItem('submittedUserInput', userInput);
  alert('Thansk for registering');
  // document.getElementById('userInput').value = '';
}
userSubmit();

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
