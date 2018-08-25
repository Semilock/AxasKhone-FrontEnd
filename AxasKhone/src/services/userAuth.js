import apiServerAddress from '../../config';

const login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: username, password })
  };

  return fetch(`${apiServerAddress.android}/auth/login/`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        //TODO: implementing later
        // store user details and jwt token in application state or storage to keep user logged in.
      }
      return user;
    });
};

const logout = () => {
  //TODO: implementing later
  // removing tokn in storage or state ,...
};

const getAll = () => {
  //TODO: implementing later
  // const requestOptions = {
  //   method: 'GET',
  //   headers: authHeader()
  // };
  // return fetch(`${apiServerAddress.android}/user_api`, requestOptions).then(
  //   handleResponse
  // );
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // TODO: navigate user to login view
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

export const userService = {
  login,
  logout,
  getAll
};
