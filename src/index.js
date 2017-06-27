import React from "react";
import ReactDOM from "react-dom";
import "./styles/CalculusApp.css";

import CalculusApp from "./components/CalculusApp";

import registerServiceWorker from "./services/registerServiceWorker";

ReactDOM.render(<CalculusApp />, document.getElementById("app-container"));
registerServiceWorker();