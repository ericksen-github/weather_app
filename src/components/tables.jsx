import React, { Component } from "react";

class MakeTables extends Component {
  render() {
    return (
      <div>
        <table id="infoTable">
          <tbody>
            <tr>
              <td id="humidity">Humidity</td>
              <td id="humidityText"></td>
            </tr>
            <tr>
              <td id="wind">Wind</td>
              <td id="windText"></td>
            </tr>
          </tbody>
        </table>
        <table id="temps">
          <tbody>
            <tr>
              <td id="tempHigh">High</td>
              <td id="tempHighText"></td>
            </tr>
            <tr>
              <td id="tempLow">Low</td>
              <td id="tempLowText"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MakeTables;
