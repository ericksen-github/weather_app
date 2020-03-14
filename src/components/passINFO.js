import { selectedTemp, changeDegree } from "./degreeChange";
import overcastBG from "./images/overcastBG.jpeg";
import rainBG from "./images/rainBG.jpeg";
import snowBG from "./images/snowBG.jpg";
import stormBG from "./images/stormBG.jpeg";
import sunBG from "./images/sunBG.jpg";
import sunCloudBG from "./images/sunCloudBG.jpeg";

const passINFO = info => {
  document.getElementById("currentTemp").innerHTML = info.currentTemp + "° C";
  document.getElementById("weatherStatus").innerHTML = info.weatherDescription;
  document.getElementById("dayDiv").innerHTML = info.day;
  document.getElementById("dateDiv").innerHTML = info.date;
  document.getElementById("location").innerHTML = info.location;
  document.getElementById("tempHighText").innerHTML = info.tempHigh + "° C";
  document.getElementById("tempLowText").innerHTML = info.tempLow + "° C";
  document.getElementById("humidityText").innerHTML = info.humidity + "%";
  document.getElementById("windText").innerHTML = info.wind + "mph";
  imgController(info.weatherDescription);
  if (selectedTemp === "F") {
    changeDegree();
  }
};

const imgController = status => {
  const icon = document.getElementById("weatherGraphic");
  const bodyBG = document.body;

  if (status.indexOf("clear") >= 0 || status.indexOf("Clear") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/01d@2x.png";
    bodyBG.style.backgroundImage = "url(" + sunBG + ")";
  }

  if (status.indexOf("cloud") >= 0 || status.indexOf("Cloud") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/04d@2x.png";
    if (status.indexOf("overcast") >= 0) {
      bodyBG.style.backgroundImage = "url(" + overcastBG + ")";
    } else {
      bodyBG.style.backgroundImage = "url(" + sunCloudBG + ")";
    }
  }

  if (status.indexOf("rain") >= 0 || status.indexOf("Rain") >= 0) {
    if (status.indexOf("thunder") >= 0 || status.indexOf("Thunder") >= 0) {
      icon.src = "http://openweathermap.org/img/wn/11n@2x.png";
      bodyBG.style.backgroundImage = "url(" + stormBG + ")";
    } else {
      icon.src = "http://openweathermap.org/img/wn/10n@2x.png";
      bodyBG.style.backgroundImage = "url(" + rainBG + ")";
    }
  }

  if (status.indexOf("snow") >= 0 || status.indexOf("Snow") >= 0) {
    icon.src = "http://openweathermap.org/img/wn/13d@2x.png";
    bodyBG.style.backgroundImage = "url(" + snowBG + ")";
  }
};

export { passINFO };
