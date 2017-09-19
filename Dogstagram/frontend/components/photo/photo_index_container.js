import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhoto } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';
import {withRouter} from 'react-router';
import {requestAllLikes, getLike} from '../../actions/likes_actions';
import {requestAllComments, getComment} from '../../actions/comments_actions';

const mapStateToProps = ({photo}) => ({
  photo: selectAllPhoto(photo)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhoto: (userId) => dispatch(requestAllPhoto(userId)),
  requestAllLikes: (photoId) => dispatch(requestAllLikes(photoId)),
  getLike: (photoId) => dispatch(getLike(photoId)),
  requestAllComments: (photoId) => dispatch(requestAllComments(photoId)),
  getComment: (id) => dispatch(getComment(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));
