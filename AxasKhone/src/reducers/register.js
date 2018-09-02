import { loginConstants } from '../actions/userAuth';

const registerInitialState = {
  RegsiterEmail: undefined,
  RegsiterPassword: undefined,
  RegsiterUsername: undefined,
  RegsiterFullname: undefined,
  RegsiterBiography: undefined,
  RegsiterProfilePic: undefined,
  firstStepRegisterErrors: false,
  isFetching: false
};

export const register = (state = registerInitialState, action) => {
  switch (action.type) {
    case loginConstants.SET_REGISTER_EMAIL:
      return {
        ...state,
        RegisterEmail: action.email,
        firstStepRegisterErrors: false
      };

    case loginConstants.SET_REGISTER_PASSWORD:
      return {
        ...state,
        RegisterPassword: action.password,
        firstStepRegisterErrors: false
      };

    case loginConstants.VALIDATE_FIRST_REGISTER_FAILURE:
      return {
        ...state,
        firstStepRegisterErrors: action.error
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

    default:
      return state;
  }
};
