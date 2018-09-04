import loginConst from '../constants/loginConst';

const authInitialState = {
  isFetching: false,
  isAuthenticated: false,
  errors: undefined
};

export const authentication = (state = authInitialState, action) => {
  switch (action.type) {
    case loginConst.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case loginConst.LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        // token: action.user,
        refreshToken: action.user.refresh,
        accessToken: action.user.access
      };
    case loginConst.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errors: action.error
      };
    case loginConst.LOGOUT:
      return {
        isFetching: false,
        isAuthenticated: false
      };
    case loginConst.SET_TOKENS:
      return {
        ...state,
        refreshToken: action.tokens.refresh,
        accessToken: action.tokens.access
      };
    case loginConst.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token
      };
    default:
      return state;
  }
};
