$(document).ready(function () {

	// Validate text box, then add value in text box to list

	$('#add').click(function() {
		if( $('input#item').val().trim().length == 0 ) {
				// alert("put something here");
				$('#error').show();
				$('input#item').val("");
		} else { 

		$('ul').append('<li class="todo"><button class="grab">CHECK!</button>' +  $('input#item').val() + '</li>');
		$('input#item').val("");
		$('#error').hide();

		};	
	
	});

	// Change class when user clicks Done button	

	$('ul').on('click', '.grab', function() {
		$(this).closest('li').toggleClass('todo done');
		$(this).parent().remove();
	});

	});
	