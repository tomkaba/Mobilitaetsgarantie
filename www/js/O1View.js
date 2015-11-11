var O1View = function() {
 
	this.render = function() {
		this.el.html(O1View.template());
		return this;
	};
	
	this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
}

O1View.template = Handlebars.compile($("#option1-tpl").html());