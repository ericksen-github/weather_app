import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainDisplay from "./components/mainDIsplay";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MainDisplay />, document.getElementById("root"));

serviceWorker.unregister();
