var HomeView = function(store) {

	this.showAlert = function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	}
	
	this.render = function() {
		var self = this;
		this.el.html(HomeView.template());
	
		return this;
	};
	
	this.renderMainMenu = function() {
		var self = this;
		this.el.html(HomeView.mainmenuTemplate());
	
		return this;
	};

	
	


	this.initialize = function() {
        var self = this;
		// Define a div wrapper for the view. The div wrapper is used to attach events.
		this.el = $('<div/>');
		self.render();
		
	};
    this.initialize();
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.mainmenuTemplate = Handlebars.compile($("#mainmenu-tpl").html());
