import { merge } from 'lodash';

import {
  RECEIVE_ALL_PHOTO,
  RECEIVE_SINGLE_PHOTO
} from '../actions/photo_actions';



const defaultState = () => Object.freeze({
  entities: {},
  currentPhoto: null
});

const PhotoReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTO:
      return merge({}, defaultState(), { entities: action.photo });
    case RECEIVE_SINGLE_PHOTO:
      const photo = action.payload;
      return merge({}, state, {
        entities: { [photo.id]: photo },
        currentPhoto: photo.id
      });

    default:
      return state;
  }
};

export default PhotoReducer;
