$('#signin').click(function() {
	// On signup/login click
	$('.signinPop').css('display', 'block');

	// On Signup click
	$('.loginHeader').click(function() {
		$('.loginForm').css('display', 'block');
		$('.loginHeader').css('color', '#fff');
		$('.signinForm').css('display', 'none');
		$('.signupHeader').css('color', '#FFBB0D');
	})

	// On login click
	$('.signupHeader').click(function() {
		$('.loginForm').css('display', 'none');
		$('.loginHeader').css('color', '#FFBB0D');
		$('.signinForm').css('display', 'block');
		$('.signupHeader').css('color', '#fff');
	})

	// Go Back Button
	$('.closePop').click(function() {
		event.preventDefault();
		$('.signinPop').css('display', 'none');
	});
});