import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App"
import './css/style.scss';

const mountPoint = document.getElementById("app")

ReactDOM.render(<App/>, mountPoint);