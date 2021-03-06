// Gives a prompt on the top of the page.
function prompt(name, subject, message) {
	var div=document.createElement("div");
	var att = document.createAttribute("class");
	att.value = "row alert alert-danger justify-content-center";
	div.setAttributeNode(att);
	var att2 = document.createAttribute("id");
	att2.value = "prompt";
	div.setAttributeNode(att2);	
	var ul=document.createElement("ul");
	var li1=document.createElement("li");
	li1.innerHTML='Please enter your name!';
	var li2=document.createElement("li");
	li2.innerHTML='Please enter your subject!';
	var li3=document.createElement("li");
	li3.innerHTML='Please enter your message!';
	if (name==''){
		ul.appendChild(li1)
	};
	if (subject==''){
		ul.appendChild(li2)
	};
	if (message==''){
		ul.appendChild(li3)
	};
	div.appendChild(ul)
	disappear()
	var body = document.getElementsByClassName("container-full")[0];
	body.insertBefore(div, body.firstChild);
}

// Click the form to make the warning message disappear.
function disappear(){
	if (document.getElementById("prompt")){
		var prompt = document.getElementById("prompt");
		prompt.parentNode.removeChild(prompt);
	}
}
if (document.forms["contact_us"]){
	document.forms["contact_us"]["name"].addEventListener("click", disappear);
	document.forms["contact_us"]["subject"].addEventListener("click", disappear);
	document.forms["contact_us"]["message"].addEventListener("click", disappear);	
}

// Judge whether the user misses anything to fill out.
function contactUs() {
	var locationForm = document.forms["contact_us"];
	var name = locationForm["name"].value;
	var subject = locationForm["subject"].value;
	var message = locationForm["message"].value;
	if (name!='' && subject!='' && message!=''){
		return true
	}
	else {
		prompt(name, subject, message);
	}
	event.preventDefault();
}

// Adds messages to the history messages box.
function addMessage(name, message){
	var scroll = document.getElementById("scroll");
	var li=document.createElement("li");
	var att1 = document.createAttribute("class");
	att1.value = "scroll-li border-bottom";
	li.setAttributeNode(att1);
	var span_name=document.createElement("span");
	span_name.innerHTML=name;
	var att2 = document.createAttribute("class");
	att2.value = "label";
	span_name.setAttributeNode(att2);
	var span_message=document.createElement("span");
	span_message.innerHTML=message;
	var node=document.createTextNode("\u00A0wrote:\u00A0\u00A0");
	li.appendChild(span_name);
	li.appendChild(node);
	li.appendChild(span_message);
	scroll.insertBefore(li, scroll.firstChild);
}

// Search in localStorage for history messages.
function showMessage() {
	var title = document.getElementsByTagName("title")[0].id;
	if (localStorage.getItem('messages')){
		messages=JSON.parse(localStorage.messages);
		for (var key in messages){
			if (messages[key].title==title){
				var name=messages[key].name;
				var message=messages[key].message;
				addMessage(name, message);			
			}
		}	
	}
	else {
		localStorage.setItem('messages',JSON.stringify([]));
	}
}

// Send message from each blog page.
function sendMessage() {
	var locationForm = document.forms["messages"];
	var title = document.getElementsByTagName("title")[0].id;
	var name = locationForm["name"].value;
	var message = locationForm["message"].value;
	if (name=='' || message==''){
		alert('Sorry! Please fill out your name and message!');
		event.preventDefault();
		return;
	}
	var messages = JSON.parse(localStorage.messages);
	messageObject = {
		title : title,
		name : name,
		message : message
	}
	messages.push(messageObject);
	localStorage.messages=JSON.stringify(messages);
	locationForm["name"].value = "";
	locationForm["message"].value = "";
	addMessage(name, message);
	event.preventDefault();
}

// Add like number.
function likeNumberPlus() {
	var likeNumber = document.getElementById("like-number");
    likeNumber.innerHTML = parseInt(likeNumber.innerHTML)+1;
}

// Add follow number.
function followNumberPlus() {
	var followNumber = document.getElementById("follow-number");
    followNumber.innerHTML = parseInt(followNumber.innerHTML)+1;
}

// Get weather information
function weatherInfo() {
	url='http://api.openweathermap.org/data/2.5/weather?q=Berkeley,ca&units=imperial&appid=7d4ebc908862cf4a4a046eb079adca75'
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function() {
		if (req.status === 200) {
			var data=JSON.parse(req.responseText);
			var weather=data.weather[0].main;
			var temp=data.main.temp;
			var wind=data.wind.speed;
			var weatherText = document.getElementById("weather")
			weatherText.innerHTML=weather;
			var tempText = document.getElementById("temp")
			tempText.innerHTML=temp+' F°';
			var windText = document.getElementById("wind")
			windText.innerHTML=wind+' m/h';			
		} else {
			alert(req.status);
		}
    };
    req.send();
}