import * as APIUtil from "../util/comments_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const requestAllComments = (photo_id) => (dispatch) => {
  return APIUtil.fetchAllComments(photo_id).then(comments => dispatch(
    receiveAllComments(comments)
  ));
};


export const getComment = (photoId) => dispatch => (
  APIUtil.fetchSingleComment(photoId).then(comment => {
    dispatch(receiveComment(comment));
  })
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => {
    dispatch(receiveComment(comment));
    return comment;
  }).fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);

export const destroyComment = (id) => dispatch => (
  APIUtil.deleteComment(id).then(comment => {
    dispatch(removeComment(comment));
  }).fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);
