import registerConst from '../constants/registerConst';

const registerInitialState = {
  RegsiterEmail: undefined,
  RegsiterPassword: undefined,
  RegsiterUsername: undefined,
  RegsiterFullname: undefined,
  RegsiterBiography: undefined,
  RegsiterProfilePic: undefined,
  firstStepRegisterErrors: false,
  RegisterErrors: false,
  isFetching: false
};

export const register = (state = registerInitialState, action) => {
  switch (action.type) {
    case registerConst.SET_REGISTER_EMAIL:
      return {
        ...state,
        RegisterEmail: action.email,
        firstStepRegisterErrors: false
      };

    case registerConst.SET_REGISTER_PASSWORD:
      return {
        ...state,
        RegisterPassword: action.password,
        firstStepRegisterErrors: false
      };

    case registerConst.VALIDATE_FIRST_REGISTER_FAILURE:
      return {
        ...state,
        firstStepRegisterErrors: action.error
      };

    case registerConst.REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case registerConst.REGISTER_SUCCESS:
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

    case registerConst.REGISTER_FAILURE:
      return {
        ...state,
        RegisterErrors: action.error
      };

    case registerConst.PROFILE_LOGOUT:
      return registerInitialState;

    default:
      return state;
  }
};
