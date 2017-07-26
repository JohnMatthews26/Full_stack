import { merge } from 'lodash';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER
} from '../actions/users_actions';

import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';


const defaultState = () => Object.freeze({
  entities: {},
  followed: {follow: false}
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
    case RECEIVE_FOLLOW:
      return merge({}, state, { followed: action.follow } );
    case REMOVE_FOLLOW:
     return merge({}, state, { followed: false } );
    default:
      return state;
  }
};


export default UsersReducer;
