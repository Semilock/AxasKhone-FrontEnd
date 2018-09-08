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

const feedActions = { getfeeds };

export default feedActions;
