import * as types from '../constants';
import {ReduceAction} from '../../static/models/ReduceAction';
import {Feed} from '../../static/models/Feed';

export interface FeedsProps {
  feeds: Feed[];
}
const initialState: FeedsProps = {
  feeds: [],
};

export function feeds(state = initialState, action: ReduceAction) {
  switch (action.type) {
    case types.SET_FEEDS:
      return {feeds: action.data};
    default:
      return state;
  }
}
