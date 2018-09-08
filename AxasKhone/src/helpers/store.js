import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';
import { authentication } from '../reducers/auth';
import { profile } from '../reducers/user';
import { register } from '../reducers/register';
import { alert } from '../reducers/alert';
import { feed } from '../reducers/feed';

const store = Reactotron.createStore(
  combineReducers({
    // user: users,
    profile: profile,
    auth: authentication,
    register: register,
    feed: feed,
    alert: alert
  }),
  applyMiddleware(thunkMiddleware)
);

export default store;
