import * as APIUtil from "../util/follows_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const getFollow = (user_id) => dispatch => (
  APIUtil.getFollow(user_id).then(follow => {
    dispatch(receiveFollow(follow));
  })
);

export const createFollow = follow => dispatch => (
  APIUtil.followUser(follow).then(follow => {
    dispatch(receiveFollow(follow));
    return follow;
  }).fail(err => dispatch(receiveFollowErrors(err.responseJSON)))
);

export const destroyFollow = (user_id) => dispatch => (
  APIUtil.unfollowUser(user_id).then(follow => {
    dispatch(receiveFollow(undefined));
    return follow;
  }).fail(err => dispatch(receiveFollowErrors(err.responseJSON)))
);
