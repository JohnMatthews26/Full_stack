import { connect } from 'react-redux';
import Comment from './comment';
import { createComment, destroyComment, requestAllComments, getComment } from '../../actions/comments_actions';
import { requestAllPhoto } from '../../actions/photo_actions';
import {withRouter} from 'react-router';

const mapStateToProps = ({ comments, session }) => ({
  comments: comments,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) =>
  dispatch(createComment(comment)),
  destroyComment: (commentId) =>
  dispatch(destroyComment(commentId)),
  requestAllComments: (photoId) => dispatch(requestAllComments(photoId)),
  getComment: (id) =>
  dispatch(getComment(id)),
  requestAllPhoto: (userId) => dispatch(requestAllPhoto(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment));
