import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import Root from "./components/Root";

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register('/serviceWorker.js');
//   //console.log("serviceWorker");
// }

serviceWorker.register();
