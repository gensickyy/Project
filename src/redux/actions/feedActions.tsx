import * as types from '../constants';

import {getData} from './helpers';
import {Dispatch} from 'redux';
import {Feed} from '../../static/models/Feed';

export const setFeeds = (feeds: Feed[]) => ({
  type: types.SET_FEEDS,
  data: feeds,
});

export const getFeedsFetch = (dispatch: Dispatch) => {
  return new Promise(resolve => {
    getData('https://picsum.photos/v2/list')
      .then(json => {
        dispatch(setFeeds(json));
        resolve(json);
      })
      .catch(error => {
        console.error(error);
      });
  });
};
