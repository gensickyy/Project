import * as types from '../constants';

import {getData} from './helpers';
import {Login, User} from '../../static/models/User';
import {Dispatch} from 'redux';
import {ResponseJson} from '../../static/models/ReduceAction';

export const loginUser = (userData: User) => ({
  type: types.LOGIN_USER,
  data: userData,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
  data: undefined,
});

export const loginFetch = (
  dispatch: Dispatch,
  data: Login,
): Promise<ResponseJson> => {
  return new Promise(resolve => {
    getData('https://reqres.in/api/users/2', data)
      .then((json: any) => {
        dispatch(loginUser(json.data));
        resolve(json);
      })
      .catch(error => {
        console.error(error);
      });
  });
};
