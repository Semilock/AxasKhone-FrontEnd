import { loginConstants } from '../actions/userAuth';

const initialState = {
  isFetching: false,
  isAuthenticated: false
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      };
    case loginConstants.LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };
    case loginConstants.LOGOUT:
      return {
        isFetching: true,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
