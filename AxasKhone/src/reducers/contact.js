import feedConst from '../constants/feedConst';

const contactInitialState = {
  contacts: undefined
};

export const contact = (state = contactInitialState, action) => {
  switch (action.type) {
    case feedConst.SEND_CONTACT_REQUEST:
      return {
        ...state
      };

    case feedConst.SEND_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.contact
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
