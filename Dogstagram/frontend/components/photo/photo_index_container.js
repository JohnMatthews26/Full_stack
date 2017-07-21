import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhoto } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';
import {withRouter} from 'react-router';

const mapStateToProps = ({photo}) => ({
  photo: selectAllPhoto(photo)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhoto: (user_id) => dispatch(requestAllPhoto(user_id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));
