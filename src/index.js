import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock, { Toggle } from "./App";

ReactDOM.render(
    <>
        <Clock></Clock>
        <Toggle></Toggle>
    </>,
    document.getElementById("root")
);
