import React from "react";
import ReactDOM from "react-dom";

import configureStore, { history } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from "pages/error-page/error-boundary";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </Router>
    </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
