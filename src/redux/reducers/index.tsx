import {combineReducers} from 'redux';

import {auth, AuthProps} from './authReduser';
import {feeds, FeedsProps} from './feedReduser';

export interface Store {
  auth: AuthProps;
  feeds: FeedsProps;
}

export default combineReducers({
  auth,
  feeds,
});
