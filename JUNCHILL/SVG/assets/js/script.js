$(document).ready(function(){
	$(document).keypress(function(e) {

		// testing keypress
		alert('keyboard clicked');

	    $('#A').append(String.fromCharCode(e.which));

	    // the keycode for 'a' is 97
	    if ( e.which == 97 ) {
	        $('#A').addClass('special');
	    }

	});
});