import profileConst from '../constants/profileConst';

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
    case profileConst.PROFILE_REQUEST:
      return {
        isFetching: true
      };

    case profileConst.PROFILE_SUCCESS:
      return {
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
        isFetching: false,
        errors: action.errors
      };

    default:
      return state;
  }
};
