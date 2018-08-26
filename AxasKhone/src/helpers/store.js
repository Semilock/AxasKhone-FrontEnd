import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authentication } from '../reducers/auth';
// import { users } from '../reducers/user';

const store = createStore(
  combineReducers({
    // user: users,
    auth: authentication
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;
