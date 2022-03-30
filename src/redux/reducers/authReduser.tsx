import * as types from '../constants';
import {ReduceAction} from '../../static/models/ReduceAction';
import {User} from '../../static/models/User';

export interface AuthProps {
  user: User;
}

const defaultUser: User = {
  id: -1,
  email: '',
  first_name: '',
  last_name: '',
  avatar: '',
};

const initialState: AuthProps = {
  user: defaultUser,
};

export function auth(state = initialState, action: ReduceAction) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {user: action.data};
    case types.LOGOUT_USER:
      return {user: defaultUser};
    default:
      return state;
  }
}
