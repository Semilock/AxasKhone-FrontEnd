import FD from 'form-data';
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
        dispatch(failure(err.data));
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

const editProfile = user => {
  return dispatch => {
    dispatch(request(user));
    const data = new FD();
    if (
      user.fullname !== '' &&
      user.fullname !== undefined &&
      user.fullname !== null
    ) {
      data.append('fullname', user.fullname);
    }

    if (
      user.fullname !== '' &&
      user.fullname !== undefined &&
      user.fullname !== null
    ) {
      data.append('bio', user.bio);
    }

    if (user.pic !== undefined) {
      if (user.pic.uri !== undefined && user.pic.mime !== undefined) {
        data.append('profile_picture', {
          uri: user.pic.uri,
          type: user.pic.mime,
          name: 'profileName'
        });
      }
    }
    userService.editProfile(data).then(
      res => {
        dispatch(success(res.data.status));
        dispatch(getProfile());
      },
      error => {
        const { status } = error.response;
        const { data } = error.response;
        if (status === 400) {
          dispatch(failure(data.error));
        }
      }
    );
  };
  function request(user) {
    return { type: profileConst.EDIT_PROFILE_REQUEST, user };
  }
  function success(data) {
    return { type: profileConst.EDIT_PROFILE_SUCCESS, data };
  }
  function failure(error) {
    return { type: profileConst.EDIT_PROFILE_FAILURE, error };
  }
};

const removeEditProfileState = () => {
  return dispatch => {
    dispatch({ type: profileConst.EDIT_PROFILE_REMOVE_STORE });
  };
};

const profileActions = {
  removeEditProfileState,
  getProfile,
  editProfile,
  getProfilePosts
};

export default profileActions;
