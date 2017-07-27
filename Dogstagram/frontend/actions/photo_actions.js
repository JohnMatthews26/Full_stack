export const RECEIVE_ALL_PHOTO    = 'RECEIVE_ALL_PHOTO';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const CREATE_PHOTO         = 'CREATE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

import * as APIUtil from '../util/photo_api_util';

export const requestAllPhoto = (user_id) => (dispatch) => {
  return APIUtil.fetchAllPhoto(user_id)
    .then(photos => dispatch(receiveAllPhoto(photos)));
};

export const requestPhotoFeed = () => (dispatch) => {
  return APIUtil.fetchPhotoFeed()
    .then(photos => dispatch(receiveAllPhoto(photos)));
};


export const requestSinglePhoto = (id) => (dispatch) => {
  return APIUtil.fetchSinglePhoto(id).then(photo => {
    dispatch(receiveSinglePhoto(photo));
    return photo;
  });
};

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(photo => {
    dispatch(receiveSinglePhoto(photo));
    return photo;
  }).fail(err => dispatch(receivePhotoErrors(err.responseJSON)))
);

export const receiveAllPhoto = photo => ({
  type: RECEIVE_ALL_PHOTO,
  photo
});

export const receiveSinglePhoto = payload => ({
  type: RECEIVE_SINGLE_PHOTO,
  payload
});

export const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});
