import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./Store/Reducers";
import thunk from "redux-thunk";

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
