'use strict';
var placedMarkerArray = [];
document.getElementById('markerSubmitButton').addEventListener('click', markerSubmit);
// document.getElementById('markerSubmitButton').addEventListener('click', createList);
document.getElementById('markerSubmitButton').addEventListener('click', error);

function error() {
	var markerInput = document.getElementById('markerInput').value;
	while(markerInput !== '12'){
		alert('Please enter the right grid Id #');
		break;
	}
	
	
}
function markerSubmit() {

  var markerInput = document.getElementById('markerInput').value;
  localStorage.setItem('submittedInput', markerInput);
  document.getElementById('markerInput').value = '';
}
function initMap() {
  var codeFellows = {lat: 47.6182, lng: -122.3518};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: codeFellows
  });
  var marker = new google.maps.Marker({
  	label: 'C',
    position: codeFellows,
    map: map
  });
 var bank = {lat: 47.6175, lng: -122.3520}
 var markerBank = new google.maps.Marker({
 	label: 'E',
 	position: bank,
 	map:map
  });
 var kiro = {lat: 47.6193, lng: -122.3504}
 var markerKiro = new google.maps.Marker({
 	label: 'A',
 	position: kiro,
 	map:map,
  });
 var pSC = {lat: 47.6178, lng: -122.3514}
 var markerPSC = new google.maps.Marker({
 	label: 'D',
 	position: pSC,
 	map:map,
  });
 var gas76 = {lat: 47.6192, lng: -122.3517}
 var markerGas76 = new google.maps.Marker({
 	label: 'B',
 	position: gas76,
 	map:map,
  });
placedMarkerArray.push(marker.label, markerBank.label, markerKiro.label, markerGas76.label, markerPSC.label);
google.maps.event.addListener(map, 'click', function(event) {
placeMarker(event.latLng);
});

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });

}
}
function createList() {
	var list = document.getElementById('ul');
	for (var i = 0; i < placedMarkerArray.length; i++){
		var markers = document.createElement('li');
		markers.appendChild(document.createTextNode(placedMarkerArray[i]));
		list.appendChild(markers);

	}
	return list;
}
