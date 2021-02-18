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

var asyncGet = function(){
	this.get = function(url, callback){
		var getReq = new XMLHttpRequest();
		getReq.onreadystatechange = function(){
			if(getReq.readyState == 4 && getReq.status == 200){
				callback(getReq.responseText)
			}
		}
		getReq.open("GET", url, true);
		getReq.send(null);
	
	}		

}

function handleGetData(data){
	console.log(data);
}
var UrlData = new asyncGet();
UrlData.get(url, handleGetData());
