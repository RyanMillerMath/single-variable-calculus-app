import React from "react";
import ReactDOM from "react-dom";

import CalculusAppContainer from "./components/CalculusApp";

import registerServiceWorker from "./services/registerServiceWorker";

ReactDOM.render(<CalculusAppContainer />, document.getElementById("app-container"));
registerServiceWorker();