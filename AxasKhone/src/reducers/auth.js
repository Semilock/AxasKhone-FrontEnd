import { loginConstants } from '../actions/userAuth';

const authInitialState = {
  isFetching: false,
  isAuthenticated: false,
  errors: undefined
};

export const authentication = (state = authInitialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        // token: action.user,
        refreshToken: action.user.refresh,
        accessToken: action.user.access
      };
    case loginConstants.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errors: action.error
      };
    case loginConstants.LOGOUT:
      return {
        isFetching: false,
        isAuthenticated: false
      };
    case loginConstants.SET_TOKENS:
      return {
        ...state,
        refreshToken: action.tokens.refresh,
        accessToken: action.tokens.access
      };
    case loginConstants.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token
      };
    default:
      return state;
  }
};
