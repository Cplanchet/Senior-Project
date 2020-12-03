chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.message === "Test"){
			console.log(request.url);
			var f = document.createElement('form');
			var vtURL = 'http://virustotal.com/gui/search/';
			var tempURL = 'https://www.google.com';
			tempURL = encodeURIComponent(tempURL);
			console.log(vtURL + tempURL)
			f.action = vtURL + tempURL;
			window.open(vtURL + tempURL);
			f.method = 'put';
			var i = document.createElement('input');
			i.type = 'hidden';
			i.name = 'url'
			i.value = request.url;
			f.appendChild(i);
			document.body.appendChild(f);
			f.submit();
		}
	}
	);