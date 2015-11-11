var app = {

    
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	onDeviceReady: function() {
		
        app.receivedEvent('deviceready');
    },
	
	receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	registerEvents : function() {
		var self = this;
		$(window).on('hashchange', $.proxy(this.route, this));
	},
	route: function() {
		var hash = window.location.hash;
		if (!hash) {
			$('#wrapper').html(new HomeView(this.store).render().el);
			return;
		}
		var match1 = hash.match(app.mmURL);
		if (match1) {
			$('#wrapper').html(new HomeView(this.store).renderMainMenu().el);
		}
		var match = hash.match(app.o1URL);
		if (match) {
			$('#wrapper').html(new HomeView(this.store).renderOption1().el);
		}
	},
    initialize: function() {
        var self = this;
		
		this.o1URL = /^#o1/;
		this.mmURL = /^#mm/;
		this.registerEvents();
		
		this.bindEvents();
		
		this.store = new MemoryStore(function() {
			$('#wrapper').html(new HomeView(self.store).render().el);
		});
		
    }

};

app.initialize();