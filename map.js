document.getElementById("markerSubmitButton").addEventListener("click", markerSubmit);
function markerSubmit() {
	var markerInput = document.getElementById('markerInput').value;
	localStorage.setItem('submittedInput', markerInput);
	document.getElementById("markerInput").value = "";
}