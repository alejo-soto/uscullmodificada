import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import popper from "popper.js";

import Pricing from "../src/Pages/Pricing"

const rootElement = document.getElementById("root");
//(ReactDOM.render(¿Qué quiero pintar?, ¿Dónde lo quiero pintar?))
ReactDOM.render(
 <Pricing />,
  rootElement
);