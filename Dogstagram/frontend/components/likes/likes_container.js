import { connect } from 'react-redux';
import Like from './like';
import { createLike, destroyLike, requestAllLikes, getLike } from '../../actions/likes_actions';
import { requestAllPhoto } from '../../actions/photo_actions';
import {withRouter} from 'react-router';

const mapStateToProps = ({ likes, session }) => ({
  likes: likes,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createLike: (photoId) =>
  dispatch(createLike(photoId)),
  destroyLike: (likeId) =>
  dispatch(destroyLike(likeId)),
  requestAllLikes: (photoId) => dispatch(requestAllLikes(photoId)),
  getLike: (photoId) =>
  dispatch(getLike(photoId)),
  requestAllPhoto: (userId) => dispatch(requestAllPhoto(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Like));
