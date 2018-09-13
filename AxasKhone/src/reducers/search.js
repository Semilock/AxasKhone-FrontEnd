import searchConst from '../constants/searchConst';

const searchInitialState = {
  isFetching: false,
  tags: undefined,
  tagPostItems: undefined,
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

    case searchConst.SEARCH_TAG_POST_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case searchConst.SEARCH_TAG_POST_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // tagPostItems: action.items
        tagPostItems:
          state.tagPostItems !== undefined
            ? state.tagPostItems.concat(action.items)
            : action.items
      };
    case searchConst.SEARCH_TAG_POST_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        tagErrors: action.error
      };

    case searchConst.REFRESH_TAG_POST_ITEMS:
      return {
        ...state,
        tagPostItems: undefined
      };

    default:
      return state;
  }
};
