import routes from './route';
import axiosInstance from './axios.config';

const searchByTag = tag => {
  return axiosInstance.post(`${routes.user.tagsSearch}`, { tag });
};

const searchByUser = user => {
  return axiosInstance.post(`${routes.user.usersSearch}`, { name: user });
};

const getTagItems = (tag, limit, offset) => {
  return axiosInstance.get(
    `${routes.user.tagSearchItems}=${tag}&limit=${limit}&offset=${offset}`
  );
};
export const searchService = {
  searchByTag,
  searchByUser,
  getTagItems
};
