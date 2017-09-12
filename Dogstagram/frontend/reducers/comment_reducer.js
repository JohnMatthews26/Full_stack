import { merge } from 'lodash';

import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_ALL_COMMENTS
} from '../actions/comments_actions';


const defaultState = () => Object.freeze({
  entities: {}
});

const CommentsReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return merge({}, state, {
        comments: { [comment.id]: comment }
      });
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, { comments: action.comments });
    case REMOVE_COMMENT:
      const newState = Object.assign({}, state);
      const comment1 = action.comment;

        delete newState.comments[comment1.id];

        return newState;
    default:
      return state;

  }
};

export default CommentsReducer;
