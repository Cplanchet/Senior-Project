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
		//var Analyses = JSON.parse(ResultOBJ);
		var Analyses = ResultOBJ;
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
		if(A["BADWARE.INFO"].category == "malicious" || A["BADWARE.INFO"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.["BADWARE.INFO"].result);	
		}
		if(A["Baidu-International"].category == "malicious" || A["Baidu-International"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Baidu-International"].result);	
		}
		if(A.BitDefender.category == "malicious" || A.BitDefender.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.BitDefender.result);	
		}
		if(A.BlockList.category == "malicious" || A.BlockList.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.BlockList.result);	
		}
		if(A.Blueliv.category == "malicious" || A.Blueliv.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Blueliv.result);	
		}
		if(A["CINS Army"].category == "malicious" || A["CINS Army"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["CINS Army"].result);	
		}
		if(A["CLEAN MX"].category == "malicious" || A["CLEAN MX"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["CLEAN MX"].result);	
		}
		if(A["CMC Threat Intelligence"].category == "malicious" || A["CMC Threat Intelligence"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["CMC Threat Intelligence"].result);	
		}
		if(A.CRDF.category == "malicious" || A.CRDF.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.CRDF.result);	
		}
		if(A.Certego.category == "malicious" || A.Certego.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Certego.result);	
		}
		if(A["Comodo Valkyrie Verdict"].category == "malicious" || A["Comodo Valkyrie Verdict"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Comodo Valkyrie Verdict"].result);	
		}
		if(A.CyRadar.category == "malicious" || A.CyRadar.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.CyRadar.result);	
		}
		if(A.Cyan.category == "malicious" || A.Cyan.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Cyan.result);	
		}
		if(A.CyberCrime.category == "malicious" || A.CyberCrime.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.CyberCrime.result);	
		}
		if(A.Cyren.category == "malicious" || A.Cyren.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Cyren.result);	
		}
		if(A.DNS8.category == "malicious" || A.DNS8.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.DNS8.result);	
		}
		if(A["Dr.Web"].category == "malicious" || A["Dr.Web"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Dr.Web"].result);	
		}
		if(A.ESET.category == "malicious" || A.ESET.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.ESET.result);	
		}
		if(A.EmergingThreats.category == "malicious" || A.EmergingThreats.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.EmergingThreats.result);	
		}
		if(A.Emsisoft.category == "malicious" || A.Emsisoft.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Ensisoft.result);	
		}
		if(A.EonScope.category == "malicious" || A.EonScope.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.EonScope.result);	
		}
		if(A["Feodo Tracker"].category == "malicious" || A["Feodo Tracker"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Feodo Tracker"].result);	
		}
		if(A["Forcepoint ThreatSeeker"].category == "malicious" || A["Forcepoint ThreatSeeker"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Forcepoint ThreatSeeker"].result);	
		}
		if(A.Fortinet.category == "malicious" || A.Fortinet.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Fortinet.result);	
		}
		if(A.FraudScore.category == "malicious" || A.FraudScore.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.FraudScore.result);	
		}
		if(A["G-Data"].category == "malicious" || A["G-Data"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["G-Data"].result);	
		}
		if(A["Google Safebrowsing"].category == "malicious" || A["Google Safebrowsing"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Google Safebrowsing"].result);	
		}
		if(A.GreenSnow.category == "malicious" || A.GreenSnow.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.GreenSnow.result);	
		}
		if(A["Hoptile Industries"].category == "malicious" || A["Hoptile Industries"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Hoptile Industries"].result);	
		}
		if(A.IPsum.category == "malicious" || A.IPsum.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.IPsum.result);	
		}
		if(A.K7AntiVirus.category == "malicious" || A.K7AntiVirus.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.K7AntiVirus.result);	
		}
		if(A.Kespersky.category == "malicious" || A.Kespersky.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Kespersky.result);	
		}
		if(A.Lumu.category == "malicious" || A.Lumu.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Lumu.result);	
		}
		if(A.MalBeacon.category == "malicious" || A.MalBeacon.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.MalBeacon.result);	
		}
		if(A.MalSilo.category == "malicious" || A.MalSilo.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.MalSilo.result);	
		}
		if(A["Malware Domain BlockList"].category == "malicious" || A["Malware Domain BlockList"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Malware Domain BlockList"].result);	
		}
		if(A.MalwareDomainList.category == "malicious" || A.MalwareDomainList.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.MalwareDomainList.result);	
		}
		if(A.MalwarePatrol.category == "malicious" || A.MalwarePatrol.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.MalwarePatrol.result);	
		}
		if(A.Malwared.category == "malicious" || A.Malwared.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Malwared.result);	
		}
		if(A.Netcraft.category == "malicious" || A.Netcraft.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Netcraft.result);	
		}
		if(A.NotMining.category == "malicious" || A.NotMining.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.NotMining.result);	
		}
		if(A.Nucleon.category == "malicious" || A.Nucleon.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Nucleon.result);	
		}
		if(A.OpenPhish.category == "malicious" || A.OpenPhish.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.OpenPhish.result);	
		}
		if(A.PREBYTES.category == "malicious" || A.PREBYTES.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.PREBYTES.result);	
		}
		if(A.PhishLabs.category == "malicious" || A.PhishLabs.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.PhishLabs.result);	
		}
		if(A["Phishing Database"].category == "malicious" || A["Phishing Database"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Phishing Database"].result);	
		}
		if(A.Phishtank.category == "malicious" || A.Phishtank.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Phishtank.result);	
		}
		if(A["Quick Heal"].category == "malicious" || A["Quick Heal"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Quick Heal"].result);	
		}
		if(A.Quttera.category == "malicious" || A.Quttera.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Quttera.result);	
		}
		if(A.Rising.category == "malicious" || A.Rising.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Rising.result);	
		}
		if(A["SCUMWARE.org"].category == "malicious" || A["SCUMWARE.org"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["SCUMWARE.org"].result);	
		}
		if(A.Sangfor.category == "malicious" || A.Sangfor.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Sangfor.result);	
		}
		if(A.SecureBrain.category == "malicious" || A.SecureBrain.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.SecureBrain.result);	
		}
		if(A["Snort IP sample list"].category == "malicious" || A["Snort IP sample list"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Snort IP sample list"].result);	
		}
		if(A.Sophos.category == "malicious" || A.Sophos.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Sophos.result);	
		}
		if(A.Spam404.category == "malicious" || A.Spam404.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Spam404.result);	
		}
		if(A.Spamhaus.category == "malicious" || A.Spamhaus.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Spamhaus.result);	
		}
		if(A.StopBadware.category == "malicious" || A.StopBadware.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.StopBadware.result);	
		}
		if(A.StopForumSpam.category == "malicious" || A.StopForumSpam.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.StopForumSpamp.result);	
		}
		if(A["Sucuri SiteCheck"].category == "malicious" || A["Sucuri SiteCheck"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Sucuri SiteCheck"].result);	
		}
		if(A.Tencent.category == "malicious" || A.Tencent.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Tencent.result);	
		}
		if(A.ThreatHive.category == "malicious" || A.ThreatHive.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.ThreatHive.result);	
		}
		if(A.Threatsourcing.category == "malicious" || A.Threatsourcing.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Threatsourcing.result);	
		}
		if(A.Trustwave.category == "malicious" || A.Trustwave.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.Trustwave.result);	
		}
		if(A.URLhaus.category == "malicious" || A.URLhaus.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.URLhaus.result);	
		}
		if(A["VX Vault"].category == "malicious" || A["VX Vault"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["VX Vault"].result);	
		}
		if(A["Virusdie External Site Scan"].category == "malicious" || A["Virsudie External Site Scan"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Virusdie External Site Scan"].result);	
		}
		if(A["Web Security Guard"].category == "malicious" || A["Web Security Guard"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Web Security Guard"].result);	
		}
		if(A["Yandex Safebrowsing"].category == "malicious" || A["Yandex Safebrowsing"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["Yandex Safebrowsing"].result);	
		}
		if(A.ZeroCERT.category == "malicious" || A.ZeroCERT.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.ZeroCERT.result);	
		}
		if(A["desenmascara.me"].category == "malicious" || A["desenmascara.me"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["desenmascara.me"].result);	
		}
		if(A["malwares.com URL checker"].category == "malicious" || A["malwares.com URL checker"].category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A["malwares.com URL checker"].result);	
		}
		if(A.securolytics.category == "malicious" || A.securolytics.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.securolytics.result);	
		}
		if(A.zvelo.category == "malicious" || A.zvelo.category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A.zvelo.result);	
		}
		if(A..category == "malicious" || A..category == "suspicious"){
			isURLMalicious = true;
			console.log("Malware detected: " + A..result);	
		}






		console.log(res);
		return;
	});
}).listen(8080);