import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";

import App from "./components/App";
import rootReducer from "./store/rootReducer";
// import customMiddleware from "./middleware/customMiddleware";
import rootEpic from "./store/rootEpic";

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
