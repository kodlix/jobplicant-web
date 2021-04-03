import { offlineMessageDisplayed, showInfoMessage, successMessageDisplayed } from "../modules/notification";

const redirectMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);
};

export default redirectMiddleware;