var app = {

    
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	onDeviceReady: function() {
	/*
		document.addEventListener("backbutton", function(e){
			e.preventDefault();
			alert(window.location.hash);
			return false;
		}, false);
    */
		setTimeout(function() {
			window.location.hash="#/mm"
		}, 1500);
    },
	
	receivedEvent: function(id) {
		
		
		/*	
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		*/
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
		var overlayElement = null;
        var modalWindowElement = null;

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
		var match = hash.match(app.mmURL);
		if (match) {
			$('#wrapper').html(new HomeView(this.store).renderMainMenu().el);
			reset_topbar_title();
			displaysidebarmenuicon(); 
			hidebottombar();
		}
		match = hash.match(app.profildatenURL)
		if (match) {
			$('#wrapper').html(new ProfildatenView(this.store).render().el);
			set_topbar_title('Profildaten / Vorlagen');
			displaysidebarmenuicon(); 
			show('#savebutton');
			displaybottombar();
			assignLsProfildaten();
		}
		
		match = hash.match(app.unpunktlichURL)
		if (match) {
			$('#wrapper').html(new UnpunktlichView(this.store).render().el);
			set_topbar_title('Unpünktlichkeit melden');
			displaysidebarmenuicon(); 
			displaybottombar();
			assignLsProfildaten();
		}
		
		match = hash.match(app.o1URL);
		if (match) {
			$('#wrapper').html(new O1View(this.store).renderOption(match[1]).el);
			m=parseInt(match[1]);
			switch(m) {
			 case 1: $("#zuruckbutton").attr('href','#mm'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 1/7'); break;
			 case 2: $("#zuruckbutton").attr('href','#o1/1'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 2/7'); break;
			 case 3: $("#zuruckbutton").attr('href','#o1/2'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 3/7'); break;
			 case 4: $("#zuruckbutton").attr('href','#o1/3'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 4/7'); break;
			 case 5: $("#zuruckbutton").attr('href','#o1/4'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 5/7'); break;
			 case 6: $("#zuruckbutton").attr('href','#o1/5'); hide('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 6/7'); break;
			 case 7: $("#zuruckbutton").attr('href','#o1/6'); show('#formularbutton'); hide('#weiterbutton'); hide('#unpunktlichbutton'); hide("#savebutton"); set_topbar_title('Erstattungsanspruch prüfen 7/7'); break;

			}
			displaybottombar();
		}
		
		
	},
    initialize: function() {
        var self = this;
		
			
		this.mmURL = /^#\/mm/;
		this.o1URL = /^#\/o1\/(\d{1,})/;
		this.profildatenURL = /^#\/profildaten/;
		this.unpunktlichURL = /^#\/unpunktlich/;

		this.registerEvents();
		
		this.bindEvents();
		

		this.store = new LocalStorageStore(function() {
			$('#wrapper').html(new HomeView(self.store).render().el);
		});
		
    }

};

app.initialize();