var links = document.getElementsByTagName("a");
var url = links[0].href;

console.log(url);
var end = url.indexOf(".com/");
url = url.slice(0, end+5);
console.log(url);
var popup = false;
var disable = false;
var highlight = false;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.Message == 1){
			console.log("popup Message: ");
			console.log(request);
			if(request.Popup){
				popup = true;
			}
			if(request.Disable){
				disable = true;
			} else if(request.Highlight){
				highlight = true;
			}
			sendResponse({response: url});
		} else{
			console.log("Malware detected");
			if(popup){
				window.alert("Malware Detected in URL " + url)
			}
			if(disable){
				links[1].style.visibility = "hidden";
			} else if(highlight){
				links[1].style.color = "red";
			}
		}
	}
);

