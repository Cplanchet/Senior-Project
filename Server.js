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
		var isURLMalicious = false;
		var ResultOBJ= res;
		var Analyses = JSON.parse(ResultOBJ);
		var A = Analyses.data.attributes.last_analysis_results;

		//Check each service to see if their results
		if(A.ADMINUSLabs.category == "malicious" || A.ADMINUSLabs.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.ADMINUSLabs.result);
		}
		if(A["AICC (MONITORAPP)"].category == "malicious" || A["AICC (MONITORAPP)"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["AICC (MONITORAPP)"].result);
		}
		if(A["AegisLap Webguard"].category == "malicious" || A["AegisLap Webguard"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["AICC (MONITORAPP)"].result);	
		}
		if(A.AlienVault.category == "malicious" || A.AlienVault.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.AlienVault.result);	
		}
		if(A["Antiy-AVL"].category == "malicious" || A["Antiy-AVL"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.["Antiy-AVL"].result);	
		}
		if(A.Armis.category == "malicious" || A.Armis.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Armis.result);	
		}
		if(A["Artists Against 419"].category == "malicious" || A["Artists Against 419"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Artists Against 419"].result);	
		}
		if(A.AutoShun.category == "malicious" || A.AutoShun.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.AutoShun.result);	
		}
		if(A.Avira.category == "malicious" || A.Avira.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Avira.result);	
		}





		console.log(res);
		return;
	});
}).listen(8080);