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
	/*
		if (document.documentElement.hasOwnProperty('ontouchstart')) {
				this.el.on('touchstart','button',function(event) {
				self.showAlert('wybrano logo','bum!');	
				self.render();
				console.log('back to init screen');
			});
			
		} else {
			
			
			$('#but_1').on('mouseup', '', function(event) {
				$('#but_1').css('background-color','#e9e9e9');
				//self.showAlert('wybrano opcję 1','bum!');
			});

			
			
			$('#but_2').on('mouseup', '', function(event) {
				$('#but_2').css('background-color','#e9e9e9');
			});
			
			$('#but_3').on('mouseup', '', function(event) {
				$('#but_3').css('background-color','#e9e9e9');
			});
			$('#but_4').on('mouseup', '', function(event) {
				$('#but_4').css('background-color','#e9e9e9');
			});
			$('#but_5').on('mouseup', '', function(event) {
				$('#but_5').css('background-color','#e9e9e9');
			});
			$('#but_6').on('mouseup', '', function(event) {
				$('#but_6').css('background-color','#e9e9e9');
			});
			$('#but_7').on('mouseup', '', function(event) {
				$('#but_7').css('background-color','#e9e9e9');
			});
			$('#but_8').on('mouseup', '', function(event) {
				$('#but_8').css('background-color','#e9e9e9');
				self.renderOption1();
			});
			
		}
	*/
		return this;
	};

	
	this.renderOption1 = function() {
		var self = this;
		this.el.html(HomeView.option1Template());
		
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
HomeView.option1Template = Handlebars.compile($("#option1-tpl").html());