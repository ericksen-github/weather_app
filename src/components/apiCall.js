import { handleDate } from "./handleDate";
import { passINFO } from "./passINFO";

const apiFunctions = (() => {
  async function newCall(location) {
    try {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          location +
          "&APPID=b0724c24118141e549b0048fcae7ce4d",
        { mode: "cors" }
      );

      const newData = await response.json();
      const info = {};
      console.log(newData);
      info.currentTemp = (parseFloat(newData.main.temp) - 273.15).toFixed(1);
      info.weatherStatus = newData.weather[0].main;
      info.weatherDescription = newData.weather[0].description;

      handleDate(info);
      info.location = newData.name + ", " + newData.sys.country;

      info.tempHigh = (parseFloat(newData.main.temp_max) - 273.15).toFixed(1);
      info.tempLow = (parseFloat(newData.main.temp_min) - 273.15).toFixed(1);

      info.humidity = newData.main.humidity;
      info.wind = newData.wind.speed;

      passINFO(info);
    } catch (error) {
      alert("There was an error with your search.");
    }
  }

  const checkKeyDown = e => {
    if (e.keyCode === 13) document.getElementById("searchButton").click();
  };

  return {
    newCall,
    checkKeyDown
  };
})();

export { apiFunctions };
