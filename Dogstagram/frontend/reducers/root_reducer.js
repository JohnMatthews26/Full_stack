import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photo: PhotoReducer,
  users: UsersReducer
});

export default rootReducer;
