document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#goface').click(function(event) {
		openFacebook();
	});
	navigator.notification.vibrate(1000);
	navigator.notification.alert("Hello");
	navigator.notification.beep(1);   
	// $('#alert').click(function(event) {
	// 	alert('.');
	// });
	// $('#vibrate').click(function(event) {
	// 	alert('.');
	// });
	// $('#beep').click(function(event) {
	// 	alert('.');
	// });

}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
function alertDismissed() {
        // do something
    }
