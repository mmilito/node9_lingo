// CLIENT SIDE CODE

$(document).on('ready',function(){

	$('.lang-from').on('submit',function(e){
		e.preventDefault();
		var from=('.lang-from').val();
		console.log('here');
		//$('#message-lang-from').append(from);
	});


}); // doc on ready