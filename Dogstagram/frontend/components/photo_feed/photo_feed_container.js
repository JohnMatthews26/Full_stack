import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { requestPhotoFeed } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';
import {withRouter} from 'react-router';
import {requestAllLikes} from '../../actions/likes_actions';

const mapStateToProps = ({photo, session}) => ({
  photo: selectAllPhoto(photo),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPhotoFeed: () => dispatch(requestPhotoFeed()),
  requestAllLikes: () => dispatch(requestAllLikes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed));
