import { userService } from '../services/userAuth';
import profileConst from '../constants/profileConst';

function getProfile() {
  return dispatch => {
    dispatch(request());
    userService.getProfile().then(
      res => {
        dispatch(success(res.data));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
  function request() {
    return { type: profileConst.PROFILE_REQUEST };
  }
  function success(info) {
    return { type: profileConst.PROFILE_SUCCESS, info };
  }
  function failure(error) {
    return { type: profileConst.PROFILE_FAILURE, error };
  }
}

const getProfilePosts = (limit, offset) => {
  return dispatch => {
    dispatch(request());
    userService.getProfilePosts(limit, offset).then(
      res => {
        dispatch(success(res.data.results));
      },
      err => {
        dispatch(failure(error.data));
      }
    );
  };
  function request() {
    return { type: profileConst.PROFILE_POSTS_REQUEST };
  }
  function success(posts) {
    return { type: profileConst.PROFILE_POSTS_SUCCESS, posts };
  }
  function failure(error) {
    return { type: profileConst.PROFILE_POSTS_FAILURE, error };
  }
};

const profileActions = {
  getProfile,
  getProfilePosts
};

export default profileActions;
