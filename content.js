var links = document.getElementsByTagName("a");
var url = "http://127.0.0.1:8080/";
var method = "POST";
var postData = {"url": links[1].href};
var async = true;
var req = new XMLHttpRequest();

var Temp = true

req.onload = function(){
	var status = req.status;
	var data = req.responseText;
	console.log(data);
}
req.open(method, url, async);
req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
req.send(postData);
console.log("sent message");

var asyncGet = function(){
	this.get = function(url){
		var getReq = new XMLHttpRequest();
		getReq.onreadystatechange = function(){
			if(getReq.readyState == 4 && getReq.status == 200){
				console.log("Response recieved")
			}
		}
		getReq.open("GET", url, true);
		getReq.onload = () =>{
			const data = JSON.parse(getReq.response);
			console.log(data);
		}
		getReq.send(null);
	
	}		

}
var UrlData = new asyncGet();
UrlData.get(url);


if(Temp){
	chrome.runtime.sendMessage({request:"action"}, function(response) {
		var actions = response;
	});
	console.log(links[1].href);    
	if(actions.Popup)
		window.alert("Malware Detected in URL " + links[1].href);
	if(actions.Disable)
		links[1].style.visibility = "hidden";
	else if(actions.Highlight)
		links[1].style.color = "red";

	
}