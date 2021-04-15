var Popups = false;
var DisableLinks = false;
var HighlightLinks = false;
var ActionOBJ = {Popup: true, Disable: true, Highlight:true};

//FIXME --NEEDS to be converted to an onCLick Listener on the button not an inline function call
document.addEventListener("DOMContentLoaded", function(){
	var save = document.getElementById("Save");

	save.addEventListener("click", function(){
		buttonPressed();
	});
});
function buttonPressed(){
	console.log("pressed");
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
	browser.tabs.executeScript({file: "content.js"})
}