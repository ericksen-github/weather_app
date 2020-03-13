const passINFO = info => {
  document.getElementById("currentTemp").innerHTML = info.currentTemp + "°";
  document.getElementById("weatherStatus").innerHTML = info.weatherStatus;
  document.getElementById("dayDiv").innerHTML = info.day;
  document.getElementById("dateDiv").innerHTML = info.date;
  document.getElementById("location").innerHTML = info.location;
  document.getElementById("tempHigh").innerHTML = info.tempHigh + "°";
  document.getElementById("tempLow").innerHTML = info.tempLow + "°";
  document.getElementById("humidity").innerHTML = info.humidity + "%";
  document.getElementById("wind").innerHTML = info.wind + "mph";
  imgController(info.weatherStatus);
};

const imgController = status => {
  const icon = document.getElementById("weatherGraphic");
  const bodyBG = document.body;

  if (status.indexOf("clear") >= 0 || status.indexOf("Clear") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/01d@2x.png";
    bodyBG.style.backgroundImage = "url(images/sunBG.jpg)";
  }

  if (status.indexOf("cloud") >= 0 || status.indexOf("Cloud") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/04d@2x.png";
    if (status.indexOf("overcast" >= 0)) {
      bodyBG.style.backgroundImage = "url(images/overcastBG.jpeg)";
    } else {
      bodyBG.style.backgroundImage = "url(images/sunCloudBG.jpeg)";
    }
  }

  if (status.indexOf("rain") >= 0 || status.indexOf("Rain") >= 0) {
    if (status.indexOf("thunder") >= 0 || status.indexOf("Thunder") >= 0) {
      icon.src = "http://openweathermap.org/img/wn/11n@2x.png";
      bodyBG.style.backgroundImage = "url(images/stormBG.jpeg)";
    } else {
      icon.src = "http://openweathermap.org/img/wn/10n@2x.png";
      bodyBG.style.backgroundImage = "url(images/rainBG.jpeg)";
    }
  }

  if (status.indexOf("snow") >= 0 || status.indexOf("Snow") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/13d@2x.png";
    bodyBG.style.backgroundImage = "url(images/snowBG.jpg)";
  }
};

export { passINFO };
