import React from 'react';
import { Provider } from 'react-redux';
import Login from './src/components/Login';
import store from './src/helpers/store';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
