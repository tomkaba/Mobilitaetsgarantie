var UnpunktlichView = function() {
 
	this.render = function() {
		this.el.html(UnpunktlichView.template1()); 	
		return this;
	};
	
	this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
}

UnpunktlichView.template1 = Handlebars.compile($("#unpunktlich-tpl").html());

