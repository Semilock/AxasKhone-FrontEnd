import { userService } from '../services/userAuth';
// import { alertActions } from './alert';

export const loginConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE'
};

const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));
    //TODO: implementing later
    userService.login(username, password).then(
      user => {
        dispatch(success(user));
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
};

function logout() {
  //TODO: implementing later
  // userService.logout();
  // return { type: loginConstants.LOGOUT };
}

function getAll() {
  //TODO: implementing later
  // return dispatch => {
  //   dispatch(request());
  //   userService.getAll().then(
  //     users => dispatch(success(users)),
  //     error => {
  //       dispatch(failure(error));
  //       dispatch(alertActions.error(error));
  //     }
  //   );
  // };
  // function request() {
  //   return { type: loginConstants.GETALL_REQUEST };
  // }
  // function success(users) {
  //   return { type: loginConstants.GETALL_SUCCESS, users };
  // }
  // function failure(error) {
  //   return { type: loginConstants.GETALL_FAILURE, error };
  // }
}

const userActions = {
  login,
  logout,
  getAll
};

export default userActions;
