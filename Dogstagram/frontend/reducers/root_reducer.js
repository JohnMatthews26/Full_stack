import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import UsersReducer from './users_reducer';
import LikesReducer from './likes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photo: PhotoReducer,
  users: UsersReducer,
  likes: LikesReducer
});

export default rootReducer;
