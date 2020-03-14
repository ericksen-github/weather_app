import React from "react";
import ReactDOM from "react-dom";
import MainDisplay from "./components/mainDIsplay";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MainDisplay />, document.getElementById("root"));
document.getElementById("celsius").style.pointerEvents = "none";
document.getElementById("fahrenheit").style.background =
  "linear-gradient(to bottom, #000000 5%, #a34b59 100%)";

serviceWorker.unregister();
