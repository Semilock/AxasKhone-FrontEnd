import routes from './route';
import axiosInstance from './axios.config';

const searchByTag = tag => {
  return axiosInstance.post(`${routes.user.tagsSearch}`, { tag });
};

const searchByUser = user => {
  return axiosInstance.post(`${routes.user.usersSearch}`, { name: user });
};
export const searchService = { searchByTag, searchByUser };
