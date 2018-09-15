import notificationsConst from '../constants/notificationsConst';

const notificationsInitialState = {
  isFetching: false,
  notifications: undefined,
  errors: false
};

export const notification = (state = notificationsInitialState, action) => {
  switch (action.type) {
    case notificationsConst.GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case notificationsConst.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        notifications:
          state.notifications !== undefined
            ? state.notifications.concat(action.notification)
            : action.notification
      };

    case notificationsConst.GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.error
      };

    case notificationsConst.REFRESH_NOTIFICATIONS:
      return {
        ...state,
        feeds: undefined
      };
    default:
      return state;
  }
};
