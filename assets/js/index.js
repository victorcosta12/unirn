document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#alert').click(function(event) {
		alert('teste!');
	});
	$('#goface').click(function(event) {
		openFacebook();
	});
	$('#vibrate').click(function(event) {
		vibrate();
	});
}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
function vibrate() {
	navigator.notification.vibrate(2000);
}
