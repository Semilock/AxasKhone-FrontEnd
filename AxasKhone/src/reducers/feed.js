import feedConst from '../constants/feedConst';

const feedInitialState = {
  feeds: undefined
};

export const feed = (state = feedInitialState, action) => {
  switch (action.type) {
    case feedConst.GET_FEED_REQUEST:
      return {
        ...state
      };

    case feedConst.GET_FEED_SUCCESS:
      return {
        ...state,
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
    default:
      return state;
  }
};
