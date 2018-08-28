import { userService } from '../services/userAuth';
import { loginConstants } from './userAuth';

function getProfile() {
  //TODO: implementing later
  return dispatch => {
    dispatch(request());
    userService.getProfile().then(
      info => dispatch(success(info.data)),
      error => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
  function request() {
    return { type: loginConstants.PROFILE_REQUEST };
  }
  function success(info) {
    return { type: loginConstants.PROFILE_SUCCESS, info };
  }
  function failure(error) {
    return { type: loginConstants.PROFILE_FAILURE, error };
  }
}

const profileActions = {
  getProfile
};

export default profileActions;
