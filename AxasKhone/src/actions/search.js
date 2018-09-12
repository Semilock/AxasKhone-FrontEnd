import { searchService } from '../services/searchService';
import searchConst from '../constants/searchConst';

const search = input => {
  return dispatch => {
    dispatch(searchByTag(input));
    dispatch(searchByUser(input));
  };
};

const searchByTag = tag => {
  return dispatch => {
    dispatch(request());
    searchService
      .searchByTag(tag)
      .then(res => {
        dispatch(success(res.data.results));
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };
  function request() {
    return { type: searchConst.SEARCH_TAGS_REQUEST };
  }
  function success(tags) {
    return { type: searchConst.SEARCH_TAGS_SUCCESS, tags };
  }
  function failure(error) {
    return { type: searchConst.SEARCH_TAGS_FAILURE, error };
  }
};

const searchByUser = user => {
  return dispatch => {
    dispatch(request());
    searchService
      .searchByUser(user)
      .then(res => {
        dispatch(success(res.data.results));
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };
  function request() {
    return { type: searchConst.SEARCH_USER_REQUEST };
  }
  function success(users) {
    return { type: searchConst.SEARCH_USER_SUCCESS, users };
  }
  function failure(error) {
    return { type: searchConst.SEARCH_USER_FAILURE, error };
  }
};
const searchActions = { search };

export default searchActions;
