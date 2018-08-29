import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';
import { authentication } from '../reducers/auth';
import { profile } from '../reducers/user';
import { register } from '../reducers/register';

const store = Reactotron.createStore(
  combineReducers({
    // user: users,
    profile: profile,
    auth: authentication,
    register: register
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;
