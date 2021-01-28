var links = document.getElementsByTagName("A");

for(var i = 0; i < links.length; i++){
	console.log(links.item(i).href);
}
var url = "http://127.0.0.1:8080/";
var method = "POST";
var postData = "https://www.w3schools.com/js/js_json_html.asp";
var async = true;
var req = new XMLHttpRequest();

req.onload = function(){
	var status = req.status;
	var data = req.responseText;
	console.log(data);
}
req.open(method, url, async);
//req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
req.send(postData);
console.log("sent message");