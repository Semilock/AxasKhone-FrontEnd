import feedConst from '../constants/feedConst';

const feedInitialState = {
  isFetching: false,
  feeds: undefined
};

export const feed = (state = feedInitialState, action) => {
  switch (action.type) {
    case feedConst.GET_FEED_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case feedConst.GET_FEED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        feeds:
          state.feeds !== undefined
            ? state.feeds.concat(action.feed)
            : action.feed
      };

    case feedConst.GET_FEED_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case feedConst.REFRESH_FEEDS:
      return {
        ...state,
        feeds: undefined
      };
    default:
      return state;
  }
};
