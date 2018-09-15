import Reactotron from 'reactotron-react-native';
import { userService } from '../services/userAuth';
import notificationsConst from '../constants/notificationsConst';

const getNotifications = (limit, offset) => {
  return dispatch => {
    dispatch(request());
    userService.getNotifications(limit, offset).then(
      res => {
        dispatch(success(res.data.results));
      },
      err => {
        dispatch(failure(err.data));
      }
    );
  };
  function request() {
    return { type: notificationsConst.GET_NOTIFICATIONS_REQUEST };
  }
  function success(notification) {
    return { type: notificationsConst.GET_NOTIFICATIONS_SUCCESS, notification };
  }
  function failure(error) {
    return { type: notificationsConst.GET_NOTIFICATIONS_FAILURE, error };
  }
};

const refreshNotification = () => {
  return dispatch => {
    dispatch({ type: notificationsConst.REFRESH_NOTIFICATIONS });
  };
};

const notificationActions = { getNotifications, refreshNotification };

export default notificationActions;
