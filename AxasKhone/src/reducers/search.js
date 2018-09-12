import searchConst from '../constants/searchConst';

const searchInitialState = {
  tags: undefined,
  users: undefined,
  tagErrors: undefined,
  userErrors: undefined
};

export const search = (state = searchInitialState, action) => {
  switch (action.type) {
    case searchConst.SEARCH_TAGS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case searchConst.SEARCH_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tags: action.tags
      };

    case searchConst.SEARCH_TAGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        tagErrors: action.error
      };

    case searchConst.SEARCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case searchConst.SEARCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users
      };

    case searchConst.SEARCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        userErrors: action.error
      };

    default:
      return state;
  }
};
