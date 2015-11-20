function css_click(id,color) {
	$(id).css("background",color);
	$(id).css("border","solid #1f628d 1px");
	$(id).css("-webkit-border-radius","28");
	$(id).css("-moz-border-radius","28");
	$(id).css("border-radius","28");
}

function css_unclick(id) {
	$(id).css("background","#3498db");
	$(id).css("border","0px");
	$(id).css("-webkit-border-radius","28");
	$(id).css("-moz-border-radius","28");
	$(id).css("border-radius","28");
}


function disable(id) {
	$(id).css("background","#AAAAAA");
	$(id).css("color","#BBBBBB");	
	$(id).css("-webkit-border-radius","28");
	$(id).css("-moz-border-radius","28");
	$(id).css("border-radius","28");

	$(id).attr("x-href", $(id).attr("href"));
	$(id).removeAttr("href");
}

function enable(id) {
	$(id).css("background","#3498db");
	$(id).css("color","#ffffff");
	$(id).css("-webkit-border-radius","28");
	$(id).css("-moz-border-radius","28");
	$(id).css("border-radius","28");

	if(typeof $(id).attr("x-href") != 'undefined')
	{
		$(id).attr("href", $(id).attr("x-href"));
	}
}

function set_description(description)
{
	$("#description").html(description);
}
function show(id) {
	$(id).css("display","inline-block");
}
function hide(id) {
	$(id).css("display","none");
}

function o1d1n() {
		var description="No has percipit voluptatum definitiones. Nihil ignota graeco ea his. Sit mucius causae interpretaris ut, has ex assum argumentum, id per stet vitae urbanitas";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		disable("#button_next");
		show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d1y() {
		var description="Tollit ponderum qui eu. Ex has dico veritus nostrum. Autem tritani aliquam te duo, omnis homero pri eu, eos decore munere recteque ei.";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d2n() {
		var description="In Ihrem Fall kommt eine Entschädigung nach dem Fahrgastrechtegesetz in Betracht, wenn Ihre Verspätung sich am Zielbahnhof auf mehr als 60 Minuten beläuft. Weitere Informationen dazu finden Sie unter <a href='http://www.example.org' target=_blank>www.example.org</a>";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		disable("#button_next");
		show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d2y() {
		var description="Tollit ponderum qui eu. Ex has dico veritus nostrum. Autem tritani aliquam te duo, omnis homero pri eu, eos decore munere recteque ei.";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d3y() {
		
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");	
		show("#d3subquestion");
		show("#d3subquestion_janein");
}

function o1d3Bn() {
		var description="Press Weiter to continue";
		css_click("#button_nein2","#3cb0fd");	
		css_unclick("#button_ja2");	
		enable("#button_next");
		show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d3By() {
		var description="Kein Anspruch";
		css_click("#button_ja2","#3cb0fd");	
		css_unclick("#button_nein2");
		disable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d4n() {
		var description="Tollit ponderum qui eu. Ex has dico veritus nostrum. Autem tritani aliquam te duo, omnis homero pri eu, eos decore munere recteque ei.";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		enable("#button_next");
		show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d4y() {
		var description="Kein Anspruch";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		disable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d5y() {
		var description="Die Kosten für das Fernverkehrsticket zum Reiseziel Schlichtungsstelle Nahverkehr Lastenheft für die App zur Mobilitätsgarantie können nach der Mobilitätsgarantie inklusive des Bordpreises voll erstattet werden";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d6y() {
		var description="";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		set_description(description);	
		show("#d6subquestion");
		show("#d6subquestion_janein");
}

function o1d6n() {
		var description="Kein Anspruch, da es bei der Mobilitätsgarantie nur um die Erstattung tatsächlich entstandener Kosten für die Weiterreise geht und nicht um eine Kompensation für Verspätungen / Wartezeit";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");
		disable("#button_next");
		hide("#d6subquestion");
		hide("#d6subquestion_janein");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d6Bn() {
		var description="Bei einer Verspätung zwischen 20:00 Uhr und 05:00 Uhr können nach der Mobilitätsgarantie die Kosten für das Taxi bis zu 50,- € pro Person erstattet werden";
		css_click("#button_nein2","#3cb0fd");	
		css_unclick("#button_ja2");	
		enable("#button_next");
		show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d6By() {
		var description="Bei einer Verspätung zwischen 05:00 Uhr und 20:00 Uhr können nach der Mobilitätsgarantie die Kosten für das Taxi bis zu 25,- € pro Person erstattet werden";
		css_click("#button_ja2","#3cb0fd");	
		css_unclick("#button_nein2");
		enable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}