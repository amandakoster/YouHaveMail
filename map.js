'use strict';
var placedMarkerArray = [];
document.getElementById('markerSubmitButton').addEventListener('click', markerSubmit);
document.getElementById('markerSubmitButton').addEventListener('click', createList);
document.getElementById('markerSubmitButton').addEventListener('click', messageSent);
function messageSent() {
  var messageSent = document.getElementById('messageSent');
  var img = document.createElement("img");
  img.setAttribute('class', 'sent-gif');
  img.src = "https://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-sent.gif";  
  messageSent.appendChild(img);
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
    name:'C - Code Fellows',
  	label: 'C',
    position: codeFellows,
    map: map
  });
  var bank = {lat: 47.6175, lng: -122.3520};
  var markerBank = new google.maps.Marker({
    name:'E - Banner Bank',
   	label: 'E',
   	position: bank,
   	map:map
    });
  var kiro = {lat: 47.6193, lng: -122.3504};
  var markerKiro = new google.maps.Marker({
    name:'A - Kiro 7',
   	label: 'A',
   	position: kiro,
   	map:map,
    });
  var pSC = {lat: 47.6178, lng: -122.3514};
  var markerPSC = new google.maps.Marker({
    name:'D - Pacific Science Center',
   	label: 'D',
   	position: pSC,
   	map:map,
    });
  var gas76 = {lat: 47.6192, lng: -122.3517};
  var markerGas76 = new google.maps.Marker({
    name:'B - 76',
   	label: 'B',
   	position: gas76,
   	map:map,
    });
  placedMarkerArray.push(marker.name, markerBank.name, markerKiro.name, markerGas76.name, markerPSC.name);
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });

  function placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    placedMarkerArray.push(marker.position);
  }
  function newRegisteredUser(){
    var newUserInfo = localStorage.newUserArray;
    var userArray = JSON.parse(newUserInfo);
    for(var i =0; i < userArray.length; i++){
      var userAddress = userArray[i].mailAddress;
      var userStringSplit = userArray[i].mailAddress.split(' ');
      var userStringJoin = userStringSplit.join('+');
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + userStringJoin + '&key=AIzaSyAb3gmSEsoKXrUZBsqoY2a0_mNc4EvJfck';
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      }).done(function(data){ 
          var newMarkLocation = data.results[0].geometry.location;
          placeMarker(newMarkLocation);
      });      
    }
  }
  newRegisteredUser();
}
function createList() {
  var list = document.getElementById('ul');
  for (var i = 0; i < placedMarkerArray.length; i++){
    var markers = document.createElement('li');
    markers.appendChild(document.createTextNode(placedMarkerArray[i]));
    list.appendChild(markers);
    document.getElementById('markerSubmitButton').removeEventListener('click', createList);
  }
  return list;
}

