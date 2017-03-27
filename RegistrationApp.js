
var userArray = [];

// Create object constructor for new users
function newUser(resName,resUserName, mailAddress,emailAddress,smsNumber) {
  event.preventDefault();
  var resName = event.target.elements.resName;
  var resUserName = event.target.elements.resUserName;
  var mailAddress = event.target.elements.mailAddress;
  var emailAddress = event.target.elements.emailAddress;
  var smsNumber = event.target.elements.smsNumber;
  form.reset();
}

// Create form

// Store form input into local storage
function saveData(){
  localStorage.saveServer;
}
if (localStorage.whatever) {
  var storageArray = JSON.parse(localStorage.whatever);
  for (var i = 0; i < storageArray.length; i++) {
    productArray[i].itemClick += storageArray[i].itemClick;
    productArray[i].imageShown += storageArray[i].imageShown ;
  }
}

var form = document.getElementById('res-form');

var localstorage = document.getElementById().valye;

// mailMan script accesing new user array, promptin an alert to user

// For getting the text back:
document.getElementById('saveServer').value = localStorage.getItem('server');

// The localStorage object has a setItem method which is used to store an item. It takes 2 arguments - a key by which you can refer to the item, and a value:
var input = document.getElementById('saveServer');
localStorage.setItem('server', input.value);
// The above code first gets a reference to the input element, and then stores an item ("server") in local storage with the value of the value of that input element.

// You can retrieve the value by calling getItem:
var storedValue = localStorage.getItem('server');

var img1 = document.getElementById ('left');
var img2 = document.getElementById ('center');
var img3 = document.getElementById ('right');
var pictureList = [];
function Products(itemName, itemPath) {
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
};
