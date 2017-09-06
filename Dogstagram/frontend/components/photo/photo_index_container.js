import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhoto } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';
import {withRouter} from 'react-router';
import {requestAllLikes, getLike} from '../../actions/likes_actions';

const mapStateToProps = ({photo}) => ({
  photo: selectAllPhoto(photo)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhoto: (userId) => dispatch(requestAllPhoto(userId)),
  requestAllLikes: (photoId) => dispatch(requestAllLikes(photoId)),
  getLike: (photoId) => dispatch(getLike(photoId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));
