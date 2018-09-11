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

const getProfileFavoriteList = (limit, offset) => {
  return dispatch => {
    dispatch(request());
    userService.getProfileFavoriteList(limit, offset).then(
      res => {
        dispatch(success(res.data.results));
      },
      err => {
        dispatch(failure(err.data));
      }
    );
  };
  function request() {
    return { type: profileConst.FAVORITE_LIST_REQUEST };
  }
  function success(favList) {
    return { type: profileConst.FAVORITE_LIST_SUCCESS, favList };
  }
  function failure(error) {
    return { type: profileConst.FAVORITE_LIST_FAILURE, error };
  }
};

const getProfileFavoriteListItems = (id, limit, offset) => {
  return dispatch => {
    dispatch(request());
    return userService.getProfileFavoriteItems(id, limit, offset).then(
      res => {
        dispatch(success(res.data.results, id));
        return res.data.results;
      },
      err => {
        dispatch(failure(err.data));
      }
    );
  };
  function request() {
    return { type: profileConst.FAVORITE_ITEMS_REQUEST };
  }
  function success(items, id) {
    return { type: profileConst.FAVORITE_ITEMS_SUCCESS, item: items, id: id };
  }
  function failure(error) {
    return { type: profileConst.FAVORITE_ITEMS_FAILURE, error };
  }
};

const refreshProfilePosts = () => {
  return dispatch => {
    dispatch({ type: profileConst.REFRESH_PROFILE_POSTS });
    // dispatch(getProfilePosts(limit, offset));
  };
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
    return userService
      .editProfile(data)
      .then(
        res => {
          dispatch(success(res.data.status));
          dispatch(getProfile());
          return 'ویرایش شد';
        }
        // ,error => {
        //   const { status } = error.response;
        //   const { data } = error.response;
        //   if (status === 400) {
        //     dispatch(failure(data.error));
        //   }
        // }
      )
      .catch(error => {
        const { status } = error.response;
        const { data } = error.response;
        if (status === 400) {
          dispatch(failure(data.error));
        }
        return 'ویرایش ناموفق بود';
      });
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

const changePassword = user => {
  return dispatch => {
    dispatch(request());
    userService.changePassword(user).then(
      res => {
        dispatch(success(res.data.status));
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
  function request() {
    return { type: profileConst.CHANGE_PASSWORD_REQUEST };
  }
  function success(data) {
    return { type: profileConst.CHANGE_PASSWORD_SUCCESS, data };
  }
  function failure(error) {
    return { type: profileConst.CHANGE_PASSWORD_FAILURE, error };
  }
};

const addPost = post => {
  return dispatch => {
    const data = new FD();
    data.append('caption', post.caption);
    data.append('tag_string', post.tag_string);
    data.append('location', post.location);
    //TODO: checking file mime just to be a valid image mimes!
    if (post.image.uri !== undefined) {
      data.append('image', {
        uri: post.image.uri,
        type: post.image.mime,
        name: 'addPost.jpg'
      });
    }
    dispatch(request());
    return userService
      .addPost(data)
      .then(res => {
        dispatch(success(res.data.status));
        dispatch(getProfilePosts(6, 0));
        // nav.navigate();
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };
  function request() {
    return { type: profileConst.ADD_POST_REQUEST };
  }
  function success(data) {
    return { type: profileConst.ADD_POST_SUCCESS, data };
  }
  function failure(error) {
    return { type: profileConst.ADD_POST_FAILURE, error };
  }
};

const profileActions = {
  removeEditProfileState,
  getProfile,
  editProfile,
  getProfilePosts,
  refreshProfilePosts,
  getProfileFavoriteList,
  getProfileFavoriteListItems,
  changePassword,
  addPost
};

export default profileActions;
