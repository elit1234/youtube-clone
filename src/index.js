import React from "react";
import ReactDOM from "react-dom";

import thunkMiddleware from "redux-thunk";
import persistState from "redux-localstorage";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import rootReducer from "./redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
    persistState(/*paths, config*/)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
