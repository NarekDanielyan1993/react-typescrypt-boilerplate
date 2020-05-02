import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import { configureStore } from "../configureStore";
import { IAppState } from "./store/index";
const history = createBrowserHistory();

const initialState: Record<string, IAppState> = {};
const store = configureStore(history, initialState);
ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById("root"),
);
