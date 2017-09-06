import * as APIUtil from "../util/likes_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const CREATE_LIKE = "CREATE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const requestAllLikes = (photo_id) => (dispatch) => {
  return APIUtil.fetchAllLikes(photo_id).then(likes => dispatch(
    receiveAllLikes(likes)
  ));
};


export const getLike = (photoId) => dispatch => (
  APIUtil.fetchSingleLike(photoId).then(like => {
    dispatch(receiveLike(like));
  })
);

export const createLike = like => dispatch => (
  APIUtil.createLike(like).then(like => {
    dispatch(receiveLike(like));
    return like;
  }).fail(err => dispatch(receiveLikeErrors(err.responseJSON)))
);

export const destroyLike = (id) => dispatch => (
  APIUtil.deleteLike(id).then(like => {
    dispatch(removeLike(like));
  }).fail(err => dispatch(receiveLikeErrors(err.responseJSON)))
);
