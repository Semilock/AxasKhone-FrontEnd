import { userService } from '../services/userAuth';
import loginConst from '../constants/loginConst';
import profileConst from '../constants/profileConst';

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
      }
    );
  };

  function request(user) {
    return { type: loginConst.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: loginConst.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: loginConst.LOGIN_FAILURE, error };
  }
  function setToken(tokens) {
    return { type: loginConst.SET_TOKENS, tokens };
  }
};

const updateAccessToken = token => {
  return dispatch => {
    dispatch(setAccessToken(token));
  };
  function setAccessToken(token) {
    return { type: loginConst.SET_ACCESS_TOKEN, token };
  }
};

function logout() {
  return dispatch => {
    dispatch({ type: loginConst.LOGOUT });
    dispatch({ type: profileConst.PROFILE_LOGOUT });
  };
}

const userActions = {
  login,
  logout,
  updateAccessToken
};

export default userActions;
