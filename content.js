var links = document.getElementsByTagName("A");

for(var i = 0; i < links.length; i++){
	console.log(links.item(i).href);
}
chrome.runtime.sendMessage({"message":"Test", "url":links.item(0).href});
console.log("why");
