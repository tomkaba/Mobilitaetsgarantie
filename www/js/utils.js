function css_click(id,color) {
	
	$(id).css("background",color);
	$(id).css("background-image","-webkit-linear-gradient(top, color, #2980b9)");
	$(id).css("background-image","-moz-linear-gradient(top, color, #2980b9)");
	$(id).css("background-image","-ms-linear-gradient(top, color, #2980b9)");
	$(id).css("background-image","-o-linear-gradient(top, color, #2980b9)");
	$(id).css("background-image","linear-gradient(to bottom, color, #2980b9)");
	$(id).css("-webkit-border-radius","28");
	$(id).css("-moz-border-radius","28");
	$(id).css("border-radius","28");
	
	$(id).css("-webkit-box-shadow","0px 1px 3px #666666");
	$(id).css("-moz-box-shadow","0px 1px 3px #666666");
	$(id).css("box-shadow","0px 1px 3px #666666");
	
	
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

function set_topbar_title(title) {
	$("#topbartitle").html(title);
}

function reset_topbar_title() {
	set_topbar_title('Schlichtungsstelle Nahverkehr');
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


function displaysidebarmenuicon() {
	$("#topbar").css("display","block");
}

function hidesidebarmenuicon() {
	$("#topbar").css("display","none");
}

function displaybottombar() {
	$("#bottombar").css("display","block");
}

function hidebottombar() {
	$("#bottombar").css("display","none");
}


function showPopUpMessage(msg) {
                overlayElement = document.createElement("div");
                overlayElement.className = 'modalOverlay';
                modalWindowElement = document.createElement("div");
                modalWindowElement.className = 'modalWindow';
                modalWindowElement.innerHTML = msg;
                modalWindowElement.style.left = (window.innerWidth - 200) / 2 + "px";
                document.body.appendChild(overlayElement);
                document.body.appendChild(modalWindowElement);
                setTimeout(function() {
                    modalWindowElement.style.opacity = 1;
                    overlayElement.style.opacity = 0.4;
                    overlayElement.addEventListener("click", hidePopUpMessage, false);
                }, 300);
            }
//hide the modal overlay and popup window
function hidePopUpMessage() {
                modalWindowElement.style.opacity = 0;
                overlayElement.style.opacity = 0;
                overlayElement.removeEventListener("click", hidePopUpMessage, false);
                setTimeout(function() {
                    document.body.removeChild(overlayElement);
                    document.body.removeChild(modalWindowElement);
                }, 400);
}

function o1d1n() {
		var description="Nach der Mobilitätsgarantie gibt es einen Erstattungsanspruch ab einer Verspätung bei der Abfahrt von 20 Minuten Ist die Verspätung kürzer als 20 Minuten, haben Sie keinen Erstattungsanspruch. Melden Sie uns die Verspätung trotzdem!";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		disable("#button_next");
		//show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
		show('#unpunktlichbutton'); 
}

function o1d1y() {
		var description="Weiter";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d2n() {
		var description="In Ihrem Fall kommt eine Entschädigung nach dem Fahrgastrechtegesetz in Betracht, wenn Ihre Verspätung sich am Zielbahnhof auf mehr als 60 Minuten beläuft. Weitere Informationen dazu finden Sie unter <a href=\"#\" onclick=\"window.open('http://www.example.org', '_system'); return false;\">www.example.org</a>";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		disable("#button_next");
		//show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
		show('#unpunktlichbutton'); 
}

function o1d2y() {
		var description="Weiter";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		//show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
}

function o1d3y() {
		
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");	
		show("#d3subquestion");
		show("#dialog_subquestion_description");
		show("#d3subquestion_janein");
}

function o1d3Bn() {
		var description="Weiter";
		css_click("#button_nein2","#3cb0fd");	
		css_unclick("#button_ja2");	
		enable("#button_next");
		//show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
		
}

function o1d3By() {
		var description="Sie müssen eine zumutbare Fahrtalternative nutzen. Ein Erstattungsanspruch nach Mobilitätsgarantie NRW besteht nicht. Melden Sie uns die Verspätung trotzdem!";
		css_click("#button_ja2","#3cb0fd");	
		css_unclick("#button_nein2");
		disable("#button_next");
		//show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
		show('#unpunktlichbutton'); 
}

function o1d4n() {
		var description="Weiter";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");	
		enable("#button_next");
		//show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
}

function o1d4y() {
		var description="Sie haben keinen Anspruch nach der Mobilitätsgarantie.  Melden Sie uns die Verspätung trotzdem!";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		disable("#button_next");
		//show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
		show('#unpunktlichbutton'); 
}

function o1d5y() {
		var description="Sie müssen ein Ticket für den Fernverkehrszug kaufen. Der Preis wird inklusive Bordpreis voll erstattet. <br/>Sie dürfen zwischen Taxi und Fernverkehrszug frei wählen, wenn an Ihrer Haltestelle beides möglich ist. ";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		enable("#button_next");
		//show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
		$("#weiterbutton").attr("href","#o1/7");
		show("#weiterbutton");
}

function o1d6y() {
		var description="Verspätung tagsüber (05:00 bis 20:00 Uhr)?";
		css_click("#button_ja","#3cb0fd");	
		css_unclick("#button_nein");
		$("#d6subquestion").css('height','60px');
		$("#d6subquestion").css('font-size','17px');
		$("#d6subquestion").css('text-align','center');
		$("#d6subquestion").html(description);
		set_description(description);	
		show("#d6subquestion");
		show("#d6subquestion_janein");
		hide('#unpunktlichbutton'); 
}

function o1d6n() {
		var description="Sie haben keinen Anspruch aufgrund der Verspätung, da es bei der Mobilitätsgarantie nur um die Erstattung tatsächlich entstandener Kosten für die Weiterreise geht und nicht um eine Kompensation für Verspätungen/Wartezeit. In Ihrem Fall kommt vielleicht eine Entschädigung nach dem Fahrgastrechtegesetz in Betracht, wenn Ihre Verspätung sich am Zielbahnhof auf mehr als 60 Minuten beläuft. Weitere Informationen dazu finden Sie unter <a href=\"#\" onclick=\"window.open('http://www.example.org', '_system'); return false;\">www.example.org</a>.";
		css_click("#button_nein","#3cb0fd");	
		css_unclick("#button_ja");
		disable("#button_next");
		hide("#dialog_description");
		hide("#d6subquestion_janein");
	    $("#d6subquestion").css('height','220px');
		$("#d6subquestion").css('font-size','13px');
		$("#d6subquestion").css('text-align','left');
		$("#d6subquestion").html(description);
		//show("#dialog_ja_nein");	
		//set_description(description);
		//show("#dialog_description);
		show('#d6subquestion');
		show('#unpunktlichbutton'); 
}

function o1d6Bn() {
		var description="Bei einer Verspätung zwischen 20:00 Uhr und 05:00 Uhr können nach der Mobilitätsgarantie die Kosten für das Taxi bis zu <b>50,- € pro Person</b> erstattet werden. Mehr...";
		css_click("#button_nein2","#3cb0fd");	
		css_unclick("#button_ja2");	
		enable("#button_next");
		//show("#dialog_ja_nein");
		set_description(description);
		show("#dialog_description");
		$("#weiterbutton").attr("href","#o1/7");
		show("#weiterbutton");
}

function o1d6By() {
		var description="Bei einer Verspätung zwischen 05:00 Uhr und 20:00 Uhr können nach der Mobilitätsgarantie die Kosten für das Taxi bis zu <b>25,- € pro Person</b> erstattet werden. Mehr...";
		css_click("#button_ja2","#3cb0fd");	
		css_unclick("#button_nein2");
		enable("#button_next");
		//show("#dialog_ja_nein");	
		set_description(description);
		show("#dialog_description");
		$("#weiterbutton").attr("href","#o1/7");
		show("#weiterbutton");
}