import { combineReducers } from 'redux';

import { authentication } from './auth';
import { profile } from './user';
import { register } from './register';
import { alert } from './alert';
import { feed } from './feed';
import { contact } from './contact';
import { search } from './search';

export default combineReducers({
  profile: profile,
  auth: authentication,
  register: register,
  feed: feed,
  search: search,
  contact: contact,
  alert: alert
});
