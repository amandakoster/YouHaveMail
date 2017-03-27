var form = document.getElementById('res-form');

function createNewUser(event) {
  event.preventDefault();
  var resName = event.target.elements.resName;
  var resUserName = event.target.elements.resUserName;
  var mailAddress = event.target.elements.mailAddress;
  var emailAddress = event.target.elements.emailAddress;
  var smsNumber = event.target.elements.smsNumber;
  var tFoot = document.getElementById('bob');
  var totalsRow = document.getElementById('shirley');
  tFoot.removeChild(totalsRow);
  hourlyTotals();
  form.reset();
}

var localstorage = document.getElementById().valye;

// The localStorage object has a setItem method which is used to store an item. It takes 2 arguments - a key by which you can refer to the item, and a value:
var input = document.getElementById('saveServer');
localStorage.setItem('server', input.value);
// The above code first gets a reference to the input element, and then stores an item ("server") in local storage with the value of the value of that input element.

// You can retrieve the value by calling getItem:
var storedValue = localStorage.getItem('server');

// For getting the text back:
document.getElementById('saveServer').value = localStorage.getItem('server');
