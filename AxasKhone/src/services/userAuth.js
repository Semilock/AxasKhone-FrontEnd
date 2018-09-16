import Reactotron from 'reactotron-react-native';
import routes from './route';
import axiosInstance from './axios.config';

const login = (username, password) => {
  return axiosInstance.post(`${routes.basePath}/${routes.login}/`, {
    username: username,
    password
  });
};

const logout = () => {
  //TODO: implementing later
  // removing tokn in storage or state ,...
};

const getProfile = () => {
  return axiosInstance.get(`${routes.basePath}/${routes.user.profileInfo}/`);
};

const registerUser = user => {
  return axiosInstance({
    url: `${routes.basePath}/${routes.register}/`,
    data: user,
    headers: {
      'content-type': `multipart/form-data;`
    },
    method: 'POST'
  });
};

const firstStepRegisterValidation = (email, password) => {
  return axiosInstance.post(
    `${routes.basePath}/${routes.register_validation}/`,
    {
      email,
      password
    }
  );
};

const getProfilePosts = (limit, offset) => {
  return axiosInstance.get(
    `${routes.basePath}/${routes.user.post}/?limit=${limit}&offset=${offset}`
  );
};

const addToFavorites = (postId, favorite) => {
  return axiosInstance.post(`${routes.user.addToFavorites}`, {
    post_id: postId,
    favorite
  });
};

const removeFavorite = postId => {
  return axiosInstance.post(`${routes.user.removeFavorites}`, {
    favorite_id: postId
  });
};

const getProfileFavoriteList = (limit, offset) => {
  return axiosInstance.get(
    `${routes.basePath}/${
      routes.user.favorites.favoriteLists
    }/?limit=${limit}&offset=${offset}`
  );
};

const getProfileFavoriteItems = (id, limit, offset) => {
  return axiosInstance.get(
    `${routes.basePath}/${
      routes.user.favorites.index
    }${id}/list_posts/?limit=${limit}&offset=${offset}`
  );
};

const editProfile = user => {
  return axiosInstance({
    url: `${routes.basePath}/${routes.user.profileInfo}/`,
    data: user,
    headers: {
      'content-type': `multipart/form-data;`
    },
    method: 'POST'
  });
};

const getHomeFeeds = (limit, offset) => {
  return axiosInstance.get(
    `${routes.basePath}/${
      routes.user.homeFeed
    }/?limit=${limit}&offset=${offset}`
  );
};

const changePassword = user => {
  return axiosInstance.post(
    `${routes.basePath}/${routes.user.changePassword}/`,
    {
      old_password: user.old_password,
      new_password: user.new_password
    }
  );
};

const sendContact = listContact => {
  return axiosInstance.post(`${routes.basePath}/${routes.user.sendContact}/`, {
    contact_list: listContact
  });
};

const addPost = post => {
  return axiosInstance({
    url: `${routes.basePath}/${routes.user.post}/`,
    data: post,
    // headers: {
    //   'content-type': `multipart/form-data;`
    // },
    method: 'POST'
  });
};

const getComments = (postId, limit, offset) => {
  return axiosInstance.get(
    `${routes.user.post}/${postId}/comment/?limit=${limit}&offset=${offset}`
  );
};

const sendComment = (postId, text = '') => {
  return axiosInstance.post(`${routes.user.post}/${postId}/comment/`, { text });
};

const follow = username => {
  return axiosInstance.post(`${routes.basePath}/${routes.user.follow}`, {
    username
  });
};

const like = postId => {
  return axiosInstance.post(
    `${routes.basePath}/${routes.user.post}/${postId}/like/`
  );
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // if (response.status === 401)  // Unauthorized error
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const getNotifications = (limit, offset) => {
  return axiosInstance.get(
    `${routes.basePath}/${
      routes.notificationsList
    }/?limit=${limit}&offset=${offset}`
  );
};

export const userService = {
  login,
  logout,
  getProfile,
  editProfile,
  getProfilePosts,
  getProfileFavoriteList,
  getProfileFavoriteItems,
  registerUser,
  firstStepRegisterValidation,
  getHomeFeeds,
  changePassword,
  sendContact,
  addPost,
  follow,
  like,
  getComments,
  sendComment,
  getNotifications,
  addToFavorites,
  removeFavorite
};
