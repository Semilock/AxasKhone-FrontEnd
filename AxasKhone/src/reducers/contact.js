import feedConst from '../constants/feedConst';

const contactInitialState = {
  isFetching: false,
  contacts: undefined,
  errors: undefined
};

export const contact = (state = contactInitialState, action) => {
  switch (action.type) {
    case feedConst.SEND_CONTACT_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case feedConst.SEND_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contacts: action.data
      };

    case feedConst.SEND_CONTACT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };
    default:
      return state;
  }
};
