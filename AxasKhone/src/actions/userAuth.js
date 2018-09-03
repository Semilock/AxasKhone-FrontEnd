import { userService } from '../services/userAuth';
// import { alertActions } from './alert';

export const loginConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  PROFILE_REQUEST: 'USERS_PROFILE_REQUEST',
  PROFILE_SUCCESS: 'USERS_PROFILE_SUCCESS',
  PROFILE_FAILURE: 'USERS_PROFILE_FAILURE',

  SET_TOKENS: 'USER_TOKENS_CHANGE',
  SET_ACCESS_TOKEN: 'USER_ACCESS_TOKEN_CHANGE',

  SET_REGISTER_EMAIL: 'USER_REGISTER_EMAIL_SET',
  VALIDATE_FIRST_REGISTER_SUCCESS: 'USER_FIRST_REGISTER_VALIDATION_SUCCESS',
  VALIDATE_FIRST_REGISTER_FAILURE: 'USER_FIRST_REGISTER_VALIDATION_FAILURE',

  SET_REGISTER_PASSWORD: 'USER_REGISTER_PASSWORD_SET',

  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  PROFILE_LOGOUT: 'PROFILE_LOGOUT'
};

const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));
    //TODO: implementing later
    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        if (user.refresh && user.access) dispatch(setToken(user));
      },
      error => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: loginConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: loginConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: loginConstants.LOGIN_FAILURE, error };
  }
  function setToken(tokens) {
    return { type: loginConstants.SET_TOKENS, tokens };
  }
};

const updateAccessToken = token => {
  return dispatch => {
    dispatch(setAccessToken(token));
  };
  function setAccessToken(token) {
    return { type: loginConstants.SET_ACCESS_TOKEN, token };
  }
};

function logout() {
  return dispatch => {
    dispatch({ type: loginConstants.LOGOUT });
    dispatch({ type: loginConstants.PROFILE_LOGOUT });
  };
  // return { type: loginConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
  updateAccessToken
};

export default userActions;
