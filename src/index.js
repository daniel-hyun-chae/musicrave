import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PromisePolyfill from "promise-polyfill";
import App from "./App";
import store from "./store";
import "./styles/styles.scss";

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
