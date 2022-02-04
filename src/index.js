import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App/App";
import { store } from "./redux/store";

const ROOT = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  ROOT
);
