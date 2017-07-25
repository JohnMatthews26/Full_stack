import * as APIUtil from '../util/users_api_util';
export const RECEIVE_ALL_USERS   = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const requestAllUsers = () => (dispatch) => {
  return APIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)));
};



export const requestSingleUser = (id) => (dispatch) => {
  return APIUtil.fetchSingleUser(id).then(user => {
    dispatch(receiveSingleUser(user));
    return user;
  });
};


export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload
});
