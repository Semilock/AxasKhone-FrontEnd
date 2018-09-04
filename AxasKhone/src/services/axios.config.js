import axios from 'axios';
import routes from './route';
import store from '../helpers/store';
import loginConst from '../constants/loginConst';
import alertConst from '../constants/alertConst';

const axiosInstance = axios.create({
  baseURL: `${routes.basePath}`,
  responseType: 'json'
});

function selectAccessToken(state) {
  return state.auth.accessToken;
}

function selectRefreshToken(state) {
  return state.auth.refreshToken;
}

axiosInstance.interceptors.request.use(
  config => {
    if (selectAccessToken(store.getState())) {
      config.headers.common['Authorization'] =
        'Bearer ' + selectAccessToken(store.getState());
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      fetch(`${routes.basePath}/${routes.refreshToken}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refresh: selectRefreshToken(store.getState())
        })
      })
        .then(res => {
          return res.text().then(text => {
            const data = text && JSON.parse(text);
            if (!res.ok) {
              // if (response.status === 401)  // Unauthorized error
              const innerError = (data && data.message) || res.statusText;
              return Promise.reject(innerError);
            }
            return data;
          });
        })
        .then(res => {
          store.dispatch({
            type: loginConst.SET_ACCESS_TOKEN,
            token: res.access
          });
          originalRequest.headers['Authorization'] =
            'Bearer ' + selectAccessToken(store.getState());
          // 'Bearer ' + res.access;
          return axiosInstance(originalRequest);
        })
        .catch(error => {
          console.warn(error);
        });
    }
    // else if (error.response.status >= 500 || error.response.status == 0) {
    //   store.dispatch({
    //     type: loginConst.LOGIN_FAILURE,
    //     error: 'سرور فعلا در دسترس نیست'
    //   });
    //   store.dispatch({
    //     type: alertConst.SERVER_ERROR,
    //     serverErrorMsg: 'سرور فعلا در دسترس نیست.'
    //   });
    // }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
