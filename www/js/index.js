
var app = {

    initialize: function() {
        var self = this;
		self.renderHomeView();	
		
		this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	renderHomeView: function() {
		var html =
		"<div class='app'>"+
         "   <h1>Mobilitaetsgarantie</h1>"+
         "   <div id='deviceready' class='blink'>"+
         "       <p class='event listening'>loading...</p>"+
         "       <p class='event received'>tap to proceed</p>"+
         "   </div>"+
        "</div>"+
		"<div class='bottom'>"+
		"	<img src='img/problemme.png' width=100%>"+
		"</div>";
        
		
				
		$('body').html(html);
	}
};
