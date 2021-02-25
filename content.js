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
UrlData.get(url, handleGetData());
