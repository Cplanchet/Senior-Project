var Popups;
var DisableLinks;
var HighlightLinks;

function buttonPressed(){
	if(document.getElementById("PopupBox").checked){
		Popups = true;
	}
	else{ 
		Popups = false
	}
	
	if(document.getElementById("DisableBox").checked){
		DisableLinks = true;
	}
	else{ 
		DisableLinks = false
	}
	
	if(document.getElementById("HighlightBox").checked){
		HighlightLinks = true;
	}
	else{ 
		HighlightLinks = false
	}

}
