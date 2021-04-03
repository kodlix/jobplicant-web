// import agent from "../../agent";
// import { LOGIN, LOGOUT, REGISTER } from "../constants/actionTypes";

// const localStorageMiddleware = store => next => action => {


//   if ( (action.type === LOGIN || action.type === REGISTER ) && !action.error) {
//       window.localStorage.setItem('jwt', action.token.access_token);
//       agent.setToken(action.token.access_token);
//   } else if (action.type === LOGOUT) {
//     window.localStorage.removeItem('jwt');
//     agent.setToken(null);
//     // window.location.pathname = "/login";
//   }

//   next(action);
// };

// export default localStorageMiddleware;