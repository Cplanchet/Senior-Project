var Popups = false;
var DisableLinks = false;
var HighlightLinks = false;
var ActionOBJ = {Message: 1, Popup: true, Disable: true, Highlight:true};
var ChangeOBJ = {Message: 2};
var tID;

function sendToServer(message){
	var url = "http://127.0.0.1:8080/";
	var asyncPost = function(){
		this.post = function(url){
			var postReq = new XMLHttpRequest();
			postReq.onreadystatechange = function(){
				if(postReq.readyState == 4 && postReq.status == 200){
					console.log("message Recieved");
				}
			}
		postReq.open("POST", url, true);
		postReq.onload = () =>{
			console.log(postReq.response);
			if(postReq.response == "true"){
				chrome.tabs.sendMessage(tID, ChangeOBJ);
			}
			return postReq.response;
		}
		postReq.send(message);
		}

	}
	var UrlData = new asyncPost();
	UrlData.post(url);
}
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
	ActionOBJ.Popup = Popups;
	ActionOBJ.Disable = DisableLinks;
	ActionOBJ.Highlight = HighlightLinks;
	console.log(ActionOBJ); 
	let test = chrome.tabs.query({currentWindow: true, active: true}, (tabs) =>{
		tID = tabs[0].id
		chrome.tabs.sendMessage(tID, ActionOBJ, function (response) {
			console.log("response:");
			console.log(response.response);
			console.log("response from Server:")
			sendToServer(response.response);
		});	
	});
	//test.then(logId);

}
