import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import appReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from "connected-react-router";
import customeMiddlewares from './middlewares';

export const history = createBrowserHistory()

const getMiddlewares = () => applyMiddleware(thunk, routerMiddleware(history), ...customeMiddlewares);

export default function (preloadedState) {
  const store = createStore(
    appReducer(history),
    preloadedState,
    composeWithDevTools(getMiddlewares()),
  );

  return store
};