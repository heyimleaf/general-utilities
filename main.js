// if Contact Form 7's form can send mail
document.addEventListener( 'wpcf7mailsent', function( event ) {
	//do something here
    
    // for example, you can add a Google Analytics event.
    ga("googletaghere", "event", "Form", "Send", "Contacts Form");
    
    console.log('form event sended');
}, false); 