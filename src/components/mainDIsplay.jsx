import React, { Component } from "react";
import "./style.css";
import { apiFunctions } from "./apiCall";
import MakeTables from "./tables";
import { handleDegreeClick } from "./degreeChange";

class MainDisplay extends Component {
  constructor() {
    super();
    apiFunctions.newCall("london");
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="topHalf">
          <div id="graphicDiv">
            <img
              id="weatherGraphic"
              src="images/overcast.png"
              alt="Weather Graphic"
            ></img>
            <div id="weatherStatus"></div>
          </div>
          <div id="dateContainer">
            <div id="dayDiv"></div>
            <div id="dateDiv"></div>
            <div id="location"></div>
            <div id="currentTemp"></div>
          </div>
        </div>
        <div id="bottomHalf">
          <MakeTables />
          <div id="degreeContainer">
            <div
              className="myButton"
              id="fahrenheit"
              onClick={handleDegreeClick}
            >
              F°
            </div>
            <div className="myButton" id="celsius" onClick={handleDegreeClick}>
              C°
            </div>
          </div>
          <div id="searchDiv">
            <input
              type="text"
              id="searchBox"
              placeholder="London"
              onKeyDown={apiFunctions.checkKeyDown}
            ></input>
            <div
              id="searchButton"
              onClick={() => {
                apiFunctions.newCall(
                  document.getElementById("searchBox").value
                );
              }}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;
