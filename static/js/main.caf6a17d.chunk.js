(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/overcastBG.ca2fd4c9.jpeg"},function(e,t,n){e.exports=n.p+"static/media/rainBG.2ec978cf.jpeg"},function(e,t,n){e.exports=n.p+"static/media/snowBG.51145e7e.jpg"},function(e,t,n){e.exports=n.p+"static/media/stormBG.1bbe1143.jpeg"},function(e,t,n){e.exports=n.p+"static/media/sunBG.bda2b166.jpg"},function(e,t,n){e.exports=n.p+"static/media/sunCloudBG.e7ad90df.jpeg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=n(1),d=n(2),l=n(4),m=n(3),u=n(5),s=(n(21),n(6)),p=n.n(s),h=n(9),g=function(e){var t=new Date,n=t.getDay(),a=t.getMonth();e.day=E[n],e.date=f[a]+" "+y(t.getDate())},y=function(e){var t=e.toString().substr(-1);return t="1"===t&&11!==e?"st":"2"===t&&12!==e?"nd":"3"===t&&13!==e?"rd":"th",e.toString()+t},E=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],w="C",b=function(e){w="fahrenheit"===e.target.id?"F":"C",v()},v=function(){var e=[document.getElementById("currentTemp"),document.getElementById("tempHighText"),document.getElementById("tempLowText")],t=document.getElementById("fahrenheit"),n=document.getElementById("celsius");"F"===w?(e.forEach((function(e){var t=e.innerHTML.slice(0,-3);t=parseFloat(9*t/5+32).toFixed(1),e.innerHTML=t+"\xb0 F"})),t.style.background="linear-gradient(to bottom, #fc4b69 5%, #a34b59 100%)",n.style.background="linear-gradient(to bottom, #000000 5%, #a34b59 100%)",t.style.pointerEvents="none",n.style.pointerEvents="auto"):(e.forEach((function(e){var t=e.innerHTML.slice(0,-3);t=parseFloat(5*(t-32)/9).toFixed(1),e.innerHTML=t+"\xb0 C"})),n.style.background="linear-gradient(to bottom, #fc4b69 5%, #a34b59 100%)",t.style.background="linear-gradient(to bottom, #000000 5%, #a34b59 100%)",t.style.pointerEvents="auto",n.style.pointerEvents="none")},x=n(10),B=n.n(x),T=n(11),I=n.n(T),k=n(12),H=n.n(k),O=n(13),C=n.n(O),L=n(14),j=n.n(L),D=n(15),F=n.n(D),M=function(e){document.getElementById("currentTemp").innerHTML=e.currentTemp+"\xb0 C",document.getElementById("weatherStatus").innerHTML=e.weatherDescription,document.getElementById("dayDiv").innerHTML=e.day,document.getElementById("dateDiv").innerHTML=e.date,document.getElementById("location").innerHTML=e.location,document.getElementById("tempHighText").innerHTML=e.tempHigh+"\xb0 C",document.getElementById("tempLowText").innerHTML=e.tempLow+"\xb0 C",document.getElementById("humidityText").innerHTML=e.humidity+"%",document.getElementById("windText").innerHTML=e.wind+"mph",S(e.weatherDescription),"F"===w&&v()},S=function(e){var t=document.getElementById("weatherGraphic"),n=document.body;(e.indexOf("clear")>=0||e.indexOf("Clear")>=0)&&(t.src="http://openweathermap.org/img/wn/01d@2x.png",n.style.backgroundImage="url("+j.a+")"),(e.indexOf("cloud")>=0||e.indexOf("Cloud")>=0)&&(t.src="http://openweathermap.org/img/wn/04d@2x.png",e.indexOf("overcast")>=0?n.style.backgroundImage="url("+B.a+")":n.style.backgroundImage="url("+F.a+")"),(e.indexOf("rain")>=0||e.indexOf("Rain")>=0)&&(e.indexOf("thunder")>=0||e.indexOf("Thunder")>=0?(t.src="http://openweathermap.org/img/wn/11n@2x.png",n.style.backgroundImage="url("+C.a+")"):(t.src="http://openweathermap.org/img/wn/10n@2x.png",n.style.backgroundImage="url("+I.a+")")),(e.indexOf("snow")>=0||e.indexOf("Snow")>=0)&&(t.src="http://openweathermap.org/img/wn/13d@2x.png",n.style.backgroundImage="url("+H.a+")")},G=function(){function e(){return(e=Object(h.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?q="+t+"&APPID=b0724c24118141e549b0048fcae7ce4d",{mode:"cors"});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r={},console.log(a),r.currentTemp=(parseFloat(a.main.temp)-273.15).toFixed(1),r.weatherStatus=a.weather[0].main,r.weatherDescription=a.weather[0].description,g(r),r.location=a.name+", "+a.sys.country,r.tempHigh=(parseFloat(a.main.temp_max)-273.15).toFixed(1),r.tempLow=(parseFloat(a.main.temp_min)-273.15).toFixed(1),r.humidity=a.main.humidity,r.wind=a.wind.speed,M(r),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("There was an error with your search.");case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}return{newCall:function(t){return e.apply(this,arguments)},checkKeyDown:function(e){13===e.keyCode&&document.getElementById("searchButton").click()}}}(),J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{id:"infoTable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{id:"humidity"},"Humidity"),r.a.createElement("td",{id:"humidityText"})),r.a.createElement("tr",null,r.a.createElement("td",{id:"wind"},"Wind"),r.a.createElement("td",{id:"windText"})))),r.a.createElement("table",{id:"temps"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{id:"tempHigh"},"High"),r.a.createElement("td",{id:"tempHighText"})),r.a.createElement("tr",null,r.a.createElement("td",{id:"tempLow"},"Low"),r.a.createElement("td",{id:"tempLowText"})))))}}]),t}(a.Component),W=function(e){function t(){var e;return Object(c.a)(this,t),e=Object(l.a)(this,Object(m.a)(t).call(this)),G.newCall("london"),e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"mainContainer"},r.a.createElement("div",{id:"topHalf"},r.a.createElement("div",{id:"graphicDiv"},r.a.createElement("img",{id:"weatherGraphic",src:"images/overcast.png",alt:"Weather Graphic"}),r.a.createElement("div",{id:"weatherStatus"})),r.a.createElement("div",{id:"dateContainer"},r.a.createElement("div",{id:"dayDiv"}),r.a.createElement("div",{id:"dateDiv"}),r.a.createElement("div",{id:"location"}),r.a.createElement("div",{id:"currentTemp"}))),r.a.createElement("div",{id:"bottomHalf"},r.a.createElement(J,null),r.a.createElement("div",{id:"degreeContainer"},r.a.createElement("div",{className:"myButton",id:"fahrenheit",onClick:b},"F\xb0"),r.a.createElement("div",{className:"myButton",id:"celsius",onClick:b},"C\xb0")),r.a.createElement("div",{id:"searchDiv"},r.a.createElement("input",{type:"text",id:"searchBox",placeholder:"London",onKeyDown:G.checkKeyDown}),r.a.createElement("div",{id:"searchButton",onClick:function(){G.newCall(document.getElementById("searchBox").value)}},"Search"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),document.getElementById("celsius").style.pointerEvents="none",document.getElementById("fahrenheit").style.background="linear-gradient(to bottom, #000000 5%, #a34b59 100%)","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.caf6a17d.chunk.js.map