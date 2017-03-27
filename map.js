document.getElementById("markerSubmitButton").addEventListener("click", markerSubmit);
function markerSubmit() {
	var markerInput = document.getElementById('markerInput').value;
	localStorage.setItem('submittedInput', markerInput);
	alert("Messages have been sent to marker " + markerInput +". Which include houses A,B,C and D.");
	document.getElementById("markerInput").value = "";
}
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }