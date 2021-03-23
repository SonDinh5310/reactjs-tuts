import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./App";

function tick() {
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

setInterval(tick, 1000);
