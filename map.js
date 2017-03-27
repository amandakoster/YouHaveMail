document.getElementById("markerSubmitButton").addEventListener("click", markerSubmit);
function markerSubmit() {
	var markerInput = document.getElementById('markerInput').value;
	localStorage.setItem('server', markerInput);
	document.getElementById("markerInput").value = "";
}