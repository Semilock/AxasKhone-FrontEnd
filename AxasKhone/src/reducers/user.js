import profileConst from '../constants/profileConst';

const profileInitialState = {
  isFetching: false,
  username: undefined,
  fullname: undefined,
  biography: undefined,
  profilePic: null,
  followersNumber: 0,
  followingNumber: 0,
  posts: undefined,
  errors: undefined,
  favoriteList: undefined,
  profileEditStatus: undefined,
  addPostStatus: false,
  followRequestStatus: undefined,
  postComments: undefined,
  sendCommentStatus: undefined
};
export const profile = (state = profileInitialState, action) => {
  switch (action.type) {
    case profileConst.PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        username: action.info.main_username,
        email: action.info.email,
        fullname: action.info.fullname,
        biography: action.info.bio,
        profilePic: action.info.profile_picture,
        followersNumber: action.info.follower_number,
        followingNumber: action.info.following_number
      };

    case profileConst.PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };

    case profileConst.PROFILE_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.PROFILE_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts:
          state.posts !== undefined
            ? state.posts.concat(action.posts)
            : action.posts
      };

    case profileConst.PROFILE_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case profileConst.REFRESH_PROFILE_POSTS:
      return {
        ...state,
        posts: undefined
      };

    case profileConst.FAVORITE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favoriteList: action.favList
      };

    case profileConst.FAVORITE_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case profileConst.REFRESH_PROFILE_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: undefined
      };

    case profileConst.FAVORITE_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.FAVORITE_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favoriteList:
          state.favoriteList !== undefined
            ? state.favoriteList.map(item => {
                if (item.pk === action.id) {
                  return { ...item, items: [...action.item] };
                } else {
                  return item;
                }
              })
            : undefined
      };

    case profileConst.FAVORITE_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case profileConst.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        profileEditStatus: undefined,
        errors: undefined,
        isFetching: true
      };

    case profileConst.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: undefined,
        profileEditStatus: action.data
      };

    case profileConst.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        profileEditStatus: undefined,
        errors: action.error
      };

    case profileConst.EDIT_PROFILE_REMOVE_STORE:
      return {
        ...state,
        profileEditStatus: undefined,
        errors: undefined
      };

    case profileConst.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true,
        profileEditStatus: undefined,
        errors: undefined
      };
    case profileConst.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profileEditStatus: action.data,
        errors: undefined
      };
    case profileConst.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        profileEditStatus: undefined,
        errors: action.error
      };

    case profileConst.ADD_POST_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case profileConst.ADD_POST_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case profileConst.ADD_POST_FAILURE:
      return {
        ...state,
        isFetching: false
      };

    case profileConst.POST_COMMENT_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.POST_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        postComments:
          state.postComments !== undefined
            ? state.postComments.concat(action.comments)
            : action.comments
      };

    case profileConst.POST_COMMENT_FAILURE:
      return {
        ...state,
        isFetching: false
      };

    case profileConst.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case profileConst.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sendCommentStatus: action.response
      };

    case profileConst.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case profileConst.REFRESH_COMMENTS:
      return {
        ...state,
        postComments: undefined
      };

    case profileConst.FOLLOW_REQUEST:
      return {
        ...state,
        isFetching: true,
        followRequestStatus: undefined
      };

    case profileConst.FOLLOW_RESPONSE:
      return {
        ...state,
        isFetching: false,
        followRequestStatus: action.response
      };

    case profileConst.PROFILE_LOGOUT:
      return profileInitialState;
    default:
      return state;
  }
};
