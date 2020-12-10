var http = require('http');
var nvt = require('node-virustotal');
const instance = nvt.makeAPI();
const key = instance.setKey('79bfba3b780f87a05740ec168ae0a808791760cf644a4ed8ac2d77f7ddd51352');
http.createServer(function (req, res) {
	var url = nvt.sha256('http://google.com/');
	res.write("received message");
	const test = instance.urlLookup(url, function(err, res){
		if(err){
			console.log("url lookup failed");
			return;
		}
		console.log(res);
		return;
	});
}).listen(8080);