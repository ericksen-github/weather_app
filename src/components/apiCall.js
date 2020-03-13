import { handleDate } from "./handleDate";
import { passINFO } from "./passINFO";

const apiFunctions = (() => {
  async function newCall(location) {
    //const img = document.querySelector("img");

    if (location === "" || location === undefined) {
      location = "london";
    }

    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&APPID=b0724c24118141e549b0048fcae7ce4d",
      { mode: "cors" }
    );

    const newData = await response.json();
    const info = {};

    info.currentTemp = (parseFloat(newData.main.temp) - 273.15).toFixed(1);
    info.status = newData.weather[0].main;

    handleDate(info);
    info.location = newData.main.name + ", " + newData.sys.country;

    info.tempHigh = (parseFloat(newData.main.temp_max) - 273.15).toFixed(1);
    info.tempLow = (parseFloat(newData.main.temp_min) - 273.15).toFixed(1);

    info.humidity = newData.main.humidity + "%";
    info.wind = newData.wind.speed + "mph";

    passINFO(info);
  }

  return {
    newCall
  };
})();

export { apiFunctions };
