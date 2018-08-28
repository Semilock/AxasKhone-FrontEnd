import { loginConstants } from '../actions/userAuth';

const profileInitialState = {
  isFetching: false,
  username: undefined,
  fullname: undefined,
  biography: undefined,
  profilePic: null,
  followersNumber: 0,
  followingNumber: 0,
  errors: undefined
};
export const profile = (state = profileInitialState, action) => {
  switch (action.type) {
    case loginConstants.PROFILE_REQUEST:
      return {
        isFetching: true
      };

    case loginConstants.PROFILE_SUCCESS:
      return {
        isFetching: false,
        username: action.info.main_username,
        fullname: action.info.fullname,
        biography: action.info.bio,
        profilePic: action.info.profile_pic,
        followersNumber: action.info.followers_number,
        followingNumber: action.info.following_number
      };

    case loginConstants.PROFILE_FAILURE:
      return {
        isFetching: false,
        errors: action.errors
      };

    default:
      return state;
  }
};
