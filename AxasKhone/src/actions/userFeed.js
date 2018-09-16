// import Reactotron from 'reactotron-react-native';
import { userService } from '../services/userAuth';
import feedConst from '../constants/feedConst';

const getfeeds = (limit, offset) => {
  return dispatch => {
    dispatch(request());
    userService.getHomeFeeds(limit, offset).then(
      res => {
        dispatch(success(res.data.results));
      },
      err => {
        dispatch(failure(err.data));
      }
    );
  };
  function request() {
    return { type: feedConst.GET_FEED_REQUEST };
  }
  function success(feed) {
    return { type: feedConst.GET_FEED_SUCCESS, feed };
  }
  function failure(error) {
    return { type: feedConst.GET_FEED_FAILURE, error };
  }
};

const sendContact = listContact => {
  return dispatch => {
    dispatch(request());
    userService.sendContact(listContact).then(
      res => {
        dispatch(success(res.data.contacts));
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
    return { type: feedConst.SEND_CONTACT_REQUEST };
  }
  function success(data) {
    return { type: feedConst.SEND_CONTACT_SUCCESS, data };
  }
  function failure(error) {
    return { type: feedConst.SEND_CONTACT_FAILURE, error };
  }
};

const refreshFeeds = () => {
  return dispatch => {
    dispatch({ type: feedConst.REFRESH_FEEDS });
  };
};

const feedActions = { getfeeds, refreshFeeds, sendContact };

export default feedActions;
