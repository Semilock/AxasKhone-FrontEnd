import alertConst from '../constants/alertConst';

const alertInitialState = {
  serverError: false,
  serverErrorMsg: undefined
};
export const alert = (state = alertInitialState, action) => {
  switch (action.type) {
    case alertConst.SERVER_ERROR:
      return {
        serverError: true,
        serverErrorMsg: action.msg
      };
    default:
      return state;
  }
};
