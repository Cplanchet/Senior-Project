chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.message === "Test"){
			console.log(request.url);
			var f = document.createElement('form');
			f.action = 'http://virustotal.com/gui/search/https%253A%252F%252Fwww.google.com'
			f.method = 'put';
			//var i = document.createElement('input');
			//i.type = 'hidden';
			//i.name = 'url'
			//i.value = request.url;
			//f.appendChild(i);
			//document.body.appendChild(f);
			f.submit();
		}
	}
	);