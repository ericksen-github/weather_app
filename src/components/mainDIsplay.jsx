import React, { Component } from "react";
import "./style.css";
import { apiFunctions } from "./apiCall";

class MainDisplay extends Component {
  constructor() {
    super();
    apiFunctions.newCall("London");
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="topHalf">
          <div id="graphicDiv">
            <div id="weatherImage"></div>
            <div id="currentTemp"></div>
            <div id="weatherStatus"></div>
          </div>
          <div id="dateDiv"></div>
        </div>
        <div id="bottomHalf">
          <div id="temps">
            <div id="tempHigh"></div>
            <div id="tempLow"></div>
          </div>
          <div id="infoDiv">
            <div id="humidity"></div>
            <div id="wind"></div>
          </div>
          7<div id="searchBar"></div>
          <div id="degreeContainer">
            <div id="fahrenheit">F°</div>
            <div id="celsius">C°</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;
