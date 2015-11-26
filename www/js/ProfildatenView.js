var ProfildatenView = function() {
 
	this.render = function() {
		this.el.html(ProfildatenView.template1()); 	
		return this;
	};
	
	this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
}

ProfildatenView.template1 = Handlebars.compile($("#profildaten-tpl").html());


function submitProfildaten() {
	var vorname=$("[name='vorname']").val();
	var name=$("[name='name']").val();
	var email=$("[name='email']").val();
	var phone=$("[name='phone']").val();
	var flat=$("[name='flat']").val();
	var postcode=$("[name='postcode']").val();
	var city=$("[name='city']").val();
	var account_holder=$("[name='account_holder']").val();
	var iban=$("[name='iban']").val();
	var bic=$("[name='bic']").val();

	window.localStorage.setItem('vorname',vorname);
	window.localStorage.setItem('name',name);
	window.localStorage.setItem('email',email);
	window.localStorage.setItem('phone',phone);
	window.localStorage.setItem('flat',flat);
	window.localStorage.setItem('postcode',postcode);
	window.localStorage.setItem('city',city);
	window.localStorage.setItem('account_holder',account_holder);
	window.localStorage.setItem('iban',iban);
	window.localStorage.setItem('bic',bic);
	
	
	
	
	 // process the confirmation dialog result
    function onConfirm(button) {
        if (button==2)
			window.location.hash="#/mm";
    }

    // Show a custom confirmation dialog
    //
    if (navigator.notification) {
	    navigator.notification.confirm(
            'Möchten Sie zurück zum Hauptmenü?',  // message
            onConfirm,              // callback to invoke with index of button pressed
            'Personliche daten saved',            // title
            'Nein,Hauptmenü'          // buttonLabels
        );
   	} else {
			var r=confirm('Saved. Go back to main menu?');
			if (r==true) 
			{
				window.location.hash="#/mm";
			}
	}
		
		
    
	
	return false;
}

function assignLsProfildaten() {
	$("[name='vorname']").val(window.localStorage.getItem('vorname'));
	$("[name='name']").val(window.localStorage.getItem('name'));
	$("[name='email']").val(window.localStorage.getItem('email'));
	$("[name='phone']").val(window.localStorage.getItem('phone'));
	$("[name='flat']").val(window.localStorage.getItem('flat'));
	$("[name='postcode']").val(window.localStorage.getItem('postcode'));
	$("[name='city']").val(window.localStorage.getItem('city'));
	$("[name='account_holder']").val(window.localStorage.getItem('account_holder'));
	$("[name='iban']").val(window.localStorage.getItem('iban'));
	$("[name='bic']").val(window.localStorage.getItem('bic'));
	


}