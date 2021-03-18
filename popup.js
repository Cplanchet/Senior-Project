var Popups;
var DisableLinks;
var HighlightLinks;
var ActionOBJ = {Popup: true, Disable: true, Highlight:true};

//FIXME --NEEDS to be converted to an onCLick Listener on the button not an inline function call
document.addListener("DOMContentLoaded", function(){
	var save = documment.getElementById("Save");

	save.addEventListener("click", buttonPressed());
});
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
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.request == "action"){
    	ActionOBJ.Popup = Popups;
    	ActionOBJ.Disable = DisableLinks;
    	ActionOBJ.Highlight = HighlightLinks;
    	sendResponse(ActionOBJ);
  	}
  }
);