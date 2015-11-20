var O1View = function() {
 
	this.renderOption = function(option_id) {
		var o=parseInt(option_id);
		switch(o) {
			case 1:
				this.el.html(O1View.template1()); break;
			case 2:
				this.el.html(O1View.template2()); break;
			case 3:
				this.el.html(O1View.template3()); break;
			case 4:
				this.el.html(O1View.template4()); break;
			case 5:
				this.el.html(O1View.template5()); break;
			case 6:
				this.el.html(O1View.template6()); break;
			case 7:
				this.el.html(O1View.template7()); break;
				
			case 101:
				this.el.html(O1View.template1()); break;	
			case 102:
				this.el.html(O1View.template2()); break;	
			case 104:
				this.el.html(O1View.template4()); break;	
			default:
				true;
		}
		return this;
	};
	
	this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
}

O1View.template1 = Handlebars.compile($("#option1-tpl").html());
O1View.template2 = Handlebars.compile($("#option2-tpl").html());
O1View.template3 = Handlebars.compile($("#option3-tpl").html());
O1View.template4 = Handlebars.compile($("#option4-tpl").html());
O1View.template5 = Handlebars.compile($("#option5-tpl").html());
O1View.template6 = Handlebars.compile($("#option6-tpl").html());
O1View.template7 = Handlebars.compile($("#option7-tpl").html());