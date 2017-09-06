import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { requestPhotoFeed } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';
import {withRouter} from 'react-router';
import {requestAllLikes, getLike} from '../../actions/likes_actions';


const mapStateToProps = ({photo, session}) => ({
  photo: selectAllPhoto(photo),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPhotoFeed: () => dispatch(requestPhotoFeed()),
  requestAllLikes: (photoId) => dispatch(requestAllLikes(photoId)),
  getLike: (photoId) => dispatch(getLike(photoId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed));
