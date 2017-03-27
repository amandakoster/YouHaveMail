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

var localstorage =
