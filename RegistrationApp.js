var form = document.getElementById('the-form');

function createNewStore(event) {
  event.preventDefault();
  var name = event.target.elements.storeName;
  var minCust = event.target.elements.minCust;
  var maxCust = event.target.elements.maxCust;
  var avgCookieSale = event.target.elements.aveCookies;
  if (maxCust < minCust) {
    alert('The max number of customers should not be larger than the min number of customers');
  } else {
    var newStore = new Store(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), avgCookieSale.value);
    newTableRow(newStore);
    var tFoot = document.getElementById('bob');
    var totalsRow = document.getElementById('shirley');
    tFoot.removeChild(totalsRow);
    hourlyTotals();
    form.reset();
  }
}
