
// import { CLEAR_SUCCESS_MESSAGE, SHOW_SUCCESS_MESSAGE } from '../constants/actionTypes';

// const alertMiddleware = store => next => action => {
//   if (action && action.type && action.type === SHOW_SUCCESS_MESSAGE) {
//     setTimeout(() => {
//       store.dispatch({ type: CLEAR_SUCCESS_MESSAGE});
//     }, 4000);
//   }

//   next(action);
// };

// export default alertMiddleware;