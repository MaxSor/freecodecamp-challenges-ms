
function get(url) {
	return new Promise ( function(resolve,alert){
		var xhr = new XMLHttpRequest();
		console.log('getopen');
		console.log(url);
		xhr.onreadystatechange = function() {
		    if (xhr.readyState == XMLHttpRequest.DONE) {
		        resolve(xhr.responseText);
		    } 
		}
		xhr.open("GET", url, true);
		xhr.setRequestHeader("X-Mashape-Key","JcOmcTsrIQmsht1wZPT73bWcobicp1zt9Qvjsnlo3hmFIE7Z0m");
		console.log('btn-click!');
		xhr.send(null);
	})
}


function randomColor() {
	var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
               '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function action () {
		console.log('Button clicked');
		get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous").then(function(res){
			content = JSON.parse(res);
			document.getElementById("quotetext").textContent = content.quote;
			document.getElementById("quoteAuthor").textContent = content.author;
			var color = randomColor();
			document.body.style.color = color;
			document.body.style["background-color"] = color;
			document.getElementById("newQuote").style["background-color"] = color;
		}).catch(alert);
	};


document.addEventListener("DOMContentLoaded", function () {
	console.log('Document IS Loaded');
	action();
	var btn = document.getElementById("newQuote")
	btn.addEventListener("click", action);
})

