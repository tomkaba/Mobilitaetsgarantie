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

		// Check of browser supports touch events...
		if (document.documentElement.hasOwnProperty('ontouchstart')) {
			// ... if yes: register touch event listener to change the "selected" state of the item
			$('body').on('touchstart', 'a', function(event) {
				$(event.target).addClass('tappable-active');
			});
			$('body').on('touchend', 'a', function(event) {
				$(event.target).removeClass('tappable-active');
			});
		} else {
			// ... if not: register mouse events instead
			$('body').on('mousedown', 'a', function(event) {
				$(event.target).addClass('tappable-active');
			});
			$('body').on('mouseup', 'a', function(event) {
				$(event.target).removeClass('tappable-active');
			});
		}
	
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
		match = hash.match(app.o1URL);
		if (match) {
			$('#wrapper').html(new O1View(this.store).renderOption(match[1]).el);
			m=parseInt(match[1]);
			switch(m) {
			 case 101: o1d1y(); break;
			 case 102: o1d2y(); break;
			 case 104: o1d4n(); break;
			 
			}
		}
		
		
	},
    initialize: function() {
        var self = this;
		
		this.mmURL = /^#mm/;
		this.o1URL = /^#o1\/(\d{1,})/;

		this.registerEvents();
		
		this.bindEvents();
		
		this.store = new MemoryStore(function() {
			$('#wrapper').html(new HomeView(self.store).render().el);
		});
		
    }

};

app.initialize();