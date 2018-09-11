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
  addPost
};
