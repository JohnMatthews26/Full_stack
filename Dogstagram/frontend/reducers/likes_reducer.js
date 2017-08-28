import { merge } from 'lodash';

import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_ALL_LIKES
} from '../actions/likes_actions';

const defaultState = () => Object.freeze({
  likes: {}
});

const LikesReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      const like = action.payload;
      return merge({}, state, {
        likes: { [like.id]: like }
      });
    case RECEIVE_ALL_LIKES:
      return merge({}, state, { likes: action.likes });
    case REMOVE_LIKE:
      const like1 = action.payload;
      return merge({}, state, {
        likes: {[like1]: null }
      });

  }
};
