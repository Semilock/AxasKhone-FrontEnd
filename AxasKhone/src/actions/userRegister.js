// import { userService } from '../services/userAuth';
import { loginConstants } from './userAuth';

const setEmail = email => {
  return { type: loginConstants.SET_REGISTER_EMAIL, email };
};

const setPassword = password => {
  return { type: loginConstants.SET_REGISTER_PASSWORD, password };
};

// const login = (username, password) => {
//   return dispatch => {
//     dispatch(request({ username }));
//     //TODO: implementing later
//     userService.login(username, password).then(
//       user => {
//         dispatch(success(user));
//         if (user.refresh && user.access) dispatch(setToken(user));
//       },
//       error => {
//         dispatch(failure(error));
//         // dispatch(alertActions.error(error));
//       }
//     );
//   };

//   function request(user) {
//     return { type: loginConstants.LOGIN_REQUEST, user };
//   }
//   function success(user) {
//     return { type: loginConstants.LOGIN_SUCCESS, user };
//   }
//   function failure(error) {
//     return { type: loginConstants.LOGIN_FAILURE, error };
//   }
//   function setToken(tokens) {
//     return { type: loginConstants.SET_TOKENS, tokens };
//   }
// };

const userRegister = { setEmail, setPassword };

export default userRegister;
