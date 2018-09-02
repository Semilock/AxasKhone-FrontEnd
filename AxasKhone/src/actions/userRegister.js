import { userService } from '../services/userAuth';
import userActions, { loginConstants } from './userAuth';

const setEmail = email => {
  return { type: loginConstants.SET_REGISTER_EMAIL, email };
};

const setPassword = password => {
  return { type: loginConstants.SET_REGISTER_PASSWORD, password };
};

const registerUser = user => {
  return dispatch => {
    dispatch(request(user));
    userService.registerUser(user).then(
      res => {
        dispatch(success(res.data.status));
        dispatch(userActions.login(user.email, user.password));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
  function request(user) {
    return { type: loginConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: loginConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: loginConstants.REGISTER_FAILURE, error };
  }
};

const userRegister = { setEmail, setPassword, registerUser };

export default userRegister;
