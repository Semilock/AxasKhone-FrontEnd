import { loginConstants } from '../actions/userAuth';

const registerInitialState = {
  RegsiterEmail: undefined,
  RegsiterPassword: undefined,
  RegsiterUsername: undefined,
  RegsiterFullname: undefined,
  RegsiterBiography: undefined,
  RegsiterProfilePic: undefined,
  isFetching: false
};

export const register = (state = registerInitialState, action) => {
  switch (action.type) {
    case loginConstants.SET_REGISTER_EMAIL:
      return {
        ...state,
        RegisterEmail: action.email
      };

    case loginConstants.SET_REGISTER_PASSWORD:
      return {
        ...state,
        RegisterPassword: action.password
      };

    case loginConstants.REGISTER_REQUEST:
      return {
        isFetching: true
      };

    case loginConstants.REGISTER_SUCCESS:
      return {
        ...state,

        isFetching: false,
        RegsiterEmail: action.user.email,
        RegsiterPassword: action.user.password,
        RegsiterUsername: action.user.username,
        RegsiterFullname: action.user.fullname,
        RegsiterBiography: action.user.bio,
        RegsiterProfilePic: action.user.image
      };

    case loginConstants.REGISTER_FAILURE:
      return {
        isFetching: false,
        error: action.error
      };
    // case loginConstants.PROFILE_SUCCESS:
    //   return {
    //     isFetching: false,
    //     username: action.info.main_username,
    //     fullname: action.info.fullname,
    //     biography: action.info.bio,
    //     profilePic: action.info.profile_pic,
    //     followersNumber: action.info.followers_number,
    //     followingNumber: action.info.following_number
    //   };

    // case loginConstants.PROFILE_FAILURE:
    //   return {
    //     isFetching: false,
    //     errors: action.errors
    //   };

    default:
      return state;
  }
};
