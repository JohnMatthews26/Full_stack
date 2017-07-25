import { merge } from 'lodash';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER
} from '../actions/users_actions';


const defaultState = () => Object.freeze({
  entities: {}
});

const UsersReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, { entities: action.users });
    case RECEIVE_SINGLE_USER:
      const user = action.payload;
      return merge({}, state, {
        entities: { [user.id]: user }
      });
    default:
      return state;
  }
};


export default UsersReducer;
