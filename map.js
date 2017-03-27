document.getElementById("markerSubmitButton").addEventListener("click", markerSubmit);
function markerSubmit() {
	var markerInput = document.getElementById('markerInput').value;
	localStorage.setItem('submittedInput', markerInput);
	alert("Messages have been sent to marker " + markerInput +". Which include houses A,B,C and D.");
	document.getElementById("markerInput").value = "";
}