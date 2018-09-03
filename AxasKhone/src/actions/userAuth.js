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
    userService.login(username, password).then(
      user => {
        dispatch(success(user.data));
        if (user.data.refresh && user.data.access)
          dispatch(setToken(user.data));
      },
      error => {
        if (error.response.status === 400) {
          const errors = error.response.data;
          let errorMsg = undefined;
          if (errors.non_field_errors) {
            errorMsg = { wrong: errors.non_field_errors[0] };
          } else if (errors.username) {
            errorMsg = { email: errors.username[0] };
          } else if (errors.password) {
            errorMsg = { password: errors.password[0] };
          }
          dispatch(failure(errorMsg));
        }

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
